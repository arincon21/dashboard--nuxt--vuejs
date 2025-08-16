# Chat de Voz y Rediseño de Pagina - Aplicación Nuxt.js 

Una aplicación moderna de chat de voz en tiempo real construida con Nuxt.js, que permite la comunicación por voz entre usuarios utilizando tecnologías web avanzadas.

## Diseño Figma

https://www.figma.com/community/file/1538062939599886992

## Tabla de Contenidos

- [Características](#características)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Uso](#uso)
- [Funcionalidades Implementadas](#funcionalidades-implementadas)
- [Arquitectura](#arquitectura)
- [Decisiones de Diseño](#decisiones-de-diseño)
- [Limitaciones y Consideraciones](#limitaciones-y-consideraciones)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Contribución](#contribución)

## Características

- **Chat de Voz en Tiempo Real**: Comunicación por voz instantánea entre usuarios
- **Autenticación con Google**: Sistema de login simplificado con OAuth
- **Tema Claro/Oscuro**: Cambio dinámico de tema según preferencia del usuario
- **Diseño Responsivo**: Optimizado para dispositivos móviles y de escritorio
- **Interfaz Minimalista**: Diseño limpio y centrado en la experiencia del usuario
- **Comunicación Cross-Tab**: Funcionalidad de chat entre múltiples pestañas

## Requisitos

- Node.js (versión 16 o superior)
- NPM, PNPM, Yarn o Bun
- Navegador web moderno con soporte para:
  - Web Audio API
  - BroadcastChannel API
  - sessionStorage

## Instalación

1. **Clonar el repositorio**
   ```bash
   git clone [url-del-repositorio]
   cd chat-voz-nuxt
   ```

2. **Instalar dependencias**
   ```bash
   # npm
   npm install

   # pnpm
   pnpm install

   # yarn
   yarn install

   # bun
   bun install
   ```

3. **Configurar variables de entorno** (si es necesario)
   ```bash
   cp .env.example .env
   # Editar .env con tus configuraciones
   ```

## Uso

### Servidor de Desarrollo

Inicia el servidor de desarrollo en `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

### Producción

Construir la aplicación para producción:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Vista previa local de la construcción de producción:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

### Probando el Chat de Voz

Para experimentar completamente la funcionalidad del chat de voz:

1. **Abre dos pestañas diferentes** del navegador con la aplicación
2. **Inicia sesión con correos diferentes** en cada pestaña
3. **Navega a la sección de chat de voz** en ambas pestañas
4. **Comienza a comunicarte** usando los controles de voz

> **Nota**: El sistema genera usuarios con datos predefinidos al usar el botón "Iniciar sesión con Google" para fines de demostración.

## Funcionalidades Implementadas

### Sistema de Autenticación

- **Autenticación con Google OAuth**: Implementación simplificada para demostración
- **Usuario Fijo**: Genera automáticamente un usuario con datos predefinidos
- **Gestión de Sesiones**: Utiliza `sessionStorage` para mantener la sesión por pestaña

### Chat de Voz en Tiempo Real

- **Comunicación Instantánea**: Transmisión de audio en tiempo real entre usuarios
- **BroadcastChannel API**: Simula WebSockets para comunicación cross-tab
- **Interfaz Intuitiva**: Controles claros para iniciar/detener grabación de voz

### Sistema de Temas

- **Modo Claro y Oscuro**: Cambio dinámico según preferencia del usuario
- **Persistencia de Preferencias**: Mantiene la selección del tema durante la sesión
- **Transiciones Suaves**: Animaciones fluidas al cambiar entre temas

## Arquitectura

### Stack Tecnológico

- **Frontend**: Nuxt.js 3 con Vue.js 3
- **Estilos**: Tailwind CSS para diseño responsivo
- **Iconos**: Heroicons y Circle Flags
- **Almacenamiento**: sessionStorage para persistencia temporal
- **Comunicación**: BroadcastChannel API para simulación de tiempo real

### Estructura del Proyecto

```
/
├── components/          # Componentes Vue reutilizables
├── layouts/            # Layouts de la aplicación
├── pages/              # Páginas de la aplicación
├── assets/             # Recursos estáticos
├── middleware/         # Middleware de Nuxt
├── plugins/            # Plugins de Nuxt
├── stores/             # Gestión de estado (Pinia)
└── utils/              # Funciones utilitarias
```

## Decisiones de Diseño y Experiencia de Usuario (UX)

Este proyecto prioriza una experiencia de usuario limpia, moderna e intuitiva. Las decisiones clave de diseño y UX incluyen:

-   **Estética Minimalista**: Una interfaz limpia y despejada reduce la carga cognitiva y enfoca la atención del usuario en el contenido esencial.
-   **Paleta de Colores Consistente**: Se utiliza un color azul unificado (`blue-600`) en todos los componentes para mantener la armonía visual y la coherencia de la marca. Esto se complementa con una escala de grises neutra para fondos y texto, asegurando la legibilidad tanto en modo claro como oscuro.
-   **Soporte de Modo Oscuro**: Se implementa la funcionalidad completa de modo oscuro, permitiendo a los usuarios cambiar entre temas claros y oscuros para mejorar la comodidad y accesibilidad en diferentes condiciones de iluminación.
-   **Navegación Intuitiva**: La barra lateral proporciona enlaces de navegación claros y de fácil acceso, con señales visuales para los estados activos.
-   **Arquitectura Basada en Componentes**: La interfaz de usuario está construida utilizando un enfoque basado en componentes, lo que promueve la reutilización, la mantenibilidad y la escalabilidad. Esto también permite un estilo y comportamiento consistentes en toda la aplicación.
-   **Iconografía**: El uso de una biblioteca de iconos consistente (`heroicons` y `circle-flags`) mejora la comunicación visual y ayuda a los usuarios a comprender rápidamente el propósito de varias acciones y secciones.
-   **Diseño Responsivo**: El diseño está pensado para ser responsivo, adaptándose a varios tamaños de pantalla para una experiencia fluida tanto en dispositivos de escritorio como móviles.

## Limitaciones y Consideraciones

### Limitaciones Actuales

- **Prueba de Concepto**: Implementación simplificada enfocada en funcionalidades core
- **Datos Mock**: Sistema de autenticación utiliza datos predefinidos
- **Comunicación Local**: BroadcastChannel funciona solo entre pestañas del mismo navegador
- **Desarrollo Optimizado**: Configuración actual para desarrollo, no para producción

### Consideraciones de Desarrollo

- **Tiempo Limitado**: Se priorizaron las características más importantes
- **Escalabilidad**: Arquitectura preparada para expansiones futuras
- **Mantenibilidad**: Código estructurado para facilitar mejoras incrementales

## Tecnologías Utilizadas

- **[Nuxt.js](https://nuxt.com/)** - Framework de Vue.js para aplicaciones universales
- **[Vue.js 3](https://vuejs.org/)** - Framework JavaScript progresivo
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitario
- **[Heroicons](https://heroicons.com/)** - Biblioteca de iconos SVG
- **[Circle Flags](https://github.com/HatScripts/circle-flags)** - Iconos de banderas circulares
- **[Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)** - API para procesamiento de audio
- **[BroadcastChannel API](https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel)** - API para comunicación cross-tab

## Próximas Mejoras

- [ ] Implementación de WebSockets real para comunicación servidor-cliente
- [ ] Sistema de autenticación completo con base de datos
- [ ] Salas de chat múltiples
- [ ] Grabación y reproducción de mensajes de voz
- [ ] Notificaciones push
- [ ] Chat de texto complementario
- [ ] Configuraciones avanzadas de audio
- [ ] Sistema de moderación

## Documentación Adicional

Para más información sobre las tecnologías utilizadas:

- [Documentación de Nuxt](https://nuxt.com/docs/getting-started/introduction)
- [Documentación de despliegue](https://nuxt.com/docs/getting-started/deployment)
- [Guía de Tailwind CSS](https://tailwindcss.com/docs)
- [Web Audio API Guide](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)

## Contribución

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## Agradecimientos

- Equipo de Nuxt.js por el excelente framework
- Comunidad de Vue.js por su continuo apoyo
- Contribuidores de las librerías de código abierto utilizadas

---

**Nota**: Esta es una aplicación de demostración construida con fines educativos y de prueba de concepto. Para uso en producción, considere implementar características adicionales de seguridad, escalabilidad y robustez.

---

## 📂 Estructura del Proyecto

```
/
├── app/                 # Código principal de la aplicación
│   ├── assets/          # Recursos como estilos o imágenes internas
│   ├── components/      # Componentes reutilizables de Vue
│   ├── composables/     # Funciones reactivas y utilidades
│   ├── layouts/         # Plantillas base para páginas
│   ├── middleware/      # Lógica de middleware para rutas
│   ├── pages/           # Páginas que generan rutas automáticamente
│   └── app.vue          # Punto de entrada de la app
├── assets/              # Recursos globales
├── public/              # Archivos estáticos accesibles públicamente
├── nuxt.config.ts       # Configuración de Nuxt
├── tailwind.config.js   # Configuración de Tailwind CSS
├── eslint.config.mjs    # Configuración de ESLint
├── package.json         # Dependencias y scripts
└── README.md            # Documentación
```

## 📜 Scripts Disponibles

- `build`: nuxt build
- `dev`: nuxt dev
- `generate`: nuxt generate
- `preview`: nuxt preview
- `postinstall`: nuxt prepare

## 📦 Dependencias

**Producción:**
- **@fastify/accept-negotiator**: ^2.0.1
- **@headlessui/vue**: ^1.7.23
- **@nuxt/eslint**: ^1.8.0
- **@nuxt/fonts**: ^0.11.4
- **@nuxt/icon**: ^2.0.0
- **@nuxt/image**: ^1.11.0
- **@nuxt/test-utils**: ^3.19.2
- **@nuxtjs/color-mode**: ^3.5.2
- **eslint**: ^9.33.0
- **nuxt**: ^4.0.3
- **nuxt-headlessui**: ^1.2.1
- **vue**: ^3.5.18
- **vue-router**: ^4.5.1

**Desarrollo:**
- **@nuxtjs/tailwindcss**: ^6.14.0

## 🚀 Despliegue

Esta aplicación se puede desplegar fácilmente en plataformas como:

- **Vercel**: Solo conecta tu repositorio y selecciona el framework **Nuxt 3**.
- **Netlify**: Configura el comando de build (`npm run build`) y la carpeta de salida (`.output/public` o según configuración SSR).
- **Render** o **Heroku** para despliegues con Node.

## 🛠 Recomendaciones de Desarrollo

- Mantener actualizado Nuxt y Tailwind para aprovechar mejoras de rendimiento.
- Usar variables de entorno seguras para credenciales y APIs.
- Habilitar ESLint y Prettier para mantener un código consistente.

## 📅 Roadmap (Mejoras Futuras)

- Implementar chat de texto en paralelo al de voz.
- Mejorar soporte para navegadores móviles.
- Agregar historial de conversaciones.
- Integrar traducción automática en tiempo real.

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Puedes usarlo, modificarlo y distribuirlo libremente.
