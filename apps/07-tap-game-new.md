## Refactoring the **Tap Game App** in **React Native with TypeScript**. 

Each step will build logically on the last, and the goal is to help them understand **why** they are doing what they’re doing—not just what to copy.

We’ll begin with the **initial project setup**, then slowly move toward the **separation of concerns** (splitting code into meaningful files/folders), with explanations along the way.

---

### ✅ STEP 1: Set Up Your Project Folder and Initialize Your App

**🔧 Goal:** Set up a clean Expo + TypeScript project in a dedicated folder.

#### What to Do:

1. Create a parent folder for your project (this can be named something like `TapGameProject`).

2. Open **Visual Studio Code**.

3. Go to `File > Open Folder...` and select your new parent folder.

4. Open a new terminal:
   From the top menu, go to:
   `Terminal > New Terminal`

5. In the terminal, run the following command:

```bash
npx create-expo-app -t expo-template-blank-typescript
```

> This command will scaffold a new Expo app using TypeScript.

---

### ✅ STEP 2: Copy the Tap Game Code from GitHub and Install AsyncStorage

**🔧 Goal:** Add the original app logic and its only dependency.

#### What to Do:

1. Go to:
   🔗 [https://github.com/jesselsookha/MAST2025/blob/main/apps/05-tap-game.md](https://github.com/jesselsookha/MAST2025/blob/main/apps/05-tap-game.md)

2. Scroll to the **final version** of the app at the bottom of the page.

3. **Open the `App.tsx` file** in your new Expo project. Delete everything inside it and **paste the final version** of the code from the GitHub link.

4. **Right-click** on `App.tsx` in the file explorer, and choose:
   `Open in Integrated Terminal`

5. In the terminal at the bottom of VSCode, install AsyncStorage:

```bash
npx expo install @react-native-async-storage/async-storage
```

> This is required for saving and loading high scores from local storage.

---

### ✅ BEFORE MOVING ON...

Right now, your app is **working as one large file**, which is fine for small experiments.

But in real-world apps, we use **modular code structures** to:

* Keep related code together
* Make code easier to read and maintain
* Reuse components and styles
* Separate **logic**, **data**, **UI**, and **styles**

---

Next, we’ll start breaking the app down into parts—**2 steps at a time**.

---

## ✅ STEP 3: Extract the Score Type Definition

**🗂 New File:** `src/types/Score.ts`

### 📌 Purpose:

This file defines the **shape of a score object**. It helps TypeScript understand what data we are working with (i.e., an object with `id`, `taps`, and `date`).

> 💡 In TypeScript, it's a best practice to extract types/interfaces into their own files for reuse and better code organization.

### 🧩 Where It Fits:

This type will be imported wherever we use or handle score data — in the main app, storage, and components.

---

### 🔨 What To Do:

1. Create a folder structure:
   Inside your project, create a new folder:
   `src/types`

2. Inside the `types` folder, create a file:
   `Score.ts`

3. Paste the following code into that file:

```ts
// Type for a high score entry
export type Score = {
  id: string;
  taps: number;
  date: string;
};
```

4. Back in `App.tsx`, **replace** the inline `type Score` with an import:

```ts
import { Score } from './src/types/Score';
```

---

## ✅ STEP 4: Extract and Centralize Styles

**🗂 New File:** `src/styles/gameStyles.ts`

### 📌 Purpose:

Move all visual styling logic to a dedicated file so that the UI is cleanly separated from app logic.

> 💡 Bonus: Easier to update styles in one place without digging through your app code.

---

### 🧩 Where It Fits:

This file will be imported anywhere that needs access to the game's styles — starting with `App.tsx`, and later the components.

---

### 🔨 What To Do:

1. Create the folder structure:
   `src/styles`

2. Inside the `styles` folder, create a file:
   `gameStyles.ts`

3. Paste the **style object** from the bottom of your `App.tsx` (inside `StyleSheet.create({ ... })`) into the new file.

4. Wrap it like this:

```ts
import { StyleSheet } from 'react-native';

export const gameStyles = StyleSheet.create({
  // Paste all your styles here
});
```

5. Back in `App.tsx`, remove the original `StyleSheet.create(...)` section and add this import at the top:

```ts
import { gameStyles } from './src/styles/gameStyles';
```

6. Replace all usages of `styles` with `gameStyles`.
   For example:

```tsx
<Text style={gameStyles.title}>Tap Game</Text>
```

---

✅ At this point, your app should **still function exactly the same** — but now with cleaner, reusable files.

---

## ✅ STEP 5: Create a `ScoreItem` Component

**🗂 New File:** `src/components/ScoreItem.tsx`

### 📌 Purpose:

This component is responsible for rendering a **single high score entry** (taps + date). It was previously part of the `renderScoreItem` function inside `App.tsx`.

> 💡 By extracting this as a component, we follow the **Single Responsibility Principle** — each part of our UI should handle just one thing.

---

### 🧩 Where It Fits:

This component will be used inside a list (coming next in `ScoreList`), which displays all scores.

---

### 🔨 What To Do:

1. Create the folder structure:
   `src/components`

2. Inside the `components` folder, create a file:
   `ScoreItem.tsx`

3. Paste this code:

```tsx
import { View, Text } from 'react-native';
import { Score } from '../types/Score';
import { gameStyles } from '../styles/gameStyles';

type Props = {
  item: Score;
};

export default function ScoreItem({ item }: Props) {
  return (
    <View style={gameStyles.scoreItem}>
      <Text style={gameStyles.scoreItemText}>Taps: {item.taps}</Text>
      <Text style={gameStyles.scoreItemText}>Date: {item.date}</Text>
    </View>
  );
}
```

4. Back in `App.tsx`, you can **delete** the entire `renderScoreItem` function — it’s now replaced by this component.

---

## ✅ STEP 6: Create a `ScoreList` Component

**🗂 New File:** `src/components/ScoreList.tsx`

### 📌 Purpose:

This component renders the **list of high scores** using the `ScoreItem` component from Step 5.

> 💡 Separating the list logic from the main app view keeps your main file focused on game state, not layout.

---

### 🧩 Where It Fits:

Used in `App.tsx` where you originally had the `<FlatList />`.

---

### 🔨 What To Do:

1. In the same `src/components` folder, create a new file:
   `ScoreList.tsx`

2. Paste this code:

```tsx
import { FlatList } from 'react-native';
import { Score } from '../types/Score';
import ScoreItem from './ScoreItem';
import { gameStyles } from '../styles/gameStyles';

type Props = {
  data: Score[];
};

export default function ScoreList({ data }: Props) {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <ScoreItem item={item} />}
      keyExtractor={(item) => item.id}
      style={gameStyles.list}
    />
  );
}
```

3. Back in `App.tsx`, remove the `<FlatList>` entirely and **replace it with:**

```tsx
<ScoreList data={highScores} />
```

4. Make sure to import the component at the top:

```ts
import ScoreList from './src/components/ScoreList';
```

---

✅ At this stage:

* `App.tsx` is smaller and cleaner ✅
* UI responsibilities are separated ✅
* Your app should still run and display the same behavior ✅

---

## ✅ STEP 7: Extract the AsyncStorage Logic

**🗂 New File:** `src/storage/scoreStorage.ts`

### 📌 Purpose:

This module handles **all interaction with AsyncStorage** — saving and loading high scores.

> 💡 Storing data logic separately helps you **centralize side effects** and makes your app easier to test and maintain.

---

### 🧩 Where It Fits:

This will replace the `loadScores` and `saveScore` functions previously declared in `App.tsx`.

---

### 🔨 What To Do:

1. Create a new folder:
   `src/storage`

2. Inside it, create a file:
   `scoreStorage.ts`

3. Paste the following code:

```ts
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Score } from '../types/Score';

// Load high scores from storage
export const loadScores = async (): Promise<Score[]> => {
  try {
    const storedScores = await AsyncStorage.getItem('highScores');
    return storedScores ? JSON.parse(storedScores) : [];
  } catch (e) {
    console.error("Failed to load scores", e);
    return [];
  }
};

// Save high scores (sorted top 5)
export const saveScore = async (
  newTaps: number,
  highScores: Score[],
  setHighScores: (scores: Score[]) => void
) => {
  const now = new Date();
  const newScore: Score = {
    id: now.getTime().toString(),
    taps: newTaps,
    date: now.toLocaleString(),
  };

  const updatedScores = [...highScores, newScore];
  const top5Scores = updatedScores.sort((a, b) => b.taps - a.taps).slice(0, 5);

  setHighScores(top5Scores);

  try {
    await AsyncStorage.setItem('highScores', JSON.stringify(top5Scores));
  } catch (e) {
    console.error("Failed to save score", e);
  }
};
```

4. Back in `App.tsx`, remove the inline versions of `loadScores()` and `saveScore()`.

5. Add this import:

```ts
import { loadScores, saveScore } from './src/storage/scoreStorage';
```

6. Make sure to use the imported functions inside `useEffect` and when saving the score — the function signatures haven’t changed.

---

## ✅ STEP 8: Review the Final File and Folder Structure

Here’s how your app is now structured, with each part **in its proper place**:

```
📁 TapGameProject/
├── App.tsx
├── package.json
├── ...
└── 📁 src/
    ├── 📁 components/
    │   ├── ScoreItem.tsx
    │   └── ScoreList.tsx
    ├── 📁 storage/
    │   └── scoreStorage.ts
    ├── 📁 styles/
    │   ├── colors.ts         // (Optional: used if you want a centralized color palette)
    │   └── gameStyles.ts
    └── 📁 types/
        └── Score.ts
```

---

## 🎓 Why We Did This

| 🔄 Original State        | ✅ New State                        | 💡 Benefit                             |
| ------------------------ | ---------------------------------- | -------------------------------------- |
| One large `App.tsx` file | Modular folders and files          | Easier to read, navigate, and maintain |
| Styles mixed with logic  | Centralized style file             | Clean separation of UI and logic       |
| Repeated render code     | Reusable components                | Code reuse + single responsibility     |
| Async logic in main file | Storage module (`scoreStorage.ts`) | Decoupled side effects, easier testing |

---

### ✅ Final Challenge for Students

Now that the structure is separated:

* Open each file and explore **what its role is**.
* Try editing or customizing one part (like styling or adding a new field to `Score`).
* Think about how this modular approach helps as the app grows.

---

## ✅ Final `App.tsx` (With Comments Explaining External Imports)

```tsx
import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// 👉 Importing the Score type (shape of a high score object)
// File: src/types/Score.ts
import { Score } from './src/types/Score';

// 👉 Importing functions to save/load scores using AsyncStorage
// File: src/storage/scoreStorage.ts
import { loadScores, saveScore } from './src/storage/scoreStorage';

// 👉 Importing a reusable component to display a list of high scores
// File: src/components/ScoreList.tsx
import ScoreList from './src/components/ScoreList';

// 👉 Importing the central stylesheet for the app
// File: src/styles/gameStyles.ts
import { gameStyles } from './src/styles/gameStyles';

const GAME_DURATION = 5; // Game duration in seconds

function App() {
  const [taps, setTaps] = useState<number>(0); 
  const [timeLeft, setTimeLeft] = useState<number>(GAME_DURATION); 
  const [gameActive, setGameActive] = useState<boolean>(false); 
  const [highScores, setHighScores] = useState<Score[]>([]); 

  // 🕒 1. Timer effect - countdown logic
  useEffect(() => {
    let timerId: ReturnType<typeof setTimeout>;

    if (gameActive && timeLeft > 0) {
      timerId = setTimeout(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
    }

    return () => clearTimeout(timerId);
  }, [gameActive, timeLeft]);

  // 🏁 2. End game & save score once timer hits 0
  useEffect(() => {
    if (timeLeft === 0 && gameActive) {
      setGameActive(false);
      saveScore(taps, highScores, setHighScores); // 👈 Imported from storage/scoreStorage
    }
  }, [timeLeft]);

  // 💾 3. Load previously saved scores once on first load
  useEffect(() => {
    const fetchScores = async () => {
      const scores = await loadScores(); // 👈 Imported from storage/scoreStorage
      setHighScores(scores);
    };
    fetchScores();
  }, []);

  // 👆 User starts or taps during the game
  const handleTap = () => {
    if (!gameActive) {
      setGameActive(true);
      setTaps(1);
      setTimeLeft(GAME_DURATION);
    } else {
      setTaps(prevTaps => prevTaps + 1);
    }
  };

  // 🔁 Reset the game state
  const handleReset = () => {
    setGameActive(false);
    setTaps(0);
    setTimeLeft(GAME_DURATION);
  };

  return (
    <View style={gameStyles.container}>
      <Text style={gameStyles.title}>Tap Game</Text>

      <View style={gameStyles.infoContainer}>
        <Text style={gameStyles.timerText}>Time Left: {timeLeft}s</Text>
        <Text style={gameStyles.scoreText}>Taps: {taps}</Text>
      </View>

      {/* 👇 Main tap/start button */}
      <TouchableOpacity
        style={[gameStyles.button, !gameActive && gameStyles.startButton]}
        onPress={handleTap}
        disabled={!gameActive && timeLeft === 0}
      >
        <Text style={gameStyles.buttonText}>
          {gameActive ? "TAP" : (timeLeft === 0 ? "GAME OVER" : "START")}
        </Text>
      </TouchableOpacity>

      {/* 👇 Reset button (only shown when game ends) */}
      {timeLeft === 0 && (
        <TouchableOpacity style={gameStyles.resetButton} onPress={handleReset}>
          <Text style={gameStyles.buttonText}>RESET</Text>
        </TouchableOpacity>
      )}

      <Text style={gameStyles.highScoresTitle}>High Scores</Text>

      {/* 👇 Reusable list component showing saved scores */}
      <ScoreList data={highScores} />
    </View>
  );
}

export default App;
```

---

## 🧠 Summary of External Imports and Their Purpose

| 🔄 Module                 | 💼 Responsibility                                  | 📁 File Location               |
| ------------------------- | -------------------------------------------------- | ------------------------------ |
| `Score`                   | Describes the shape of score data (id, taps, date) | `src/types/Score.ts`           |
| `loadScores`, `saveScore` | Manages saving/loading scores to/from AsyncStorage | `src/storage/scoreStorage.ts`  |
| `ScoreList`               | Displays the list of top scores                    | `src/components/ScoreList.tsx` |
| `gameStyles`              | Centralized visual styles for the entire app       | `src/styles/gameStyles.ts`     |

---
