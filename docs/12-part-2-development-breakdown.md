# 🚧 **Part 2: Development Breakdown & Guidelines**

## Translating Your Plan into a Working React Native App (Initial Version)

---

## 🎯 **Goal of Part 2**

Part 2 is where your **design becomes reality**.

You will:

* Begin coding the core screens from your app.
* Focus on **interface functionality** (no persistent storage yet).
* Reflect your **Part 1 designs** in real components and logic.
* Understand how the Chef will manage their menu using the app.

> ✅ *This is your "first working version" — clean, simple, functional.*

---

## 🧑‍🍳 Application Story Recap

* This is **not** Uber Eats / Mr. D. 
* This is **not** a restaurant app. There are **no** reservations and bookings. 
* The **Chef** creates and manages the menu items.
* The **Client** can only *view* the prepared menu on the HomeScreen & the full menu on the ViewMenuScreen.
* There is **no ordering, payment, or custom menu creation**.

Understanding this is **crucial** before you write any code.

---

## 📱 What You Must Implement in Part 2

Everything listed here will live on **a single screen/page** (for now), but must include content from both:

---

### 🏠 **Home Section (Prepared Menu View)**

* Display the **Prepared Menu** using `FlatList`
* Display the **Total Number of Menu Items** using `Text`
* (Optional, extra) Display **average price per course** (using a horizontal `FlatList` or custom component)
* Include **navigation elements** (buttons or placeholders using `TouchableOpacity`) — even if they don’t lead anywhere yet

---

### 🛠️ **Menu Management Section (Chef Functionality)**

* **TextInput** fields for:

  * Title
  * Description
  * Price
* **Picker** to select a course (use `@react-native-picker/picker`)

  * Course options should come from a **courseList array**
* **Buttons** (`TouchableOpacity`) for:

  * **Save** – Adds the item to the Prepared Menu
  * **Clear** – Clears the input fields
  * **Delete** – (Optional for now) Can be planned for future
* **Search functionality:** *Optinal for now*

  * A `TextInput` to enter a search term
  * A `FlatList` below that shows filtered results

> 🧠 *Once you click “Save”, the item should appear in the Prepared Menu above. Total items must update.*

---

## 🧰 Two Coding Options — Choose What Works Best for You

To support different learning styles and development speeds, you may choose from **two implementation approaches**.

---

### ✅ **Option 1: Single-File Development (Simplified)**

For faster implementation:

**Structure:**

* All coding happens inside `App.tsx`
* Use dividers (e.g. `View` with `Text` headings) to separate Home and Menu Management sections
* All logic in one file
* Import only necessary dependencies and types

**Pros:**

* Simple to manage
* Good for understanding how data flows between components

**Cons:**

* Less scalable for Part 3
* No folder structure for future expansion

---

### ✅ **Option 2: Structured Project Setup (Recommended for Future Use)**

**Project Setup:**
*More wil be added as we develop Part 3*
```
App.tsx
/src
  /components
    menuItem.tsx
  /screens
    HomeScreen.tsx
    MenuManagementScreen.tsx
    ViewMenu.tsx
    FakeLogin.tsx
  /data
    courseList.ts
  /types
    Menu.ts
    Course.ts
  /navigation
    AppNavigator.tsx
```

In **Part 2**, all functionality still goes into `HomeScreen.tsx`, but this option sets you up for **Part 3 and beyond**.

**Benefits:**

* Modular structure
* Easier transition into real navigation and persistent storage later
* Cleaner code

**Required Skills:**

* Importing/exporting components and types
* Managing props and reusable logic

---

## 🧾 What You Must Submit

### ✅ **Functional App Code**

* App must meet all requirements above.
* It must run successfully with `npx expo start`.

### ✅ **Video Walkthrough (YouTube)**

* Record a **screencast** using screen recording software.
* **Speak through** the video and explain:

  * What the app does
  * Demonstrate features and functionality in detail (Add menu item, Make mistakes, Show errors, etc.)
  * How it connects to your designs from Part 1
  * Why you made certain decisions
* Upload to **YouTube** (Unlisted or Public)
* Add the link to your `README.md`

### ✅ **Updated Documentation (Optional but Encouraged)**

* You may begin updating your Part 1 document or README to reflect your actual implementation.
* Screenshots of the working app will help reinforce your design-to-code translation.

---

## 📌 Tips for Success

* Start by **rebuilding your screen designs** in code. Keep the structure simple, then add styling.
* Make sure data flows correctly: when you **Save**, the menu should update immediately.
* Keep UI **clean and readable** — avoid hardcoding values or using inconsistent layouts.
* Test your app **on an emulator or physical device** to make sure everything renders properly.
* Use **clear naming** for variables, especially when managing menu items.
* If you feel stuck — **refer back to your Part 1 document**.

---

## 🧩 How This Prepares You for Part 3

By completing Part 2:

* You will have core features working.
* You will understand how components interact.
* You will be prepared to add:

  * **Navigation between screens**
  * **Fake login**
  * **Persistent storage** using `AsyncStorage`
  * **Client vs. Chef user views**

This is the **foundation of your final submission**, so focus on doing it right.
