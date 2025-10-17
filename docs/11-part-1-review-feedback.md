# 📘 **Part 1 Feedback & Reflection Guide**

## Revisiting & Strengthening Your Foundation for Part 2 & Part 3

---

## 🔁 Why You Must Revisit Your Part 1 Submission

Although Part 1 has already been marked, you are **strongly encouraged to revisit and update it**. This is not just busy work — it directly supports your success in **Part 2 and Part 3**.

Think of Part 1 as the **blueprint** for your entire application. If the blueprint is weak, unclear, or inaccurate, then your development in Parts 2 and 3 will suffer.

> ✅ *A well-documented plan saves hours of coding and rewriting later.*

---

## 🧱 What Should You Revisit?

Here are the most common issues identified in Part 1, and how you can improve them:

### 1. **Misunderstanding the Storyline**

**❌ Mistake:** Treating the app like Uber Eats or Mr. Delivery — allowing the client to order food, pay, or customize menus.

**✅ Correction:**

* Only the **Chef** can manage and create menu items.
* The **Client** can only *view* the prepared menu & *view* the complete menu.
* There is **no ordering or payment** functionality.

Take time to **restate the storyline in your own words** in your documentation. Make it clear you understand the role of each user type.

---

### 2. **Screen Designs Missing Detail**

**❌ Mistake:** Screens were drawn but not annotated or explained clearly.

**✅ Correction:**

* For each screen, clearly label all **UI components**.
* Below or beside the screen, **explain its purpose**, and what actions are possible (if any).
* Use clear text to describe functionality.

> 🔍 *Example: On the MenuManagement screen, explain that “the Save button adds the new menu item to the Menu list above.”*

---

### 3. **Missing or Incomplete Component/Dependency List**

**❌ Mistake:** Did not include frameworks, libraries, or components to be used.

**✅ Correction:**

* List **all components** you plan to use (e.g., TextInput, FlatList, TouchableOpacity).
* Include a list of dependencies:

  * `@react-navigation/native`
  * `@react-navigation/native-stack`
  * `react-native-screens`
  * `react-native-safe-area-context`
  * `@react-native-picker/picker`
  * `@react-native-async-storage/async-storage`
  * `expo-google-fonts` (if used)
  * Any **icons** or other libraries.

> 🛠 *This list is important for your future README.md file.*

---

### 4. **Navigation Flow Not Properly Illustrated**

**❌ Mistake:** No diagram or unclear explanation of how users move through the app.

**✅ Correction:**

* Create a **visual flow diagram**.

  * Clearly show which screens are connected.
  * Label which navigation method is used (stack, drawer, bottom tab).
  * Indicate **user flow** for both the Chef and the Client.

> 🔁 *This will help you when implementing `react-navigation` in Part 2 (partially) and Part 3 (fully).*

---

### 5. **Poor Use of Screen Space & Colour**

**❌ Mistake:** UI designs not optimized for mobile — too much empty space, poor font sizing, colours not used consistently.

**✅ Correction:**

* Rework screen layouts to make full use of screen real estate.
* Make sure your colours (primary, secondary, accent, error, info) are used **consistently and meaningfully**.

> 🎨 *Design is not just about beauty — it's about clarity, usability, and purpose.*

---

### 6. **Missing or Incorrect References**

**❌ Mistake:** No references, or incorrectly formatted references.

**✅ Correction:**

* Include all sources used for icons, libraries, colour schemes, or design inspiration.
* Use the **institution’s officially assigned reference style**.

---

## 📄 Why These Updates Matter

Your Part 1 planning document is not "just for marks." It becomes:

* 📚 **Documentation** you will refer to for Part 2 and 3.
* 📽️ **Support material** for your README and YouTube walkthrough.
* 🧩 **Evidence** of how your thinking, planning, and understanding evolved.

This is especially important in projects where **version control**, documentation, and user-centered design are being evaluated.

---

## 🛠️ How to Use This in Your Final Project

* Include your **annotated designs** in the final README.
* Show the **evolution** from design to real app (e.g., Figma mockup → screenshot of implemented screen).
* Keep your **component list and dependencies updated** as your project grows.
* Reference your **navigation diagram** when you implement actual navigation.

---

## ✏️ Final Tip

> 🔄 “Your app will only be as good as your understanding of the problem you’re solving.”

Take this time to **clean up your design, correct misunderstandings**, and **organize your thinking** so your code in Part 2 and 3 is smoother, smarter, and better structured.
