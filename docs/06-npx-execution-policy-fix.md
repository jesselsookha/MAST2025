## 🛠️ React Native – Error with `npx` Command (Execution Policy Fix)

Some students have begun following the installation guide on a Windows machine, have informed me that you are seeing an error you're encountering when trying to run this command from the textbook:

```bash
npx create-expo-app -t expo-template-blank-typescript
```

And you're seeing this message:

```bash
npx: File C:\Program Files\nodejs\npx.ps1 cannot be loaded because running scripts is disabled on this system.
At line:1 char:1
+ npx create-expo-app -t expo-template-blank-typescript
+ ~~~
    + CategoryInfo : SecurityError: (:) [], PSSecurityException
    + FullyQualifiedErrorId: UnauthorizedAccess
```

---

### 💡 What’s Happening?

This error is **not caused by Node.js or the `npx` command itself**, and it doesn’t mean anything is wrong with your installation.

The issue is happening because of **PowerShell’s script execution policy** — a Windows security feature that restricts scripts (like those run by `npx`) from being executed, unless permission is granted.

By default, when you open the Terminal inside **Visual Studio Code**, it uses **PowerShell** (you’ll notice "`PS`" in the top-left corner of the terminal). And that's why you're seeing this issue.

You have two ways to move forward, depending on what works best for you.

---

## ✅ Option 1: Use Command Prompt Instead of PowerShell

This is the easiest workaround and works great in most cases.

### 👉 Steps:

1. **Go to your `MAST` folder** where you plan to store your projects.
2. Create a folder (example: `ReactNativeProjects`) if you haven’t already.
3. Inside that folder, **click on the address bar** at the top of the File Explorer window.
4. Type `cmd` and hit **Enter** — this will open **Command Prompt** in that folder location.
5. Now run the command again:

   ```bash
   npx create-expo-app -t expo-template-blank-typescript
   ```

✅ This method avoids PowerShell entirely and usually runs without any errors.

(Cross fingers and hope it works!)

---

## 🧰 Option 2: Allow Scripts Temporarily in PowerShell (VS Code Terminal)

If you’d prefer to keep working inside **Visual Studio Code**, here’s how you can **temporarily allow scripts** just for this session:

> ⚠️ This does not make a permanent change to your system — it’s safe and will reset when you close VS Code.
> This means you are likely going to have to follow this command each time you wish to create a new project.


### 👉 Steps:

1. In **Visual Studio Code**, check the terminal. If you see **`PS`** in the top-left, you're using **PowerShell**.

2. At the terminal prompt, type the following command:

   ```powershell
   Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
   ```

3. Hit **Enter** — you may be asked to confirm. Type `Y` and press Enter again if prompted.

4. Now try your original command again:

   ```bash
   npx create-expo-app -t expo-template-blank-typescript
   ```

✅ This allows the command to run without changing your computer’s overall security settings.

---

### 📝 Summary

* This is a **Windows PowerShell issue**, not a problem with Node.js, Expo, or your setup.
* You can **use Command Prompt** to avoid this issue altogether.
* Or, **temporarily allow scripts in PowerShell** with one command if you’re staying in VS Code.

Let me know how it goes, and don't worry — this is a common first-time setup hurdle, and you're definitely not alone in seeing this!


Let me know if you’d like a version of this as a printable PDF or class-wide tip sheet.
