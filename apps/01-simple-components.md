## Simple Components

In our previous lesson, we dove into the world of **React Native** and built our very first app together. In this recap, we’re revisiting the code you worked on—this isn’t a tutorial, but a **guided reflection** to reinforce what you’ve learned.

We’ll walk through what each part of the code does, highlighting the building blocks like:
- `View` as the main container for your content
- How buttons work and how user actions trigger changes
- The concept of **state** and how your app updates and re-renders
- How text is displayed and tied to the state using `{}`

The goal here is to solidify your understanding and boost your confidence in reading and explaining React Native code—because you’ve already done the hard part by building it. Let’s just make sure it all *clicks* (pun totally intended 😄). 

---
```tsx
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [count,setCount] = useState<number>(0);

  //const handlePress = () => {console.log('you clicked the button')};
  const handlePress = () => {setCount(count + 1)}; 

  return (
    <View style={styles.container}>
      <Text>COMPONENTS V1</Text>
      <Text>{count}</Text>
      <Button 
        title="CLICK HERE"
        onPress={handlePress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

```
---

## 🧱 Overview: What This App Does
This is a basic React Native application that:
- Displays a title (`COMPONENTS V1`)
- Shows a number on screen
- Increases the number each time a button is clicked

It's a great introduction to **components**, **state**, and **user interaction**.

---

## 🔍 Key Pieces Explained

### 1. `useState` Hook
```tsx
const [count, setCount] = useState<number>(0);
```
- Sets up a **state variable** called `count` with an initial value of `0`.
- `setCount` is the function used to change `count`.
- Any time `count` changes, the screen updates to show the new value.
- This is how the app "remembers" and updates the number.

---

### 2. `handlePress` Function
```tsx
const handlePress = () => { setCount(count + 1) };
```
- This function runs when the button is pressed.
- It increases `count` by `1` using `setCount`.
- The old line (`console.log(...)`) has been commented out, showing a different kind of response: updating UI instead of just printing to the console.

---

### 3. `<View>` Component
```tsx
<View style={styles.container}>...</View>
```
- Think of `<View>` as the main box that holds everything.
- It’s the **container** that organizes layout.
- The `style` applied here centers the content and gives it a background color.

---

### 4. `<Text>` Component
```tsx
<Text>COMPONENTS V1</Text>
<Text>{count}</Text>
```
- Displays text on the screen.
- The second `<Text>` uses `{count}` to show the **current value** of the `count` variable.
- The `{}` syntax lets you embed JavaScript values directly inside your JSX.

---

### 5. `<Button>` Component
```tsx
<Button 
  title="CLICK HERE"
  onPress={handlePress}
/>
```
- Shows a button labeled “CLICK HERE”.
- When clicked, it runs `handlePress`, which updates the count.

---

### 6. `StyleSheet` for Styling
```tsx
const styles = StyleSheet.create({ ... });
```
- Organizes styling like CSS, but in JavaScript.
- The style named `container` sets up layout rules:
  - `flex: 1`: fills the whole screen
  - `backgroundColor: '#fff'`: white background
  - `alignItems` & `justifyContent`: center the content both vertically and horizontally

---

## 🧠 What Should You Take Away
- **React Native apps are made of components** like `<View>`, `<Text>`, and `<Button>`.
- **State** (via `useState`) lets your app remember things and update the display.
- **Functions** handle user actions (like button presses).
- **Styles** define how things look.
- Everything you write inside `return(...)` is what shows up on the screen.

