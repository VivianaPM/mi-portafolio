# Arquitectura del Sistema - Portfolio

## Visión General

Este documento contiene las decisiones arquitectónicas fundamentales para el desarrollo del portfolio. Estas decisiones son el resultado de un análisis de requisitos y buscan garantizar escalabilidad, mantenibilidad y consistencia visual en todas las vistas del sitio.

**Fecha de definición:** Septiembre 2026  
**Estado:** Aprobado para implementación

---

## 1. Patrones Arquitectónicos

### Feature-Driven Development (FDD)
El desarrollo está guiado por features de negocio, no por capas técnicas. Cada feature entrega valor funcional completo.

**Features identificados:**
- **Feature 1:** Vista principal (scroll infinito con 6 secciones)
- **Feature 2:** Vista secundaria (detalles con navegación lateral)
- **Feature 3:** Cambio de tema y lenguaje (servicio global)

### Atomic Design (Simplificado)
Los componentes se organizan en una jerarquía atómica para maximizar reutilización:

| Nivel | Descripción | Ejemplos |
|-------|-------------|----------|
| **Átomos** | Componentes básicos indivisibles | Botones, íconos, títulos, párrafos |
| **Moléculas** | Combinaciones de átomos | Selector de idioma, tarjeta de sección |
| **Organismos** | Componentes complejos | Header, Footer, Sección completa |
| **Plantillas** | Disposiciones de organismos | MainLayout, SecondaryLayout |
| **Páginas** | Instancias con datos reales | Vista Principal, Vista Secundaria |

---

## 2. Estructura de Layout

### Decisión: Layout Base con Children
El Layout principal es un componente contenedor que recibe `children`. No contiene lógica de negocio.

**Estructura:**
```bash
<MainLayout> <Header /> ← Siempre presente 
<Content /> ← Variable (cambia según vista) 
<Footer /> ← Siempre presente </MainLayout> 
```

### Justificación
* Permite reutilizar **Header** y **Footer** en todas las vistas.
* El **Content** puede ser diferente sin afectar la estructura global.
* Facilita el testing y mantenimiento.

---

### Decisión: Contenedor Compartido
**Header**, **Content** y **Footer** comparten el mismo sistema de contenedor:
* **Ancho máximo:** `1200px`
* **Padding horizontal:** Variable según breakpoint.
* **Fondos:** Los componentes pueden tener fondo de ancho completo (`100%`), pero su contenido interno respeta el contenedor.

---

### 3. Gestión de Scroll y Navegación

#### Decisión: Doble Interacción (Scroll + Clic)
El indicador de posición (`1/6`) responde a dos interacciones:

| Interacción | Comportamiento | Responsable |
| :--- | :--- | :--- |
| **Scroll** | Detecta sección activa en viewport | `Intersection Observer` en Content |
| **Clic en puntos** | Scroll suave hacia la sección | Función de scroll en Content |

* **Estado central:** `activeSection` (número `0-5`) vive en el **Content**.

> **Justificación:**
> * Experiencia de usuario intuitiva (scroll natural).
> * Navegación alternativa (clic directo).
> * Separación de responsabilidades (Layout no sabe del scroll).

#### Decisión: Indicador Genérico
El componente de 6 puntos es genérico y recibe un array de secciones, aunque actualmente siempre recibe 6.

> **Justificación:** Facilita futuras expansiones sin modificar el componente.

---

### 4. Responsabilidades de Componentes

* **Layout**
  * **Responsabilidad:** Estructura visual (envoltorio).
  * **No sabe:** Qué hay en Content, estado del scroll, lógica de negocio.
  * **Props:** `children` (obligatorio).

* **Header**
  * **Responsabilidad:** Mostrar logo, tema y selector de idioma.
  * **Comportamiento:** Altura variable (responsive), sin menú hamburguesa.
  * **Estado:** Ninguno (componente puro).

* **Content (Vista Principal)**
  * **Responsabilidad:** Renderizar 6 secciones con indicador de posición.
  * **Comportamiento:** Detecta scroll activo, maneja clics en puntos.
  * **Estado:** `activeSection`, referencias a secciones (`refs`).

* **Content (Vista Secundaria)**
  * **Responsabilidad:** Renderizar artículo/detalle.
  * **Comportamiento:** Sin indicador, espaciado diferente.
  * **Estado:** Datos del artículo.

* **Footer**
  * **Responsabilidad:** Mostrar información de cierre.
  * **Comportamiento:** Fondo 100%, contenido interno con contenedor.
  * **Estado:** Ninguno (componente puro).

* **SidebarDrawer (Solo vista secundaria)**
  * **Responsabilidad:** Menú lateral colapsable (estilo Mac).
  * **Comportamiento:**
    * **Escritorio:** Barra lateral colapsable.
    * **Móvil:** Overlay tipo hamburguesa.
  * **Estado:** Abierto/Cerrado (local al componente).

---

### 5. Sistema de Reordenamiento Responsive

#### Decisión: Solo Visual (CSS)
El reordenamiento de secciones (imagen arriba/abajo) se maneja con CSS, no con lógica condicional en el HTML.

* **Técnica:** `flex-direction` + `order`
  * **Móvil:** `flex-direction: column` → Imagen arriba, texto abajo.
  * **Escritorio:** `flex-direction: row` + `order` → Imagen a la derecha, texto a la izquierda.

> **Justificación:**
> * El contenido es principalmente visual (portfolio).
> * Menor complejidad en JavaScript.
> * Mejor rendimiento (sin re-renderizados).

---

### 6. Separación de Datos y Presentación

#### Decisión: Datos Externalizados
El contenido (textos, imágenes, URLs) no vive en los componentes.

* **Estrategia:**
  * Los componentes reciben datos como `props`.
  * Las páginas/features inyectan los datos.
  * El `Content` itera sobre los datos con `map()`.

> **Beneficios:**
> * Cambios de contenido sin tocar componentes.
> * Facilita pruebas con datos mock.
> * Permite integración con CMS en el futuro.

---

### 7. Vistas del Sistema

* **Vista Principal (Main)**
  * **Ruta:** `/`
  * **Layout:** `MainLayout`
  * **Content:** 6 secciones con indicador `1/6`
  * **Header:** Estándar (tema + idioma)
  * **Footer:** Estándar

* **Vista Secundaria (Detail)**
  * **Ruta:** `/detalle/:id`
  * **Layout:** `MainLayout` (mismo Header y Footer)
  * **Content:** Artículo con espaciado entre párrafos
  * **Adicional:** `SidebarDrawer` (barra lateral)
  * **Sin indicador:** No se muestra `1/6`

---

### 8. Decisiones de Implementación Técnica

* **Detección de Scroll**
  * **API:** `Intersection Observer`
  * **Umbral:** 50% de visibilidad (cambio de sección a mitad de camino).
  * **Scroll suave:** `scrollIntoView({ behavior: 'smooth' })`

* **Altura del Header**
  * **CSS Puro:** Altura variable determinada por padding (responsive).
  * **Scroll margin:** `scroll-margin-top` en cada sección para evitar ocultamiento.

* **Espaciado**
  * Ver `desing-token.md` para valores concretos.
  * Cada componente define su propio padding/margin usando tokens.
  * Los Layouts definen el gap entre componentes.

---

### 9. Restricciones y No-Decisiones

#### No se implementará:
* Animaciones complejas entre secciones (por simplicidad).
* Sistema de autenticación (portafolio público).
* Base de datos (contenido estático).

#### Decisiones pendientes:
* Formato de imágenes (WebP vs AVIF).
* Estrategia de caché para assets.