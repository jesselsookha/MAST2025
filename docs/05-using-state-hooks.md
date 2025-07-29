# 📘 `05 - Using State Hooks`

---

## 🔹 Introduction

In mobile app development using React Native, your application often needs to **keep track of values** that change as a result of user interactions — such as text input, counters, toggles, or button presses. These changing values are known as **state**.

In traditional programming, we might store data in a regular variable. But in React Native, that approach won't work for dynamic user interfaces. Instead, we use the **`useState` Hook** to create what are called **state variables**.

This guide explains:

* What state is and why it matters
* What `useState` does and how it works
* The difference between normal variables and state variables
* TypeScript usage with `useState`
* Common patterns, mistakes, and interactive examples

---

## 🔸 What is State?

**State** is a special kind of variable that allows your app to **remember values between renders** and **automatically update the screen** when those values change.

### 🧠 Real-World Scenario:

Imagine a calculator app with a `total` display. Every time you press a button, the number on the screen must update. To do this, the app needs to:

* Track the current value (state)
* Change it when needed
* Re-draw the screen when it changes

In React Native, this is done using the `useState` Hook.

---

## 🔸 What is `useState`?

`useState` is a **Hook** provided by **React** (not React Native itself). A Hook lets us "hook into" React’s internal system to manage things like state, side effects, and more — using **functional components**.

### 📦 Basic Syntax:

```tsx
const [value, setValue] = useState(initialValue);
```

* `value`: The current value of your state
* `setValue`: A special function used to update the value
* `initialValue`: The default value your state should begin with (like `0`, `''`, `true`, etc.)

### ❗ Why Square Brackets?

The `useState()` Hook returns an **array** with two items:

1. The current state value
2. A function to update it

---

## 🔸 State vs Regular Variables

Let’s compare both approaches side by side with a working example and see why **regular variables don’t work** in a React Native app.

---

### 🧪 Example: Using State Correctly vs Using a Normal Variable

```tsx
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';

export default function App() {
  const [count1, setCount1] = useState<number>(0); // ✅ correct way to manage changing values

  const incrementCount = (): void => {
    setCount1(count1 + 1); // ✅ this will update the UI and re-render
  };

  // ❌ incorrect: this variable resets on every render and changes are not tracked
  // let count2: number = 0;
  // count2 = count2 - 1; // this has no connection to the UI lifecycle

  // ✅ correct way to manage a second counter using state
  const [count2, setCount2] = useState<number>(0);
  const decrementCount = (): void => {
    setCount2(count2 - 1); // ✅ correct use of state
  };

  return (
    <View style={styles.container}>
      <Text>USER INPUT APP</Text>

      <Text>{count1}</Text>
      <TouchableHighlight onPress={incrementCount}>
        <Text>Increment Count</Text>
      </TouchableHighlight>

      <Text>{count2}</Text>
      <TouchableHighlight onPress={decrementCount}>
        <Text>Decrement Count</Text>
      </TouchableHighlight>
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

### ⚠️ Why Doesn’t `let count2 = 0` Work?

In a regular console-based app, using a `let` variable works fine. But in React Native:

* Every time your app **re-renders**, it runs the component function **from the beginning**
* So `count2 = 0` gets reset **every time**
* React has **no idea** that something changed, so the screen doesn't update

✅ State variables **persist across renders** and trigger a re-draw when updated.

---

## 🔸 Typing with `useState` in TypeScript

Since your app is using TypeScript, you should declare the **type of state values**, especially as your codebase grows.

```tsx
const [name, setName] = useState<string>('');
const [count, setCount] = useState<number>(0);
const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
```

🧪 TypeScript ensures:

* The right value types are passed
* Fewer bugs during development
* Better auto-complete and documentation

---

## 🔸 Common Patterns

### ✅ Simple Counter:

```tsx
const [count, setCount] = useState<number>(0);

<Button title="Increase" onPress={() => setCount(count + 1)} />
```

### ✅ Toggling a Boolean:

```tsx
const [isVisible, setIsVisible] = useState<boolean>(true);

<Button title="Toggle" onPress={() => setIsVisible(!isVisible)} />
{isVisible && <Text>Hello!</Text>}
```

### ✅ Capturing Input:

```tsx
const [inputText, setInputText] = useState<string>('');

<TextInput
  placeholder="Type here"
  value={inputText}
  onChangeText={setInputText}
/>
```

---

## 🔸 Common Mistakes to Avoid

| ❌ Mistake                                         | 🛠 Why it’s Wrong                                  |
| ------------------------------------------------- | -------------------------------------------------- |
| Using a regular variable (`let`) instead of state | Changes don’t trigger UI updates                   |
| Directly changing the state value (`count++`)     | State is read-only — must use `setCount()`         |
| Updating state outside the component              | `useState` only works inside functional components |

---

## 🔁 Exercises

### 1. Echo Input Example

```tsx
const [name, setName] = useState('');

<TextInput onChangeText={setName} value={name} />
<Text>Hello {name}!</Text>
```

### 2. Show/Hide Text

```tsx
const [visible, setVisible] = useState(true);

<Button title="Toggle" onPress={() => setVisible(!visible)} />
{visible && <Text>You can see me!</Text>}
```

### 3. Switch Between Text

```tsx
const [mode, setMode] = useState('day');

<Button title="Switch Mode" onPress={() => setMode(mode === 'day' ? 'night' : 'day')} />
<Text>Current Mode: {mode}</Text>
```

---

## 🧭 Summary

| Concept           | Description                                    | Example                |
| ----------------- | ---------------------------------------------- | ---------------------- |
| `useState()`      | Creates a state variable                       | `useState<number>(0)`  |
| `setValue()`      | Updates the state and re-renders the component | `setCount(count + 1)`  |
| Regular Variables | Do not work across renders                     | `let count = 0` ❌      |
| TypeScript Use    | Enforces safety for strings, numbers, booleans | `useState<string>('')` |

---

## 🌟 Final Thought

Think of state like a whiteboard on a wall — every time you write something new, everyone sees it immediately. React Native apps work the same way: when **state changes**, the **UI updates automatically** to reflect the new data.

If your app needs to show or hide something, remember something a user typed, or update anything on screen — you’ll almost always use `useState`.

