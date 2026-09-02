# Datos del portfolio

Este directorio centraliza el contenido del portafolio y la lógica para consumirlo desde la aplicación.

## Estructura

- `content/`: archivos JSON con el contenido del sitio
- `i18n/`: configuración e idiomas para la internacionalización
- `index.js`: punto de entrada público para importar datos y helpers
- `portfolioData.js`: lógica de carga, normalización y validación

## Cómo se usa

Se recomienda consumir la data desde el archivo principal del directorio:

```js
import {
  portfolioData,
  getFeaturedProjects,
  getAllSkills,
  getSkillsByCategory,
  getProjectById,
} from "./data";
```

Esto permite que la UI no dependa directamente del contenido bruto de los JSON.

## Archivos de contenido

### `projects.json`

Contiene la información de cada proyecto.

Campos principales:

- `id`: identificador único del proyecto
- `title`: nombre visible
- `description`: descripción breve
- `longDescription`: descripción más completa
- `technologies`: lista de tecnologías asociadas
- `category`: categorías del proyecto
- `featured`: si debe aparecer destacado
- `repository`: enlace al repositorio
- `demo`: enlace demo
- `status`: estado del proyecto

Consideraciones:

- `id` debe ser único
- `technologies` debe coincidir con los IDs definidos en `skill.json`
- si agregas una tecnología nueva, también debe existir en `skill.json`

### `skill.json`

Contiene la información de habilidades y tecnologías.

Campos principales:

- `id`: identificador único
- `name`: nombre visible
- `category`: grupo de la habilidad (`frontend`, `backend`, `database`, etc.)
- `level`: nivel de dominio
- `experience`: años de experiencia
- `description`: explicación breve
- `projects`: proyectos relacionados
- `tags`: etiquetas adicionales
- `proficiency`: nivel general (`beginner`, `intermediate`, `advanced`, `expert`)

Consideraciones:

- `id` debe ser único
- si una tecnología aparece en `projects.json`, debe existir aquí
- `category` se usa para filtrar por grupo

### `experience.json`

Contiene la experiencia laboral.

Campos principales:

- `id`
- `company`
- `position`
- `startDate`
- `endDate`
- `current`
- `description`
- `technologies`
- `achievements`

### `education.json`

Contiene formación académica y certificaciones.

Campos principales:

- `id`
- `institution`
- `degree`
- `field`
- `startDate`
- `endDate`
- `current`
- `description`

## Internacionalización

La internacionalización está separada en `data/i18n`.

- `config.js`: configuración general de i18next
- `index.js`: export del módulo de i18n
- `locales/<lang>/common.yml`: textos traducidos por idioma

Reglas rápidas:

- cada texto visible debe venir desde el archivo de traducciones
- usa claves estables y descriptivas
- si agregas una nueva sección, añade la clave en cada idioma

Ejemplo:

```js
const { t } = useTranslation("common");
return <h1>{t("app.title")}</h1>;
```

## Cómo modificar contenido

1. Edita el JSON correspondiente
2. Mantén el formato correcto: JSON válido
3. Usa IDs únicos y consistentes
4. Verifica que las relaciones entre proyectos y skills sigan siendo correctas
5. Revisa el render final de la interfaz

## Validaciones y pruebas

La lógica de validación está en `portfolioData.js` y revisa que:

- existan proyectos
- existan habilidades
- no haya tecnologías referenciadas sin definirse

También hay una prueba mínima en `src/data/index.test.js` para comprobar que la capa de datos sigue funcionando.

Ejecuta:

```bash
pnpm test -- --run src/data/index.test.js
```

Y para compilar la app:

```bash
pnpm build
```

## Buenas prácticas

- no cambies la estructura de los JSON sin revisar los importes
- usa IDs consistentes y descriptivos
- si agregas una nueva tecnología, añade también la habilidad relacionada
- si agregas una nueva clave de traducción, actualiza todos los idiomas
- mantén la data simple y legible para que el proyecto siga siendo KISS

## Resumen

Este directorio está pensado para que el contenido sea editable sin tocar la lógica de la interfaz. La idea es que el contenido resida en JSON y la app consuma esa información desde funciones centralizadas.
