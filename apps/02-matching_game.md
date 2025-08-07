## 🟣 Stage 0: Empty Template

> Basic app shell with no components rendered yet.

```js
import { Text, View, StyleSheet } from 'react-native';

export default function App() {  
  return (
    <View style={styles.container}></View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fefefe',
    alignItems: 'center',
    padding: 8,
  },
});
```

---

## 🟠 Stage 1.0: Setup

> Static layout and hardcoded values introduced.

### ✅ Updates:
- Basic app title added
- Static `TouchableHighlight` components with hardcoded values (1–6)

```js
import { TouchableHighlight, Text, View, StyleSheet } from 'react-native';

export default function App() {  
  return (
    <View style={styles.container}>
      <Text>Matching Game v1</Text> 
      <View> 
         <TouchableHighlight> 
	    <Text>1</Text>
         </TouchableHighlight>
         <TouchableHighlight> 
	    <Text>2</Text>
         </TouchableHighlight>
         <TouchableHighlight> 
	    <Text>3</Text>
         </TouchableHighlight>
      </View>
      <View> 
         <TouchableHighlight> 
	    <Text>4</Text>
         </TouchableHighlight>
         <TouchableHighlight> 
	    <Text>5</Text>
         </TouchableHighlight>
         <TouchableHighlight> 
	    <Text>6</Text>
         </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fefefe',
    alignItems: 'center',
    padding: 8,
  },
});
```

---

## 🟡 Stage 1.1: Basic Style Applied

> Styling implemented for layout and tiles.

### ✅ Updates:
- 2 rows of 3 tiles created using `flexDirection: 'row'`
- Styled game title and tiles

```js
import { TouchableHighlight, Text, View, StyleSheet } from 'react-native';

export default function App() {
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Matching Game v1</Text> 
      <View style={styles.row}> 
         <TouchableHighlight style={styles.tile}> 
	    <Text style={styles.tileText}>1</Text>
         </TouchableHighlight>
	 <TouchableHighlight style={styles.tile}>
	    <Text style={styles.tileText}>2</Text>
         </TouchableHighlight>
	 <TouchableHighlight style={styles.tile}>
	    <Text style={styles.tileText}>3</Text>
         </TouchableHighlight>
      </View>
      <View style={styles.row}> 
         <TouchableHighlight style={styles.tile}>
 	   <Text style={styles.tileText}>4</Text>
         </TouchableHighlight>
	 <TouchableHighlight style={styles.tile}>
	    <Text style={styles.tileText}>5</Text>
         </TouchableHighlight>
	 <TouchableHighlight style={styles.tile}>
	    <Text style={styles.tileText}>6</Text>
         </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fefefe',
    padding: 8,
  },
  title: {
    fontSize: 24, 
    marginBottom: 20, 
  },
  row: {
    flexDirection: 'row', 
  },
  tile: {
    width: 80, 
    height: 80, 
    backgroundColor: '#eee', 
    margin: 10, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  tileText: {
    fontSize: 20, 
  },
});
```

---

## 🟢 Stage 1.2: State Variables

> Interactive state values added per tile.

### ✅ Updates:
- `useState` added for 6 tiles (each showing a random number between 1 and 3)
- Random values rendered directly in each tile

```js
import { useState } from 'react'; 
import { TouchableHighlight, Text, View, StyleSheet } from 'react-native';

export default function App() {
  const [tile1] = useState(Math.floor(Math.random() * 3) + 1);
  const [tile2] = useState(Math.floor(Math.random() * 3) + 1);
  const [tile3] = useState(Math.floor(Math.random() * 3) + 1);
  const [tile4] = useState(Math.floor(Math.random() * 3) + 1);
  const [tile5] = useState(Math.floor(Math.random() * 3) + 1);
  const [tile6] = useState(Math.floor(Math.random() * 3) + 1);
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Matching Game v1</Text> 
      <View style={styles.row}> 
         <TouchableHighlight style={styles.tile}> 
	    <Text style={styles.tileText}>{tile1}</Text>
         </TouchableHighlight>
	 <TouchableHighlight style={styles.tile}>
	    <Text style={styles.tileText}>{tile2}</Text>
         </TouchableHighlight>
	 <TouchableHighlight style={styles.tile}>
	    <Text style={styles.tileText}>{tile3}</Text>
         </TouchableHighlight>
      </View>
      <View style={styles.row}> 
         <TouchableHighlight style={styles.tile}>
 	   <Text style={styles.tileText}>{tile4}</Text>
         </TouchableHighlight>
	 <TouchableHighlight style={styles.tile}>
	    <Text style={styles.tileText}>{tile5}</Text>
         </TouchableHighlight>
	 <TouchableHighlight style={styles.tile}>
	    <Text style={styles.tileText}>{tile6}</Text>
         </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fefefe',
    alignItems: 'center',
    padding: 8,
  },
  title: {
    fontSize: 24, 
    marginBottom: 20, 
  },
  row: {
    flexDirection: 'row', 
  },
  tile: {
    width: 80, 
    height: 80, 
    backgroundColor: '#eee', 
    margin: 10, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  tileText: {
    fontSize: 20, 
  },
});
```

---

## 🔵 Stage 1: Tile Reveal Interaction

> Clickable tiles with reveal-on-click functionality.

### ✅ Updates:
- 6 boolean `selected` state variables added
- Tile reveals number only after being clicked

```js
import { useState } from 'react'; 
import { TouchableHighlight, Text, View, StyleSheet } from 'react-native';

export default function App() {
  const [tile1] = useState(Math.floor(Math.random() * 3) + 1);
  const [tile2] = useState(Math.floor(Math.random() * 3) + 1);
  const [tile3] = useState(Math.floor(Math.random() * 3) + 1);
  const [tile4] = useState(Math.floor(Math.random() * 3) + 1);
  const [tile5] = useState(Math.floor(Math.random() * 3) + 1);
  const [tile6] = useState(Math.floor(Math.random() * 3) + 1);

  const [selected1, setSelected1] = useState(false);
  const [selected2, setSelected2] = useState(false);
  const [selected3, setSelected3] = useState(false);
  const [selected4, setSelected4] = useState(false);
  const [selected5, setSelected5] = useState(false);
  const [selected6, setSelected6] = useState(false);
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Matching Game v1</Text> 
      <View style={styles.row}> 
         <TouchableHighlight style={styles.tile} onPress={() => setSelected1(true)}> 
	    <Text style={styles.tileText}>{selected1 ? tile1 : ''}</Text>
         </TouchableHighlight>
	 <TouchableHighlight style={styles.tile} onPress={() => setSelected2(true)}>
	    <Text style={styles.tileText}>{selected2 ? tile2 : ''}</Text>
         </TouchableHighlight>
	 <TouchableHighlight style={styles.tile} onPress={() => setSelected3(true)}>
	    <Text style={styles.tileText}>{selected3 ? tile3 : ''}</Text>
         </TouchableHighlight>
      </View>
      <View style={styles.row}> 
         <TouchableHighlight style={styles.tile} onPress={() => setSelected4(true)}>
 	   <Text style={styles.tileText}>{selected4 ? tile4 : ''}</Text>
         </TouchableHighlight>
	 <TouchableHighlight style={styles.tile} onPress={() => setSelected5(true)}>
	    <Text style={styles.tileText}>{selected5 ? tile5 : ''}</Text>
         </TouchableHighlight>
	 <TouchableHighlight style={styles.tile} onPress={() => setSelected6(true)}>
	    <Text style={styles.tileText}>{selected6 ? tile6 : ''}</Text>
         </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fefefe',
    alignItems: 'center',
    padding: 8,
  },
  title: {
    fontSize: 24, 
    marginBottom: 20, 
  },
  row: {
    flexDirection: 'row', 
  },
  tile: {
    width: 80, 
    height: 80, 
    backgroundColor: '#eee', 
    margin: 10, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  tileText: {
    fontSize: 20, 
  },
});
```
---

## 🟡 Stage 2.1: View 2 Selected Tiles

### 🎯 **Goal of this Stage**

We're **taking a small step** toward the final goal: a working matching game.

At this stage, we're focusing only on:

* Letting the user **click any tile**
* **Revealing** the number on the tile (same as before)
* **Storing the value** of the **first** and **second** tile that the user clicks
* Displaying these two selected values **below the tiles**

We are **not checking for a match yet**. We are just **observing** how to track selections and what values are being selected.
---
```tsx
import { useState } from 'react'; 
import { TouchableHighlight, Text, View, StyleSheet } from 'react-native';

export default function App() {
  const [tile1] = useState<number>(Math.floor(Math.random() * 3) + 1);
  const [tile2] = useState<number>(Math.floor(Math.random() * 3) + 1);
  const [tile3] = useState<number>(Math.floor(Math.random() * 3) + 1);
  const [tile4] = useState<number>(Math.floor(Math.random() * 3) + 1);
  const [tile5] = useState<number>(Math.floor(Math.random() * 3) + 1);
  const [tile6] = useState<number>(Math.floor(Math.random() * 3) + 1);

  const [selected1, setSelected1] = useState<boolean>(false);
  const [selected2, setSelected2] = useState<boolean>(false);
  const [selected3, setSelected3] = useState<boolean>(false);
  const [selected4, setSelected4] = useState<boolean>(false);
  const [selected5, setSelected5] = useState<boolean>(false);
  const [selected6, setSelected6] = useState<boolean>(false);
  
  const [selected, setSelected] = useState<boolean>(false);
  const [firstSelectedValue, setFirstSelectedValue] = useState<number>(0);
  const [secondSelectedValue, setSecondSelectedValue] = useState<number>(0);

  const handleTileClick = (value: number, setSelected: (val: boolean) => void) => {
    setSelected(true);
    if (firstSelectedValue === 0) {
      setFirstSelectedValue(value);
    } else {
        if (secondSelectedValue === 0 && value !== firstSelectedValue) {
          setSecondSelectedValue(value);
        }
    }
};


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Matching Game v1</Text> 
      <View style={styles.row}> 
        <TouchableHighlight style={styles.tile} onPress={() => handleTileClick(tile1, setSelected1)}>
          <Text style={styles.tileText}>{selected1 ? tile1 : ''}</Text>
        </TouchableHighlight>
	      <TouchableHighlight style={styles.tile} onPress={() => handleTileClick(tile2, setSelected2)}>
	        <Text style={styles.tileText}>{selected2 ? tile2 : ''}</Text>
        </TouchableHighlight>
	      <TouchableHighlight style={styles.tile} onPress={() => handleTileClick(tile3, setSelected3)}>
	        <Text style={styles.tileText}>{selected3 ? tile3 : ''}</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.row}> 
        <TouchableHighlight style={styles.tile} onPress={() => handleTileClick(tile4, setSelected4)}>
 	        <Text style={styles.tileText}>{selected4 ? tile4 : ''}</Text>
        </TouchableHighlight>
	      <TouchableHighlight style={styles.tile} onPress={() => handleTileClick(tile5, setSelected5)}>
	        <Text style={styles.tileText}>{selected5 ? tile5 : ''}</Text>
        </TouchableHighlight>
	      <TouchableHighlight style={styles.tile} onPress={() => handleTileClick(tile6, setSelected6)}>
	        <Text style={styles.tileText}>{selected6 ? tile6 : ''}</Text>
        </TouchableHighlight>
      </View>
      <Text style={styles.selectedLabel}>Selected Tiles:</Text>
      <Text>First: {firstSelectedValue}</Text>
      <Text>Second: {secondSelectedValue}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fefefe',
    alignItems: 'center',
    padding: 8,
  },
  title: {
    fontSize: 24, 
    marginBottom: 20, 
  },
  row: {
    flexDirection: 'row', 
  },
  tile: {
    width: 80, 
    height: 80, 
    backgroundColor: '#eee', 
    margin: 10, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  tileText: {
    fontSize: 20, 
  },
  selectedLabel: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
-----
```
---

### 🧠 New Concepts Introduced

| Concept               | Description                                                                                                |
| --------------------- | ---------------------------------------------------------------------------------------------------------- |
| `useState<number>`    | We're explicitly telling React the state type is a number (TypeScript feature).                            |
| `handleTileClick`     | A helper function that handles the logic when a tile is clicked.                                           |
| Tracking 2 selections | We use two state variables: `firstSelectedValue` and `secondSelectedValue` to store what the user clicked. |

---

### 🧩 How the Code Works (Line-by-Line Breakdown)

Let’s focus on the **new or changed parts**:

#### 1. 🎲 Tile Values

```ts
const [tile1] = useState<number>(Math.floor(Math.random() * 3) + 1);
```

Each tile still gets a **random number between 1 and 3**, but now we've added `: number` — this tells TypeScript the state is a **number**.

---

#### 2. ✅ Boolean State Per Tile

```ts
const [selected1, setSelected1] = useState<boolean>(false);
```

This tells React whether a tile has been clicked and should be revealed.

---

#### 3. 🧠 Track Selected Values

```ts
const [firstSelectedValue, setFirstSelectedValue] = useState<number>(0);
const [secondSelectedValue, setSecondSelectedValue] = useState<number>(0);
```

These are two new state variables used to **remember the values** from the first and second tiles clicked.

Why 0? Because we need a **default value** that doesn’t interfere with our tile values (which are 1–3).

---

#### 4. 🖱️ `handleTileClick` Function

This is where the new logic happens:

```ts
const handleTileClick = (value: number, setSelected: (val: boolean) => void) => {
  setSelected(true); // Reveal the tile
  
  if (firstSelectedValue === 0) {
    setFirstSelectedValue(value); // First tile selected
  } else {
    if (secondSelectedValue === 0 && value !== firstSelectedValue) {
      setSecondSelectedValue(value); // Second tile selected
    }
  }
};
```

🧠 This function receives:

* `value` → the number on the tile
* `setSelected` → the function that marks the tile as revealed

📝 What it does:

1. Reveals the tile (calls `setSelected(true)`).
2. If `firstSelectedValue` is still `0`, store this tile’s value as the first selection.
3. If `firstSelectedValue` is already filled, and this tile is not the same one again, store it as the second selection.

📌 Note: This is **not checking for a match yet** — we’re just watching what the user clicks.

---

#### 5. 👀 Showing the Selected Values

At the bottom of the screen:

```tsx
<Text style={styles.selectedLabel}>Selected Tiles:</Text>
<Text>First: {firstSelectedValue}</Text>
<Text>Second: {secondSelectedValue}</Text>
```

This helps us **debug** and **visualize** which tiles were selected.

---

### 🧪 Try It Out (Student Instructions)

> Try clicking on two different tiles. Watch what happens below the tiles.

* The numbers on the tiles reveal.
* The **selected values** appear at the bottom.
* Try clicking more tiles — notice the behavior once two values are filled.

---

### 🔁 What’s Missing (On Purpose)

At this stage:

* Tiles stay revealed forever.
* We don’t hide tiles again.
* We don’t check if values match.
* We don’t reset after two selections.

**That’s okay!** Those features will come in the next stages.

---

### 🔍 Summary

| Feature                     | Implemented       |
| --------------------------- | ----------------- |
| Click to reveal tiles       | ✅                 |
| Show number inside tile     | ✅                 |
| Track first selected value  | ✅                 |
| Track second selected value | ✅                 |
| Compare values              | ❌ *(coming soon)* |
| Hide tiles again            | ❌ *(coming soon)* |
| Game logic or feedback      | ❌ *(coming soon)* |

---

Absolutely! Based on everything you've shared, here's a well-structured **Stage 2.2** breakdown that both compares it with Stage 2.1 and explains **why the change is necessary** — in beginner-friendly terms, without skipping the subtlety that makes this transition important to understand.

---

## 🟢 **Stage 2.2: Tracking & Displaying Selected Tile Values (Reliably)**

---

### 🎯 **Goal of this Stage**

We’re continuing the journey toward building a working **tile-matching game**. In Stage 2.1, we started tracking **two selected tiles** and showing their values on screen.

In **Stage 2.2**, we make a small but **important adjustment** to how we do this — so that it works **consistently and correctly**.

---
```tsx
import { useState } from 'react'; 
import { TouchableHighlight, Text, View, StyleSheet } from 'react-native';

export default function App() {
  const [tile1] = useState<number>(Math.floor(Math.random() * 3) + 1);
  const [tile2] = useState<number>(Math.floor(Math.random() * 3) + 1);
  const [tile3] = useState<number>(Math.floor(Math.random() * 3) + 1);
  const [tile4] = useState<number>(Math.floor(Math.random() * 3) + 1);
  const [tile5] = useState<number>(Math.floor(Math.random() * 3) + 1);
  const [tile6] = useState<number>(Math.floor(Math.random() * 3) + 1);

  const [selected1, setSelected1] = useState<boolean>(false);
  const [selected2, setSelected2] = useState<boolean>(false);
  const [selected3, setSelected3] = useState<boolean>(false);
  const [selected4, setSelected4] = useState<boolean>(false);
  const [selected5, setSelected5] = useState<boolean>(false);
  const [selected6, setSelected6] = useState<boolean>(false);
  
  const [tileSelected, setTileSelected] = useState<boolean>(false);
  const [selectionCount, setSelectionCount] = useState<number>(0);

  const [firstSelectedValue, setFirstSelectedValue] = useState<number>(0);
  const [secondSelectedValue, setSecondSelectedValue] = useState<number>(0);

const handleTileClick = (value: number, setTileSelected: (val: boolean) => void) => {
  setTileSelected(true);

  setSelectionCount((prev) => {
    if (prev === 0) {
      setFirstSelectedValue(value);
    } else if (prev === 1) {
      setSecondSelectedValue(value);
    }
    return prev + 1;
  });
};


return (
  <View style={styles.container}>
    <Text style={styles.title}>Matching Game v1</Text> 
    <View style={styles.row}> 
      <TouchableHighlight style={styles.tile} onPress={() => handleTileClick(tile1, setSelected1)}>
        <Text style={styles.tileText}>{selected1 ? tile1 : ''}</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.tile} onPress={() => handleTileClick(tile2, setSelected2)}>
        <Text style={styles.tileText}>{selected2 ? tile2 : ''}</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.tile} onPress={() => handleTileClick(tile3, setSelected3)}>
        <Text style={styles.tileText}>{selected3 ? tile3 : ''}</Text>
      </TouchableHighlight>
    </View>
    <View style={styles.row}> 
      <TouchableHighlight style={styles.tile} onPress={() => handleTileClick(tile4, setSelected4)}>
        <Text style={styles.tileText}>{selected4 ? tile4 : ''}</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.tile} onPress={() => handleTileClick(tile5, setSelected5)}>
        <Text style={styles.tileText}>{selected5 ? tile5 : ''}</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.tile} onPress={() => handleTileClick(tile6, setSelected6)}>
        <Text style={styles.tileText}>{selected6 ? tile6 : ''}</Text>
      </TouchableHighlight>
      </View>
      <Text style={styles.selectedLabel}>Selected Tiles:</Text>
      <Text>First: {firstSelectedValue}</Text>
      <Text>Second: {secondSelectedValue}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fefefe',
    alignItems: 'center',
    padding: 8,
  },
  title: {
    fontSize: 24, 
    marginBottom: 20, 
  },
  row: {
    flexDirection: 'row', 
  },
  tile: {
    width: 80, 
    height: 80, 
    backgroundColor: '#eee', 
    margin: 10, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  tileText: {
    fontSize: 20, 
  },
  selectedLabel: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
```
---

### 🔁 Summary of the Change

In **Stage 2.1**, we updated the selected values (`firstSelectedValue`, `secondSelectedValue`) directly by checking their current state.

But due to how **React handles state updates**, this can cause **unexpected behavior** — especially when clicking tiles quickly.

In **Stage 2.2**, we fix this by using a new state variable called `selectionCount`, and we update it using a **functional updater**. This makes the logic more **predictable** and **reliable**.

---

## 🧠 Side-by-Side Comparison

| 🔧 Feature                     | ✅ Stage 2.1                                                   | ✅ Stage 2.2                                                |
| ------------------------------ | ------------------------------------------------------------- | ---------------------------------------------------------- |
| How selected tiles are tracked | Checks values of `firstSelectedValue` & `secondSelectedValue` | Uses `selectionCount` to determine which value to set      |
| How React state is updated     | Direct assignment (e.g., `setFirstSelectedValue(value)`)      | Functional update (e.g., `setSelectionCount(prev => ...)`) |
| React re-render issue?         | ❌ Can misfire due to stale state                              | ✅ Uses most up-to-date state inside the function           |
| Number of variables added      | 2 (first and second selected values)                          | 3 (`first`, `second`, and `selectionCount`)                |
| Behavior when clicking fast    | May not work reliably                                         | Works reliably, even when clicking tiles quickly           |

---

## 🔍 Understanding the Subtle Problem in Stage 2.1

### The issue:

React **batches state updates**. This means:

* When we call `setFirstSelectedValue(value)`, that update is scheduled — it doesn’t happen instantly.
* If we then immediately check `firstSelectedValue`, it might still be `0` (the old value), even though it’s about to update.

So this code in Stage 2.1 can be unreliable:

```tsx
if (firstSelectedValue === 0) {
  setFirstSelectedValue(value);
} else {
  setSecondSelectedValue(value);
}
```

🧠 **The result**: If you click tiles quickly, React might not update `firstSelectedValue` fast enough, and your logic could think it still hasn’t been selected.

---

## ✅ The Fix in Stage 2.2: Functional State Update

Here’s the updated logic:

```tsx
setSelectionCount((prev) => {
  if (prev === 0) {
    setFirstSelectedValue(value);
  } else if (prev === 1) {
    setSecondSelectedValue(value);
  }
  return prev + 1;
});
```

### Why this works:

* React gives us the **most recent value of `selectionCount`** through the `prev` variable.
* This avoids the problem of checking out-of-date values.
* It makes the click logic **smoother and more reliable**.

---

## 🔎 Understanding `setTileSelected(true)`

In the click handler:

```tsx
onPress={() => handleTileClick(tile1, setSelected1)}
```

We are:

* Passing the tile’s number value (`tile1`)
* Passing the specific `setSelected1` function to the handler

Inside `handleTileClick`, we call `setSelected(true)`:

```tsx
setTileSelected(true); // Reveals the tile visually
```

We are not setting any **specific boolean value** here — we are **passing a function reference** so the handler can reveal the correct tile.

This is a good example of **reusing a single function for many elements**, a key technique in real-world React code.

---

## ✅ What This Stage Achieves

| Functionality                          | ✅ Implemented          |
| -------------------------------------- | ---------------------- |
| Click any tile to reveal its number    | ✅ Yes                  |
| Track value of **first clicked** tile  | ✅ Yes                  |
| Track value of **second clicked** tile | ✅ Yes                  |
| Show both values on screen             | ✅ Yes                  |
| Works correctly even with fast clicks  | ✅ Yes                  |
| Resets after second click?             | ❌ Not yet (next stage) |

---

## 🧪 Try This Out (Student Instructions)

> Click on two tiles. Watch how the bottom text updates:

* First click → `First: X`
* Second click → `Second: Y`
* Try clicking fast — it still works!

This wasn’t guaranteed in Stage 2.1.

---

## 🎓 Teaching Tip: Explaining `setState` and React Rendering

📘 **React renders** components whenever state changes — but **state updates are not immediate**. React schedules them in batches to make your app faster.

To make sure your state-dependent logic runs **at the right time**, you can use a **functional updater**:

```ts
setState((prev) => {
  // Use the actual current value of the state
});
```

This avoids **reading stale values**, which is one of the most common bugs in early React code.

---

You're progressing really thoughtfully through this project — Stage 2.3 and 2.4 reflect a meaningful evolution in how to handle **multi-step user interactions** in React Native, **without yet introducing `useEffect()`**. Here's a full breakdown of the two stages, comparing them, explaining the subtle timing issue, and offering a clean fix—all structured so you can easily teach this to your students.

---

## 🚀 **Stage 2.3 & 2.4 – Building Toward Matching Pairs**

---

### 🎯 **Goal of These Stages**

* Allow the user to select **two tiles** one after the other.
* After selecting two, automatically **reset** the selection count.
* Begin preparing for **match detection** logic.
* Stay away from `useEffect()` for now — keeping the logic procedural and visible.

---

```tsx
const [tileSelected, setTileSelected] = useState<boolean>(false);
const [selectionCount, setSelectionCount] = useState<number>(0);

const [firstSelectedValue, setFirstSelectedValue] = useState<number>(0);
const [secondSelectedValue, setSecondSelectedValue] = useState<number>(0);

// Optional: helper to check match (e.g., in future logic)
const checkMatch = (val1: number, val2: number): boolean => {
  return val1 === val2;
};

const handleTileClick = (value: number, setTileSelected: (val: boolean) => void) => {
  setTileSelected(true);

  setSelectionCount((prev) => {
    if (prev === 0) {
      setFirstSelectedValue(value);
      return prev + 1;
    } else if (prev === 1) {
      setSecondSelectedValue(value);
      // We assume you'll add a useEffect or timeout to compare values here
      return 0; // Reset count to allow a fresh selection round
    }
    return prev; // Safety catch, shouldn't reach this
  });
};
```

---

## 🧱 Stage 2.3: Resetting Selection Count

### ✅ What's New

We make the `selectionCount` loop:

* `0` → `1` (after first selection)
* `1` → `0` (after second selection)

This enables a **repeating pair-selection flow** (without any manual reset by the user).

---

### 🔄 Code Focus (Stage 2.3 Handler)

```tsx
const handleTileClick = (value: number, setTileSelected: (val: boolean) => void) => {
  setTileSelected(true);

  setSelectionCount((prev) => {
    if (prev === 0) {
      setFirstSelectedValue(value);
      return prev + 1;
    } else if (prev === 1) {
      setSecondSelectedValue(value);
      return 0; // Reset for next round
    }
    return prev;
  });
};
```

> ✅ This is simple and clean.
> ❌ But **not yet ready for match detection**, because the `firstSelectedValue` is stale when compared outside this block.

---
**Stage 2.4 - Code**

```tsx
import { useState } from 'react'; 
import { TouchableHighlight, Text, View, StyleSheet } from 'react-native';

export default function App() {
  const [tile1] = useState<number>(Math.floor(Math.random() * 3) + 1);
  const [tile2] = useState<number>(Math.floor(Math.random() * 3) + 1);
  const [tile3] = useState<number>(Math.floor(Math.random() * 3) + 1);
  const [tile4] = useState<number>(Math.floor(Math.random() * 3) + 1);
  const [tile5] = useState<number>(Math.floor(Math.random() * 3) + 1);
  const [tile6] = useState<number>(Math.floor(Math.random() * 3) + 1);

  const [selected1, setSelected1] = useState<boolean>(false);
  const [selected2, setSelected2] = useState<boolean>(false);
  const [selected3, setSelected3] = useState<boolean>(false);
  const [selected4, setSelected4] = useState<boolean>(false);
  const [selected5, setSelected5] = useState<boolean>(false);
  const [selected6, setSelected6] = useState<boolean>(false);
  
  const [tileSelected, setTileSelected] = useState<boolean>(false);
  const [selectionCount, setSelectionCount] = useState<number>(0);

  const [firstSelectedValue, setFirstSelectedValue] = useState<number>(0);
  const [secondSelectedValue, setSecondSelectedValue] = useState<number>(0);

  const [match, setMatch] = useState<boolean>(false);

const handleTileClick = (value: number, setTileSelected: (val: boolean) => void) => {
  setTileSelected(true);

  setSelectionCount((prev) => {
    if (prev === 0) {
      setFirstSelectedValue(value);
      return prev + 1; 
    } else if (prev === 1) {
      setSecondSelectedValue(value);
      return prev - 1; 
    }
  });

  if (firstSelectedValue === secondSelectedValue){ 
    setMatch(true);
  }
};


return (
  <View style={styles.container}>
    <Text style={styles.title}>Matching Game v1</Text> 
    <View style={styles.row}> 
      <TouchableHighlight style={styles.tile} onPress={() => handleTileClick(tile1, setSelected1)}>
        <Text style={styles.tileText}>{selected1 ? tile1 : ''}</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.tile} onPress={() => handleTileClick(tile2, setSelected2)}>
        <Text style={styles.tileText}>{selected2 ? tile2 : ''}</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.tile} onPress={() => handleTileClick(tile3, setSelected3)}>
        <Text style={styles.tileText}>{selected3 ? tile3 : ''}</Text>
      </TouchableHighlight>
    </View>
    <View style={styles.row}> 
      <TouchableHighlight style={styles.tile} onPress={() => handleTileClick(tile4, setSelected4)}>
        <Text style={styles.tileText}>{selected4 ? tile4 : ''}</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.tile} onPress={() => handleTileClick(tile5, setSelected5)}>
        <Text style={styles.tileText}>{selected5 ? tile5 : ''}</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.tile} onPress={() => handleTileClick(tile6, setSelected6)}>
        <Text style={styles.tileText}>{selected6 ? tile6 : ''}</Text>
      </TouchableHighlight>
      </View>
      <Text style={styles.selectedLabel}>Selected Tiles:</Text>
      <Text>First: {firstSelectedValue}</Text>
      <Text>Second: {secondSelectedValue}</Text>
      <Text>{match ? 'yes' : 'no'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fefefe',
    alignItems: 'center',
    padding: 8,
  },
  title: {
    fontSize: 24, 
    marginBottom: 20, 
  },
  row: {
    flexDirection: 'row', 
  },
  tile: {
    width: 80, 
    height: 80, 
    backgroundColor: '#eee', 
    margin: 10, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  tileText: {
    fontSize: 20, 
  },
  selectedLabel: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
```
---
## 🧠 Why We Can’t Compare Immediately (React Pitfall)

In **Stage 2.4**, you tried this:

```tsx
if (firstSelectedValue === secondSelectedValue) {
  setMatch(true);
}
```

But React doesn’t update state **immediately**. So when this comparison runs:

* `firstSelectedValue` is **from the last render**, not the one just set.
* `secondSelectedValue` also hasn't been updated yet.

That means the match check is almost always **a step behind**.

---

## ✅ Stage 2.4 Fix: Compare Inside `setSelectionCount` Callback

Here’s a **working version** of the click handler that compares the two selected values **inside the state update**, using current `firstSelectedValue` and new `value`:

### 💡 Stage 2.4 – Updated `handleTileClick`

```tsx
const handleTileClick = (value: number, setTileSelected: (val: boolean) => void) => {
  setTileSelected(true);

  setSelectionCount((prev) => {
    if (prev === 0) {
      setFirstSelectedValue(value);
      setMatch(false); // Reset match each new round
      return prev + 1;
    } else if (prev === 1) {
      setSecondSelectedValue(value);

      // ✅ Compare right here: use firstSelectedValue + new value
      if (firstSelectedValue === value) {
        setMatch(true);
      } else {
        setMatch(false);
      }

      return 0; // Reset for next pair
    }
    return prev;
  });
};
```

---

## 📊 Stage 2.3 vs. 2.4 – Comparison Table

| Feature                             | Stage 2.3                                 | Stage 2.4                                                     |
| ----------------------------------- | ----------------------------------------- | ------------------------------------------------------------- |
| Resets selection count after 2 taps | ✅ Yes                                     | ✅ Yes                                                         |
| Tracks two selected values          | ✅ Yes                                     | ✅ Yes                                                         |
| Performs match logic                | ❌ Not yet                                 | ✅ Yes — inside state callback                                 |
| Safe from stale state comparison    | ❌ No — uses outdated `firstSelectedValue` | ✅ Yes — compares `value` against current `firstSelectedValue` |
| Prepares for further logic          | ✅ Start                                   | ✅ Sets up perfectly for delay or animation next               |

---

## 👨‍🏫 Teaching Tip – Explaining This to Students

> “React doesn’t update state immediately — it *schedules* changes. So if you update a variable and try to read it right away, you’re actually seeing the old value.”

> “To fix that, we use React’s `setState(prev => {...})` format. It lets us read the *actual latest value* and do things like compare, decide, or even reset something — all inside a single block.”

---

## ✅ What Stage 2.4 Accomplishes

| Goal                               | Achieved? |
| ---------------------------------- | --------- |
| Select one tile                    | ✅         |
| Select second tile                 | ✅         |
| Reset after two selections         | ✅         |
| Track first and second tile values | ✅         |
| Check if the two values match      | ✅         |
| Show "yes"/"no" on match outcome   | ✅         |

---

## 🎯 **Stage 2.4.1 — Introducing Timed Feedback with `setTimeout()`**

---

### 🧩 What We’ve Done So Far (Recap)

In **Stage 2.4**, we successfully:

* Tracked tile selections in pairs using `selectionCount`
* Displayed the values of the selected tiles
* Compared the two selected values to determine if they **match**
* Updated a `match` variable to show `"yes"` or `"no"` on screen

### 🐞 But... There’s a Subtle Bug

Students may notice:

> “If I match a pair, I see **‘yes’**… but when I move on and select the next pair, I don’t really see **‘no’** — or it flashes too quickly.”

### 🧠 Why This Happens

This is due to how **React handles state updates**:

* When you click a tile, `setMatch()` updates the match status.
* But when you **quickly select the next tile**, it **overwrites the previous state** before the screen had a chance to clearly display `"no"`.
* React is **fast** — faster than human eyes.

---

## ⏱ Introducing: `setTimeout()` — *A Short Pause for the Brain*

### 🪄 Real-World Analogy:

> Imagine a game show host asking:
> “Is it a match?”
> **They pause briefly**, look at the audience… then say “YES!” or “NO!”

Without that pause, the show feels rushed — and confusing.

Similarly, our game needs a small **delay** after a tile pair is selected, so the player can **see the result** before it resets or moves on.

That’s exactly what `setTimeout()` lets us do.

---

## 🛠️ Code Edit Required in `handleTileClick`

We are modifying the logic in the case where a second tile is selected (i.e., when `selectionCount === 1`) to **delay the reset of the game state** so that feedback (yes/no) remains visible for 1 second.

### 🆕 Updated `handleTileClick`:

```tsx
const handleTileClick = (value: number, setTileSelected: (val: boolean) => void) => {
  setTileSelected(true);

  setSelectionCount((prev) => {
    if (prev === 0) {
      setFirstSelectedValue(value);
      setMatch(false); // reset feedback early
      return prev + 1;
    } else if (prev === 1) {
      setSecondSelectedValue(value);

      const isMatch = firstSelectedValue === value;
      setMatch(isMatch); // show feedback

      // 🕒 NEW: Wait 1 second before resetting
      setTimeout(() => {
        // Reset selected values
        setFirstSelectedValue(0);
        setSecondSelectedValue(0);
        setMatch(false); // Optional: clear result after feedback

        // Reset all tile selections
        setSelected1(false);
        setSelected2(false);
        setSelected3(false);
        setSelected4(false);
        setSelected5(false);
        setSelected6(false);
      }, 1000); // 1000ms = 1 second

      return 0; // restart the selectionCount loop
    }

    return prev;
  });
};
```

---

## 🔍 What This Fix Does

* Compares the first and second values.
* Shows **"yes"** or **"no"** on screen.
* Delays resetting the game board for 1 second.
* Gives players time to see and understand the feedback.
* Continues the two-tile selection loop.

---
## Complete Code with Timeout included 

```tsx
import { useState } from 'react'; 
import { TouchableHighlight, Text, View, StyleSheet } from 'react-native';

export default function App() {
  const [tile1] = useState<number>(Math.floor(Math.random() * 3) + 1);
  const [tile2] = useState<number>(Math.floor(Math.random() * 3) + 1);
  const [tile3] = useState<number>(Math.floor(Math.random() * 3) + 1);
  const [tile4] = useState<number>(Math.floor(Math.random() * 3) + 1);
  const [tile5] = useState<number>(Math.floor(Math.random() * 3) + 1);
  const [tile6] = useState<number>(Math.floor(Math.random() * 3) + 1);

  const [selected1, setSelected1] = useState<boolean>(false);
  const [selected2, setSelected2] = useState<boolean>(false);
  const [selected3, setSelected3] = useState<boolean>(false);
  const [selected4, setSelected4] = useState<boolean>(false);
  const [selected5, setSelected5] = useState<boolean>(false);
  const [selected6, setSelected6] = useState<boolean>(false);
  
  const [tileSelected, setTileSelected] = useState<boolean>(false);
  const [selectionCount, setSelectionCount] = useState<number>(0);

  const [firstSelectedValue, setFirstSelectedValue] = useState<number>(0);
  const [secondSelectedValue, setSecondSelectedValue] = useState<number>(0);

  const [match, setMatch] = useState<boolean>(false);

const handleTileClick = (value: number, setTileSelected: (val: boolean) => void) {
  setTileSelected(true);

  setSelectionCount((prev) => {
    if (prev === 0) {
      setFirstSelectedValue(value);
      setMatch(false); // reset match indicator
      return prev + 1; 
    } else if (prev === 1) {
      setSecondSelectedValue(value);
      if (firstSelectedValue === value) {
         setMatch(true);
      } else {
         setMatch(false);
		
	 setTimeout(() => {
            setSelected1(false); 
            setSelected2(false);
            setSelected3(false);
            setSelected4(false);
            setSelected5(false);
            setSelected6(false);
         },800);

      }
      return 0; 
    }
    return prev;
  });

  console.log("1st & 2nd: " + firstSelectedValue + " - " + secondSelectedValue); 
  console.log("count: " + selectionCount);
};


return (
  <View style={styles.container}>
    <Text style={styles.title}>Matching Game v1</Text> 
    <View style={styles.row}> 
      <TouchableHighlight style={styles.tile} onPress={() => handleTileClick(tile1, setSelected1)}>
        <Text style={styles.tileText}>{selected1 ? tile1 : ''}</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.tile} onPress={() => handleTileClick(tile2, setSelected2)}>
        <Text style={styles.tileText}>{selected2 ? tile2 : ''}</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.tile} onPress={() => handleTileClick(tile3, setSelected3)}>
        <Text style={styles.tileText}>{selected3 ? tile3 : ''}</Text>
      </TouchableHighlight>
    </View>
    <View style={styles.row}> 
      <TouchableHighlight style={styles.tile} onPress={() => handleTileClick(tile4, setSelected4)}>
        <Text style={styles.tileText}>{selected4 ? tile4 : ''}</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.tile} onPress={() => handleTileClick(tile5, setSelected5)}>
        <Text style={styles.tileText}>{selected5 ? tile5 : ''}</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.tile} onPress={() => handleTileClick(tile6, setSelected6)}>
        <Text style={styles.tileText}>{selected6 ? tile6 : ''}</Text>
      </TouchableHighlight>
      </View>
      <Text style={styles.selectedLabel}>Selected Tiles:</Text>
      <Text>First: {firstSelectedValue}</Text>
      <Text>Second: {secondSelectedValue}</Text>
      <Text>Matched: {match ? 'yes' : 'no'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fefefe',
    alignItems: 'center',
    padding: 8,
  },
  title: {
    fontSize: 24, 
    marginBottom: 20, 
  },
  row: {
    flexDirection: 'row', 
  },
  tile: {
    width: 80, 
    height: 80, 
    backgroundColor: '#eee', 
    margin: 10, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  tileText: {
    fontSize: 20, 
  },
  selectedLabel: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
```
---

## 📚 Key Teaching Takeaway

> React is great at updating UI fast — but sometimes it’s **too fast** for real human interactions.
> `setTimeout()` is a tool we use when we want to **pause and let people see what’s happening**, before moving on.

This sets us up perfectly for later stages where we’ll use `useEffect()` to monitor changes and trigger logic when certain states (like both tiles being selected) are reached.

---
