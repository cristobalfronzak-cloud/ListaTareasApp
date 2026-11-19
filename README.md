# EVU2_ROLDAN_CRISTOBAL

Aplicación móvil de lista de tareas creada con Expo y React Native. Permite crear, consultar, editar y eliminar tareas, asignarles una prioridad y asociarles una fotografía tomada con la cámara o seleccionada desde la galería.

## Funcionalidades

- Crear y editar tareas con título, descripción y prioridad (baja, media o alta).
- Buscar tareas por título y filtrarlas por prioridad.
- Consultar el detalle de una tarea, incluida su fotografía cuando tiene una.
- Capturar una foto o seleccionarla de la galería; la imagen puede quitarse antes de guardar.
- Gestionar los permisos de cámara y fotos requeridos en dispositivos móviles.

Las tareas y sus referencias de imagen se mantienen en memoria durante la sesión. La aplicación no guarda los datos de forma persistente.

## Tecnologías

- Expo SDK `~58.0.26`
- React `19.3.0` y React Native `0.88.1`
- `expo-image-picker` `~58.0.10` para cámara y galería
- JavaScript y estilos con `StyleSheet` de React Native

## Requisitos

- Node.js y npm instalados.
- Expo Go para probar en un dispositivo compatible, o un emulador/simulador configurado.

## Instalación y ejecución

Desde la carpeta del proyecto (`EVU2_ROLDAN_CRISTOBAL`), instala las dependencias y arranca Expo:

```bash
npm install
npm start
```

También puedes iniciar directamente para una plataforma:

```bash
npm run android
npm run ios
npm run web
```

Escanea el QR mostrado por Expo Go para abrir la aplicación en un dispositivo. Para usar la cámara, concede el permiso cuando la aplicación lo solicite.

## Estructura del proyecto

```text
EVU2_ROLDAN_CRISTOBAL/
├── App.js                 # Estado y lógica principal de tareas y fotografías
├── App.styles.js          # Estilos compartidos
├── app.json               # Configuración de Expo y permisos
├── index.js               # Registro del componente raíz
├── assets/                # Iconos e imágenes de la aplicación
└── src/
    ├── components/        # Formulario, búsqueda, tarjeta y detalle
    └── constants/         # Opciones de prioridad y filtros
```
