# Design Tokens - Sistema de Diseño

## Espaciado (Spacing Scale)

Basado en sistema de 8px (múltiplos de 8 para consistencia tipográfica).

### Tokens Base

| Token | Valor | Uso Recomendado |
|-------|-------|-----------------|
| `--space-xs` | 4px | Entre ícono y texto en botones pequeños |
| `--space-sm` | 8px | Padding de badges/chips, gap entre elementos en tarjeta |
| `--space-md` | 16px | Entre párrafos en vista secundaria |
| `--space-lg` | 24px | Entre secciones en móvil |
| `--space-xl` | 32px | Padding interno de Header y Footer |
| `--space-2xl` | 48px | Gap entre secciones en escritorio |
| `--space-3xl` | 64px | Separación Header ↔ Primera sección / Última sección ↔ Footer |

### Aplicación por Componente

| Componente | Token Aplicado | Contexto |
|------------|----------------|----------|
| **Header** | `padding: var(--space-xl) 0` | Altura variable vertical |
| **Footer** | `padding: var(--space-xl) 0` | Altura variable vertical |
| **Section** (principal) | `margin-bottom: var(--space-2xl)` | Gap entre secciones |
| **Paragraph** (secundario) | `margin-bottom: var(--space-md)` | Gap entre párrafos |
| **Tarjeta** | `padding: var(--space-lg)` | Espaciado interno |

### Layouts

| Layout | Aplicación | Valor |
|--------|------------|-------|
| **MainLayout** | Gap entre Header y Content | `var(--space-2xl)` |
| **MainLayout** | Gap entre secciones | `var(--space-2xl)` |
| **SecondaryLayout** | Gap entre Header y Content | `var(--space-xl)` |
| **SecondaryLayout** | Gap entre párrafos | `var(--space-md)` |

---

## Contenedor (Container System)

### Ancho y Padding

| Breakpoint | Max-Width | Padding Horizontal | Justificación |
|------------|-----------|-------------------|---------------|
| **Móvil** ( < 768px) | 100% | `16px` | Espacio limitado |
| **Tablet** (768px - 1024px) | 100% | `24px` | Transición |
| **Escritorio** (> 1024px) | `1200px` | `40px` | Aire visual |

### Aplicación en Componentes

| Componente | Fondo 100% | Contenido interno con contenedor |
|------------|------------|----------------------------------|
| **Header** | ✅ Sí | ✅ Sí (logo, botones dentro) |
| **Footer** | ✅ Sí | ✅ Sí (links, copyright dentro) |
| **Content** | ❌ No (transparente) | ✅ Sí (secciones dentro) |

---

## Breakpoints (Responsive)

| Breakpoint | Ancho | Comportamiento |
|------------|-------|----------------|
| **Móvil** | < 768px | Columnas apiladas, padding reducido |
| **Tablet** | 768px - 1024px | Transición visual |
| **Escritorio** | > 1024px | Layout definido, padding amplio |

---

## Reordenamiento de Secciones

### Estrategia CSS

**Estructura HTML:**
```html
<div class="section">
  <div class="section-image"> <!-- Imagen --> </div>
  <div class="section-text"> <!-- Texto --> </div>
</div>
```

### CSS por Breakpoint

| Breakpoint | Flex Direction | Orden | Resultado |
| :--- | :--- | :--- | :--- |
| **Móvil** | `column` | Sin cambios | Imagen arriba, texto abajo |
| **Escritorio** | `row` | `order: 2` en imagen | Imagen a la derecha, texto a la izquierda |

---

### Tipografía (Base)

* **Font Family:** System fonts *(definir según proyecto)*
* **Tamaño base:** `16px` (`1rem`)
* **Escala:** Mayor 2da (`1.25`) o similar

> **Nota:** Los valores tipográficos se definen en un archivo separado según el diseño final.

---

### Colores (Base)

*Pendiente de definir según paleta de diseño.*

* **Primario:** `#___`
* **Secundario:** `#___`
* **Fondo Header/Footer:** `#___`
* **Fondo contenido:** `#___`