# 📘 React Native Recap Guide  
### *Mobile App Scripting – Week’s Practical Summary*

---

## 🟢 1. Introduction: Seeing the Bigger Picture

Welcome back! This guide summarizes what we’ve covered in our recent practical sessions. Whether you’ve been following closely or feel a bit behind, this recap is designed to help you reconnect the dots.

We’ve explored how to:
- Set up and run React Native projects using Expo
- Understand the structure of the `App.tsx` file
- Use core components like `View`, `Text`, `TextInput`, and `Button`
- Style layouts with Flexbox
- Write interactive logic using TypeScript and arrow functions

Let’s walk through each part with examples and explanations.

---

## 🛠️ 2. Development Workflow: How We Build and Run Apps

### Tools We Use:
- **VS Code** – for writing and editing code
- **BlueStacks** – Android emulator to view your app
- **Terminal Commands** – to create and launch your project

### Setup Commands:
```bash
npx create-expo-app MyFirstApp -t expo-template-blank-typescript
cd MyFirstApp
npx expo start
```

### Live Editing:
Every time you save a file in VS Code, your app refreshes automatically in the emulator. This is called **Fast Refresh**, and it helps you test changes instantly.

---

## 📂 3. Understanding `App.tsx`: The Heart of Your App

Here’s a basic example of what your main file looks like:

```tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Text>Counter: {count}</Text>
      <Button title="Increase" onPress={() => setCount(count + 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
```

### Key Concepts:
- `import` brings in tools and components.
- `export default function App()` is the entry point of your app.
- Inside `App()`, you define **state**, logic, and what the user sees.
- The `return()` block contains **JSX**, which describes the UI.
- `StyleSheet.create()` defines your styles at the bottom.

---

## 🧱 4. Core Components: What They Do

React Native apps are built using components. Here are the essentials:

| Component         | Purpose                                      |
|------------------|----------------------------------------------|
| `View`           | Layout container (like `<div>` in web)       |
| `Text`           | Displays text                                |
| `TextInput`      | Lets users type                              |
| `Button`         | Triggers actions                             |
| `TouchableOpacity` / `TouchableHighlight` | Customizable buttons |
| `Image`          | Displays pictures                            |

### Bonus: `FlatList` for Dynamic Lists
```tsx
<FlatList
  data={['Apple', 'Banana', 'Cherry']}
  renderItem={({ item }) => <Text>{item}</Text>}
  keyExtractor={(item, index) => index.toString()}
/>
```

---

## 🎨 5. Styling with Flexbox: Controlling Layout

Flexbox helps you arrange components on the screen.

### Example: Horizontal Layout
```tsx
<View style={{ flexDirection: 'row' }}>
  <Text>One</Text>
  <Text>Two</Text>
  <Text>Three</Text>
</View>
```

### Example: Grid-Like Layout
```tsx
<View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
  <View style={{ width: 100, height: 100, backgroundColor: 'skyblue', margin: 5 }} />
  <View style={{ width: 100, height: 100, backgroundColor: 'pink', margin: 5 }} />
  <View style={{ width: 100, height: 100, backgroundColor: 'lightgreen', margin: 5 }} />
</View>
```

### Key Flexbox Properties:
- `flexDirection`: `'row'` or `'column'`
- `justifyContent`: aligns items on the **main axis**
- `alignItems`: aligns items on the **cross axis**
- `flexWrap`: allows items to wrap to the next line

---

## 🧮 6. Programming Examples: Logic in Action

### A. Counter
```tsx
const [count, setCount] = useState<number>(0);
<Button title="Add" onPress={() => setCount(count + 1)} />
<Text>Count: {count}</Text>
```

### B. Reading Input
```tsx
const [name, setName] = useState<string>("");
<TextInput placeholder="Enter your name" onChangeText={setName} />
<Text>Hello, {name}</Text>
```

### C. Simple Calculation
```tsx
const [num, setNum] = useState<string>("");
<Button title="Double" onPress={() => alert(Number(num) * 2)} />
<TextInput keyboardType="numeric" onChangeText={setNum} />
```

### D. Conditional Display (Ternary Operator)
```tsx
<Text>{count > 5 ? "High score!" : "Keep going..."}</Text>
```

---

## ➡️ 7. Arrow Functions: Writing Short Logic

Arrow functions are a **compact way** to write functions. They’re especially useful for event handlers like `onPress`.

### Example:
```tsx
<Button title="Say Hi" onPress={() => alert("Hello!")} />
```

### Why use them?
Because we want the function to run **only when clicked**, not immediately.

### With Parameters:
```tsx
const greet = (name: string) => {
  alert("Hello " + name);
};

<Button title="Greet" onPress={() => greet("Sam")} />
```

---

## 🔤 8. TypeScript & Data Types: Writing Safer Code

TypeScript helps you catch mistakes early by enforcing **data types**.

### Examples:
- `useState<number>(0)` → only numbers allowed
- Function with parameters:
  ```ts
  const add = (x: number, y: number): number => x + y;
  ```

### Why it matters:
- Prevents bugs
- Makes your code easier to understand
- Helps you work in teams and scale your app

---

## 🧠 Final Thoughts

React Native development is about **thinking in components**, **writing logic**, and **designing layouts**. Every piece of code connects to what the user sees and does.

If you missed the session, use this guide to catch up. If you attended, use it to reinforce what you learned. And if you’re still unsure—ask questions, experiment, and keep building.


---

# 📄 Full Demo Program – `App.tsx`
> *Note: this program does not implement a ScrollView. There are many components on display and when we had our online session, you would have noted that I had to 'zoom out' to view the entire app screen*

```tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
} from "react-native";

// Main entry point
export default function App() {
  // --- State Variables ---
  const [count, setCount] = useState<number>(0); // counter
  const [name, setName] = useState<string>(""); // text input
  const [num, setNum] = useState<string>(""); // number as text
  const [flag, setFlag] = useState<boolean>(false); // for decision example

  const [disp1, setDisp1] = useState<string>("");
  const [disp2, setDisp2] = useState<string>("");
  // --- Functions (arrow functions) ---
  const greet = (person: string): void => {
    setDisp1("Hello " + person);
  };

  const doubleValue = (): void => {
    const result = Number(num) * 2;
    setDisp2("Double of " + num + " is " + result);
  };

  // Student Question: Why do we use arrow functions here instead of writing "function greet()"?
  // Student Question: What happens if we forget ": string" for the parameter?

  // --- Rendered UI ---
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📱 React Native Recap Demo</Text>

      {/* Counter Example */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Counter Example</Text>
        <Text>Count: {count}</Text>
        <Button title="Increase" onPress={() => setCount(count + 1)} />
        {/* Student Question: What will happen if I press this button 3 times? */}
      </View>

      {/* TextInput Example */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>TextInput Example</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          onChangeText={setName}
        />
        <Text>Hello, {name}</Text>
        {/* Student Question: What happens if we delete all text in the box? */}
      </View>

      {/* Calculation Example */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Calculation Example</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter a number"
          keyboardType="numeric"
          onChangeText={setNum}
        />
        <Button title="Double It!" onPress={doubleValue} />
        <Text>{disp2}</Text>
        {/* Student Question: What will happen if I type 'abc' instead of a number? */}
      </View>

      {/* Decision / Ternary Example */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Decision Example</Text>
        <Button title="Toggle Flag" onPress={() => setFlag(!flag)} />
        <Text>{flag ? "✅ Flag is TRUE" : "❌ Flag is FALSE"}</Text>
        {/* Student Question: What will be shown when flag = false? */}
      </View>

      {/* TouchableOpacity Example */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>TouchableOpacity Example</Text>
        <TouchableOpacity
          style={styles.touchBtn}
          onPress={() => greet("Sam")}
        >
          <Text style={styles.touchBtnText}>Say Hello to Sam</Text>
        </TouchableOpacity>
        {/* Student Question: What is the difference between Button and TouchableOpacity? */}
        <Text>{disp1}</Text>
      </View>

      {/* FlatList Example */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>FlatList Example</Text>
        <FlatList
          data={["Apple", "Banana", "Cherry"]}
          renderItem={({ item }: {item: any}) => <Text style={styles.listItem}>{item}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
        {/* Student Question: What happens if we add 100 items to this list? */}
      </View>

      {/* Styling Examples */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Styling with Flexbox</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.box}>One</Text>
          <Text style={styles.box}>Two</Text>
          <Text style={styles.box}>Three</Text>
        </View>
        {/* Student Question: What if we change flexDirection to 'column'? */}

        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          <View style={[styles.gridBox, { backgroundColor: "skyblue" }]} />
          <View style={[styles.gridBox, { backgroundColor: "pink" }]} />
          <View style={[styles.gridBox, { backgroundColor: "lightgreen" }]} />
          <View style={[styles.gridBox, { backgroundColor: "orange" }]} />
        </View>
        {/* Student Question: Why do we need flexWrap here? */}
      </View>

      {/* Image Example */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Image Example</Text>
        <Image
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
          style={{ width: 50, height: 50 }}
        />
        {/* Student Question: What would happen if we remove width and height here? */}
      </View>
    </View>
  );
}

// --- Styles ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "flex-start",
    alignItems: "stretch",
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  section: {
    marginBottom: 25,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 8,
    marginBottom: 10,
    borderRadius: 5,
  },
  touchBtn: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 8,
  },
  touchBtnText: {
    color: "#fff",
    textAlign: "center",
  },
  listItem: {
    fontSize: 16,
    padding: 4,
  },
  box: {
    margin: 5,
    padding: 10,
    backgroundColor: "#eee",
  },
  gridBox: {
    width: 80,
    height: 80,
    margin: 5,
  },
});
```

---

