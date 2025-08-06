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

