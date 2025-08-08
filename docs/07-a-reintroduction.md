# 📱 React Native with TypeScript: A Beginner’s Guide for First-Year Developers

Because classes have begun, this guide serves as a **reintroduction** for students who mentioned they are feeling lost or left behind. It is designed to walk you through the **fundamentals of building mobile apps using React Native and TypeScript** in our current setup:

* **Visual Studio Code** is our primary code editor
* We develop inside a **VM** (Virtual Machine) available to students and lecturers
* **BlueStacks** is used as our Android emulator
* **Expo Go** is used to run React Native apps inside the VM or on physical devices
* I also use **Expo Snack** ([https://snack.expo.dev/](https://snack.expo.dev/)) during class for faster feedback without needing to wait for the VM

Let’s begin your reintroduction step-by-step.

---

## 1. 🚀 What Is React Native?

React Native is a framework that allows you to build mobile apps using **JavaScript** and **React**. Instead of writing different apps for Android (Java/Kotlin) and iOS (Swift/Objective-C), React Native lets you **write one codebase** that works on both platforms.

> 📌 Think of React Native as a *translator*—it takes your JavaScript code and converts it into something the phone’s operating system understands.

### React Native vs Traditional Development:

| Traditional            | React Native               |
| ---------------------- | -------------------------- |
| Android: Java/Kotlin   | Cross-platform: JavaScript |
| iOS: Swift/Objective-C | One shared codebase        |
| Native UI              | Declarative components     |

### Core Concepts:

* **Components** are the building blocks of your app.
* **JSX** lets you define UI using an HTML-like syntax in JavaScript.
* **State** and **props** help manage app behavior and UI updates.

---

## 2. 🧠 Why TypeScript?

TypeScript is a **typed superset of JavaScript**. It makes your code **safer and easier to understand**, especially when building medium or large projects.

### Benefits:

* Detects bugs before running the app
* Helps you define **what kind of data** a variable or function should work with
* Improves collaboration by making intentions clearer

### Example:

```ts
let taskName: string = "Submit assignment";
let isCompleted: boolean = false;
```

> 🧠 As a developer, you’ll learn to *think in types*—clarifying the shape and meaning of the data your app is working with.

---

## 3. 🧩 JSX – Writing UI Inside Code

JSX stands for **JavaScript XML**. It allows you to write what the user sees (buttons, text, etc.) **directly inside your JavaScript code**.

It looks like HTML but uses **React Native components** like `<View>` and `<Text>`.

### Basic Example:

```tsx
function App() {
  return (
    <View>
      <Text>Hello, world!</Text>
    </View>
  );
}
```

### Alternate Version Using Arrow Function:

```tsx
const App = () => {
  return <Text>Hello, world!</Text>;
};
```

### JSX with Variables:

```tsx
const name = "Joshua";

function App() {
  return <Text>Hello, {name}!</Text>;
}
```

### JSX with Function Output:

```tsx
function getGreeting(name: string) {
  return `Welcome, ${name}`;
}

function App() {
  return <Text>{getGreeting("Jessica")}</Text>;
}
```

> JSX allows **layout and logic to live together**, which makes your UI dynamic and interactive.

---

## 4. 🏗️ The Structure of a React Native App

Every React Native app starts with a function named `App`. It’s like the `main()` function in other programming languages or the `onCreate()` method in Android.

```tsx
import { View, Text } from 'react-native';

export default function App() {
  return (
    <View>
      <Text>Welcome to the Reintroduction of React Native Apps</Text>
    </View>
  );
}
```

### Alternate Version:

```tsx
import { View, Text } from 'react-native';

function App() {
  return (
    <View>
      <Text>Welcome to the Reintroduction of React Native Apps</Text>
    </View>
  );
}

export default App;
```

### Key Points:

* `App` is a **functional component**
* `export default App` tells React Native what to run first
* JSX inside the return block determines what is shown on screen

---

## 5. 📦 Setting Up with Expo

Expo is a **toolkit and platform** for building React Native apps quickly. It simplifies development, testing, and building apps.

### To create a new project:

```bash
npx create-expo-app -t expo-template-blank-typescript
cd yourAppName
npx expo start
```

### Ways to Run Your App:

* **BlueStacks Emulator** (connected via ADB)
* **Expo Go App** on a real device (Android/iOS)
* **Snack Editor** in the browser (ideal for quick demos in class)

---

## 6. 🧱 Components – The Building Blocks of Your App

Everything in React Native is a **component**—a small, reusable piece of UI.

### Core Components:

#### `<View>` – Container

* Similar to `<div>` in HTML
* Can hold other views or components
* Supports layout via Flexbox

#### `<Text>` – Displays Text

```tsx
<Text style={styles.title}>
  This is a label - a TextView
</Text>
```

#### `<Button>` – Clickable Button

```tsx
<Button
  title="Press me"
  onPress={() => Alert.alert('Simple Button pressed')}
/>
```

* Minimal styling options
* Props:

  * `title`: The label text
  * `onPress`: What happens when clicked

> For more custom buttons, consider `TouchableOpacity`, `TouchableHighlight`, or `Pressable`.

#### `<TextInput>` – Input Field

* Used for entering user data
* Props include:

  * `placeholder`
  * `keyboardType`
  * `value`
  * `onChangeText`

```tsx
<TextInput
  placeholder="Enter task"
  value={task}
  onChangeText={setTask}
  style={{ borderWidth: 1 }}
/>
```

#### `StyleSheet` – Styling Components

```tsx
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20 }
});
```

* Organizes styles in one place
* Offers **type safety** with `StyleSheet.create()`

#### Special Styling Example – Hairline Width:

```tsx
const styles = StyleSheet.create({
  row: {
    padding: 4,
    borderBottomColor: 'red',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
```

---

## 7. 🔄 Functions, Props, and State – Making Apps Do More

At first, everything lives inside the `App` function. But as your app grows, you'll break it into smaller **reusable components** using **functions**, control them using **props**, and track changes using **state**.

---

### 7.1 🧠 State Example – Counting Reminders

```tsx
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const App = () => {
  const [reminderCount, setReminderCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text>You’ve created {reminderCount} reminders</Text>
      <Button title="Add Reminder" onPress={() => setReminderCount(reminderCount + 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});

export default App;
```

---

### 7.2 🧩 Breaking the App Into Components

Instead of putting everything in `App`, we can move some logic into separate **functional components** and pass data using **props**.

```tsx
type ReminderProps = {
  title: string;
};

const ReminderItem = ({ title }: ReminderProps) => {
  return (
    <View style={{ margin: 10 }}>
      <Text>🔔 {title}</Text>
    </View>
  );
};

const App = () => {
  return (
    <View>
      <ReminderItem title="Buy groceries" />
      <ReminderItem title="Study React Native" />
    </View>
  );
};
```

🧠 **Key Concept**:

* A **component** like `ReminderItem` becomes **reusable**
* We can pass different data to it via **props**

---

### 7.3 🔁 Combining Interactivity + Components

Let’s now make the app interactive by **adding a counter** and keeping it inside a component.

```tsx
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function App() {
  const [reminderCount, setReminderCount] = useState(0);

  const handleAddReminder = () => {
    setReminderCount(reminderCount + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Reminders: {reminderCount}</Text>
      <Button title="Add Reminder" onPress={handleAddReminder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20, marginBottom: 10 }
});

export default App;
```

#### 🔍 Line-by-Line Breakdown:

* `useState(0)` creates a **state variable** called `reminderCount`
* `setReminderCount()` updates it
* When state updates, the app **re-renders** to show the new count

---

## 8. 🧮 Props – Customizing Components

**Props** allow components to accept input values and behave differently based on the data passed in.

### Example with Props:

```tsx
function Greeting({ name }: { name: string }) {
  return <Text>Hello, {name}!</Text>;
}

function App() {
  return (
    <View>
      <Greeting name="Alex" />
      <Greeting name="Jordan" />
    </View>
  );
}
```

📌 Each `Greeting` gets a different `name`, showing how components become **modular** and **reusable**.

### 💬 Why Use Props?

* Reuse one component for many use-cases
* Keep logic and presentation **cleanly separated**
* Make apps easier to scale

---

## 9. 🧠 State – Memory for Your App

**State** stores memory for your app. It tracks things like user input, button clicks, toggles, etc.

You create state using the **`useState`** Hook.

```tsx
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

function App() {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>You clicked {count} times</Text>
      <Button title="Click me!" onPress={() => setCount(count + 1)} />
    </View>
  );
}
```

> State allows your app to **change over time** and react to user interaction.

---

## 10. 🕹️ Events – Making Things Interactive

React Native uses **event handlers** like `onPress` to respond to actions.

### Simple Alert Example:

```tsx
function App() {
  const showMessage = () => {
    alert("Reminder set!");
  };

  return (
    <Button title="Set Reminder" onPress={showMessage} />
  );
}
```

### Arrow Function vs Normal Function:

```ts
// Arrow function (common in React apps)
const showMessage = () => {
  alert("Reminder set!");
};

// Regular function
function showMessage() {
  alert("Reminder set!");
}
```

---

## 🏹 Understanding Arrow Functions (Anonymous Functions)

### 🤔 What Is an Arrow Function?

An **arrow function** is a shorter way to write a function in JavaScript (and TypeScript). It’s especially useful in React Native when you want to write **inline functions** for things like event handling (`onPress`, `onChangeText`, etc.).

Arrow functions are often called **anonymous functions**, because they don’t have a "name" like traditional functions.

---

### 🆚 Arrow Function vs Regular Function

Let’s compare the two styles.

#### 🔹 Traditional Function:

```ts
function greet(name: string) {
  return "Hello, " + name;
}
```

#### 🔹 Arrow Function:

```ts
const greet = (name: string) => {
  return "Hello, " + name;
};
```

Both do the **same thing**.

---

### 📌 Syntax Breakdown of Arrow Functions

#### 1. **With Parameters**

```ts
const sayHello = (name: string) => {
  return `Hello, ${name}`;
};
```

#### 2. **No Parameters**

```ts
const sayHi = () => {
  return "Hi there!";
};
```

#### 3. **Single Expression (Return Implicitly)**

When your function just returns a value and doesn’t need extra logic, you can make it even shorter:

```ts
const double = (num: number) => num * 2;
```

This is the **same as**:

```ts
const double = (num: number) => {
  return num * 2;
};
```

---

### 💡 Why Use Arrow Functions in React Native?

1. ✅ **Shorter syntax** – less typing, especially inside JSX
2. ✅ **Inline usage** – define a function *inside* JSX
3. ✅ **Clarity** – you know it won’t accidentally be hoisted or renamed

---

### 📱 Arrow Functions in React Native: Examples

#### 🔘 Button Press:

```tsx
<Button title="Click me" onPress={() => alert('Button clicked')} />
```

Here, we’ve passed an **anonymous arrow function** to `onPress`. It doesn’t have a name — it just does something when clicked.

---

### 🧪 Arrow Function With Parameters in JSX

Sometimes you want to pass in a **parameter** when the button is clicked:

```tsx
const showMessage = (name: string) => {
  alert(`Hello, ${name}`);
};

<Button title="Greet" onPress={() => showMessage("Aisha")} />
```

Even though `showMessage` is a named function, we're still using an **arrow function inside `onPress`** to pass the parameter `Aisha`.

> ✅ Without the arrow function, `showMessage("Aisha")` would run **immediately** when the app renders — which is not what we want!

---

### 🧠 Key Points 

| Concept                       | Example                                      | Explanation            |
| ----------------------------- | -------------------------------------------- | ---------------------- |
| Arrow Function (no parameter) | `() => alert("Hi")`                          | Function with no input |
| With parameter                | `(name) => alert(name)`                      | Accepts an argument    |
| Returns a value               | `() => 2 + 2`                                | Returns 4              |
| Used inline                   | `<Button onPress={() => alert("Pressed")}/>` | React Native usage     |

---

### 🧪 Practice Ideas

Create small arrow functions:

* That **adds two numbers**
* That **reverses a string**
* That **logs input to the console**
* That **alerts a custom message** using a parameter

Example:

```ts
const showScore = (score: number) => alert(`Your score is ${score}`);
```

---

## 11. 📝 Text Input – Letting Users Type

Use `<TextInput>` to capture input like names, tasks, or numbers.

### Example – Typing a Task:

```tsx
import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';

function App() {
  const [task, setTask] = useState('');

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Enter your task"
        onChangeText={newText => setTask(newText)}
        value={task}
        style={{ borderWidth: 1, padding: 10 }}
      />
      <Text>Task Preview: {task}</Text>
    </View>
  );
}
```

---

### Combined Examples:

```tsx
<TextInput
  style={styles.input}
  onChangeText={onChangeText}
  value={text}
/>

<TextInput
  style={styles.input}
  onChangeText={onChangeNumber}
  value={number}
  placeholder="useless placeholder"
  keyboardType="numeric"
/>

<TextInput
  editable
  multiline
  numberOfLines={4}
  maxLength={40}
  onChangeText={text => onChangeText(text)}
  value={value}
  style={styles.textInput}
/>
```

---

### Practice App – Reverse a Student’s Name

```tsx
import React, { useState } from 'react';
import { TextInput, Text, View, StyleSheet } from 'react-native';

const NameReverserApp = () => {
  const [studentName, setStudentName] = useState('');

  const getReversedName = (name: string) => {
    return name.split('').reverse().join('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        onChangeText={text => setStudentName(text)}
        defaultValue={studentName}
      />
      <Text style={styles.output}>Reversed: {getReversedName(studentName)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 8 },
  output: { marginTop: 20, fontSize: 24 },
});

export default NameReverserApp;
```
---

## 12. ⚡ Fast Refresh – Instant Feedback While Coding

**Fast Refresh** in React Native means your app automatically reloads as soon as you save your code — and it tries to preserve your app’s **state** (like form inputs or counters).

### 🪄 How It Works:

* You edit your code
* You save the file
* The app **updates immediately** on screen

### 🧰 Useful Behavior:

* If there's a **syntax error**, you’ll get a red screen with a helpful message
* If there's a **runtime error** (e.g., calling a missing function), you'll also see an error screen
* You can use `// @refresh reset` to **force a full reload**, including resetting state

---

### 🛠 When Fast Refresh Gets Stuck

Sometimes it doesn't reload properly. You can:

* Press `r` in the terminal where Expo is running
* Tap **Reload** in the Expo Go app

> ✅ Fast Refresh helps you **build faster** and **test changes instantly**, especially when experimenting.

---

## 13. 🧭 How to Think Like a Developer

Learning React Native is not just about memorizing syntax — it’s about learning to think in **small, logical steps**.

---

### 🪜 Break Problems Into Tiny Pieces

Instead of saying:

> “Build a reminder app”

Break it into:

* Can I show a welcome message?
* Can I capture text from the user?
* Can I display that input?
* Can I reset the form after adding a reminder?

---

### 🔁 Iterate in Cycles

**Start simple → test it → improve → repeat**

You don’t have to write everything at once. You can test ideas quickly thanks to **Fast Refresh**.

---

### 🧱 Think in Components

If you find yourself repeating code (like a task item, or a user card), **make a component**.

Good examples:

* `ReminderItem`
* `StudentCard`
* `Greeting`
* `CounterButton`

---

### 💬 Ask Yourself:

* What does the user see on screen?
* What should they be able to *do*?
* What data powers the experience?
* Where should that data live? (state, props, or external)

---

## 14. ✅ Recap – What You’ve Learned So Far

Here’s a quick recap of the **skills covered**:

| Section                 | Key Concepts                              |
| ----------------------- | ----------------------------------------- |
| **React Native**        | One codebase for iOS and Android          |
| **TypeScript**          | Safer coding with types                   |
| **JSX**                 | UI inside your code                       |
| **App Structure**       | Functional components, `App` is the entry |
| **Expo**                | Easy setup and fast development           |
| **Components**          | Reusable UI pieces                        |
| **Props**               | Passing data into components              |
| **State**               | Memory inside components                  |
| **Events**              | Handling user interaction                 |
| **TextInput**           | Getting user input                        |
| **Arrow Functions**     | Short syntax for functions                |
| **Fast Refresh**        | Instant reloading after changes           |
| **Thinking Like a Dev** | Step-by-step problem solving              |

---

## 15. 🧰 Tools & Resources for Beginners

### 🛠️ Recommended Tools:

* **VS Code** – lightweight, fast editor
* **Expo Go** – test apps instantly on your phone
* **Snack** – [https://snack.expo.dev](https://snack.expo.dev) for browser-based coding
* **React Native Docs** – [https://reactnative.dev/docs/getting-started](https://reactnative.dev/docs/getting-started)
* **TypeScript Docs** – [https://www.typescriptlang.org/docs/](https://www.typescriptlang.org/docs/)

### 🧑‍💻 Useful VS Code Extensions:

* **Prettier** – Automatically format your code
* **ESLint** – Help catch common coding mistakes
* **React Native Tools** – Add autocomplete and debugger support

---

## 📌 Final Words

🎓 **Learning to build apps is about being curious, testing, and growing confidence.** You now have the building blocks to create mobile apps with code.

* Start **small** — then improve step-by-step.
* Use `Snack` to try new things quickly.
* Ask questions like a developer: “What’s the input?”, “What’s the output?”, “What should this do?”

You’re not just writing code — you’re building **solutions**.
