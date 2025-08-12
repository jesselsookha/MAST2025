## 📘 React Native Navigation with TypeScript: A Beginner’s Guide

### 🧭 What Is Navigation in React Native?

Navigation allows users to move between different screens in a mobile app. In React Native, this is typically handled using the **React Navigation** library, which provides a flexible and powerful way to manage screen transitions.

There are different types of navigators:
- **Stack Navigator**: Screens are stacked on top of each other (like a deck of cards).
- **Tab Navigator**: Screens are organized in tabs. (Bottom Tab & Material Top Tab)
- **Drawer Navigator**: A side menu slides in to reveal navigation options.

In this guide, we focus on the **Native Stack Navigator**, which uses native APIs for smooth transitions and performance.

·····································································································································································································································································

## 🛠️ Project Setup and Installation

### Step-by-Step Setup

1. **Create a new project folder**  
   Inside `Documents/MAST`, create a parent folder named as we have done in our workflow for organizing projects.

2. **Open the folder in VS Code**  
   Use `File > Open Folder` and select the `parent` folder.

3. **Open a new terminal**  
   `Terminal > New Terminal`

4. **Create a blank TypeScript Expo app**  
   ```bash
   npx create-expo-app -t expo-template-blank-typescript
   ```
   Name the app `nav1`.

5. **Navigate into the project folder**  
   ```bash
   cd nav1
   ls  # Verify you're in the correct folder
   ```

6. **Install navigation dependencies**  
   ```bash
   npm install @react-navigation/native
   npx expo install react-native-screens react-native-safe-area-context
   npm install @react-navigation/native-stack
   ```

> ⚠️ **Important Tip**: Don’t keep `package.json` open while installing dependencies. If you save the file manually during installation, you might overwrite the automatic updates.

·····································································································································································································································································

## 🧠 Understanding the Theory Behind Navigation

### 🔹 NavigationContainer
Wraps your entire app and provides navigation context. Think of it as the root of your navigation tree.

### 🔹 createNativeStackNavigator
Creates a stack-based navigation system. Each screen is placed on top of the previous one, allowing users to go back.

### 🔹 TypeScript and Route Definitions

```ts
type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Details: undefined;
  Settings: undefined;
};
```

- `type`: Defines a custom type in TypeScript.
- Each key (`Home`, `Profile`, etc.) represents a screen name.
- `undefined` means the screen doesn’t expect any parameters.
- You can also define screens that _do_ expect parameters:
  ```ts
  Profile: { userId: string };
  Feed: { sort: 'latest' | 'top' } | undefined;
  ```

This type is passed to the navigator to enable **type checking** and **IntelliSense**.

·····································································································································································································································································

## 📦 Full Code Example with Explanation

Here’s the complete code, enhanced with styling and comments:

```tsx
import * as React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Define route names and their parameters
type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Details: undefined;
  Settings: undefined;
};

// Create the stack navigator
const Stack = createNativeStackNavigator<RootStackParamList>();

// Home Screen
function HomeScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏠 Home Screen</Text>
      <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
}

// Profile Screen
function ProfileScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>👤 Profile Screen</Text>
      <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
    </View>
  );
}

// Details Screen
function DetailsScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📄 Details Screen</Text>
      <Text style={styles.subtitle}>Use the back arrow to return (Top left - in navigation header)</Text>
      <Button title="Go to Settings" onPress={() => navigation.navigate('Settings')} />
    </View>
  );
}

// Settings Screen
function SettingsScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚙️ Settings Screen</Text>
      <Button title="Go Back One Screen" onPress={() => navigation.goBack()} />
      <Button title="Go back to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

// App Entry Point
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f4f7',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 10,
    color: '#666',
  },
});
```

·····································································································································································································································································

## 🧩 Code Breakdown: Step-by-Step

| Line / Concept | Explanation |
|----------------|-------------|
| `type RootStackParamList` | Defines allowed routes and their parameters for type safety. |
| `createNativeStackNavigator<RootStackParamList>()` | Creates a typed stack navigator. |
| `NavigationContainer` | Wraps the entire navigation system. |
| `Stack.Navigator` | Holds all the screens and defines the initial screen. |
| `Stack.Screen` | Registers each screen with a name and component. |
| `navigation.navigate('ScreenName')` | Moves to another screen. |
| `navigation.goBack()` | Returns to the previous screen (note: fix typo from `goback()` to `goBack()`). |
| `StyleSheet.create()` | Adds styling to improve visual presentation. |

·····································································································································································································································································

## 🧠 What Is `{ navigation }: { navigation: any }`?

This is **TypeScript destructuring with type annotation**.

- `{ navigation }`: Extracts the `navigation` prop from the screen’s props.
- `: { navigation: any }`: Tells TypeScript that `navigation` can be of any type (not ideal, but simple for beginners).

> ✅ For better type safety, you can use:
```ts
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

function HomeScreen({ navigation }: { navigation: HomeScreenNavigationProp }) {
  // ...
}
```

·····································································································································································································································································

## 🔮 What More Can We Add to `<Stack.Screen>`?

Here are some useful props to explore:

| Prop | Purpose |
|------|---------|
| `options={{ title: 'Custom Title' }}` | Sets a custom title for the screen header. |
| `options={{ headerShown: false }}` | Hides the header bar. |
| `initialParams={{ userId: '123' }}` | Passes initial parameters to the screen. |
| `component={...}` | Links the screen name to its component. |

Example:
```tsx
<Stack.Screen
  name="Profile"
  component={ProfileScreen}
  options={{ title: 'User Profile', headerStyle: { backgroundColor: '#6200ee' }, headerTintColor: '#fff' }}
/>
```
