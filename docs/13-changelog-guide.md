# 🗂️ **CHANGELOG Guide**

## Track Your Progress — Like a Real Developer

---

## 📘 What is a CHANGELOG?

A `CHANGELOG` is a **record of all meaningful changes** made to a project over time. It helps you and others understand:

* What changed
* Why it changed
* When it changed
* Who made the change (in team projects)

It’s a core part of professional development practices — even in small projects like yours.

---

## 🎯 Why Should You Keep a CHANGELOG?

* 🧠 Helps you remember what you’ve done
* 🔍 Makes it easier to debug or undo changes
* 📽️ Supports your video walkthrough (you can refer to your changelog!)
* 📄 Becomes part of your final project documentation
* 👏 Shows professionalism and attention to detail

---

## 📌 Where Should It Be?

Your `CHANGELOG` should be a **section in your README.md** file (or a separate `CHANGELOG.md` file if preferred).

---

## 🧾 What Should You Record?

For every update or change, include:

* **Date**
* **Version number** (or week, or phase — keep it consistent)
* **Summary of what changed**
* Optional: reason for the change or issue it solved

---

## ✅ Good Example Format (Plain Language)

Here’s a simple and effective structure for your changelog:

---

### 🗓️ 2025-10-15 – Initial Implementation

* Created the basic project using `expo-template-blank-typescript`
* Installed dependencies: `@react-navigation/native`, `@react-native-picker/picker`, etc.
* Created `courseList.ts` with starter course data
* Designed Home section UI with FlatList for prepared menu
* Added form inputs for menu item management

---

### 🗓️ 2025-10-16 – Core Functionality

* Implemented “Save” button to add new menu items to list
* Displayed total number of menu items
* Hooked up course picker to use the `courseList` array
* Created a basic search input (filtering menu items by title)

---

### 🗓️ 2025-10-17 – UI & UX Improvements

* Styled buttons for Save, Clear, and Delete
* Added basic color theming for primary/secondary
* Improved screen layout and spacing

---

## 🛑 What NOT to Do

**❌ Bad Changelog Example:**

```
- Added stuff
- Fixed something
- Changed some layout
```

> 😩 These entries are too vague and unhelpful. Always write for someone who didn’t work on the project with you — including future you.

---

## ✍️ Tips for Maintaining a Great CHANGELOG

* Update it **as you go** — don’t wait until the end.
* Use clear, simple language.
* Be specific. Name components, features, or files you worked on.
* If something broke and you fixed it, explain **how**.
* Mention deleted or refactored code too — not just new things.

---

## 🧩 Using It in Your Final Submission

In your `README.md` file, create a section like this:

```md
## 🔄 Changelog

### 2025-10-15 – Initial Setup
- Project created using Expo
- Installed core navigation libraries
- Designed home screen and management UI

### 2025-10-16 – Functional Features Added
- Form submission now updates prepared menu
- Added course picker
- Total item count displayed
```

---

## 🎓 Bonus: Versioning (Optional for Advanced Students)

If you want to use versions, consider this format:

```
## [v0.1.0] – 2025-10-15
Initial app setup and design

## [v0.2.0] – 2025-10-16
Added dynamic menu functionality and search
```

But this is not required — a date-based format is perfectly fine at your level.
