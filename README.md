# 📱 CryptoApp - Real Estate Crypto Viewer

Aplicación móvil desarrollada en **React Native con TypeScript**, diseñada para listar criptomonedas, mostrar su valor en **USD**, aplicar filtros y mostrar detalles. Compatible con **Android e iOS**.

---

## 🚀 Funcionalidades

- 🔍 Búsqueda y filtrado de criptomonedas por nombre.
- 💰 Conversión directa de valores a USD.
- 📄 Vista de detalle de cada criptomoneda.
- 🧩 Estructura basada en **Programación Orientada a Objetos (OOP)**.
- 📱 Compatible con Android e iOS.

---

## 🛠️ Arquitectura

El proyecto sigue una arquitectura modular con separación de responsabilidades:
```bash Copiar Editar
    CryptoApp/
    └── src/
        ├── api/ # Servicios HTTP
        ├── components/ # Componentes reutilizables
        ├── models/ # Interfaces y clases OOP para datos
        ├── screens/ # Vistas principales (Home, Details)
        ├── navigation/ # Navegación (Stack)
        ├── utils/ # Funciones utilitarias
        ├── services/ # Servicios de consumo interno
    └── App.tsx # Punto de entrada principal
```


---

## ⚙️ Tecnologías utilizadas

- **React Native**
- **TypeScript**
- **Axios** (para conexión a la API de [Coinlore](https://www.coinlore.com/cryptocurrency-data-api))
- **React Navigation**
- **Styled Components** o **StyleSheet**
- **OOP Patterns** con clases e interfaces
- **Jest** (opcional, para pruebas unitarias)

---

## 🧪 Criterios de Evaluación Aplicados

| Criterio         | Aplicación                           |
|------------------|---------------------------------------|
| Arquitectura     | Basada en componentes, modular        |
| Estructura       | Limpia, con separación por dominios   |
| Documentación    | Este README y comentarios inline      |
| Buenas prácticas | Tipado estricto, código limpio        |
| Rendimiento      | Optimizado con FlatList y memoización |
| Pruebas          | (Opcional) Pruebas básicas con Jest   |

---

## 📦 Instalación y ejecución

### Requisitos previos

- Node.js >= 18
- npm o yarn
- Android Studio (para emulador)
- Xcode (solo en Mac, para iOS)
- WebStorm, Visual Studio Code o Android Studio

---

### 📁 1. Clonar el proyecto

```bash Copiar Editar
  https://github.com/tuusuario/CryptoApp.git
```
---

### 📦 2. Instalar dependencias

Si usa npm
```bash Copiar Editar
  npm install
```
Si usa yarn

```bash Copiar Editar
  yarn install
```
---
### 📲 3. Preparar entorno Android
En Windows:
Abre Android Studio.

Instala el SDK Manager > Android SDK Platform 33 o superior.

En AVD Manager, crea un emulador (Pixel 5, API 33 recomendado).

Asegúrate de tener configurada la variable de entorno ANDROID_HOME:

Ruta típica: C:\Users\TU_USUARIO\AppData\Local\Android\Sdk

En Mac:
Sigue los mismos pasos desde Android Studio.

---
### ▶️ 4. Ejecutar en Android (desde consola)
```bash Copiar Editar
  npx react-native run-android
```
Esto compilará e instalará la app en el emulador o dispositivo físico.

---
### ▶️ 5. Ejecutar en iOS (solo en Mac)
```bash Copiar Editar
    cd ios
    pod install
    cd ..
    npx react-native run-ios
```
Esto abrirá el simulador de iPhone y ejecutará la app.

#### 🖥️ Alternativas con IDEs
✅ Visual Studio Code
Abre la carpeta del proyecto.

Instala la extensión React Native Tools.

Abre la terminal integrada (Ctrl + ñ).

Ejecuta:

```bash Copiar Editar
  npx react-native start
```
En otra terminal:

```bash Copiar Editar
  npx react-native run-android
```
También puedes configurar launch.json para ejecutar con F5.

#### ✅ WebStorm
Abre el proyecto en WebStorm.

Ve a Run > Edit Configurations.

Agrega una configuración de tipo React Native:

Script: run-android

Working directory: raíz del proyecto

Haz clic en Run ▶️.

✅ Android Studio
Abre solo la carpeta /android.

Espera que sincronice Gradle.

Selecciona el emulador o dispositivo físico.

Haz clic en el botón Run 'app' (ícono verde ▶️).

---

## 📦 Generar APK (Android)

Para generar un APK de producción firmado:

### 1. Generar clave de firma

Ejecuta en la terminal:

```bash Copiar Editar
  keytool -genkey -v -keystore keystore.jks -keyalg RSA -keysize 2048 -validity 10000 -alias my-key-alias
```
Esto te pedirá una contraseña y algunos datos. Guarda el archivo keystore.jks en la carpeta android/app.
---
### 2. Configurar firma en android/gradle.properties
Agrega (o edita) las siguientes líneas:

properties
```bash Copiar Editar
    MYAPP_UPLOAD_STORE_FILE=keystore.jks
    MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
    MYAPP_UPLOAD_STORE_PASSWORD=tu_contraseña
    MYAPP_UPLOAD_KEY_PASSWORD=tu_contraseña
```
---
### 3. Editar android/app/build.gradle
Busca la sección signingConfigs y reemplaza por:

```groovy Copiar Editar
    signingConfigs {
        release {
            storeFile file(MYAPP_UPLOAD_STORE_FILE)
            storePassword MYAPP_UPLOAD_STORE_PASSWORD
            keyAlias MYAPP_UPLOAD_KEY_ALIAS
            keyPassword MYAPP_UPLOAD_KEY_PASSWORD
        }
    }
```
Y luego en buildTypes > release, agrega:

```groovy Copiar Editar
    buildTypes {
        release {
            signingConfig signingConfigs.release
            shrinkResources true
            minifyEnabled true
            proguardFiles getDefaultProguardFile("proguard-android-optimize.txt"), "proguard-rules.pro"
        }
    }
```
---
### 4. Generar el APK
Desde la raíz del proyecto:

```bash Copiar Editar
    cd android
    ./gradlew assembleRelease
```
En Windows:

```bash Copiar Editar
  gradlew.bat assembleRelease
```
El APK se generará en:

```swift Copiar Editar
    android/app/build/outputs/apk/release/app-release.apk
```
Puedes copiar ese archivo y distribuirlo o subirlo a tiendas.