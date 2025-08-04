# 🧑‍💻 Build a React Native Profile Card

We'll go step-by-step, teaching layout, styling, and component reusability.

---

## 🔹 **Step 1: Project Setup**

> ✅ Create your project and begin with the basic container setup.

```tsx
import { Text, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
```

---

## 🔹 **Step 2: Basic Layout with Text Components**

> ✅ Add name and description text elements.

```tsx
import { Text, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Your Name</Text>
      <Text style={styles.description}>
        Mobile Application Developer passionate about programming
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginTop: 4,
  },
});
```

---

## 🔹 **Step 3: Add Profile Image**

> ✅ Introduce an image using `Image` component and improve layout.

```tsx
import { Image, Text, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('./assets/snack-icon.png')}
      />
      <Text style={styles.name}>Your Name</Text>
      <Text style={styles.description}>
        Mobile Application Developer passionate about programming
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginTop: 4,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
});
```

---

## 🔹 **Step 4: Style with a Card Layout**

> ✅ Add a card container for clean UI.

```tsx
import { Image, Text, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={require('./assets/snack-icon.png')}
        />
        <Text style={styles.name}>Your Name</Text>
        <Text style={styles.description}>
          Mobile Application Developer passionate about programming
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  card: {
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginTop: 4,
    textAlign: 'center',
  },
});
```

---

## 🔹 **Step 5: Create a Reusable `ProfileCard` Component**  

### 🧠 Concept: Componentization with Props in TypeScript

In Step 4, we created a great-looking profile card. But if we want *more than one card*, our code quickly becomes repetitive:

```tsx
<View style={styles.card}>
  <Image source={...} />
  <Text>...</Text>
  <Text>...</Text>
</View>
```

We’d need to **copy and paste this entire block** and just change the names and images. That works, but:

- It’s time-consuming 💭  
- It’s hard to maintain 💥  
- It’s not elegant 🧼

Instead, we can create **our own component**, just like how we use `<View>`, `<Text>`, and `<Image>`! This makes our code **modular**, **readable**, and **scalable**.

---

### 🔧 What Is a Component?

A **component** is just a function that returns JSX.

Think of it like designing your own custom Lego block 🧱:
- You choose what your block looks like (`View`, `Text`, `Image`)
- You tell others how to use it (`ProfileCard`)
- You give it instructions via **props** (like giving Lego stickers or colors)

---

### ✅ Code Example: Define Props and Use Destructuring

```tsx
type Props = {
  image: ImageSourcePropType;
  fullName: string;
  devDescription: string;
};

function ProfileCard({ image, fullName, devDescription }: Props) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <Text style={styles.name}>{fullName}</Text>
      <Text style={styles.description}>{devDescription}</Text>
    </View>
  );
}
```

Think of destructuring as “opening a gift box” and pulling out the items you need. When you write:

```tsx
function ProfileCard({ image, fullName, devDescription }: Props)
```

You’re saying:
> “Give me a single `Props` object, and I’ll pull out `image`, `fullName`, and `devDescription` so I can use them directly.”

This is your Lego blueprint. You define what pieces you need (`image`, `fullName`, etc.) and the structure that makes up your card.

Then, inside `App`, you just say:

```tsx
<ProfileCard
  image={require('./assets/snack-icon.png')}
  fullName="Your Name"
  devDescription="Your Description"
/>
```

Just like that, you're building a custom UI block with your own component!

---

### 👥 Why This Is Helpful (Especially With Multiple Cards)

Imagine you want to show three people:

```tsx
<ProfileCard
  image={require('./assets/jax.png')}
  fullName="Jax Shepard"
  devDescription="iOS Developer from Johannesburg"
/>

<ProfileCard
  image={require('./assets/jada.png')}
  fullName="Jada Lynch"
  devDescription="Android Developer exploring AI"
/>

<ProfileCard
  image={require('./assets/joey.png')}
  fullName="Joey Styles"
  devDescription="React Native Developer and mentor"
/>
```

You didn’t have to **retype the layout** every time—just pass new props. Clean, beautiful, and efficient.

---

### 📂 Preview to the Next Stage: Splitting the Component Into Its Own File

Right now, we’re keeping the `ProfileCard` in the same file so it’s easy to follow along. But in future projects, we’ll:

- Move `ProfileCard` to a separate file (e.g., `ProfileCard.tsx`)
- Import it like any other component

This means we can reuse it across different screens or apps without rewriting it. That’s real power. 🔋

---
### Complete Code 

```tsx
import React from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';

// Define a Props type for clarity and safety
type Props = {
  image: ImageSourcePropType;
  fullName: string;
  devDescription: string;
};

// Receive props and destructure them
function ProfileCard({ image, fullName, devDescription }: Props) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <Text style={styles.name}>{fullName}</Text>
      <Text style={styles.description}>{devDescription}</Text>
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <ProfileCard
        image={require('./assets/snack-icon.png')}
        fullName="Your Name"
        devDescription="Mobile Application Developer passionate about programming"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  card: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
});
```
