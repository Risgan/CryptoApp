# 📱 CryptoApp - Real Estate Crypto Viewer

Mobile application developed in **React Native with TypeScript**, designed to list cryptocurrencies, show their value in **USD**, apply filters, and display details. Compatible with **Android and iOS**.

---

## 🚀 Features

- 🔍 Search and filter cryptocurrencies by name.
- 💰 Direct value conversion to USD.
- 📄 Detail view for each cryptocurrency.
- 🧩 Structure based on **Object-Oriented Programming (OOP)**.
- 📱 Compatible with Android and iOS.

---

## 🛠️ Architecture

The project follows a modular architecture with separation of concerns:
```bash
    CryptoApp/
    └── src/
        ├── api/           # HTTP services
        ├── components/    # Reusable components
        ├── models/        # OOP interfaces and classes for data
        ├── screens/       # Main views (Home, Details)
        ├── navigation/    # Stack navigation
        ├── utils/         # Utility functions
        ├── services/      # Internal services
    └── App.tsx            # Main entry point
```

---

## ⚙️ Technologies Used

- **React Native**
- **TypeScript**
- **Axios** (for API connection to [Coinlore](https://www.coinlore.com/cryptocurrency-data-api))
- **React Navigation**
- **Styled Components** or **StyleSheet**
- **OOP Patterns** using classes and interfaces
- **Jest** (optional, for unit testing)

---

## 🧪 Applied Evaluation Criteria

| Criterion         | Application                             |
|------------------|------------------------------------------|
| Architecture     | Component-based, modular                 |
| Structure        | Clean, with domain separation            |
| Documentation    | This README and inline comments          |
| Best Practices   | Strict typing, clean code                |
| Performance      | Optimized with FlatList and memoization |
| Testing          | (Optional) Basic tests with Jest         |

---

## 📦 Installation and Execution

### Prerequisites

- Node.js >= 18
- npm or yarn
- Android Studio (for emulator)
- Xcode (Mac only, for iOS)
- WebStorm, Visual Studio Code or Android Studio

---

### 📁 1. Clone the project

```bash
  git clone https://github.com/youruser/CryptoApp.git
```

---

### 📦 2. Install dependencies

If using npm:
```bash
  npm install
```

If using yarn:
```bash
    yarn install
```

---

### 📲 3. Set up Android environment

On Windows:
- Open Android Studio.
- Install SDK Manager > Android SDK Platform 33 or higher.
- In AVD Manager, create an emulator (Pixel 5, API 33 recommended).
- Set the ANDROID_HOME environment variable:
    - Typical path: `C:\Users\YOUR_USER\AppData\Local\Android\Sdk`

On Mac:
- Follow the same steps via Android Studio.

---

### ▶️ 4. Run on Android (from terminal)

```bash
    npx react-native run-android
```

This will build and install the app on the emulator or physical device.

---

### ▶️ 5. Run on iOS (Mac only)

```bash
    cd ios
    pod install
    cd ..
    npx react-native run-ios
```

This will launch the iPhone simulator and run the app.

---

#### 🖥️ IDE Alternatives

✅ Visual Studio Code:
- Open the project folder.
- Install the React Native Tools extension.
- Open the integrated terminal (Ctrl + ñ).
- Run:
```bash
    npx react-native start
```
- In another terminal:
```bash
    npx react-native run-android
```
- You can also configure `launch.json` to run with F5.

✅ WebStorm:
- Open the project in WebStorm.
- Go to Run > Edit Configurations.
- Add a React Native configuration:
    - Script: run-android
    - Working directory: project root
- Click Run ▶️

✅ Android Studio:
- Open only the `/android` folder.
- Wait for Gradle to sync.
- Select the emulator or physical device.
- Click the Run 'app' button (green ▶️ icon).

---

## 📦 Generate APK (Android)

To generate a signed production APK:

### 1. Generate a signing key

Run in terminal:

```bash
    keytool -genkey -v -keystore keystore.jks -keyalg RSA -keysize 2048 -validity 10000 -alias my-key-alias
```

This will prompt for a password and some info. Save the `keystore.jks` file in the `android/app` folder.

---

### 2. Configure signing in android/gradle.properties

Add or edit the following lines:

```properties
    MYAPP_UPLOAD_STORE_FILE=keystore.jks
    MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
    MYAPP_UPLOAD_STORE_PASSWORD=your_password
    MYAPP_UPLOAD_KEY_PASSWORD=your_password
```

---

### 3. Edit android/app/build.gradle

Look for the `signingConfigs` section and replace with:

```groovy
signingConfigs {
    release {
        storeFile file(MYAPP_UPLOAD_STORE_FILE)
        storePassword MYAPP_UPLOAD_STORE_PASSWORD
        keyAlias MYAPP_UPLOAD_KEY_ALIAS
        keyPassword MYAPP_UPLOAD_KEY_PASSWORD
    }
}
```

Then under `buildTypes > release`, add:

```groovy
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

### 4. Generate the APK

From the root of the project:

```bash
    cd android
    ./gradlew assembleRelease
```

On Windows:

```bash
  gradlew.bat assembleRelease
```

The APK will be generated at:

```bash
  android/app/build/outputs/apk/release/app-release.apk
```

You can copy this file and distribute it or upload it to app stores.
