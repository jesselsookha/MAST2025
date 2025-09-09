# X & O Game 

## Welcome to the X & O Game Walkthrough!

This guide will walk you through the development of a simple X & O / Tic-Tac-Toe game using React Native and TypeScript.

Each stage introduces new concepts, building up from layout and navigation to game logic and data persistence.

### What will you learn?
- How to structure a React Native app using components and props
- How to manage state and user interactions
- How to detect game outcomes using algorithms
- How to store and retrieve data using AsyncStorage

### Tips:
- Read the annotations carefully — they explain not just what the code does, but why it matters.
- Try modifying the code after each stage to test your understanding.
- Use the diagrams and examples to visualize how the app works behind the scenes.

| Stage | Focus Area |
|-------|------------|
| 0     | Basic layout |
| 1     | Navigation | 
| 2     | Screen content | 
| 2.1   | Styling & Fonts | 
| 3     | Game state | 
| 4     | Win detection | 
| 5     | Reset & Score tracking |

Let’s begin with Stage 0: Building the basic layout.

---

## Stage 0 - Empty Template - Initial Layout and Styling 

### Goal 

Create the initial screen layout using React Native components and styles. This sets the foundation for the game board and player input screens.

### Key Concepts 

* `View` and `Text` components
* `StyleSheet.create`
* Flexbox layout
* Basic styling properties

```typescript 
import {View, Text, StyleSheet} from 'react-native'; 

function App() {
  return(
    <View style={styles.container}> 
      <Text>X & O Game</Text>   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 			// 📌 Takes up the full screen height
    backgroundColor: '#fefefe', // 📌 Light background for contrast - initial
    justifyContent: 'center', 	// 📌 Vertically centers content
    alignItems: 'center',  	// 📌 Horizontally centers content
    padding: 16, 
  },
});


export default App; 
```
---

## Stage 1 - Navigation and Routing

This stage introduces the foundational navigation logic using React Navigation. The goal is to help you understand how screens are defined, how navigation is triggered, and how the app flows between views.

---

### Breakdown of Key Concepts

#### 1. **Navigation Setup**
```tsx
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
```
- These two imports are essential for enabling navigation.
- `NavigationContainer` wraps the entire app and manages navigation state.
- `createNativeStackNavigator` sets up a stack-based navigation flow — ideal for screen-to-screen transitions.

#### 2. **Route Typing**
```tsx
type RootStackParamList = {
  Home: undefined;
  Game: undefined;
};
```
- This defines the available routes and their expected parameters.
- Both `Home` and `Game` currently expect no parameters (`undefined`), keeping things simple for now.

#### 3. **Stack Navigator Instance**
```tsx
const Stack = createNativeStackNavigator<RootStackParamList>();
```
- This creates the navigator instance, typed with `RootStackParamList` to ensure route names and parameters are used correctly.

---

### HomeScreen Component

```tsx
function HomeScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Text>X & O Game</Text>
      <TouchableOpacity 
        onPress={() =>
          navigation.navigate('Game')
        }
      >
        <Text>START GAME</Text>
      </TouchableOpacity>
    </View>
  );
}
```

- The `HomeScreen` is the entry point of the app.
- `navigation.navigate('Game')` triggers a transition to the `GameScreen`.
- This is a clean example of how user interaction (pressing a button) leads to navigation.

---

### GameScreen Component

```tsx
function GameScreen() {
  return (
    <View style={styles.container}>
      <Text>Game Screen</Text>
    </View>
  );
}
```

- A placeholder screen that confirms navigation worked.
- This will later evolve to include game logic, but for now it reinforces the routing flow.

---

### App Component

```tsx
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: true }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

- This wraps the app in a navigation context.
- The `Stack.Navigator` defines the available screens and sets `Home` as the default.
- `headerShown: true` ensures the native header is visible — useful for orientation and back navigation.

---

### Styling

```tsx
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },  
});
```

- A simple layout that centers content and provides padding.
- This keeps the UI clean and focused on the navigation logic.

---

### Points to Consider 

- **Navigation is event-driven**: triggered by user actions like button presses.
- **Stack-based flow**: screens are layered, and users can move forward or back.
- **Type safety**: even with `undefined` parameters, route typing sets the stage for future complexity.

---

### Complete Code 

```typescript 
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Game: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

function HomeScreen({ navigation }: { navigation: any }) {

  return (
    <View style={styles.container}>
      <Text>X & O Game</Text>
      <TouchableOpacity 
        onPress={() =>
          navigation.navigate('Game')
        }
      >
        <Text>START GAME</Text>
      </TouchableOpacity>
    </View>
  );
}

function GameScreen() {
  return (
    <View style={styles.container}>
      <Text>Game Screen</Text>
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: true }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },  
});

export default App;
``` 
---

## Stage 2 – Compiling Screen Content

This stage introduces:
- **User input** via `TextInput`
- **Parameter passing** between screens
- **Basic component rendering** with a custom `Cell` function
- **Use of `useState`** to manage local state

---

### Key Additions and Concepts

#### 1. **Player Input on HomeScreen**

```tsx
const [player1, setPlayer1] = useState<string>('');
const [player2, setPlayer2] = useState<string>('');
```

- These `useState` hooks store the names entered by each player.
- The `TextInput` fields are bound to these states, allowing real-time updates.

```tsx
<TextInput
  placeholder="Player 1"
  value={player1}
  onChangeText={setPlayer1}
/>
```

- This pattern introduces controlled components — a key React concept where UI elements reflect and update state.

---

#### 2. **Navigation with Parameters**

```tsx
navigation.navigate('Game', { player1, player2 });
```

- This passes the player names to the `GameScreen` via route parameters.
- It builds on Stage 1’s navigation logic, now with meaningful data transfer.

---

#### 3. **Receiving Parameters in GameScreen**

```tsx
const { player1, player2 } = route.params;
```

- This extracts the passed values from the `route` object.
- Reinforces the idea that screens can be dynamic and context-aware.

---

#### 4. **Rendering a Grid of Cells**

```tsx
{Array.from({ length: 9 }).map((_, i) => Cell(i))}
```

- This generates 9 cells, an attempt to simulate a 3×3 grid that is not implemented yet.
- The `Cell` (user-defined component) function uses `index` to determine its position and symbol.

```tsx
function Cell(index: number) {
  const row = Math.floor(index / 3);
  const col = index % 3;

  return (
    <TouchableOpacity key={index}>
      <Text>{index % 2 === 0 ? 'X' : 'O'}</Text>
    </TouchableOpacity>
  );
}
```

- While currently static, this sets the stage for future interactivity.
- The alternating `'X'` and `'O'` logic introduces conditional rendering.

---

### Points to Consider

- **State and props**: You begin to see how state drives UI and how props (via navigation) pass data between screens.
- **Component abstraction**: `Cell()` introduces the idea of reusable UI logic, even if not yet interactive.
- **Mapping arrays**: A foundational concept for rendering lists or grids in React Native.
- **Parameter typing**: `Game: { player1: string; player2: string }` in `RootStackParamList` reinforces type safety and clarity.

---

### Complete Code 

```typescript 
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Game: { player1: string; player2: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

// user-defined component 
function Cell(index: number) {
  const row: number = Math.floor(index / 3);
  const col: number = index % 3;

  return (
    <TouchableOpacity key={index}>
      <Text>
        {index % 2 === 0 ? 'X' : 'O'}
      </Text>
    </TouchableOpacity>
  );
}

function HomeScreen({ navigation }: { navigation: any }) {
  const [player1, setPlayer1] = useState<string>('');
  const [player2, setPlayer2] = useState<string>('');

  return (
    <View style={styles.container}>
      <Text>X & O Game</Text>
      <TextInput
        placeholder="Player 1"
        placeholderTextColor="#90A4AE"
        value={player1}
        onChangeText={setPlayer1}
      />
      <TextInput
        placeholder="Player 2"
        placeholderTextColor="#90A4AE"
        value={player2}
        onChangeText={setPlayer2}
      />

      <TouchableOpacity 
        onPress={() =>
          navigation.navigate('Game', { player1, player2 })
        }
      >
        <Text>START GAME</Text>
      </TouchableOpacity>
    </View>
  );
}

function GameScreen({ route }: { route: any }) {
  const { player1, player2 } = route.params;

  return (
    <View style={styles.container}>
      <Text>
        {player1} vs {player2}
      </Text>
      <View>
        {Array.from({ length: 9 }).map((_, i) => Cell(i))}
      </View>
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: true }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },  
});

export default App;
```
---

## Stage 2.1 - Style & Fonts Implemented

Let’s walk through this stage with a focus on how it supports both aesthetic and cognitive scaffolding.

### Why This Step Matters

Before introducing game logic, this stage:
- **Elevates visual clarity**, helping to distinguish UI elements.
- **Reinforces component identity** (e.g., X vs O) through colour and typography.
- **Introduces external assets** (Google Fonts) in a controlled way.
- **Prepares for layout logic** by showing how styling interacts with structure.

---

### Key Enhancements

#### 1. **Material-Inspired Colour Palette**
```tsx
const COLOURS = {
  bg:      '#E1F5FE',   // Cyan 50
  border:  '#4DD0E1',   // Cyan 300
  x:       '#01579B',   // Blue 900
  o:       '#F06292',   // Pink 300
  heading: '#006064',   // Cyan 900
};
```
- These choices are bright, accessible, and semantically meaningful.
- They subtly reinforce the X/O distinction and give the app a playful tone.

---

#### 2. **Google Fonts Integration**
```tsx
import { useFonts, AlfaSlabOne_400Regular } from '@expo-google-fonts/alfa-slab-one';
```
- Adds personality and consistency to headings and game elements.
- `AlfaSlabOne` is bold and expressive — perfect for a game interface.

---

#### 3. **Styled Inputs and Buttons**
```tsx
<TextInput style={styles.input} ... />
<TouchableOpacity style={styles.button} ... />
```
- Rounded borders, padding, and colour contrast improve usability.
- These elements now feel like part of a cohesive design system.

---

#### 4. **Grid Cell Styling**
```tsx
style={[
  styles.cell,
  row !== 0 && { borderTopWidth: 1 },
  col !== 0 && { borderLeftWidth: 1 },
  { borderColor: COLOURS.border },
]}
```
- This logic creates a visible 3×3 grid without hardcoding borders.
- It introduces **conditional styling** — a powerful layout technique.
- Please also note the styles are contained within [] square brackets, noting a combination of styles being applied. 

---

#### 5. **Typography for Game Elements**
```tsx
<Text style={index % 2 === 0 ? styles.cellTextX : styles.cellTextO}>
```
- Differentiates X and O visually using colour and font.
- Reinforces the idea of **semantic styling** — where style reflects meaning.

---

### Points to consider

- **Styling is logic-driven**: You see how layout and appearance are controlled by code, not just design.
- **Fonts and colours are assets**: This introduces external dependencies and how to manage them.
- **Component identity is visual**: X and O are not just characters — they’re styled entities with distinct roles.

---

### Complete Code 

```typescript
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppLoading from 'expo-app-loading';
import { useFonts, AlfaSlabOne_400Regular } from '@expo-google-fonts/alfa-slab-one';

// Bright Material Palette 
const COLOURS = {
  bg:      '#E1F5FE',   // background  Cyan 50
  border:  '#4DD0E1',   // border      Cyan 300
  x:       '#01579B',   // X character Blue 900
  o:       '#F06292',   // O character Pink 300
  heading: '#006064',   // title       Cyan 900
};

type RootStackParamList = {
  Home: undefined;
  Game: { player1: string; player2: string };
};
const Stack = createNativeStackNavigator<RootStackParamList>();

function HomeScreen({ navigation }: { navigation: any }) {
  const [player1, setPlayer1] = useState<string>('');
  const [player2, setPlayer2] = useState<string>('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>X & O Game</Text>
      <TextInput
        style={styles.input}
        placeholder="Player 1"
        placeholderTextColor="#90A4AE"
        value={player1}
        onChangeText={setPlayer1}
      />
      <TextInput
        style={styles.input}
        placeholder="Player 2"
        placeholderTextColor="#90A4AE"
        value={player2}
        onChangeText={setPlayer2}
      />
      <TouchableOpacity 
        style={styles.button}
        onPress={() =>
          navigation.navigate('Game', { player1, player2 })
        }
      >
        <Text style={styles.buttonText}>START GAME</Text>
      </TouchableOpacity>
    </View>
  );
}

function Cell(index: number) {
  const row: number = Math.floor(index / 3);
  const col: number = index % 3;

  return (
    <TouchableOpacity
      key={index}
      style={[
        styles.cell,
        row !== 0 && { borderTopWidth: 1 },
        col !== 0 && { borderLeftWidth: 1 },
        { borderColor: COLOURS.border },
      ]}
    >
      <Text style={index % 2 === 0 ? styles.cellTextX : styles.cellTextO}>
        {index % 2 === 0 ? 'X' : 'O'}
      </Text>
    </TouchableOpacity>
  );
}

function GameScreen({ route }: { route: any }) {
  const { player1, player2 } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.players}>
        {player1} vs {player2}
      </Text>
      <View style={styles.board}>
        {Array.from({ length: 9 }).map((_, i) => Cell(i))}
      </View>
    </View>
  );
}

function App() {
  const [fontsLoaded] = useFonts({ AlfaSlabOne_400Regular });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: true }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOURS.bg,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontFamily: 'AlfaSlabOne_400Regular',
    fontSize: 36,
    color: COLOURS.heading,
    marginBottom: 24,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: COLOURS.border,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginVertical: 8,
    color: COLOURS.heading,
    backgroundColor: '#FFFFFF',
  },
  button: {
    width: '80%',
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOURS.o,
    height: 45,
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: 'AlfaSlabOne_400Regular',
    fontSize: 20,
    color: '#fff',
    letterSpacing: 3, 
  },
  players: {
    fontFamily: 'AlfaSlabOne_400Regular',
    fontSize: 24,
    color: COLOURS.heading,
    marginBottom: 16,
  },
  board: {
    width: 300,
    height: 300,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cell: {
    width: 100,
    height: 100,
    backgroundColor: COLOURS.bg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellTextX: {
    fontFamily: 'AlfaSlabOne_400Regular',
    fontSize: 48,
    color: COLOURS.x,
  },
  cellTextO: {
    fontFamily: 'AlfaSlabOne_400Regular',
    fontSize: 48,
    color: COLOURS.o,
  },
});

export default App;
```

### Current App Analysis

Implementation includes:
- Navigation between Home and Game screens
- Player name input fields
- Static game board with placeholder X/O markers
- Google Fonts integration
- Basic styling with a colour scheme

### Logical Progression Preview

#### Game State Management
We need to manage the game state:
- Current player tracking
- Board state (array of 9 elements)
- Game status (playing, won, draw)

#### Interactive Game Board
Make the cells respond to player interactions:
- Handle cell presses
- Update board state with current player's mark
- Alternate between X and O players

#### Win Condition Detection
Implement logic to check for:
- Horizontal wins
- Vertical wins
- Diagonal wins
- Draw condition

#### Game Status Display
Show information about:
- Current player's turn
- Winner announcement
- Draw notification

#### Game Reset Functionality
Add ability to:
- Restart the game
- Return to home screen

#### Score Tracking
Keep track of wins for each player

---

## Stage 3 - Implementation of Game State Management

This stage introduces **interactivity and logic**, allowing you to:
- Track player turns
- Update the board state
- Render dynamic content based on user actions

It’s the first time you see how **state drives behaviour**, not just appearance.

---

Let's start by implementing the game state. Update the GameScreen function


```typescript
function GameScreen({ route }: { route: any }) {
  const { player1, player2 } = route.params;
  const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X');
  const [board, setBoard] = useState<Array<'X' | 'O' | null>>(
    Array(9).fill(null)
  );
  const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'draw'>('playing');

  // Update the user-defined Cell component to accept props & contained inside of GameScreen function
  const Cell = ({ index, value, onPress }: { 
    index: number; 
    value: 'X' | 'O' | null;
    onPress: () => void;
  }) => {
    const row: number = Math.floor(index / 3);
    const col: number = index % 3;

    return (
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.cell,
          row !== 0 && { borderTopWidth: 1 },
          col !== 0 && { borderLeftWidth: 1 },
          { borderColor: COLOURS.border },
        ]}
      >
        <Text style={value === 'X' ? styles.cellTextX : styles.cellTextO}>
          {value || ''}
        </Text>
      </TouchableOpacity>
    );
  };

  // Handle cell press
  const handleCellPress = (index: number) => {
    if (board[index] || gameStatus !== 'playing') return;
    
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    
    // Switch player
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.players}>
        {player1} (X) vs {player2} (O)
      </Text>
      <Text style={styles.status}>
        Current Player: {currentPlayer === 'X' ? player1 : player2}
      </Text>
      <View style={styles.board}>
        {board.map((value, index) => (
          <Cell 
            key={index}
            index={index}
            value={value}
            onPress={() => handleCellPress(index)}
          />
        ))}
      </View>
    </View>
  );
}
```

**After implementing this step, you can test that:**
1. Tap on cells to place X and O markers
2. The turns alternate correctly between players
3. The current player display updates appropriately

---

### Logical Flow of Concepts

#### 1. **State Initialization**
```tsx
const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X');
const [board, setBoard] = useState<Array<'X' | 'O' | null>>(Array(9).fill(null));
const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'draw'>('playing');
```

- These three states form the **core game logic**.
- You begin to understand how React tracks and responds to changes over time.
- The use of union types (`'X' | 'O' | null`) reinforces type safety and clarity.

---

#### 2. **Component Encapsulation**
```tsx
const Cell = ({ index, value, onPress }: { ... }) => { ... }
```

- Moving `Cell` inside `GameScreen` makes it context-aware and scoped.
- This introduces **component composition** — a key React pattern.
- The use of props (`index`, `value`, `onPress`) shows how components receive data and behaviour.

---

#### 3. **Event Handling Logic**
```tsx
const handleCellPress = (index: number) => { ... }
```

- This function introduces **guard clauses** (`if (board[index] || gameStatus !== 'playing') return;`) — a clean way to prevent invalid actions.
- The use of `newBoard = [...board]` reinforces **immutability**, a foundational React concept.
- Switching players with `setCurrentPlayer(...)` demonstrates **state transitions**.

---

#### 4. **Dynamic Rendering**
```tsx
{board.map((value, index) => (
  <Cell key={index} ... />
))}
```

- This shows how **data structures drive UI**.
- You begin to see how arrays can be mapped into components — a powerful abstraction for scalable interfaces.

---

#### 5. **Status Feedback**
```tsx
<Text style={styles.status}>
  Current Player: {currentPlayer === 'X' ? player1 : player2}
</Text>
```

- This reinforces the idea that **UI reflects state**.
- It also introduces **conditional rendering** based on logic — a concept that will be essential in win detection and game resets.

---

### Pedagogical Emphasis

| Concept | Why It Matters | How It Builds Understanding |
|--------|----------------|-----------------------------|
| `useState` | Tracks dynamic data | Shows how React responds to user actions |
| Immutability | Prevents bugs and ensures re-rendering | Reinforces safe data handling |
| Props | Passes data into components | Prepares students for modular design |
| Event handling | Connects UI to logic | Makes the app feel responsive and alive |
| Conditional rendering | Reflects logic in UI | Prepares for win/draw detection |

---

#### Complete Code 

```typescript 
import { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppLoading from 'expo-app-loading';
import { useFonts, AlfaSlabOne_400Regular } from '@expo-google-fonts/alfa-slab-one';

// Bright Material Palette 
const COLOURS = {
  bg:      '#E1F5FE',   // background  Cyan 50
  border:  '#4DD0E1',   // border      Cyan 300
  x:       '#01579B',   // X character Blue 900
  o:       '#F06292',   // O character Pink 300
  heading: '#006064',   // title       Cyan 900
};

type RootStackParamList = {
  Home: undefined;
  Game: { player1: string; player2: string };
};
const Stack = createNativeStackNavigator<RootStackParamList>();

function HomeScreen({ navigation }: { navigation: any }) {
  const [player1, setPlayer1] = useState<string>('');
  const [player2, setPlayer2] = useState<string>('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>X & O Game</Text>
      <TextInput
        style={styles.input}
        placeholder="Player 1"
        placeholderTextColor="#90A4AE"
        value={player1}
        onChangeText={setPlayer1}
      />
      <TextInput
        style={styles.input}
        placeholder="Player 2"
        placeholderTextColor="#90A4AE"
        value={player2}
        onChangeText={setPlayer2}
      />
      <TouchableOpacity 
        style={styles.button}
        onPress={() =>
          navigation.navigate('Game', { player1, player2 })
        }
      >
        <Text style={styles.buttonText}>START GAME</Text>
      </TouchableOpacity>
    </View>
  );
}

function GameScreen({ route }: { route: any }) {
  const { player1, player2 } = route.params;

  const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X');
  const [board, setBoard] = useState<Array<'X' | 'O' | null>>(Array(9).fill(null));
  const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'draw'>('playing');

  // Define props type for Cell component - declared locally inside of GameScreen()
  type CellProps = {
    index: number; 		// unique id for each cell 
    value: 'X' | 'O' | null;    // determine if the value is 'X', 'O' or 'null'
    onPress: () => void;        // onPress event to be used in Component for tO
  };

  // Cell component with properly typed props
  const Cell = ({ index, value, onPress }: CellProps) => {
    const row: number = Math.floor(index / 3);
    const col: number = index % 3;

    return (
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.cell,
          row !== 0 && { borderTopWidth: 1 },
          col !== 0 && { borderLeftWidth: 1 },
          { borderColor: COLOURS.border },
        ]}
      >
        <Text style={value === 'X' ? styles.cellTextX : styles.cellTextO}>
          {value || ''}
        </Text>
      </TouchableOpacity>
    );
  };

  // Handle cell press
  const handleCellPress = (index: number) => {
    if (board[index] || gameStatus !== 'playing') return;
    
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    
    // Switch player
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.players}>
        {player1} (X) vs {player2} (O)
      </Text>
      <Text style={styles.status}>
        Current Player: {currentPlayer === 'X' ? player1 : player2}
      </Text>
      <View style={styles.board}>
        {board.map((value, index) => (
          <Cell 
            key={index}
            index={index}
            value={value}
            onPress={() => handleCellPress(index)}
          />
        ))}
      </View>
    </View>
  );
}

function App() {
  const [fontsLoaded] = useFonts({ AlfaSlabOne_400Regular });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: true }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOURS.bg,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontFamily: 'AlfaSlabOne_400Regular',
    fontSize: 36,
    color: COLOURS.heading,
    marginBottom: 24,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: COLOURS.border,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginVertical: 8,
    color: COLOURS.heading,
    backgroundColor: '#FFFFFF',
  },
  button: {
    width: '80%',
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOURS.o,
    height: 45,
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: 'AlfaSlabOne_400Regular',
    fontSize: 20,
    color: '#fff',
    letterSpacing: 3, 
  },
  players: {
    fontFamily: 'AlfaSlabOne_400Regular',
    fontSize: 24,
    color: COLOURS.heading,
    marginBottom: 16,
  },
  board: {
    width: 300,
    height: 300,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cell: {
    width: 100,
    height: 100,
    backgroundColor: COLOURS.bg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellTextX: {
    fontFamily: 'AlfaSlabOne_400Regular',
    fontSize: 48,
    color: COLOURS.x,
  },
  cellTextO: {
    fontFamily: 'AlfaSlabOne_400Regular',
    fontSize: 48,
    color: COLOURS.o,
  },
  status: {
    fontFamily: 'AlfaSlabOne_400Regular',
    fontSize: 16,
    color: COLOURS.heading,
    marginBottom: 24,
  },
});

export default App;
```

### Code Review Key Changes in Updated Code

#### 1. Type Definition for Cell Component
```typescript
type CellStruct = {
  index: number; 
  value: "X" | "O" | null; 
  onPress: () => void;
};
```
This creates a custom type that defines the props expected by the Cell component, making the code more type-safe and self-documenting.

#### 2. Game State Management
```typescript
const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X');
const [board, setBoard] = useState<Array<'X' | 'O' | null>>(Array(9).fill(null));
const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'draw'>('playing');
```
- **currentPlayer**: Tracks whose turn it is (X or O)
- **board**: Represents the 3x3 game board as an array of 9 elements
- **gameStatus**: Tracks whether the game is ongoing, won, or drawn

#### 3. Improved Cell Component
The Cell component is now defined inside GameScreen and accepts props:
- `index`: Position in the board array (0-8)
- `value`: What's in the cell (X, O, or null)
- `onPress`: Function to call when the cell is tapped

#### 4. Cell Press Handler
```typescript
const handleCellPress = (index: number) => {
  if (board[index] || gameStatus !== 'playing') return;
  
  const newBoard = [...board];
  newBoard[index] = currentPlayer;
  setBoard(newBoard);
  
  // Switch player
  setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
};
```
This function:
1. Prevents action if cell is already occupied or game is over
2. Creates a copy of the board (important for React state updates)
3. Updates the board with current player's mark
4. Switches to the other player

#### 5. Dynamic Rendering
```typescript
{board.map((value, index) => (
  <Cell 
    key={index}
    index={index}
    value={value}
    onPress={() => handleCellPress(index)}
  />
))}
```
This maps through the board state array and creates a Cell component for each position, passing the appropriate values and functions.

#### 6. Status Display
```typescript
<Text style={styles.status}>
  Current Player: {currentPlayer === 'X' ? player1 : player2}
</Text>
```
Shows which player's turn it is by checking the currentPlayer state.

#### Points to Consider

1. **State Management**: Explain how useState hooks track the game's changing data
2. **Immutability**: Show why we create a new board array instead of modifying the existing one
3. **Conditional Rendering**: How the Cell component shows different content based on its value
4. **Event Handling**: How the onPress prop connects user interaction to state changes
5. **Mapping Arrays**: How we transform the board state array into UI components

---

## Stage 4 - Win Condition Detection - Alternative Approaches

This stage deepens the game logic by introducing **outcome evaluation** — a key moment where students shift from reactive state updates to **proactive condition checking**.

---

### Logical Flow of Concepts

#### 1. Multiple Algorithmic Approaches

| Approach | Description | Pedagogical Value |
|---------|-------------|-------------------|
| Traditional Array | Hardcoded winning combinations | Familiar, readable, easy to visualize |
| Mathematical Pattern | Index-based row/column/diagonal checks | Encourages spatial reasoning and loop logic |
| Bitmask | Binary representation of board state | Introduces bitwise operations and optimization |
| Matrix Coordinates | 2D array transformation | Bridges flat arrays with grid-based logic |

By presenting these side-by-side, you’re modeling **computational flexibility** — showing that there’s no single “correct” algorithm, only trade-offs.

---

The most common approach uses a nested array of winning combinations. However, there are several alternative ways to implement win condition detection. Let me show you a few different approaches that might be interesting for your students to see.

## Approach 1: The Traditional Winning Combinations Array

Let's start with the traditional approach for comparison:

```typescript
// Traditional approach with winning combinations
const winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6]             // Diagonals
];

const checkWinner = (board: Array<'X' | 'O' | null>): 'X' | 'O' | null => {
  for (const combination of winningCombinations) {
    const [a, b, c] = combination; // destructuring nested array into 3 indexes
    if (board[a] && board[a] === board[b] && board[a] === board[c]) { // check board against combo
      return board[a];
    }
  }
  return null;
};
```

## Approach 2: Mathematical Pattern Recognition

This approach uses mathematical patterns to detect wins without pre-defined combinations:
_Similar to Approach 1 - this is a manual checking of patterns_

```typescript
const checkWinner = (board: Array<'X' | 'O' | null>): 'X' | 'O' | null => {
  // Check rows
  for (let row = 0; row < 3; row++) {
    const start = row * 3;
    if (board[start] && board[start] === board[start + 1] && board[start] === board[start + 2]) {
      return board[start];
    }
  }
  
  // Check columns
  for (let col = 0; col < 3; col++) {
    if (board[col] && board[col] === board[col + 3] && board[col] === board[col + 6]) {
      return board[col];
    }
  }
  
  // Check diagonals
  if (board[0] && board[0] === board[4] && board[0] === board[8]) return board[0];
  if (board[2] && board[2] === board[4] && board[2] === board[6]) return board[2];
  
  return null;
};
```

## Approach 3: Bitmask Approach (Advanced but Interesting)

This is a more advanced approach that uses bitwise operations:

```typescript
// This approach represents the board as bitmasks
const checkWinner = (board: Array<'X' | 'O' | null>): 'X' | 'O' | null => {
  // Convert board to bitmasks for X and O
  let xMask = 0;
  let oMask = 0;
  
  board.forEach((cell, index) => {
    if (cell === 'X') xMask |= (1 << index);
    if (cell === 'O') oMask |= (1 << index);
  });
  
  // Winning patterns as bitmasks
  const winningPatterns = [
    0b111000000, 0b000111000, 0b000000111, // Rows
    0b100100100, 0b010010010, 0b001001001, // Columns
    0b100010001, 0b001010100               // Diagonals
  ];
  
  // Check if any winning pattern matches
  for (const pattern of winningPatterns) {
    if ((xMask & pattern) === pattern) return 'X';
    if ((oMask & pattern) === pattern) return 'O';
  }
  
  return null;
};
```

## Approach 4: Matrix Coordinate Approach

This approach treats the board as a 2D matrix:

```typescript
const checkWinner = (board: Array<'X' | 'O' | null>): 'X' | 'O' | null => {
  // Convert flat array to 2D matrix
  const matrix = [
    [board[0], board[1], board[2]],
    [board[3], board[4], board[5]],
    [board[6], board[7], board[8]]
  ];
  
  // Check rows and columns
  for (let i = 0; i < 3; i++) {
    // Check row i
    if (matrix[i][0] && matrix[i][0] === matrix[i][1] && matrix[i][0] === matrix[i][2]) {
      return matrix[i][0];
    }
    // Check column i
    if (matrix[0][i] && matrix[0][i] === matrix[1][i] && matrix[0][i] === matrix[2][i]) {
      return matrix[0][i];
    }
  }
  
  // Check diagonals
  if (matrix[0][0] && matrix[0][0] === matrix[1][1] && matrix[0][0] === matrix[2][2]) {
    return matrix[0][0];
  }
  if (matrix[0][2] && matrix[0][2] === matrix[1][1] && matrix[0][2] === matrix[2][0]) {
    return matrix[0][2];
  }
  
  return null;
};
```
---

#### 2. Implementation Choice: Mathematical Pattern

This approach is ideal for Stage 4 because:
- It avoids hardcoded arrays, reinforcing **pattern recognition**
- It’s readable and loop-driven, supporting **algorithmic fluency**
- It prepares students for **grid-based reasoning** in future games or simulations

---

### Breakdown of GameScreen Enhancements

#### New State: `winner`
```tsx
const [winner, setWinner] = useState<'X' | 'O' | null>(null);
```
- Tracks who won the game
- Enables conditional rendering of victory messages

#### `checkWinner` Function
- Uses loop logic to check rows and columns
- Uses direct index checks for diagonals
- Returns `'X'`, `'O'`, or `null`

#### `checkDraw` Function
```tsx
return board.every(cell => cell !== null) && !checkWinner(board);
```
- Elegant use of `.every()` for full board check
- Ensures draw is only declared if no winner

#### Updated `handleCellPress`
- Adds win/draw detection after each move
- Updates `gameStatus` and `winner` accordingly
- Preserves immutability and clean state transitions

#### Conditional Rendering of Status
```tsx
{gameStatus === 'won' && (
  <Text style={styles.status}>
    Winner: {winner === 'X' ? player1 : player2}!
  </Text>
)}
```
- Provides immediate feedback to players
- Reinforces the connection between logic and UI

---

### Pedagogical Emphasis

| Concept | Why It Matters | How It Builds Understanding |
|--------|----------------|-----------------------------|
| Algorithmic Comparison | Shows multiple valid solutions | Encourages critical thinking and abstraction |
| Loop Logic | Used in row/column checks | Strengthens control flow reasoning |
| Edge Case Handling | Detects draws and prevents invalid moves | Builds robustness and defensive coding habits |
| State-Driven UI | Reflects game outcome in interface | Reinforces declarative rendering principles |

---

### Reflection Prompts for Current Stage

- “Why might we prefer index-based checks over hardcoded arrays?”
- “How does the draw check ensure fairness?”
- “Can you imagine a 4x4 version of this game? How would the logic change?”
- “Which approach would be easiest to adapt for a multiplayer or AI-driven version?”

---

### Implementation in the GameScreen

Let's implement Approach 2 (Mathematical Pattern) in the GameScreen, as it's a good balance between readability and avoiding hardcoded arrays:

```typescript
function GameScreen({ route }: { route: any }) {
  const { player1, player2 } = route.params;

  const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X');
  const [board, setBoard] = useState<Array<'X' | 'O' | null>>(Array(9).fill(null));
  const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'draw'>('playing');
  const [winner, setWinner] = useState<'X' | 'O' | null>(null);

  // Check for winner
  const checkWinner = (board: Array<'X' | 'O' | null>): 'X' | 'O' | null => {
    // Check rows
    for (let row = 0; row < 3; row++) {
      const start = row * 3;
      if (board[start] && board[start] === board[start + 1] && board[start] === board[start + 2]) {
        return board[start];
      }
    }
    
    // Check columns
    for (let col = 0; col < 3; col++) {
      if (board[col] && board[col] === board[col + 3] && board[col] === board[col + 6]) {
        return board[col];
      }
    }
    
    // Check diagonals
    if (board[0] && board[0] === board[4] && board[0] === board[8]) return board[0];
    if (board[2] && board[2] === board[4] && board[2] === board[6]) return board[2];
    
    return null;
  };

  // Check for draw
  const checkDraw = (board: Array<'X' | 'O' | null>): boolean => {
    return board.every(cell => cell !== null) && !checkWinner(board);
  };

  // Handle cell press
  const handleCellPress = (index: number) => {
    if (board[index] || gameStatus !== 'playing') return;
    
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    
    // Check for winner
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
      setGameStatus('won');
      return;
    }
    
    // Check for draw
    if (checkDraw(newBoard)) {
      setGameStatus('draw');
      return;
    }
    
    // Switch player if game continues
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  // Cell component
  type CellProps = {
    index: number; 
    value: 'X' | 'O' | null;
    onPress: () => void;
  };

  const Cell = ({ index, value, onPress }: CellProps) => {
    const row: number = Math.floor(index / 3);
    const col: number = index % 3;

    return (
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.cell,
          row !== 0 && { borderTopWidth: 1 },
          col !== 0 && { borderLeftWidth: 1 },
          { borderColor: COLOURS.border },
        ]}
      >
        <Text style={value === 'X' ? styles.cellTextX : styles.cellTextO}>
          {value || ''}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.players}>
        {player1} (X) vs {player2} (O)
      </Text>
      
      {gameStatus === 'playing' && (
        <Text style={styles.status}>
          Current Player: {currentPlayer === 'X' ? player1 : player2}
        </Text>
      )}
      
      {gameStatus === 'won' && (
        <Text style={styles.status}>
          Winner: {winner === 'X' ? player1 : player2}!
        </Text>
      )}
      
      {gameStatus === 'draw' && (
        <Text style={styles.status}>
          It's a draw!
        </Text>
      )}
      
      <View style={styles.board}>
        {board.map((value, index) => (
          <Cell 
            key={index}
            index={index}
            value={value}
            onPress={() => handleCellPress(index)}
          />
        ))}
      </View>
    </View>
  );
}
```

### Points to Consider 

1. **Algorithmic Thinking**: Different ways to solve the same problem
2. **Pattern Recognition**: How to identify winning patterns programmatically
3. **Edge Cases**: Handling draws when the board is full but no winner
4. **State Management**: Updating game status based on win/draw conditions
5. **User Feedback**: Displaying appropriate messages for different game states

### Complete Code 

```typescript
import { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppLoading from 'expo-app-loading';
import { useFonts, AlfaSlabOne_400Regular } from '@expo-google-fonts/alfa-slab-one';

// Bright Material Palette 
const COLOURS = {
  bg:      '#E1F5FE',   // background  Cyan 50
  border:  '#4DD0E1',   // border      Cyan 300
  x:       '#01579B',   // X character Blue 900
  o:       '#F06292',   // O character Pink 300
  heading: '#006064',   // title       Cyan 900
};

type RootStackParamList = {
  Home: undefined;
  Game: { player1: string; player2: string };
};
const Stack = createNativeStackNavigator<RootStackParamList>();

function HomeScreen({ navigation }: { navigation: any }) {
  const [player1, setPlayer1] = useState<string>('');
  const [player2, setPlayer2] = useState<string>('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>X & O Game</Text>
      <TextInput
        style={styles.input}
        placeholder="Player 1"
        placeholderTextColor="#90A4AE"
        value={player1}
        onChangeText={setPlayer1}
      />
      <TextInput
        style={styles.input}
        placeholder="Player 2"
        placeholderTextColor="#90A4AE"
        value={player2}
        onChangeText={setPlayer2}
      />
      <TouchableOpacity 
        style={styles.button}
        onPress={() =>
          navigation.navigate('Game', { player1, player2 })
        }
      >
        <Text style={styles.buttonText}>START GAME</Text>
      </TouchableOpacity>
    </View>
  );
}

function GameScreen({ route }: { route: any }) {
  const { player1, player2 } = route.params;

  const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X');
  const [board, setBoard] = useState<Array<'X' | 'O' | null>>(Array(9).fill(null));
  const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'draw'>('playing');
  const [winner, setWinner] = useState<'X' | 'O' | null>(null);

  // Check for winner
  const checkWinner = (board: Array<'X' | 'O' | null>): 'X' | 'O' | null => {
    // Check rows
    for (let row = 0; row < 3; row++) {
      const start = row * 3;
      if (board[start] && board[start] === board[start + 1] && board[start] === board[start + 2]) {
        return board[start];
      }
    }
    
    // Check columns
    for (let col = 0; col < 3; col++) {
      if (board[col] && board[col] === board[col + 3] && board[col] === board[col + 6]) {
        return board[col];
      }
    }
    
    // Check diagonals
    if (board[0] && board[0] === board[4] && board[0] === board[8]) return board[0];
    if (board[2] && board[2] === board[4] && board[2] === board[6]) return board[2];
    
    return null;
  };

  // Check for draw
  const checkDraw = (board: Array<'X' | 'O' | null>): boolean => {
    return board.every(cell => cell !== null) && !checkWinner(board);
  };

  // Handle cell press
  const handleCellPress = (index: number) => {
    if (board[index] || gameStatus !== 'playing') return;
    
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    
    // Check for winner
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
      setGameStatus('won');
      return;
    }
    
    // Check for draw
    if (checkDraw(newBoard)) {
      setGameStatus('draw');
      return;
    }
    
    // Switch player if game continues
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  // Cell component
  type CellProps = {
    index: number; 
    value: 'X' | 'O' | null;
    onPress: () => void;
  };

  const Cell = ({ index, value, onPress }: CellProps) => {
    const row: number = Math.floor(index / 3);
    const col: number = index % 3;

    return (
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.cell,
          row !== 0 && { borderTopWidth: 1 },
          col !== 0 && { borderLeftWidth: 1 },
          { borderColor: COLOURS.border },
        ]}
      >
        <Text style={value === 'X' ? styles.cellTextX : styles.cellTextO}>
          {value || ''}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.players}>
        {player1} (X) vs {player2} (O)
      </Text>
      
      {gameStatus === 'playing' && (
        <Text style={styles.status}>
          Current Player: {currentPlayer === 'X' ? player1 : player2}
        </Text>
      )}
      
      {gameStatus === 'won' && (
        <Text style={styles.status}>
          Winner: {winner === 'X' ? player1 : player2}!
        </Text>
      )}
      
      {gameStatus === 'draw' && (
        <Text style={styles.status}>
          It's a draw!
        </Text>
      )}
      
      <View style={styles.board}>
        {board.map((value, index) => (
          <Cell 
            key={index}
            index={index}
            value={value}
            onPress={() => handleCellPress(index)}
          />
        ))}
      </View>
    </View>
  );
}

function App() {
  const [fontsLoaded] = useFonts({ AlfaSlabOne_400Regular });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: true }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOURS.bg,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontFamily: 'AlfaSlabOne_400Regular',
    fontSize: 36,
    color: COLOURS.heading,
    marginBottom: 24,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: COLOURS.border,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginVertical: 8,
    color: COLOURS.heading,
    backgroundColor: '#FFFFFF',
  },
  button: {
    width: '80%',
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOURS.o,
    height: 45,
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: 'AlfaSlabOne_400Regular',
    fontSize: 20,
    color: '#fff',
    letterSpacing: 3, 
  },
  players: {
    fontFamily: 'AlfaSlabOne_400Regular',
    fontSize: 24,
    color: COLOURS.heading,
    marginBottom: 16,
  },
  board: {
    width: 300,
    height: 300,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cell: {
    width: 100,
    height: 100,
    backgroundColor: COLOURS.bg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellTextX: {
    fontFamily: 'AlfaSlabOne_400Regular',
    fontSize: 48,
    color: COLOURS.x,
  },
  cellTextO: {
    fontFamily: 'AlfaSlabOne_400Regular',
    fontSize: 48,
    color: COLOURS.o,
  },
  status: {
    fontFamily: 'AlfaSlabOne_400Regular',
    fontSize: 16,
    color: COLOURS.heading,
    marginBottom: 24,
  },
});

export default App;
```
---

## Step 5 - Game Reset Functionality and Score Tracking

Let's proceed with Steps 5, adding game reset functionality and score tracking with AsyncStorage.

## First, Let's Add AsyncStorage

Add the import at the top of your file:
```typescript
import AsyncStorage from '@react-native-async-storage/async-storage';
```

### Define Types for Score Tracking

Add these type definitions near your other type definitions:
```typescript
type GameResult = {
  playerName: string;
  opponentName: string;
  result: 'win' | 'loss' | 'draw';
  date: string;
};

type LeaderboardEntry = {
  playerName: string;
  wins: number;
  losses: number;
  draws: number;
  lastPlayed: string;
};
```

## Update Navigation Stack

Add a new screen to your navigation stack:
```typescript
type RootStackParamList = {
  Home: undefined;
  Game: { player1: string; player2: string };
  Leaderboard: undefined;
};
```

### Enhanced GameScreen with Reset and Score Tracking

Here's the updated GameScreen with reset functionality and score tracking:

```typescript
function GameScreen({ route, navigation }: { route: any; navigation: any }) {
  const { player1, player2 } = route.params;

  const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X');
  const [board, setBoard] = useState<Array<'X' | 'O' | null>>(Array(9).fill(null));
  const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'draw'>('playing');
  const [winner, setWinner] = useState<'X' | 'O' | null>(null);

  // Check for winner
  const checkWinner = (board: Array<'X' | 'O' | null>): 'X' | 'O' | null => {
    // Check rows
    for (let row = 0; row < 3; row++) {
      const start = row * 3;
      if (board[start] && board[start] === board[start + 1] && board[start] === board[start + 2]) {
        return board[start];
      }
    }
    
    // Check columns
    for (let col = 0; col < 3; col++) {
      if (board[col] && board[col] === board[col + 3] && board[col] === board[col + 6]) {
        return board[col];
      }
    }
    
    // Check diagonals
    if (board[0] && board[0] === board[4] && board[0] === board[8]) return board[0];
    if (board[2] && board[2] === board[4] && board[2] === board[6]) return board[2];
    
    return null;
  };

  // Check for draw
  const checkDraw = (board: Array<'X' | 'O' | null>): boolean => {
    return board.every(cell => cell !== null) && !checkWinner(board);
  };

  // Save game result to AsyncStorage
  const saveGameResult = async (result: GameResult) => {
    try {
      const existingResultsJSON = await AsyncStorage.getItem('gameResults');
      const existingResults: GameResult[] = existingResultsJSON ? JSON.parse(existingResultsJSON) : [];
      
      const updatedResults = [...existingResults, result];
      await AsyncStorage.setItem('gameResults', JSON.stringify(updatedResults));
      
      // Also update leaderboard
      await updateLeaderboard(result);
    } catch (error) {
      console.error('Error saving game result:', error);
    }
  };

  // Update leaderboard
  const updateLeaderboard = async (result: GameResult) => {
    try {
      const leaderboardJSON = await AsyncStorage.getItem('leaderboard');
      let leaderboard: LeaderboardEntry[] = leaderboardJSON ? JSON.parse(leaderboardJSON) : [];
      
      // Update player 1 stats
      const player1Index = leaderboard.findIndex(entry => entry.playerName === result.playerName);
      if (player1Index === -1) {
        leaderboard.push({
          playerName: result.playerName,
          wins: result.result === 'win' ? 1 : 0,
          losses: result.result === 'loss' ? 1 : 0,
          draws: result.result === 'draw' ? 1 : 0,
          lastPlayed: result.date
        });
      } else {
        if (result.result === 'win') leaderboard[player1Index].wins++;
        if (result.result === 'loss') leaderboard[player1Index].losses++;
        if (result.result === 'draw') leaderboard[player1Index].draws++;
        leaderboard[player1Index].lastPlayed = result.date;
      }
      
      // Update player 2 stats
      const player2Index = leaderboard.findIndex(entry => entry.playerName === result.opponentName);
      if (player2Index === -1) {
        leaderboard.push({
          playerName: result.opponentName,
          wins: result.result === 'loss' ? 1 : 0, // If player1 won, player2 lost
          losses: result.result === 'win' ? 1 : 0, // If player1 won, player2 lost
          draws: result.result === 'draw' ? 1 : 0,
          lastPlayed: result.date
        });
      } else {
        if (result.result === 'loss') leaderboard[player2Index].wins++;
        if (result.result === 'win') leaderboard[player2Index].losses++;
        if (result.result === 'draw') leaderboard[player2Index].draws++;
        leaderboard[player2Index].lastPlayed = result.date;
      }
      
      await AsyncStorage.setItem('leaderboard', JSON.stringify(leaderboard));
    } catch (error) {
      console.error('Error updating leaderboard:', error);
    }
  };

  // Handle cell press
  const handleCellPress = async (index: number) => {
    if (board[index] || gameStatus !== 'playing') return;
    
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    
    // Check for winner
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
      setGameStatus('won');
      
      // Save game result
      const result: GameResult = {
        playerName: newWinner === 'X' ? player1 : player2,
        opponentName: newWinner === 'X' ? player2 : player1,
        result: 'win',
        date: new Date().toISOString()
      };
      await saveGameResult(result);
      return;
    }
    
    // Check for draw
    if (checkDraw(newBoard)) {
      setGameStatus('draw');
      
      // Save draw result for both players
      const result: GameResult = {
        playerName: player1,
        opponentName: player2,
        result: 'draw',
        date: new Date().toISOString()
      };
      await saveGameResult(result);
      return;
    }
    
    // Switch player if game continues
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  // Reset game
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setGameStatus('playing');
    setWinner(null);
  };

  // Return to home screen
  const goToHome = () => {
    navigation.navigate('Home');
  };

  // Cell component
  type CellProps = {
    index: number; 
    value: 'X' | 'O' | null;
    onPress: () => void;
  };

  const Cell = ({ index, value, onPress }: CellProps) => {
    const row: number = Math.floor(index / 3);
    const col: number = index % 3;

    return (
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.cell,
          row !== 0 && { borderTopWidth: 1 },
          col !== 0 && { borderLeftWidth: 1 },
          { borderColor: COLOURS.border },
        ]}
      >
        <Text style={value === 'X' ? styles.cellTextX : styles.cellTextO}>
          {value || ''}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.players}>
        {player1} (X) vs {player2} (O)
      </Text>
      
      {gameStatus === 'playing' && (
        <Text style={styles.status}>
          Current Player: {currentPlayer === 'X' ? player1 : player2}
        </Text>
      )}
      
      {gameStatus === 'won' && (
        <Text style={styles.status}>
          Winner: {winner === 'X' ? player1 : player2}!
        </Text>
      )}
      
      {gameStatus === 'draw' && (
        <Text style={styles.status}>
          It's a draw!
        </Text>
      )}
      
      <View style={styles.board}>
        {board.map((value, index) => (
          <Cell 
            key={index}
            index={index}
            value={value}
            onPress={() => handleCellPress(index)}
          />
        ))}
      </View>
      
      {(gameStatus === 'won' || gameStatus === 'draw') && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.resetButton} onPress={resetGame}>
            <Text style={styles.buttonText}>Play Again</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.homeButton} onPress={goToHome}>
            <Text style={styles.buttonText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.leaderboardButton} 
            onPress={() => navigation.navigate('Leaderboard')}
          >
            <Text style={styles.buttonText}>Leaderboard</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
```

### Create Leaderboard Screen

Now let's create the Leaderboard screen:

```typescript
function LeaderboardScreen({ navigation }: { navigation: any }) {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);

  // Load leaderboard data
  const loadLeaderboard = async () => {
    try {
      const leaderboardJSON = await AsyncStorage.getItem('leaderboard');
      if (leaderboardJSON) {
        const data: LeaderboardEntry[] = JSON.parse(leaderboardJSON);
        // Sort by wins (descending)
        data.sort((a, b) => b.wins - a.wins);
        setLeaderboard(data);
      }
    } catch (error) {
      console.error('Error loading leaderboard:', error);
    } finally {
      setLoading(false);
    }
  };

  // Clear all data (for testing/reset)
  const clearData = async () => {
    try {
      await AsyncStorage.removeItem('leaderboard');
      await AsyncStorage.removeItem('gameResults');
      setLeaderboard([]);
      alert('All data cleared!');
    } catch (error) {
      console.error('Error clearing data:', error);
    }
  };

  useEffect(() => {
    loadLeaderboard();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading leaderboard...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leaderboard</Text>
      
      {leaderboard.length === 0 ? (
        <Text style={styles.status}>No games played yet!</Text>
      ) : (
        <>
          <View style={styles.leaderboardHeader}>
            <Text style={styles.leaderboardHeaderText}>Player</Text>
            <Text style={styles.leaderboardHeaderText}>Wins</Text>
            <Text style={styles.leaderboardHeaderText}>Losses</Text>
            <Text style={styles.leaderboardHeaderText}>Draws</Text>
          </View>
          
          {leaderboard.map((entry, index) => (
            <View key={index} style={styles.leaderboardRow}>
              <Text style={styles.leaderboardCell}>{entry.playerName}</Text>
              <Text style={styles.leaderboardCell}>{entry.wins}</Text>
              <Text style={styles.leaderboardCell}>{entry.losses}</Text>
              <Text style={styles.leaderboardCell}>{entry.draws}</Text>
            </View>
          ))}
        </>
      )}
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.clearButton} onPress={clearData}>
          <Text style={styles.buttonText}>Clear Data</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
```

### Update App Component

Add the Leaderboard screen to your navigation:

```typescript
function App() {
  const [fontsLoaded] = useFonts({ AlfaSlabOne_400Regular });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: true }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
        <Stack.Screen name="Leaderboard" component={LeaderboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

### Add New Styles

Add these new styles to your StyleSheet:

```typescript
const styles = StyleSheet.create({
  // ... existing styles ...
  
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: '100%',
  },
  resetButton: {
    backgroundColor: COLOURS.x,
    padding: 10,
    borderRadius: 5,
    minWidth: 100,
    alignItems: 'center',
  },
  homeButton: {
    backgroundColor: COLOURS.heading,
    padding: 10,
    borderRadius: 5,
    minWidth: 100,
    alignItems: 'center',
  },
  leaderboardButton: {
    backgroundColor: COLOURS.o,
    padding: 10,
    borderRadius: 5,
    minWidth: 100,
    alignItems: 'center',
  },
  clearButton: {
    backgroundColor: '#FF5252',
    padding: 10,
    borderRadius: 5,
    minWidth: 100,
    alignItems: 'center',
    marginTop: 20,
  },
  leaderboardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    padding: 10,
    backgroundColor: COLOURS.border,
    borderRadius: 5,
    marginBottom: 10,
  },
  leaderboardHeaderText: {
    fontFamily: 'AlfaSlabOne_400Regular',
    fontSize: 16,
    color: COLOURS.heading,
    flex: 1,
    textAlign: 'center',
  },
  leaderboardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLOURS.border,
  },
  leaderboardCell: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    color: COLOURS.heading,
  },
});
```

## Points to Consider for Steps 5

1. **AsyncStorage**: How to persistently store data on the device
2. **Data Modeling**: Designing appropriate data structures for game results and leaderboard
3. **State Management**: Handling asynchronous data loading and updating
4. **Navigation**: Adding new screens to the navigation stack
5. **Data Persistence**: Understanding how data survives app restarts
6. **Error Handling**: Properly handling potential errors with AsyncStorage operations

---

## Summary of What You've Built

Your app now includes:
1. **Navigation** between multiple screens
2. **Player input** with validation
3. **Interactive game board** with proper state management
4. **Win condition detection** with multiple algorithmic approaches
5. **Game status display** showing turns, wins, and draws
6. **Reset functionality** to play again or return home
7. **Score tracking** with AsyncStorage persistence
8. **Leaderboard screen** showing player statistics

Each step provides valuable learning moments:
- **State management** with useState hooks
- **Component composition** and prop passing
- **Conditional rendering** based on game state
- **Algorithm design** for game logic
- **Data persistence** with AsyncStorage
- **Navigation** between screens
- **TypeScript** for type safety

---

## Complete Code 

```typescript 
import { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppLoading from 'expo-app-loading';
import { useFonts, AlfaSlabOne_400Regular } from '@expo-google-fonts/alfa-slab-one';

import AsyncStorage from '@react-native-async-storage/async-storage';

// Bright Material Palette 
const COLOURS = {
  bg:      '#E1F5FE',   // background  Cyan 50
  border:  '#4DD0E1',   // border      Cyan 300
  x:       '#01579B',   // X character Blue 900
  o:       '#F06292',   // O character Pink 300
  heading: '#006064',   // title       Cyan 900
};

type GameResult = {
  playerName: string;
  opponentName: string;
  result: 'win' | 'loss' | 'draw';
  date: string;
};

type LeaderboardEntry = {
  playerName: string;
  wins: number;
  losses: number;
  draws: number;
  lastPlayed: string;
};

type RootStackParamList = {
  Home: undefined;
  Game: { player1: string; player2: string };
  Leaderboard: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function HomeScreen({ navigation }: { navigation: any }) {
  const [player1, setPlayer1] = useState<string>('');
  const [player2, setPlayer2] = useState<string>('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>X & O Game</Text>
      <TextInput
        style={styles.input}
        placeholder="Player 1"
        placeholderTextColor="#90A4AE"
        value={player1}
        onChangeText={setPlayer1}
      />
      <TextInput
        style={styles.input}
        placeholder="Player 2"
        placeholderTextColor="#90A4AE"
        value={player2}
        onChangeText={setPlayer2}
      />
      <TouchableOpacity 
        style={styles.button}
        onPress={() =>
          navigation.navigate('Game', { player1, player2 })
        }
      >
        <Text style={styles.buttonText}>START GAME</Text>
      </TouchableOpacity>
    </View>
  );
}

function GameScreen({ route, navigation }: { route: any; navigation: any }) {
  const { player1, player2 } = route.params;

  const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X');
  const [board, setBoard] = useState<Array<'X' | 'O' | null>>(Array(9).fill(null));
  const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'draw'>('playing');
  const [winner, setWinner] = useState<'X' | 'O' | null>(null);

  // Check for winner
  const checkWinner = (board: Array<'X' | 'O' | null>): 'X' | 'O' | null => {
    // Check rows
    for (let row = 0; row < 3; row++) {
      const start = row * 3;
      if (board[start] && board[start] === board[start + 1] && board[start] === board[start + 2]) {
        return board[start];
      }
    }
    
    // Check columns
    for (let col = 0; col < 3; col++) {
      if (board[col] && board[col] === board[col + 3] && board[col] === board[col + 6]) {
        return board[col];
      }
    }
    
    // Check diagonals
    if (board[0] && board[0] === board[4] && board[0] === board[8]) return board[0];
    if (board[2] && board[2] === board[4] && board[2] === board[6]) return board[2];
    
    return null;
  };

  // Check for draw
  const checkDraw = (board: Array<'X' | 'O' | null>): boolean => {
    return board.every(cell => cell !== null) && !checkWinner(board);
  };

  // Save game result to AsyncStorage
  const saveGameResult = async (result: GameResult) => {
    try {
      const existingResultsJSON = await AsyncStorage.getItem('@gameResults');
      const existingResults: GameResult[] = existingResultsJSON ? JSON.parse(existingResultsJSON) : [];
      
      const updatedResults = [...existingResults, result];
      await AsyncStorage.setItem('@gameResults', JSON.stringify(updatedResults));
      
      // Also update leaderboard
      await updateLeaderboard(result);
    } catch (error) {
      console.error('Error saving game result:', error);
    }
  };

  // Update leaderboard
  const updateLeaderboard = async (result: GameResult) => {
    try {
      const leaderboardJSON = await AsyncStorage.getItem('@leaderboard');
      let leaderboard: LeaderboardEntry[] = leaderboardJSON ? JSON.parse(leaderboardJSON) : [];
      
      // Update player 1 stats
      const player1Index = leaderboard.findIndex(entry => entry.playerName === result.playerName);
      if (player1Index === -1) {
        leaderboard.push({
          playerName: result.playerName,
          wins: result.result === 'win' ? 1 : 0,
          losses: result.result === 'loss' ? 1 : 0,
          draws: result.result === 'draw' ? 1 : 0,
          lastPlayed: result.date
        });
      } else {
        if (result.result === 'win') leaderboard[player1Index].wins++;
        if (result.result === 'loss') leaderboard[player1Index].losses++;
        if (result.result === 'draw') leaderboard[player1Index].draws++;
        leaderboard[player1Index].lastPlayed = result.date;
      }
      
      // Update player 2 stats
      const player2Index = leaderboard.findIndex(entry => entry.playerName === result.opponentName);
      if (player2Index === -1) {
        leaderboard.push({
          playerName: result.opponentName,
          wins: result.result === 'loss' ? 1 : 0, // If player1 won, player2 lost
          losses: result.result === 'win' ? 1 : 0, // If player1 won, player2 lost
          draws: result.result === 'draw' ? 1 : 0,
          lastPlayed: result.date
        });
      } else {
        if (result.result === 'loss') leaderboard[player2Index].wins++;
        if (result.result === 'win') leaderboard[player2Index].losses++;
        if (result.result === 'draw') leaderboard[player2Index].draws++;
        leaderboard[player2Index].lastPlayed = result.date;
      }
      
      await AsyncStorage.setItem('@leaderboard', JSON.stringify(leaderboard));
    } catch (error) {
      console.error('Error updating leaderboard:', error);
    }
  };

  // Handle cell press
  const handleCellPress = async (index: number) => {
    if (board[index] || gameStatus !== 'playing') return;
    
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    
    // Check for winner
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
      setGameStatus('won');
      
      // Save game result
      const result: GameResult = {
        playerName: newWinner === 'X' ? player1 : player2,
        opponentName: newWinner === 'X' ? player2 : player1,
        result: 'win',
        date: new Date().toISOString()
      };
      await saveGameResult(result);
      return;
    }
    
    // Check for draw
    if (checkDraw(newBoard)) {
      setGameStatus('draw');
      
      // Save draw result for both players
      const result: GameResult = {
        playerName: player1,
        opponentName: player2,
        result: 'draw',
        date: new Date().toISOString()
      };
      await saveGameResult(result);
      return;
    }
    
    // Switch player if game continues
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  // Reset game
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setGameStatus('playing');
    setWinner(null);
  };

  // Return to home screen
  const goToHome = () => {
    navigation.navigate('Home');
  };

  // Cell component
  type CellProps = {
    index: number; 
    value: 'X' | 'O' | null;
    onPress: () => void;
  };

  const Cell = ({ index, value, onPress }: CellProps) => {
    const row: number = Math.floor(index / 3);
    const col: number = index % 3;

    return (
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.cell,
          row !== 0 && { borderTopWidth: 1 },
          col !== 0 && { borderLeftWidth: 1 },
          { borderColor: COLOURS.border },
        ]}
      >
        <Text style={value === 'X' ? styles.cellTextX : styles.cellTextO}>
          {value || ''}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.players}>
        {player1} (X) vs {player2} (O)
      </Text>
      
      {gameStatus === 'playing' && (
        <Text style={styles.status}>
          Current Player: {currentPlayer === 'X' ? player1 : player2}
        </Text>
      )}
      
      {gameStatus === 'won' && (
        <Text style={styles.status}>
          Winner: {winner === 'X' ? player1 : player2}!
        </Text>
      )}
      
      {gameStatus === 'draw' && (
        <Text style={styles.status}>
          It's a draw!
        </Text>
      )}
      
      <View style={styles.board}>
        {board.map((value, index) => (
          <Cell 
            key={index}
            index={index}
            value={value}
            onPress={() => handleCellPress(index)}
          />
        ))}
      </View>
      
      {(gameStatus === 'won' || gameStatus === 'draw') && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.resetButton} onPress={resetGame}>
            <Text style={styles.buttonText}>Play Again</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.homeButton} onPress={goToHome}>
            <Text style={styles.buttonText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.leaderboardButton} 
            onPress={() => navigation.navigate('Leaderboard')}
          >
            <Text style={styles.buttonText}>Leaderboard</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

function LeaderboardScreen({ navigation }: { navigation: any }) {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);

  // Load leaderboard data
  const loadLeaderboard = async () => {
    try {
      const leaderboardJSON = await AsyncStorage.getItem('@leaderboard');
      if (leaderboardJSON) {
        const data: LeaderboardEntry[] = JSON.parse(leaderboardJSON);
        // Sort by wins (descending)
        data.sort((a, b) => b.wins - a.wins);
        setLeaderboard(data);
      }
    } catch (error) {
      console.error('Error loading leaderboard:', error);
    } finally {
      setLoading(false);
    }
  };

  // Clear all data (for testing/reset)
  const clearData = async () => {
    try {
      await AsyncStorage.removeItem('@leaderboard');
      await AsyncStorage.removeItem('@gameResults');
      setLeaderboard([]);
      alert('All data cleared!');
    } catch (error) {
      console.error('Error clearing data:', error);
    }
  };

  useEffect(() => {
    loadLeaderboard();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading leaderboard...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leaderboard</Text>
      
      {leaderboard.length === 0 ? (
        <Text style={styles.status}>No games played yet!</Text>
      ) : (
        <>
          <View style={styles.leaderboardHeader}>
            <Text style={styles.leaderboardHeaderText}>Player</Text>
            <Text style={styles.leaderboardHeaderText}>Wins</Text>
            <Text style={styles.leaderboardHeaderText}>Losses</Text>
            <Text style={styles.leaderboardHeaderText}>Draws</Text>
          </View>
          
          {leaderboard.map((entry, index) => (
            <View key={index} style={styles.leaderboardRow}>
              <Text style={styles.leaderboardCell}>{entry.playerName}</Text>
              <Text style={styles.leaderboardCell}>{entry.wins}</Text>
              <Text style={styles.leaderboardCell}>{entry.losses}</Text>
              <Text style={styles.leaderboardCell}>{entry.draws}</Text>
            </View>
          ))}
        </>
      )}
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.clearButton} onPress={clearData}>
          <Text style={styles.buttonText}>Clear Data</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function App() {
  const [fontsLoaded] = useFonts({ AlfaSlabOne_400Regular });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: true }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
        <Stack.Screen name="Leaderboard" component={LeaderboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOURS.bg,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontFamily: 'AlfaSlabOne_400Regular',
    fontSize: 36,
    color: COLOURS.heading,
    marginBottom: 24,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: COLOURS.border,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginVertical: 8,
    color: COLOURS.heading,
    backgroundColor: '#FFFFFF',
  },
  button: {
    width: '80%',
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOURS.o,
    height: 45,
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: 'AlfaSlabOne_400Regular',
    fontSize: 20,
    color: '#fff',
    letterSpacing: 3, 
  },
  players: {
    fontFamily: 'AlfaSlabOne_400Regular',
    fontSize: 24,
    color: COLOURS.heading,
    marginBottom: 16,
  },
  board: {
    width: 300,
    height: 300,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cell: {
    width: 100,
    height: 100,
    backgroundColor: COLOURS.bg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellTextX: {
    fontFamily: 'AlfaSlabOne_400Regular',
    fontSize: 48,
    color: COLOURS.x,
  },
  cellTextO: {
    fontFamily: 'AlfaSlabOne_400Regular',
    fontSize: 48,
    color: COLOURS.o,
  },
  status: {
    fontFamily: 'AlfaSlabOne_400Regular',
    fontSize: 16,
    color: COLOURS.heading,
    marginBottom: 24,
  },
    buttonContainer: {
    justifyContent: 'space-between',
    marginTop: 20, 
    width: '100%',
  },
  resetButton: {
    backgroundColor: COLOURS.x,
    padding: 10,
    borderRadius: 5,
    minWidth: 100,
    alignItems: 'center',
    marginBottom: 20,
  },
  homeButton: {
    backgroundColor: COLOURS.heading,
    padding: 10,
    borderRadius: 5,
    minWidth: 100,
    alignItems: 'center',
    marginBottom: 20,
  },
  leaderboardButton: {
    backgroundColor: COLOURS.o,
    padding: 10,
    borderRadius: 5,
    minWidth: 100,
    alignItems: 'center',
    marginBottom: 20,
  },
  clearButton: {
    backgroundColor: '#FF5252',
    padding: 10,
    borderRadius: 5,
    minWidth: 100,
    alignItems: 'center',
    marginTop: 20,
  },
  leaderboardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    padding: 10,
    backgroundColor: COLOURS.border,
    borderRadius: 5,
    marginBottom: 10,
  },
  leaderboardHeaderText: {
    fontFamily: 'AlfaSlabOne_400Regular',
    fontSize: 16,
    color: COLOURS.heading,
    flex: 1,
    textAlign: 'center',
  },
  leaderboardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLOURS.border,
  },
  leaderboardCell: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    color: COLOURS.heading,
  },
});

export default App;
```
