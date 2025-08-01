# 🍏 React Native with Expo – macOS Setup Guide (2025 Edition)

> This guide helps you set up a full **React Native development environment using Expo CLI**, VS Code, and either an emulator or your mobile device.
>
> 💡 **Expo CLI** simplifies development by removing the need to compile native code yourself. However, we still install **Android Studio and Java** to give you full flexibility for emulation or future native development.

---

## 🧩 Common Setup Steps

These apply to **all students**, whether you use Bluestacks, the Android Studio emulator, or a physical device.

---

### ✅ 1. Install Homebrew (Package Manager for macOS)

Homebrew helps install tools like Node, Watchman, JDK, etc.

* Open Terminal (find it via Spotlight or from Applications > Utilities).
* Paste the following:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Then verify:

```bash
brew doctor
```

---

### ✅ 2. Install Node.js (Recommended: LTS Version) & Watchman

React Native needs **Node.js** and **Watchman** to monitor your project files.

```bash
brew install node
brew install watchman
```

Verify installation:

```bash
node -v
npm -v
watchman --version
```

---

### ✅ 3. Install Java Development Kit (JDK 17)

Even though **Expo doesn't require Java**, it's recommended to install it if you’ll use Android Studio's emulator.

```bash
brew install --cask zulu@17
```

Set the environment variable (add this to `~/.zshrc` or `~/.bash_profile`):

```bash
export JAVA_HOME=$(/usr/libexec/java_home -v 17)
export PATH=$JAVA_HOME/bin:$PATH
```

Then reload:

```bash
source ~/.zshrc
```

Verify:

```bash
java -version
```

---

### ✅ 4. Install Visual Studio Code

Download for macOS and install from:
🔗 [https://code.visualstudio.com/](https://code.visualstudio.com/)

Recommended extensions to install from inside VSCode:

* ✅ React Native Tools
* ✅ ESLint
* ✅ Prettier
* ✅ GitLens
* ✅ Path Intellisense

---

### ✅ 5. Install Android Studio (Required for Emulator)

Download from:
🔗 [https://developer.android.com/studio](https://developer.android.com/studio)

During installation, ensure these are selected:

* Android SDK
* Android SDK Platform
* Android Virtual Device (AVD)

---

### ✅ 6. Install Android SDK 35

In Android Studio:

1. Go to **More Actions > SDK Manager**
2. Under **SDK Platforms**, install:

   * ✅ Android 15 (VanillaIceCream)

     * Android SDK Platform 35
     * Google APIs ARM64 v8a System Image
3. Under **SDK Tools**, install:

   * ✅ Android SDK Build-Tools 35.0.0
   * ✅ Android Emulator

---

### ✅ 7. Set Up Environment Variables

Add this to your shell config:

```bash
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

Reload:

```bash
source ~/.zshrc
```

Check:

```bash
echo $ANDROID_HOME
```

---

## 🚀 Expo Project Setup & Execution

You are now ready to build apps using **Expo CLI**.

---

### ✅ 8. Install Expo CLI

```bash
npm install -g expo-cli
```

---

### ✅ 9. Create a New Project Using Expo (with TypeScript)

```bash
npx create-expo-app my-app -t expo-template-blank-typescript
cd my-app
```

---

### ✅ 10. Start the Expo Development Server

Inside your project folder, run:

```bash
npx expo start
```

> This will launch a web page (Expo Dev Tools) and give you multiple ways to run the app.

---

## 📱 How to Run Your Expo App

You now have **three options** to run your React Native app:

---

### 🔵 Option 1: Physical Android or iOS Device (Expo Go)

1. Install **Expo Go** on your device:

   * Android: [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
   * iOS: [App Store](https://apps.apple.com/app/expo-go/id982107779)
2. Connect to the same Wi-Fi as your Mac
3. Open Expo Go → Scan the QR code shown in the terminal or browser
4. Your app will load instantly

---

### 🟢 Option 2: Android Studio Emulator

1. Open **Android Studio**
2. Go to **Device Manager**
3. Click **Create Virtual Device** (choose a Pixel/Nexus phone)
4. Select the Android 15 (API 35) system image
5. Launch the emulator
6. Then press **“a”** in the terminal or browser to run the app on the emulator

---

### 🔶 Option 3: Bluestacks Emulator (Advanced)

> Only needed if you prefer Bluestacks. You’ll connect using **ADB**.

1. Install ADB:

```bash
brew install --cask android-platform-tools
```

2. Enable **ADB debugging** in Bluestacks settings
3. Connect:

```bash
adb connect 127.0.0.1:5555
```

4. Run:

```bash
npx expo start
```

Then press **“a”** to launch on Bluestacks.

---

## 🧠 Developer Tips

* Use `npx expo install` instead of `npm install` to ensure native compatibility
* Expo supports **live reloading** by default
* Projects are **TypeScript-ready** with the chosen template
* Use the **Expo Dev Tools (in browser)** to monitor logs, QR codes, and devices

---
