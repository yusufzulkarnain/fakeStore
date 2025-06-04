This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:
```
## Project Structure

.
├── App.tsx
├── Gemfile
├── README.md
├── **tests**
│ └── App.test.tsx
├── android
│ ├── app
│ ├── build
│ ├── build.gradle
│ ├── gradle
│ ├── gradle.properties
│ ├── gradlew
│ ├── gradlew.bat
│ ├── link-assets-manifest.json
│ ├── local.properties
│ └── settings.gradle
├── app.json
├── babel.config.js
├── index.js
├── ios
│ ├── Podfile
│ ├── Podfile.lock
│ ├── Pods
│ ├── TechTest2025
│ ├── TechTest2025.xcodeproj
│ ├── TechTest2025.xcworkspace
│ ├── TechTest2025Tests
│ ├── \_xcode.env
│ ├── build
│ └── link-assets-manifest.json
├── jest.config.js
├── metro.config.js
├── package-lock.json
├── package.json
├── react-native.config.js
├── src
│ ├── assets
│ ├── component
│ ├── helpers
│ ├── navigators
│ ├── page
│ └── redux
├── tsconfig.json
└── yarn.lock
```
# Library

- react-native-async-storage/async-storage 2.1.1 -> untuk kebutuhan penyimpan data local seperti login dan lain-lain dapat digunakan sesuai kebutuhan

- @react-navigation/bottom-tabs: "^6.6.0" -> untuk kebutuhan navigasi dan compabilitas dengan versi project react native 0.73.4 menurut saya masih stable

- @react-navigation/native: "^6.1.17" -> untuk kebutuhan navigasi dan compabilitas dengan versi project react native 0.73.4 menurut saya masih stable

- @react-navigation/native-stack: "^6.9.17" -> untuk kebutuhan navigasi dan compabilitas dengan versi project react native 0.73.4 menurut saya masih stable

- @reduxjs/toolkit: "^2.5.1",-> untuk kebutuhan managemen state

- axios": "^1.7.9", -> memudahkan fetch API dengan configurasi yang dinamis

- lucide-react-native": "^0.474.0" -> untuk kebutuhan icon agar project tidak menyimpan banyak assets

- react-native-linear-gradient: "^2.8.3", -> ada dependency dengan library lain seperti shimmer

- react-native-safe-area-context": "^4.10.5", -> ada dependency dengan library lain seperti navigator

- "react-native-screens": "^3.32.0", -> ada dependency dengan library lain seperti navigator

- "react-native-shimmer-placeholder": "^2.0.9", -> penggunaan yang simple untuk kebutuhan loading data

- "react-native-svg": "^15.11.1", -> ada dependency dengan library lain seperti lucide-icon

- "react-native-toast-message": "^2.2.1", -> penggunaan yang simple untuk menampilkan informasi error atau sukses dari API

- "react-redux": "^9.2.0" -> untuk kebutuhan management state

# Chalange

- masalah redux yang harus saya perlajari kembali karena sudah termasuk lama saya tidak mengimplentasikan redux, tetapi tidak ada masalah dalam project ini dengan penggunan redux yang mungkin dari sisi fitur masih belum terlalu kompleks hanya saja bahasa atau syntax redux yang saya harus pahami lagi.

- UI/UX sulit untuk membuat App tanpa ada acuan design dengan waktu yang lumayan singkat, tetapi saya usahakan agar UI tampak lebih simple dan mudah digunakan

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
