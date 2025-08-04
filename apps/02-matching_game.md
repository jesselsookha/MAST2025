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
