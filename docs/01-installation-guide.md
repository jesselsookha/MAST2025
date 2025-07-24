# 📱 React Native Development Setup: Student Guide


## 🧩 Common Setup (For Both Versions)

These steps are **common to both Version 1 and Version 2**.

### 1. ✅ Install Node.js (Recommended: LTS Version)

* Go to: [https://nodejs.org/](https://nodejs.org/)
* Download and install the **LTS version**.
* After installation, verify:

  ```bash
  node -v
  npm -v
  ```

### 2. ✅ Install Chocolatey (Windows Only)

> Chocolatey helps manage installations for things like Java and Android Studio.

* Run Command Prompt as Administrator:

  ```powershell
  @"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -ExecutionPolicy Bypass -Command "Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
  ```

* Then verify:

  ```bash
  choco -v
  ```

### 3. ✅ Install Java Development Kit (JDK 17)

```bash
choco install openjdk17
```

* Add JDK to environment variables:

  * `JAVA_HOME` → `C:\Program Files\OpenJDK\openjdk-17\`
  * Add `%JAVA_HOME%\bin` to your `Path` system variable

### 4. ✅ Install Visual Studio Code

* Download from: [https://code.visualstudio.com/](https://code.visualstudio.com/)

#### Suggested VS Code Extensions:

* **React Native Tools** (by Microsoft)
* **ESLint**
* **Prettier**
* **Path Intellisense**
* **GitLens**
* **Auto Import**

---

## Version 1: Using **Expo + Android Studio Emulator**

### 5. ✅ Install Expo CLI

```bash
npm install -g expo-cli
```

### 6. ✅ Install Expo Go App on Your Physical Device

* Android: Google Play Store → [Expo Go](https://play.google.com/store/apps/details?id=host.exp.exponent)
* iOS: App Store → Expo Go

### 7. ✅ Install Android Studio

* Download from: [https://developer.android.com/studio](https://developer.android.com/studio)
* During installation:

  * Select **Android SDK**
  * Select **Android SDK Platform**
  * Select **Android Virtual Device (AVD)**

### 8. ✅ Set Environment Variables (Windows)

* `ANDROID_HOME` → `C:\Users\<YourUserName>\AppData\Local\Android\Sdk`
* Add to `Path`:

  * `%ANDROID_HOME%\platform-tools`
  * `%ANDROID_HOME%\emulator`

### 9. ✅ Create an Android Virtual Device

* Open Android Studio → **Device Manager**
* Create an emulator using a Pixel or Nexus device
* Launch the emulator

### 10. ✅ Create Your First Project

```bash
npx create-expo-app my-app
cd my-app
npx expo start
```

* Press **“a”** to open on Android Emulator
* Scan QR Code using **Expo Go** on your phone if available

---

## Version 2: Using **Expo + BlueStacks as Virtual Device**

> This version is helpful if Android Studio's emulator is too slow or unavailable.

### 5. ✅ Install Expo CLI (same as above)

```bash
npm install -g expo-cli
```

### 6. ✅ Install Expo Go in BlueStacks

* Install BlueStacks from: [https://www.bluestacks.com](https://www.bluestacks.com)
* Once installed:

  * Open **Play Store** inside BlueStacks
  * Search and install **Expo Go**

### 7. ✅ Configure BlueStacks with ADB

#### A. Enable Developer Mode

* Inside BlueStacks → Go to **Settings > Advanced**
* Note the **ADB IP address** and **Port** (e.g., `192.168.0.101:5555`)

#### B. Connect ADB to BlueStacks

* Make sure `adb` is installed (part of Android SDK Platform Tools):

  ```bash
  adb devices
  ```

* Connect to BlueStacks:

  ```bash
  adb connect 192.168.0.101:5555
  ```

* Check device is connected:

  ```bash
  adb devices
  ```

You should see something like:

```
List of devices attached
192.168.0.101:5555    device
```

### 8. ✅ Create and Run a Project

```bash
npx create-expo-app my-app
cd my-app
npx expo start
```

* BlueStacks should be connected and show the Expo Go app.
* In your Expo developer terminal, press `a` to run it on Android.
* Alternatively, **open Expo Go in BlueStacks**, sign in, and scan the QR code or enter the development URL manually.

---

## 💡 Tips & Advice

* Always keep Node.js, Expo CLI, and your VS Code extensions up to date.
* If using ADB with BlueStacks, make sure it's not blocked by your firewall.
* You can **reload apps** with `r` in the Expo CLI terminal.
* Use **Hot Reloading** for fast feedback during coding.

