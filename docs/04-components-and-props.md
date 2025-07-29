## 📘 `04 - Components and Props`

### 🔹 Introduction

In React Native, **components** are the building blocks of your app’s UI. They represent buttons, text, containers, input fields, and more.

Each component has a set of **props** (short for “properties”) which act like configuration options. If you've used the **Attributes panel** in Android Studio, props serve a similar purpose — they help define how the component looks and behaves.

Props can be:

* **Compulsory**: Required for the component to work (e.g., `title` in a `Button`)
* **Optional**: Enhance appearance or interactivity (e.g., `color`, `onPress`, `numberOfLines`)

Throughout this guide, you’ll:

* Learn the role of key components
* Understand where and why they’re used
* Get **copy-paste examples** with guided walkthroughs
* Practice using props to change component behavior

---

### 🔸 `View` Component

#### 🧠 Purpose:

* Used as a **layout container**
* Similar to a `<div>` in HTML
* Organizes and groups other components

#### 🧱 Scenario:

You want to center content in the middle of the screen, or place multiple items in rows or columns.

#### ✅ Example:

```tsx
<View style={styles.box}>
  <Text>This is inside a View</Text>
</View>
```

#### 📌 Key Props:

| Prop            | Purpose                             |
| --------------- | ----------------------------------- |
| `style`         | Controls layout, spacing, alignment |
| `flexDirection` | Row/column layout                   |
| `padding`       | Adds inner spacing                  |

---

### 🔸 `Text` Component

#### 🧠 Purpose:

Displays text content — labels, titles, messages, etc.

#### 🧱 Scenario:

You want to show a heading or body text on a screen.

#### ✅ Example:

```tsx
<Text style={styles.heading}>Welcome to My App</Text>
```

#### 📌 Key Props:

| Prop            | Purpose                                           |
| --------------- | ------------------------------------------------- |
| `style`         | Font size, color, spacing                         |
| `numberOfLines` | Limits text to specific lines (adds "..." at end) |
| `ellipsizeMode` | Chooses how overflow text is clipped              |

---

### 🔸 `TextInput` Component

#### 🧠 Purpose:

Allows users to **enter or edit** text.

#### 🧱 Scenario:

You want the user to input their name, email, or any text.

#### ✅ Example:

```tsx
<TextInput
  placeholder="Enter your name"
  onChangeText={(text) => console.log(text)}
  style={styles.input}
/>
```

#### 📌 Key Props:

| Prop              | Purpose                                  |
| ----------------- | ---------------------------------------- |
| `placeholder`     | Greyed text shown when input is empty    |
| `value`           | Bound state value (used with `useState`) |
| `onChangeText`    | Updates value when user types            |
| `secureTextEntry` | Hides text for passwords                 |

---

### 🔸 `Button` Component

#### 🧠 Purpose:

Creates a simple button that performs an action when tapped.

#### 🧱 Scenario:

You want to submit a form or trigger an event.

#### ✅ Example:

```tsx
<Button title="Submit" onPress={() => alert("Submitted!")} />
```

#### 📌 Key Props:

| Prop      | Purpose                                  |
| --------- | ---------------------------------------- |
| `title`   | Text shown on the button                 |
| `onPress` | Function triggered on click              |
| `color`   | Changes button text color (Android only) |

---

### 🔸 `TouchableOpacity` Component

#### 🧠 Purpose:

A button alternative with **custom styles and fade feedback** when tapped.

#### 🧱 Scenario:

You want a styled button, image button, or any touchable item.

#### ✅ Example:

```tsx
<TouchableOpacity style={styles.customButton} onPress={() => alert("Pressed!")}>
  <Text style={styles.buttonText}>Tap Me</Text>
</TouchableOpacity>
```

#### 📌 Key Props:

| Prop            | Purpose                       |
| --------------- | ----------------------------- |
| `onPress`       | Triggered when pressed        |
| `style`         | Custom layout, color, padding |
| `activeOpacity` | Controls tap opacity feedback |

---

### 🔸 `TouchableHighlight` Component

#### 🧠 Purpose:

Similar to `TouchableOpacity`, but uses a **background color highlight** on press.

#### ✅ Example:

```tsx
<TouchableHighlight
  underlayColor="#ddd"
  onPress={() => alert("Highlight Pressed!")}>
  <Text style={styles.buttonText}>Highlight Button</Text>
</TouchableHighlight>
```

#### 📌 Key Props:

| Prop            | Purpose                      |
| --------------- | ---------------------------- |
| `underlayColor` | Background shown when tapped |
| `onPress`       | Tap event                    |

---

### 🔸 `Image` Component

#### 🧠 Purpose:

Displays a static image (from local or web source).

#### 🧱 Scenario:

You want to add a logo or profile picture.

#### ✅ Example:

```tsx
<Image 
  source={require('./assets/logo.png')} 
  style={{ width: 100, height: 100 }} 
/>
```

#### 📌 Key Props:

| Prop     | Purpose                             |
| -------- | ----------------------------------- |
| `source` | Image location (`require()` or URL) |
| `style`  | Width, height, border, resize       |

---

### 🔸 `ImageBackground` Component

#### 🧠 Purpose:

Sets a background image while allowing other components to sit “on top”.

#### 🧱 Scenario:

You want a screen with a background image and text/buttons layered over it.

#### ✅ Example:

```tsx
<ImageBackground 
  source={require('./assets/bg.jpg')} 
  style={styles.background}>
  <Text style={styles.overlayText}>Overlay Text</Text>
</ImageBackground>
```

#### 📌 Key Props:

| Prop         | Purpose                 |
| ------------ | ----------------------- |
| `source`     | Image background file   |
| `style`      | Size of image container |
| `resizeMode` | How image scales        |

---

### 🔸 `StyleSheet` Recap

#### 🧠 Purpose:

Organizes and defines styles like a CSS file.

#### ✅ Example:

```tsx
const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
```

---

## 🔁 Hands-On Practice (Copy & Paste Code Blocks)

> 📌 **Try this simple app** using multiple components:

```tsx
import { useState } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <Image source={require('./assets/avatar.png')} style={styles.image} />
      <Text style={styles.title}>Welcome!</Text>
      <TextInput 
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <Text>Hello, {name} 👋</Text>
      <Button title="Press me" onPress={() => alert(`Hi ${name || 'stranger'}!`)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginVertical: 12,
    width: '80%',
  },
});
```

---

## ✅ Summary

| Component          | Used For                  | Must-Know Prop           |
| ------------------ | ------------------------- | ------------------------ |
| `View`             | Layout/container          | `style`                  |
| `Text`             | Displaying content        | `style`, `numberOfLines` |
| `TextInput`        | Capturing input           | `placeholder`, `value`   |
| `Button`           | Basic interactions        | `title`, `onPress`       |
| `TouchableOpacity` | Custom pressable elements | `style`, `onPress`       |
| `Image`            | Displaying static images  | `source`, `style`        |
| `ImageBackground`  | Background visuals        | `source`, `resizeMode`   |
| `StyleSheet`       | Managing styling          | `create()`               |

