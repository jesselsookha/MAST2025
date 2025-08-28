# 📱 Tasks App

This walkthrough shows how we can build a **Tasks App** step by step. Each stage builds on the previous one, so you can follow the progression clearly. The goal is to understand how the app grows from a simple template into a modular, structured application.

---

## **Stage 1 – Empty Template**

At this stage we only prepare the basic app shell with placeholders.

```tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';

function App() {
  return (
    <View style={styles.container}>
      {/* Heading */}
      <View>
        {/* Task Input */}
      </View>
      <View>
        {/* Task List Viewing */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default App;
```

### Notes

* The structure is divided into **Heading**, **Task Input**, and **Task List** sections.
* Nothing works yet — this sets the foundation.

---

## **Stage 2 – Adding State and Basic List**

Here we add state for tasks and allow new tasks to be added.

```tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

function App() {
  const [task, setTask] = useState<string>(''); // current input
  const [tasks, setTasks] = useState<string[]>([]); // list of tasks

  const handleAddTask = (): void => {
    if (task !== '') {
      setTasks([...tasks, task]); // add new task to array
      setTask(''); // clear input
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Tasks App</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a task"
          value={task}
          onChangeText={(text: string) => setTask(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tasksContainer}>
        {tasks.map((task: string, index: number) => (
          <Text key={index} style={styles.task}>
            {index} - {task}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20 
  },
  heading: { 
    fontSize: 24, 
    marginBottom: 10 
  },
  inputContainer: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  input: { 
    flex: 1, 
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1, 
    paddingHorizontal: 10 
  },
  addButton: { 
    width: 40, 
    height: 40, 
    backgroundColor: '#333', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  addButtonText: { 
    fontSize: 24, 
    color: '#fff' 
  },
  tasksContainer: { 
    marginTop: 20 
  },
  task: { 
    fontSize: 18, 
    marginBottom: 10 
  },
});

export default App;
```

### Notes

* `useState` manages both the **input text** and the **list of tasks**.
* When the Add button is pressed, the current task is pushed into the array.
* We use `.map()` to display all tasks.
* Each task is shown with its index number and text.

---

## **Stage 3 – Using FlatList**

Instead of `.map()`, we now use `FlatList`, which is better for handling lists.

```tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

function App() {
  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<string[]>([]);

  const handleAddTask = (): void => {
    if (task !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Tasks App</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a task"
          value={task}
          onChangeText={(text: string) => setTask(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tasksContainer}>
        <FlatList
          data={tasks}
          renderItem={({ item, index }) => (
            <Text style={styles.task}>
              {index} - {item}
            </Text>
          )}
          keyExtractor={(_item, index) => index.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20 
  },
  heading: { 
    fontSize: 24, 
    marginBottom: 10 
  },
  inputContainer: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  input: { 
    flex: 1, 
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1, 
    paddingHorizontal: 10 
  },
  addButton: { 
    width: 40, 
    height: 40, 
    backgroundColor: '#333', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  addButtonText: { 
    fontSize: 24, 
    color: '#fff' 
  },
  tasksContainer: { 
    marginTop: 20 
  },
  task: { 
    fontSize: 18, 
    marginBottom: 10 
  },
});


export default App;
```

### Notes

* `FlatList` is optimized for rendering lists efficiently.
* `renderItem` gives access to `item` (task text) and `index`.
* `keyExtractor` ensures each item has a unique key.

---

## **Stage 3.1 – Adding Type Definitions**

We now define the types for `FlatList` props.

```tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

// FlatList - Props specifically for 'renderItem' parameters
type FlatListProps = {
  item: string;
  index: number;
};

function App() {
  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<string[]>([]);

  const handleAddTask = (): void => {
    if (task !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Tasks App</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a task"
          value={task}
          onChangeText={(text: string) => setTask(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tasksContainer}>
        <FlatList
          data={tasks}
          renderItem={({ item, index }: FlatListProps) => (
            <Text style={styles.task}>{item}</Text>
          )}
          keyExtractor={(_item, index) => index.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20 
  },
  heading: { 
    fontSize: 24, 
    marginBottom: 10 
  },
  inputContainer: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  input: { 
    flex: 1, 
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1, 
    paddingHorizontal: 10 
  },
  addButton: { 
    width: 40, 
    height: 40, 
    backgroundColor: '#333', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  addButtonText: { 
    fontSize: 24, 
    color: '#fff' 
  },
  tasksContainer: { 
    marginTop: 20 
  },
  task: { 
    fontSize: 18, 
    marginBottom: 10 
  },
});

export default App;
```

### Notes

* Defining a type for `renderItem` improves clarity and safety.
* This ensures `item` is always a string and `index` is always a number.

---

## **Stage 4 – Creating a TaskItem Component**

We move task display into its own component and add delete functionality.

```tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

// FlatList - Props specifically for 'renderItem' parameters
type FlatListProps = {
  item: string;
  index: number;
};

// --- user defined component --- 
type TaskItemProps = {
  item: string;
  index: number;
  onDelete: (index: number) => void;
};

const TaskItem = ({ item, index, onDelete }: TaskItemProps) => {
  return (
    <View style={styles.taskItem}>
      <Text style={styles.taskText}>{index} - {item}</Text>
      <TouchableOpacity onPress={() => onDelete(index)} style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>X</Text>
      </TouchableOpacity>
    </View>
  );
};
// ------------------------------

function App() {
  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<string[]>([]);

  const handleAddTask = (): void => {
    if (task !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const handleDeleteTask = (index: number): void => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Tasks App</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a task"
          value={task}
          onChangeText={(text: string) => setTask(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tasksContainer}>
        <FlatList
          data={tasks}
          renderItem={({ item, index }: FlatListProps) => (
            <TaskItem item={item} index={index} onDelete={handleDeleteTask} />
          )}
          keyExtractor={(_item, index) => index.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  addButton: {
    width: 40,
    height: 40,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 24,
    color: '#fff',
  },
  tasksContainer: {
    marginTop: 20,
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 4,
  },
  taskText: {
    fontSize: 18,
  },
  deleteButton: {
    backgroundColor: '#e53935',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});


export default App;
```

### Notes

* `TaskItem` is a **reusable component** for each task.
* The `X` button allows deleting tasks by calling a function passed from the parent.
* `filter` removes the task at the given index from the array.

---

## **Stage 5 – Separating TaskItem into its Own File**

We move `TaskItem` into a separate file for better structure.

### `components/TaskItem.tsx`

```tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type TaskItemProps = {
  item: string;
  index: number;
  onDelete: (index: number) => void;
};

const TaskItem = ({ item, index, onDelete }: TaskItemProps) => {
  return (
    <View style={styles.taskItem}>
      <Text style={styles.taskText}>{index} - {item}</Text>
      <TouchableOpacity onPress={() => onDelete(index)} style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 4,
  },
  taskText: {
    fontSize: 18,
  },
  deleteButton: {
    backgroundColor: '#e53935',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default TaskItem;
```

### `App.tsx`

```tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import TaskItem from './components/TaskItem'; //import user-defined component

type FlatListProps = {
  item: string;
  index: number;
};

function App() {
  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<string[]>([]);

  const handleAddTask = (): void => {
    if (task !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const handleDeleteTask = (index: number): void => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Tasks App</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a task"
          value={task}
          onChangeText={(text: string) => setTask(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tasksContainer}>
        <FlatList
          data={tasks}
          renderItem={({ item, index }: FlatListProps) => (
            <TaskItem item={item} index={index} onDelete={handleDeleteTask} />
          )}
          keyExtractor={(_item, index) => index.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  heading: { fontSize: 24, marginBottom: 10 },
  inputContainer: { flexDirection: 'row', alignItems: '

```

### Notes

* Program structure will be discussed in future lessons 

