### 📄 `03-understanding-app-tsx.md`

#### 🔹 Overview

Understanding how the `App.tsx` file works is fundamental to building apps with React Native. This document explains the foundational structure of the file, and introduces key components and concepts: **JSX**, **component hierarchy**, **styling**, and **hooks**.

---

### 🔸 Section 1: Understanding the `import` Statements

In React Native, you must import any components or libraries you wish to use.

```tsx
import { StyleSheet, Text, View } from 'react-native';
```

#### 🧠 Why this matters:

* `import` brings in specific components or utilities from external packages.
* React Native provides core components like `Text`, `View`, and `StyleSheet` out of the box.

| Component    | Description                             |
| ------------ | --------------------------------------- |
| `View`       | A container or layout block             |
| `Text`       | Displays text content                   |
| `StyleSheet` | Enables styling using a CSS-like syntax |

---

### 🔸 Section 2: Understanding the `App()` Function

```tsx
export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        Hello World
      </Text>
    </View>
  );
}
```

#### 🔍 Key Concepts:

* This is a **React component**, defined as a JavaScript function.
* The function **returns JSX** – this describes the visual UI of the screen.
* `export default` makes this component accessible to the application root.

#### 🧠 JSX Explained:

JSX (JavaScript XML) is a syntax extension that allows us to write HTML-like code in JavaScript. It's not HTML, but looks similar:

* Uses self-closing tags: `<Text />`
* Uses `camelCase` for attributes: `backgroundColor`, not `background-color`
* Must return a **single root element** (usually a `<View>` container)

---

### 🔸 Section 3: Styling with `StyleSheet.create()`

```tsx
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
```

#### 💡 Why use `StyleSheet.create()`?

* Defines reusable, consistent styles
* Helps with code readability and separation of concerns
* Provides performance optimization (compared to inline styles)

Each style key (like `container`) is referenced using `styles.container` in the JSX.

---

### 🔸 Section 4: Component Hierarchy and Layout

In the code:

```tsx
<View style={styles.container}>
  <Text>Hello World</Text>
</View>
```

* `<View>` is a container, like a `<div>` in HTML.
* It holds all visible components, such as `<Text>`.
* `styles.container` acts like an ID or class for styling purposes.

#### 🧱 Hierarchy Tips:

* You can nest multiple `<View>` elements to build structured layouts.
* For example:

  ```tsx
  <View>
    <View>...</View>
    <View>...</View>
  </View>
  ```

---

### 🔹 Section 5: Understanding Core Components

#### 🟩 `<View>`

* A container for layout
* Can hold other components
* Key attributes:

  * `style`
  * `flexDirection`, `justifyContent`, `alignItems` (layout)

#### 🟦 `<Text>`

* Used to display text
* Must be wrapped inside a `<View>`
* Key attributes:

  * `style`
  * `numberOfLines`
  * `ellipsizeMode`

#### 🟨 `StyleSheet`

* Not a visual component
* Used for defining and organizing styles
* Created with `StyleSheet.create({})`

---

## 🔁 Enhanced Example: User Input App

```tsx
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [userInput, setUserInput] = useState('');
  // const [userInput, setUserInput] = useState<string>(''); // TypeScript version

  const handlePress = () => {
    console.log(userInput);
  };

  return (
    <View style={styles.container}>
      <Text>USER INPUT APP</Text>
      <TextInput 
        placeholder="Enter your text here"
        onChangeText={setUserInput}
        value={userInput}
      />
      <Text>{userInput}</Text>
      <Button
        title="Click Here"
        onPress={handlePress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
```

---

### 🔸 New Concepts Introduced

#### 🧠 React Hooks

React Hooks are special functions used to manage state and lifecycle logic in functional components.

##### 🧩 `useState` Hook

```tsx
const [userInput, setUserInput] = useState('');
```

* **`userInput`** is a state variable (like a data container).
* **`setUserInput`** is a function that updates the value.
* **`useState('')`** initializes the variable as an empty string.

✅ TypeScript version (recommended):

```tsx
const [userInput, setUserInput] = useState<string>('');
```

This ensures type safety. Without `<string>`, TypeScript infers the type automatically, which works for simple apps.

---

### 🔸 New Components Introduced

#### 🟧 `<TextInput>`

* Allows user to enter text
* Attributes:

  * `placeholder`: greyed-out text shown before input
  * `onChangeText`: function to handle input change
  * `value`: the bound state variable

#### 🟥 `<Button>`

* A clickable button
* Attributes:

  * `title`: text on the button
  * `onPress`: function called when pressed

---

### ✅ Summary

| Concept             | Description                                       |
| ------------------- | ------------------------------------------------- |
| `import`            | Brings in required tools and components           |
| `function App()`    | Main component, returns JSX UI                    |
| `JSX`               | HTML-like syntax for defining components visually |
| `StyleSheet.create` | Method to create CSS-like styles for components   |
| `useState` Hook     | Stores and updates state in functional components |
| `<View>`            | Layout container                                  |
| `<Text>`            | Displays text                                     |
| `<TextInput>`       | Captures user input                               |
| `<Button>`          | Triggers actions                                  |
