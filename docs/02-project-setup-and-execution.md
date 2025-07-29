
# 📘 MAST5112: Mobile App Scripting – Class Notes

**React Native Development with Expo Framework (TypeScript Template)**
*Instructor’s Notes & Step-by-Step Reference*

---

## 🔰 Preface

As discussed in class, we will use the **pre-configured Virtual Machine (VM)** to create and run our React Native projects. The VM has all necessary software tools already installed and working, which avoids many of the initial setup issues on personal machines.

Once you are confident with the process of project creation and execution within the VM, you can consult `docs/01-installation-guide.md` for steps to configure your **personal development environment**.

---

## 🧱 Creating a New Blank Project in React Native (Expo + TypeScript)

This process outlines how we consistently create, manage, and execute projects during class.

> ⚠️ This method is intended for small-scale, class-based projects. While simple, it provides a clean and organized development structure for beginners.

---

### 📂 Step 1: Organize Project Files

1. Open **Windows Explorer** and navigate to the `Documents` folder.
2. Inside `Documents`, create a folder named:

   ```
   MAST
   ```
3. Inside the `MAST` folder, create a new folder for your project. This will be your **parent folder**. Use a descriptive, PascalCase name with **no spaces**, such as:

   ```
   CounterApplication
   ```

> 📁 Folder Structure:

```
Documents
└── MAST
    └── CounterApplication
```

---

### 🧑‍💻 Step 2: Open Parent Folder in VS Code

1. Open **Visual Studio Code**.
2. If a project is already open, go to:
   `File > Close Folder`
3. Then select:
   `File > Open Folder`
   Navigate to your newly created `CounterApplication` folder and click `Select Folder`.

---

### 💻 Step 3: Open the Terminal

1. In Visual Studio Code, go to:
   `Terminal > New Terminal`
2. The terminal should open **inside your parent folder**.

---

### ⚙️ Step 4: Create the React Native Project

Run the following command in the terminal:

```bash
npx create-expo-app -t expo-template-blank-typescript
```

> 📝 What happens next:

* If it’s your first time, you’ll be prompted to install `create-expo-app` — type `y` and press **Enter**.
* You’ll be asked to name your application. Use a variation of your parent folder name, such as:

  ```
  counterv1
  ```
* Expo will now create a new folder inside the parent folder with the project files.

> 📁 Updated Folder Structure:

```
Documents
└── MAST
    └── CounterApplication
        └── counterv1
```

---

### 📝 Step 5: Edit the Application Code

Navigate to:

```
counterv1 > App.tsx
```

This is your starting point. All your basic application logic will reside here for now. As the course progresses, more files and folders will become relevant.

---

### 📱 Step 6: Run the Project on Emulator

#### 💡 First, Start the Emulator:

1. Launch **BlueStacks** and allow it to boot completely.
2. Once BlueStacks is running, double-click the **“Run for BlueStacks”** batch file.
   This connects your emulator to Android Studio using ADB (Android Debug Bridge).

> ✅ Tip: In the first class, we checked the connection using Android Studio > Device Manager. If it was visible there, the batch file connection works.

---

#### ▶️ Then, Start the Project in VS Code:

1. In the Project Explorer, right-click on your project folder (`counterv1`) and select:
   `Open in Integrated Terminal`

2. Verify you're inside the correct folder:

   ```bash
   ls
   ```

   You should see files like `App.tsx`, `package.json`, etc.

3. Run the following command:

   ```bash
   npx expo start
   ```

> ⚙️ Compilation begins, and the development server is started.

---

### 📲 Step 7: Run the App - Two Options

### Option 1: Launch in Android Emulator (BlueStacks)

1. After running `npx expo start`, press **`a`** in the terminal.
   This tells Expo to open the app in Android.
2. BlueStacks will open the **Expo Go** app, which will load your project.

> 🛠️ First-Time Use:

* If prompted to update **Expo Go**, press `y` and continue.
* After setup, your app should appear inside Expo Go.

### Option 2: Run on Your Physical Phone (Android or iPhone)

While our primary setup in the VM uses the **BlueStacks emulator**, it's absolutely possible (and often more intuitive) to run your project directly on a **physical phone** using the **Expo Go** app.

### 🔄 Prerequisite

Ensure your **mobile phone is connected to the same Wi-Fi network** as the VM or host machine running the development server.

---

### 🧪 How It Works

When you execute the command:

```bash
npx expo start
```

Expo will launch a development server and open a new tab in your default browser. This will display a **web interface** (called the Metro Bundler) that shows a **QR code**.

---

### 📱 How to Use the QR Code

#### On Android:

1. Install the **Expo Go** app from the Google Play Store.
2. Open the Expo Go app.
3. Tap **“Scan QR Code”** and point the camera at the QR code shown in the Metro Bundler.

#### On iPhone (iOS):

1. Install the **Expo Go** app from the App Store.
2. Open the **default Camera app** (no need to open Expo Go directly).
3. Point the camera at the QR code.
4. Tap the notification that appears to open the project in Expo Go.

---

### 🎯 Key Points to Understand

* You are **not** installing the app on your phone as a native Android/iOS application.
* Instead, the app is running **within the Expo Go environment**, which acts as a **middle-man** viewer.
* You still benefit from **Live Reloading**:
  Edit your code → Press **Ctrl + S** → Changes appear on your phone in a few seconds.

---

### 🔍 Comparison

| Feature               | BlueStacks Emulator       | Physical Phone (Expo Go)            |
| --------------------- | ------------------------- | ----------------------------------- |
| App install type      | Debug/Emulated            | Virtual via Expo Go (not native)    |
| Performance           | Slower (VM dependent)     | Usually faster & responsive         |
| Setup required        | Pre-installed in VM       | Must install Expo Go manually       |
| Live reload supported | ✅ Yes                    | ✅ Yes                             |
| Native feel           | Medium                    | High (touch input, sensors)         |
| Debugging options     | Integrated with dev tools | Limited, but good for quick testing |

---

### ♻️ Live Editing Enabled!

Now you can:

* Edit your code in `App.tsx`
* Press **Ctrl+S** to save
* Instantly view updates in the emulator via **Live Reload**

---

## ⚠️ Important Notes

* **You must be in the project folder** (`counterv1`) to run `npx expo start`.
  If you run it in the parent folder, it will appear to start but will crash or fail to load.

* For now, we are only working with the `App.tsx` file. Do not worry about other files unless discussed in class.

---

## ✅ You’re Ready to Build!
This setup gives you a reliable environment to:

* Create blank React Native apps using Expo
* Edit code live
* Test apps either in emulators or on real devices

---
