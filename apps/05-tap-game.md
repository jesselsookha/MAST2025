# Tapping Game - Introduce `useEffect()` and `AsyncStorage` 

## Stage 0 - Empty Template 

```tsx
import { useState } from 'react'; 
import { View, Text, StyleSheet } from 'react-native';  

function App() {
  return(
    <View style={styles.container}>
      <Text>Tap Game</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe', 
    padding: 20, 
    color: '#333',  
  },
});

export default App; 
```

## Stage 1 - Adding a Tappable Button

In this stage, we'll introduce a tappable button using **`TouchableOpacity`** and a state variable to track the number of taps.

We'll start by importing `useState` and `TouchableOpacity` from `react-native`.

Next, we'll define a state variable called `taps` using `useState`, initializing it to `0`. This variable will hold the current tap count and will trigger a re-render of the component whenever its value changes.

Finally, we'll add the **`TouchableOpacity`** component to the app's JSX. Inside, we'll display a `Text` component showing the current tap count, which is stored in the `taps` state variable. We'll also add an `onPress` handler that updates the state by incrementing the `taps` variable by 1 each time the button is pressed.

---

### Code for Stage 1

```typescript
import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function App() {
  const [taps, setTaps] = useState<number>(0);

  const handleTap = () => {
    setTaps(taps + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tap Game</Text>
      <TouchableOpacity style={styles.button} onPress={handleTap}>
        <Text style={styles.buttonText}>{taps}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
  },
  button: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    fontSize: 48,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default App;
```

Now, you should have a large blue circle that updates the tap count every time you press it, demonstrating the fundamental concept of **`state`** in React Native.

---

## Stage 2.1: Adding a Timer and Reset Functionality

* Note: The following code uses NodeJS.Timeout which would work effectively on a mobile device or mobile phone emulator. However since we are using the Snack editor in the browser, we are continuing our development using the alternate **Stage 2.2**. *

In this stage, we'll implement the following:

  * A state variable for the **timer**, initialized to 5 seconds.
  * A state variable for a **game status**, so we can know if the game is active, idle, or over.
  * The **`useEffect` hook** to create a countdown timer that starts when the button is tapped and stops when it reaches zero.
  * A **Reset button** to reset the taps and timer.

-----

### Code for Stage 2

```typescript
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GAME_DURATION = 5; // The duration of the game in seconds

function App() {
  const [taps, setTaps] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(GAME_DURATION);
  const [gameActive, setGameActive] = useState<boolean>(false);

  // useEffect to handle the timer logic
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (gameActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setGameActive(false);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [gameActive, timeLeft]); // useEffect dependent on gameActive and timeLeft state variables

  const handleTap = () => {
    if (!gameActive) {
      setGameActive(true);
      setTaps(1);
    } else {
      setTaps(prevTaps => prevTaps + 1);
    }
  };

  const handleReset = () => {
    setGameActive(false);
    setTaps(0);
    setTimeLeft(GAME_DURATION);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tap Game</Text>
      
      <View style={styles.infoContainer}>
        <Text style={styles.timerText}>Time Left: {timeLeft}s</Text>
        <Text style={styles.scoreText}>Taps: {taps}</Text>
      </View>

      <TouchableOpacity 
        style={[styles.button, !gameActive && styles.startButton]} 
        onPress={handleTap}
        disabled={!gameActive && timeLeft === 0}
      >
        <Text style={styles.buttonText}>{gameActive ? "TAP" : (timeLeft === 0 ? "GAME OVER" : "START")}</Text>
      </TouchableOpacity>
      
      {timeLeft === 0 && (
        <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
          <Text style={styles.buttonText}>RESET</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  timerText: {
    fontSize: 20,
    color: '#d9534f',
  },
  scoreText: {
    fontSize: 20,
    color: '#337ab7',
  },
  button: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  startButton: {
    backgroundColor: '#28a745',
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  resetButton: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#dc3545',
    borderRadius: 5,
  },
});

export default App;
```

### Key additions:

  * **`useEffect` hook**: This hook takes two arguments: a function containing the side effect and a dependency array.

      * The **`useEffect`** hook will run whenever the values in its dependency array (`gameActive`, `timeLeft`) change.
      * Inside the effect, we use `setInterval` to decrease `timeLeft` by 1 every second.
      * The `return` function inside the `useEffect` is a **cleanup function**. It runs when the component unmounts or before the effect runs again. We use it to clear the timer with `clearInterval` to prevent memory leaks and ensure the timer stops when the game ends.

  * **Game State Management**: We use the `gameActive` state to control the flow of the game.

      * When the user taps the button for the first time, we set `gameActive` to `true`, which triggers the timer to start.
      * When `timeLeft` hits `0`, we set `gameActive` to `false` and disable the button.

  * **Reset Functionality**: The `handleReset` function sets everything back to its initial state: `taps` to 0, `timeLeft` to `GAME_DURATION`, and `gameActive` to `false`.

The app now has a complete game loop: start, play, end, and reset.

---

## Stage 2.2: Alternate Adding a Timer and Reset Functionality (Web-Compatible Version)

* Note: The Snack Editor's web-based emulator can have issues with `NodeJS.Timeout`, which is specific to Node.js environments. A more compatible and robust alternative for a web-based environment is to use **`setTimeout`** and **`clearTimeout`**. This is a standard part of the browser's JavaScript environment and works perfectly in a web-based emulator.

Here's an alternative **Stage 2** that uses `setTimeout` to handle the timer. The core logic remains the same, but the timer implementation is slightly different. Instead of `setInterval` which runs repeatedly, we'll use `setTimeout` within a `useEffect` hook that re-runs every second as long as the timer is active.

---

### Code for Alternate Stage 2

```typescript
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GAME_DURATION = 5; // The duration of the game in seconds

function App() {
  const [taps, setTaps] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [gameActive, setGameActive] = useState(false);

  // useEffect to handle the timer logic using setTimeout
  useEffect(() => {
    let timerId: ReturnType<typeof setTimeout>;

    if (gameActive && timeLeft > 0) {
      timerId = setTimeout(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setGameActive(false);
    }

    // Cleanup function to clear the timeout
    return () => {
      clearTimeout(timerId);
    };
  }, [gameActive, timeLeft]);

  const handleTap = () => {
    if (!gameActive) {
      setGameActive(true);
      setTaps(1);
    } else {
      setTaps(prevTaps => prevTaps + 1);
    }
  };

  const handleReset = () => {
    setGameActive(false);
    setTaps(0);
    setTimeLeft(GAME_DURATION);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tap Game</Text>
      
      <View style={styles.infoContainer}>
        <Text style={styles.timerText}>Time Left: {timeLeft}s</Text>
        <Text style={styles.scoreText}>Taps: {taps}</Text>
      </View>

      <TouchableOpacity 
        style={[styles.button, !gameActive && styles.startButton]} 
        onPress={handleTap}
        disabled={!gameActive && timeLeft === 0}
      >
        <Text style={styles.buttonText}>{gameActive ? "TAP" : (timeLeft === 0 ? "GAME OVER" : "START")}</Text>
      </TouchableOpacity>
      
      {timeLeft === 0 && (
        <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
          <Text style={styles.buttonText}>RESET</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  timerText: {
    fontSize: 20,
    color: '#d9534f',
  },
  scoreText: {
    fontSize: 20,
    color: '#337ab7',
  },
  button: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  startButton: {
    backgroundColor: '#28a745',
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  resetButton: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#dc3545',
    borderRadius: 5,
  },
});

export default App;
```

### Key Changes:

  * Instead of `setInterval`, we now use `setTimeout`.
  * The `useEffect` hook still has the same dependencies (`gameActive`, `timeLeft`), so it re-runs every time either of these values changes.
  * Inside the hook, `setTimeout` is called, which will trigger the timer to count down **after a one-second delay**.
  * The `useEffect` hook will then re-run with the updated `timeLeft` state, scheduling the next `setTimeout`. This creates a chain reaction that effectively acts as a timer, similar to `setInterval`.
  * The cleanup function `clearTimeout(timerId)` is still essential to prevent the timer from running in the background when the component re-renders or unmounts, avoiding memory leaks. This is a crucial concept to emphasize to your students.

This version is functionally identical to the previous one but is more compatible with the web-based environment of the Snack Editor.

---

### 🔁 What is `timerId`?

Inside your `useEffect`, this line appears:

```ts
let timerId: ReturnType<typeof setTimeout>;
```

This declares a **local variable** called `timerId` to hold the ID returned by `setTimeout`.

Every time `setTimeout()` is called, it **returns an ID** — basically a reference to that specific timeout, which you can later use to **cancel** it using `clearTimeout(timerId)`.

This ID doesn’t do anything by itself. It’s just a handle or label, like a tag attached to a scheduled timeout.

---

### 💡 Why is `timerId` necessary?

React’s `useEffect()` can run **multiple times**, especially when dependencies change. In this case, it runs **every time `gameActive` or `timeLeft` changes**.

If you don’t clear the previous timeout, you'll create **multiple overlapping timers**, and each one will fire after 1 second — causing unpredictable behavior (like `timeLeft` skipping or being decremented too many times).

#### 🧼 That’s where cleanup comes in:

```ts
return () => {
  clearTimeout(timerId);
};
```

This ensures that **before the next `useEffect` runs**, or when the component is unmounted, any existing timer gets **cancelled**.

So in a nutshell:

* `timerId` stores the timeout so you can cancel it later.
* This keeps the timer logic clean, avoiding duplication or memory leaks.

---

### Explanation

**"Every time our countdown changes or the game starts, we schedule a new timer using `setTimeout`. But we don’t want multiple timers running at once. So we store the timeout ID in a variable called `timerId`. Then, before setting a new timer, we cancel the old one using `clearTimeout(timerId)`. This makes sure only one timer is ticking at any moment."**

---

### 🧪 Bonus Tip — Demonstration Idea

To demonstrate this visually:

* **Add a console log** right inside the `setTimeout`:

```js
console.log("Timer tick: ", timeLeft);
```

* And in the cleanup:

```js
return () => {
  console.log("Cleaning up timer:", timerId);
  clearTimeout(timerId);
};
```

This will **show in real-time** how each timer is cleared and replaced — reinforcing why cleanup and `timerId` matter.

---

### ✅ Summary of setTimeout()

| Concept          | Role                                                              |
| ---------------- | ----------------------------------------------------------------- |
| `setTimeout()`   | Schedules a delayed action (reduce time by 1 after 1 sec)         |
| `timerId`        | Stores the ID of that timeout so we can cancel it later           |
| `clearTimeout()` | Cancels any previously scheduled timeout                          |
| Cleanup function | Ensures no duplicate timers exist; prevents bugs and memory leaks |

---

### 🔄 **Stage 2.1 vs 2.2 Clarification**

> 💡 **Tip: Choosing Between Stage 2.1 and 2.2**
>
> - **Stage 2.1** uses `setInterval`, which is ideal for mobile devices and emulators.
> - **Stage 2.2** uses `setTimeout`, which is more compatible with web-based environments like the Snack Editor.
>
> 🧭 **Recommendation**: If you're working in a browser-based editor, follow **Stage 2.2**. For mobile testing or deployment, prefer **Stage 2.1**.

---

## Stage 3: Implementing AsyncStorage for Top Scores**.

This is an excellent step, as it introduces a critical concept in mobile app development: **persistent data storage**. We'll use **`AsyncStorage`** to save the top five scores, allowing them to persist even after the user closes the app. We'll also add a **`FlatList`** to display the high scores in a clean, scrollable format.

Here's a breakdown of what we'll be adding and why:

1.  **State Management for High Scores**: We'll introduce a new state variable, `highScores`, which will be an array of objects. Each object will contain a score, a timestamp, and an ID. This will allow us to display the list of scores.

2.  **`AsyncStorage` Integration**:

      * **Saving Scores**: When a game ends, we'll check if the new score is one of the top 5. If it is, we'll save the updated `highScores` array to `AsyncStorage`.
      * **Loading Scores**: We'll use a `useEffect` hook to load the saved scores from `AsyncStorage` when the app first loads.

3.  **`FlatList` for Display**: We'll use the `FlatList` component to render the `highScores` array. This is the most performant way to display lists in React Native. The `FlatList` will be configured to render each score item and sort the list in descending order.

-----

### Code for Stage 3

First, you'll need to install `AsyncStorage`. In your terminal, run the following command:

```bash
npx expo install @react-native-async-storage/async-storage
```

Now, let's update the `App.tsx` file:

```typescript
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const GAME_DURATION = 5;

// Define the type for our score objects
type Score = {
  id: string;
  taps: number;
  date: string;
};

function App() {
  const [taps, setTaps] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(GAME_DURATION);
  const [gameActive, setGameActive] = useState<boolean>(false);
  const [highScores, setHighScores] = useState<Score[]>([]);

  // useEffect to handle the timer logic
  useEffect(() => {
    let timerId: ReturnType<typeof setTimeout>;

    if (gameActive && timeLeft > 0) {
      timerId = setTimeout(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setGameActive(false);
      saveScore(taps); // Call saveScore when the game ends
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [gameActive, timeLeft, taps]); // dependent array updated to monitor 'taps' state variable 

  // useEffect to load high scores from storage when the app loads
  useEffect(() => {
    loadScores();
  }, []); // empty dependency array 

  // Function to load scores from AsyncStorage
  const loadScores = async () => {
    try {
      const storedScores = await AsyncStorage.getItem('highScores');
      if (storedScores !== null) {
        // Parse the stored JSON string back into an array
        setHighScores(JSON.parse(storedScores));
      }
    } catch (e) {
      console.error("Failed to load scores", e);
    }
  };

  // Function to save a new score
  const saveScore = async (newTaps: number) => {
    const now = new Date();
    const newScore: Score = {
      id: now.getTime().toString(), // Unique ID based on timestamp
      taps: newTaps,
      date: now.toLocaleString(),
    };

    // this would be the next logical step, but we are choosing to only store the top 5 scores  
    // setHighScores([...highScores, newScore]); 
 
    // Create a new array with the new score and all existing high scores
    const updatedScores = [...highScores, newScore];

    // Sort the scores in descending order based on taps
    updatedScores.sort((a, b) => b.taps - a.taps);

    // Keep only the top 5 scores
    const top5Scores = updatedScores.slice(0, 5);

    setHighScores(top5Scores); // Update state to trigger re-render

    try {
      // Save the updated top 5 scores to AsyncStorage
      await AsyncStorage.setItem('highScores', JSON.stringify(top5Scores));
    } catch (e) {
      console.error("Failed to save score", e);
    }
  };

  const handleTap = () => {
    if (!gameActive) {
      setGameActive(true);
      setTaps(1);
    } else {
      setTaps(prevTaps => prevTaps + 1);
    }
  };

  const handleReset = () => {
    setGameActive(false);
    setTaps(0);
    setTimeLeft(GAME_DURATION);
  };
  
  // User-defined component to render each score item for the FlatList
  const renderScoreItem = ({ item }: { item: Score }) => (
    <View style={styles.scoreItem}>
      <Text style={styles.scoreItemText}>Taps: {item.taps}</Text>
      <Text style={styles.scoreItemText}>Date: {item.date}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tap Game</Text>
      
      <View style={styles.infoContainer}>
        <Text style={styles.timerText}>Time Left: {timeLeft}s</Text>
        <Text style={styles.scoreText}>Taps: {taps}</Text>
      </View>

      <TouchableOpacity 
        style={[styles.button, !gameActive && styles.startButton]} 
        onPress={handleTap}
        disabled={!gameActive && timeLeft === 0}
      >
        <Text style={styles.buttonText}>{gameActive ? "TAP" : (timeLeft === 0 ? "GAME OVER" : "START")}</Text>
      </TouchableOpacity>
      
      {timeLeft === 0 && (
        <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
          <Text style={styles.buttonText}>RESET</Text>
        </TouchableOpacity>
      )}

      <Text style={styles.highScoresTitle}>High Scores</Text>
      <FlatList
        data={highScores}
        renderItem={renderScoreItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  timerText: {
    fontSize: 20,
    color: '#d9534f',
  },
  scoreText: {
    fontSize: 20,
    color: '#337ab7',
  },
  button: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  startButton: {
    backgroundColor: '#28a745',
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  resetButton: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#dc3545',
    borderRadius: 5,
  },
  highScoresTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 10,
    color: '#333',
  },
  list: {
    width: '100%',
  },
  scoreItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
    marginBottom: 5,
  },
  scoreItemText: {
    fontSize: 16,
    color: '#555',
  },
});

export default App;
```

-----

### Breakdown of New Concepts

  * **`AsyncStorage`**: Think of `AsyncStorage` as a simple, unencrypted key-value storage system.  It's perfect for small amounts of data, like our high scores.

      * **`AsyncStorage.setItem(key, value)`**: This function saves a value to storage. Because `AsyncStorage` can only store strings, we use `JSON.stringify()` to convert our `highScores` array into a JSON string before saving it.
      * **`AsyncStorage.getItem(key)`**: This function retrieves the saved value. We then use `JSON.parse()` to convert the JSON string back into an array.
      * These are both **asynchronous** operations, so we use `async/await` to handle them.

  * **`FlatList`**: Component for rendering large lists of data efficiently. Instead of rendering all items at once, it only renders the ones currently visible on the screen, which is a major performance benefit.

      * **`data`**: The array of data to be rendered (`highScores`).
      * **`renderItem`**: A function that takes an individual item from the `data` array and returns a React component (our user-defined `renderScoreItem`).
      * **`keyExtractor`**: A function that returns a unique key for each item, which helps React optimize list rendering.

  * **Logic for Top 5 Scores**:

    1.  When a game ends, `saveScore()` is called.
    2.  A new `Score` object is created with a unique `id`, the number of `taps`, and the current `date`.
    3.  This new score is added to a copy of the existing `highScores` array.
    4.  The combined array is then sorted in **descending order** (`b.taps - a.taps`).
    5.  `slice(0, 5)` is used to take only the first 5 items from the sorted array, effectively keeping only the top 5 scores.

This stage brings together state management, side effects with `useEffect`, and persistent data storage, which are all crucial topics for mobile app development.

---

### **Why Only Top 5 Scores?**

> **Why Limit to Top 5 Scores?**
>
> Storing only the top 5 scores keeps the list concise and relevant, avoids clutter, and ensures better performance — especially on devices with limited resources. It also encourages users to aim for higher scores to make the leaderboard.

---

### Notes: Multiple `useEffect` Hooks and The Reason for `async` & `await`

### The Two `useEffect` Hooks

The two separate `useEffect` blocks are used to handle two distinct "side effects" in our application. In React, a side effect is anything that happens outside of the normal rendering flow, like fetching data, setting up a subscription, or in our case, managing a timer and loading data from storage.

1.  **The Timer `useEffect`**: This block's purpose is to manage the game's countdown.
    * **Dependencies**: It has a dependency array of `[gameActive, timeLeft, taps]`. This tells React to re-run the effect **every time** one of these state variables changes.
    * **Why it needs dependencies**: The logic inside this `useEffect` depends directly on the current state of the game. For the timer to count down, we need to re-run the effect every time `timeLeft` changes. When `gameActive` changes, we need to either start or stop the timer. The `taps` dependency is also there to ensure the effect has access to the most recent tap count when the game ends.

2.  **The Data Loading `useEffect`**: This block's purpose is to load the high scores from `AsyncStorage`.
    * **Dependencies**: It has an empty dependency array `[]`. This tells React to run the effect **only once**, when the component is first mounted (i.e., when the app loads).
    * **Why an empty dependency array?**: We only want to fetch the saved high scores when the app starts up. After that, the `highScores` state will be updated directly by the `saveScore` function, not by this effect. This ensures we don't repeatedly try to load the scores from storage on every re-render, which would be inefficient.

In short, one `useEffect` is for a continuous, reactive process (the timer), while the other is for a one-time setup process (loading data).

---

### `async` and `await` with `AsyncStorage`

`async` and `await` are used to handle **asynchronous operations**. Think of an asynchronous operation as a task that takes an unpredictable amount of time to complete, like fetching data from a server or, in this case, reading from or writing to a device's storage.

* **Why it's asynchronous**: Accessing a device's storage isn't instantaneous. If our app had to wait for the data to be retrieved before doing anything else (a synchronous operation), the entire app would freeze, and the user interface would become unresponsive. This is a bad user experience. 

* **How it works**:
    * **`async`**: This keyword is placed before a function declaration to indicate that the function will contain asynchronous operations. It ensures that the function returns a `Promise`.
    * **`await`**: This keyword is used inside an `async` function. It tells the program to **pause its execution at this line** and wait for the `Promise` to resolve (i.e., for the asynchronous task to complete) before moving on to the next line of code.

**Analogy**: Think of `async` and `await` as ordering a pizza for delivery 🍕.

* Without `async`/`await` (synchronous): You call the pizzeria, and you can't hang up the phone or do anything else until the delivery person shows up at your door. You're completely blocked.

* With `async`/`await` (asynchronous): You place your order. The phone call ends, and you can go back to watching a movie or doing other things. `await` is like you telling yourself, "I'll wait right here for the pizza before I eat, but I'm free to do other things while the delivery is in progress." Once the pizza arrives, you `await` its arrival before you start eating. The main "thread" of your life continues, while the pizza delivery is happening in the background.

This is exactly what happens with `AsyncStorage`. The app can continue to render and respond to user input while the data is being saved or loaded in the background. The `await` keyword ensures that our function doesn't try to use the data until it has actually been retrieved.

---
## Current Overview of Development without "Stage 4" 

### Stage 1: Counting Taps with `useState`

This was your first step into making the app interactive.

* **What you did**: You added a tappable button using `TouchableOpacity`. When a user tapped the button, the tap count on the screen went up.
* **Key Concept**: The **`useState` hook**. This hook is how you add "state" to a component. The state is a piece of data that can change over time. When you change the state using `setTaps(taps + 1)`, React automatically re-renders the component to show the new value. 
* **Takeaway**: State is what makes your app dynamic. You use `useState` to track anything that changes in your app, like a score, a timer, or a user's input.

***

### Stage 2: Adding a Timer with `useEffect`

This stage turned your simple counter into a real game with a time limit.

* **What you did**: You introduced a 5-second countdown timer and a "Game Over" message.
* **Key Concept**: The **`useEffect` hook**. This hook is for handling "side effects" in your app, which are things that happen outside the normal flow of rendering. Our side effect was a countdown timer that ran in the background. 
* **Why we used `useEffect`**: We needed to run a function every second (`setTimeout`) and stop it when the game ended. We put this logic inside a `useEffect` hook. We used an empty array `[]` as a dependency to run the effect only once when the app starts, or `[gameActive, timeLeft]` to run it when the game status or time changes.
* **Takeaway**: `useEffect` is a powerful tool for managing things like timers, fetching data from the internet, or setting up listeners. The dependency array is crucial because it tells React when to run the effect again.

***

### Stage 3: Saving Scores with `AsyncStorage`

This stage made your game memorable by saving the top scores.

* **What you did**: You stored the top five scores in a list that would stay saved even after you closed the app. You also displayed them in a clean, scrollable list.
* **Key Concepts**:
    * **`AsyncStorage`**: Think of this as a mini-database built into the phone. It's perfect for saving simple, persistent data like our high scores. 
    * **`async` and `await`**: We used these keywords because `AsyncStorage` operations don't happen instantly. They are **asynchronous**, meaning the app doesn't freeze while it waits for the data to be saved or loaded. `async` and `await` are special keywords that tell your code to "pause" and wait for the operation to finish before continuing, all without blocking the app.
    * **`FlatList`**: This component is designed for displaying long lists of data efficiently. It only renders what is currently on the screen, saving battery and memory.
* **Takeaway**: To save data on a user's device, you need to use persistent storage like `AsyncStorage`. Always use `async` and `await` to handle these operations to keep your app fast and responsive.

### Final Conclusion: The Complete App 🎮

You've successfully built a complete game that demonstrates the core principles of modern React Native development:

* **User Interface**: Using components like `View`, `Text`, and `TouchableOpacity`.
* **State Management**: Using `useState` to track the game's changing data (taps, time).
* **Side Effects**: Using `useEffect` to manage the game's timer.
* **Persistent Data**: Using `AsyncStorage` to save and retrieve high scores.

---

## Issues with Current Implementation of `useEffect()` Code

### ✅ Current Behaviour 

```ts
  useEffect(() => {
    let timerId: ReturnType<typeof setTimeout>;

    if (gameActive && timeLeft > 0) {
      timerId = setTimeout(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setGameActive(false);
      saveScore(taps); // Call saveScore when the game ends
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [gameActive, timeLeft, taps]);
```

Right now:

* `saveScore()` is called **inside a `useEffect`** that watches `[gameActive, timeLeft, taps]`.
* When `timeLeft` hits **0**, `gameActive` is set to false and the score is saved.
* This works functionally but has a few **downsides**.

---

### **Detailed Explanation of Timer Freezing During Rapid Tapping**

### **Problem**

When you tap the button quickly, the countdown timer freezes until you stop tapping. And when we carry on tapping, the timer pauses again.

### **Root Cause**

This is a common issue in React Native due to the **JavaScript thread being blocked**.

The function `handleTap` calls `setTaps(prev => prev + 1)` — that’s fine.
However, rapid tapping causes React to re-render the component very frequently, and each render schedules the `setTimeout` timer again.

Even though you're cleaning up the timer with `clearTimeout`, frequent state changes and re-renders can create enough **load on the JS thread** that `setTimeout` gets delayed or paused.

> In React Native, the UI and JS thread are separate, but heavy JS work (like rapid state updates or too many renders) can still stall the JS event loop, affecting timers.

### ✅ **Fix**

Instead of `setTimeout`, use **`setInterval`**, which is more resilient to rapid state updates:
   *Remember Stage 2.1 Code

Update your timer logic:

```ts
useEffect(() => {
  let intervalId: NodeJS.Timeout;

  if (gameActive && timeLeft > 0) {
    intervalId = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime === 1) {
          clearInterval(intervalId); // stop interval if time's up
          setGameActive(false);
          saveScore(taps);
        }
        return prevTime - 1;
      });
    }, 1000);
  }

  return () => clearInterval(intervalId);
}, [gameActive]);
```

### Why This Works Better:

* `setInterval` is created once per game start.
* Countdown logic and stop conditions live inside the interval.
* Less reliant on frequent re-renders, reducing the load on the JS thread.
 
---

## 🚨 Potential Issue: Re-saving on Every `taps` Change

Since `taps` is in the dependency array of the `useEffect`, **every time the player taps**, the effect is re-run. While `saveScore(taps)` will only be called when `timeLeft === 0`, you're still recalculating and re-rendering unnecessarily on each tap.

It's not saving on every tap (due to the `if` check), but it's still inefficient.

---

## ✅ Best Practice: Detect Game End Explicitly & Save Once

Instead of detecting game end indirectly in the `useEffect`, a **cleaner separation of concerns** would be to detect the game end *and trigger `saveScore()`* explicitly in a single, clear location.

### ✅ Recommended Change:

Move `saveScore()` into the timer countdown logic, and remove `taps` from the dependency array. Here’s how:

---

## 🔧 Updated `useEffect`

```ts
useEffect(() => {
  let timerId: ReturnType<typeof setTimeout>;

  if (gameActive && timeLeft > 0) {
    timerId = setTimeout(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);
  }

  // Move game end logic into a separate effect
  return () => {
    clearTimeout(timerId);
  };
}, [gameActive, timeLeft]);

// New effect JUST for detecting end of game
useEffect(() => {
  if (timeLeft === 0 && gameActive) {
    setGameActive(false);
    saveScore(taps); // Called only once when game ends
  }
}, [timeLeft]);
```

---

## 🔄 Why This is Better

* `saveScore(taps)` is **only called once** when `timeLeft === 0`.
* No need to watch `taps` in the main timer logic anymore.
* `useEffect` logic is cleaner and separated by concern:

  * One for ticking timer
  * One for detecting end-of-game state

---

## 🔍 Why Multiple `useEffect()`s Are Good

In React (and React Native), **each `useEffect` is like a dedicated "reaction" to a specific change in state or props**. You can think of them as observers watching particular variables.

### Here’s why it’s beneficial:

| Benefit                         | Explanation                                                                                                                         |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| **Separation of concerns**      | Each `useEffect` focuses on *one thing* (e.g., timer, game over, loading data). This makes code easier to read, test, and maintain. |
| **Avoids unnecessary triggers** | When you isolate dependencies, you reduce the chance of effects running more often than needed (which is what you wanted to fix).   |
| **Cleaner dependency tracking** | Smaller effects make it easier to reason about what should trigger what, reducing bugs due to dependency mismatches.                |

---

## 🧠 Analogy

Think of it like this:

* You wouldn't write one big function that handles **starting the game**, **ending the game**, **updating the UI**, and **saving the high scores** all together.
* Similarly, you don’t want one big `useEffect()` trying to do everything — split them up just like you’d split up your logic into well-named functions.

---

## ✅ What You’ll End Up With

In this case, we have:

1. **Timer countdown effect** – Runs every second while game is active.
2. **Game-end detection** – Triggers once when `timeLeft === 0`.
3. **Initial load effect** – Loads high scores once on mount.

This is a **very common and recommended pattern**.

---

## ⚠️ Only Caution

Too many `useEffect()` blocks can become messy **if not named clearly** or **if logic overlaps**. But in our case, the three effects are clean and distinct.

---

### ✅ TL;DR

> Yes, it's not only okay but **good practice** to use multiple `useEffect()` hooks — as long as each serves a distinct purpose.

---

### Stage 4 - Edited Code with Updates Based on Issues

**What Changed from Stage 3?**

> - **Separated `useEffect` hooks** for timer, game-end detection, and data loading.
> - **Removed `taps` from timer dependencies** to avoid unnecessary re-renders.
> - **Score saving now happens only once**, when the game ends.
> - **Improved performance and readability** by modularizing logic.

---


```tsx
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const GAME_DURATION = 5; // Game duration in seconds

// Define the type for each high score entry
type Score = {
  id: string;
  taps: number;
  date: string;
};

function App() {
  const [taps, setTaps] = useState<number>(0); // Number of user taps
  const [timeLeft, setTimeLeft] = useState<number>(GAME_DURATION); // Remaining game time
  const [gameActive, setGameActive] = useState<boolean>(false); // Is the game currently running?
  const [highScores, setHighScores] = useState<Score[]>([]); // List of top 5 scores

  // 1 Effect: Timer logic - runs every second while game is active
  useEffect(() => {
    let timerId: ReturnType<typeof setTimeout>;

    if (gameActive && timeLeft > 0) {
      // Countdown every second
      timerId = setTimeout(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
    }

    // Clear timer when effect re-runs or component unmounts
    return () => clearTimeout(timerId);
  }, [gameActive, timeLeft]);

  // 2️ Effect: Detects when the game ends and saves the score
  useEffect(() => {
    if (timeLeft === 0 && gameActive) {
      setGameActive(false);        // End the game
      saveScore(taps);             // Save the score once
    }
  }, [timeLeft]); // Only triggers when timeLeft changes

  // 3️ Effect: Load saved high scores from AsyncStorage on first render
  useEffect(() => {
    loadScores();
  }, []);

  // Loads scores from persistent storage
  const loadScores = async () => {
    try {
      const storedScores = await AsyncStorage.getItem('highScores');
      if (storedScores !== null) {
        setHighScores(JSON.parse(storedScores)); // Load and update state
      }
    } catch (e) {
      console.error("Failed to load scores", e);
    }
  };

  // Saves the current score to AsyncStorage and updates the top 5 list
  const saveScore = async (newTaps: number) => {
    const now = new Date();
    const newScore: Score = {
      id: now.getTime().toString(), // Use timestamp as unique ID
      taps: newTaps,
      date: now.toLocaleString(),   // Save human-readable date
    };

    const updatedScores = [...highScores, newScore];

    // Sort and keep top 5 scores
    const top5Scores = updatedScores.sort((a, b) => b.taps - a.taps).slice(0, 5);
    setHighScores(top5Scores);

    try {
      await AsyncStorage.setItem('highScores', JSON.stringify(top5Scores));
    } catch (e) {
      console.error("Failed to save score", e);
    }
  };

  // Called when user taps the main game button
  const handleTap = () => {
    if (!gameActive) {
      // Start new game
      setGameActive(true);
      setTaps(1);
      setTimeLeft(GAME_DURATION);
    } else {
      // Increment tap count
      setTaps(prevTaps => prevTaps + 1);
    }
  };

  // Reset game state to allow replay
  const handleReset = () => {
    setGameActive(false);
    setTaps(0);
    setTimeLeft(GAME_DURATION);
  };

  // Render each high score entry
  const renderScoreItem = ({ item }: { item: Score }) => (
    <View style={styles.scoreItem}>
      <Text style={styles.scoreItemText}>Taps: {item.taps}</Text>
      <Text style={styles.scoreItemText}>Date: {item.date}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tap Game</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.timerText}>Time Left: {timeLeft}s</Text>
        <Text style={styles.scoreText}>Taps: {taps}</Text>
      </View>

      {/* 2 styles applied to same 1 component - 2nd style applied based on condition */}
      <TouchableOpacity 
        style={[styles.button, !gameActive && styles.startButton]} 
        onPress={handleTap}
        disabled={!gameActive && timeLeft === 0} // Disable after game ends
      >
        {/* Text display based on nested conditional statement */} 
        <Text style={styles.buttonText}>
          {gameActive ? "TAP" : (timeLeft === 0 ? "GAME OVER" : "START")}
        </Text>
      </TouchableOpacity>

      {timeLeft === 0 && (
        <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
          <Text style={styles.buttonText}>RESET</Text>
        </TouchableOpacity>
      )}

      <Text style={styles.highScoresTitle}>High Scores</Text>
      <FlatList
        data={highScores}
        renderItem={renderScoreItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  timerText: {
    fontSize: 20,
    color: '#d9534f',
  },
  scoreText: {
    fontSize: 20,
    color: '#337ab7',
  },
  button: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  startButton: {
    backgroundColor: '#28a745',
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  resetButton: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#dc3545',
    borderRadius: 5,
  },
  highScoresTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 10,
    color: '#333',
  },
  list: {
    width: '100%',
  },
  scoreItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
    marginBottom: 5,
  },
  scoreItemText: {
    fontSize: 16,
    color: '#555',
  },
});

export default App;
```

---

## ✅ Summary

* The app now **saves the score only once** when the game ends.
* `useEffect`s are **modular and clean**, each focused on one job.
* The logic is now more **readable, maintainable, and efficient**.

---

### 🎯 **Challenge Idea**

> 🎮 **Try This: Add Player Names**
>
> Enhance the game by allowing users to enter their name before starting. Save the name along with the score in `AsyncStorage`, and display it in the high scores list. This introduces:
>
> - `TextInput` for user input
> - Extended `Score` type to include `playerName`
> - More complex state and UI handling

---
