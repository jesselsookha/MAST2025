# Register User App 

## 📘 Introduction

In this lesson, you’ll be building a **"Register User"** app using **React Native** and **TypeScript**.

### 🎯 What You Will Learn

This project focuses on key React Native concepts you’ve seen before — like state management and user inputs — but also introduces two **new and important techniques**:

1. **`Picker` Component**

   * Allows users to select a value from a dropdown-style list.
   * Often used for choosing categories, roles, or options.

2. **Custom Validation Logic**

   * Instead of using alerts (`Alert.alert()`), this app displays styled error messages next to each field.
   * This approach is more user-friendly and professional.

### 💡 Key Concepts Covered

* Handling **user input** via `TextInput`.
* Saving form data as **objects in an array**, with unique IDs.
* Managing **state** using React's `useState` hook.
* Using **`FlatList`** to dynamically display a list of items.
* Implementing a **dropdown menu** using the `Picker` component.
* Building **custom validation logic** to guide correct user input.

This app will be built in **three stages** — each one adding more functionality and polish.

---

## 🧱 Stage 0: Empty Template

This stage simply sets up the **basic structure** of the app with a single screen and a title.

### 🔍 Code Summary

```tsx
import { useState } from 'react'; 
import { View, Text, StyleSheet } from 'react-native';  

function App() {
  return (
    <View style={styles.container}>
      <Text>Register User</Text>
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

### ✅ What’s Happening Here?

* A functional component `App()` returns a basic layout.
* The `View` container uses styles defined in the `StyleSheet`.
* A `Text` element displays the heading `"Register User"`.

### 📌 Purpose of Stage 0

To ensure the app is loading correctly and the UI foundation is ready. Think of this as setting up the "canvas" before we paint.

---

## 🔧 Stage 1: Input Fields, Picker, and Saving Users

This stage introduces user input and saving that input as **user objects**.

```tsx
import { useState } from 'react'; 
import { 
  TextInput, 
  TouchableOpacity, 
  FlatList, 
  Text, 
  View, 
  StyleSheet 
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

// --------- Type Definition for a User ---------
type User = {
  id: number; 
  name: string; 
  email: string; 
  phone: string; 
  role: string; 
};

function App() {
  // --------- Input States ---------
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [role, setRole] = useState<string>('');

  // --------- Stored Users (Array of Objects) ---------
  const [users, setUsers] = useState<User[]>([]);

  const handleSaveUser = () => {
    // Limited Validation 
    if (!name || !email || !phone || !role) {
      return;   
    }

    // Create new user object (temporary) - loaded at declaration with input 
    const newUser: User = {
      id: Date.now(), 
      name, 
      email, 
      phone, 
      role, 
    };
    
    // Add new user to the state variable (loading the array) 
    setUsers([...users, newUser]);     

    // Clear fields after saving 
    setName(''); 
    setEmail(''); 
    setPhone(''); 
    setRole(''); 
  };

  return (
    <View style={styles.container}>
      <Text>Name</Text> 
      <TextInput 
        value={name}
        onChangeText={setName}
        placeholder="Enter name" 
        placeholderTextColor="#999"
      />
     <Text>Email</Text> 
      <TextInput 
        value={email}
        onChangeText={setEmail}
        placeholder="Enter email" 
        placeholderTextColor="#999"
        keyboardType="email-address"
      />
     <Text>Phone</Text> 
      <TextInput 
        value={phone}
        onChangeText={setPhone}
        placeholder="Enter phone" 
        placeholderTextColor="#999"
        keyboardType="phone-pad"
      />
      <Text>Role</Text> 
      <Picker
        selectedValue={role}
        onValueChange={(itemValue) => setRole(itemValue)}
      > 
	<Picker.Item label="Select Role" value=""/>
        <Picker.Item label="DEVELOPER" value="developer" />
        <Picker.Item label="UX DESIGNER" value="ux designer" />
        <Picker.Item label="MANAGER" value="manager" />
      </Picker>
      {/* Save Button */}
      <TouchableOpacity onPress={handleSaveUser}> 
        <Text>SAVE</Text> 
      </TouchableOpacity>
      {/* Display list of saved users */}
      <FlatList 
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}: {item: User}) => (
          <Text>
            {item.name} - {item.role}
          </Text>
        )}
      /> 
    </View>
  );
}

// --------- STYLES ---------
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

### ✅ What’s New in This Stage?

* Added **state variables** to store input values.
* Created `TextInput` fields for `name`, `email`, and `phone`.
* Introduced the **`Picker`** to select a role.
* Created a **Save** button using `TouchableOpacity`.
* Saved each user in a **`User` object**, stored in an array (`users[]`).
* Used **`FlatList`** to display saved users on screen.

### 🔍 Key Code Concepts

```tsx
const [name, setName] = useState<string>('');
const [users, setUsers] = useState<User[]>([]);
```

* `useState` hooks are used to manage both form input and user list.

```tsx
type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: string;
};
```

* A `User` type defines the shape of each user object.

```tsx
const handleSaveUser = () => {
  if (!name || !email || !phone || !role) return;

  const newUser: User = {
    id: Date.now(),
    name,
    email,
    phone,
    role,
  };

  setUsers([...users, newUser]);

  // Clear inputs after saving
  setName('');
  setEmail('');
  setPhone('');
  setRole('');
};
```

* This function checks if any fields are empty.
* If not, it creates a new user object and adds it to the `users` array.
* It then resets the input fields.

### 🧪 Preview of Form

```tsx
<TextInput placeholder="Enter name" />
<TextInput placeholder="Enter email" />
<TextInput placeholder="Enter phone" />
<Picker>
  <Picker.Item label="Select Role" value="" />
  <Picker.Item label="DEVELOPER" value="developer" />
  <Picker.Item label="UX DESIGNER" value="ux designer" />
</Picker>
<TouchableOpacity onPress={handleSaveUser}>
  <Text>SAVE</Text>
</TouchableOpacity>
```

### 📌 Purpose of Stage 1

To build the **basic data flow** from form inputs → to data storage → to list rendering. It introduces the `Picker`, which behaves like a dropdown, giving users a clean way to select roles.

### ⚠️ Limitations

* There’s **no real validation** yet — if a user skips a field, the button simply does nothing.
* There’s no visual feedback to guide the user.
* The UI is very basic with minimal styling.

---

## ✅ Stage 2: Full Validation and Styling

```tsx
import { useState } from 'react'; 
import { 
  TextInput, 
  TouchableOpacity, 
  FlatList, 
  Text, 
  View, 
  StyleSheet 
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

// --------- Type Definition for a User ---------
type User = {
  id: number; 
  name: string; 
  email: string; 
  phone: string; 
  role: string; 
};


function App() {
  // --------- Input States ---------
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [role, setRole] = useState<string>('');

  // --------- Stored Users (Array of Objects) ---------
  const [users, setUsers] = useState<User[]>([]);

  // --------- State Variable to Manage Messages for Validation Feedback ---------
  const [errors, setErrors] = useState({
    name: '', 
    email: '', 
    phone: '', 
    role: '', 
  });

  // --------- VALIDATION FUNCTION ---------
  // Validates the inputs and updates the errors object if needed
  const validateInputs = () => {
    let valid = true; // true = no errors ~ false = errors have occurred
    
    // Temporary error object to store error messages
    const newErrors = { name: '', email: '', phone: '', role: '' };

    // trim() - string function to remove spaces from either side of the string 

    if (!name.trim()) {
      newErrors.name = 'Name is required'; // set the error message on the specific property of the obj.
      valid = false;
    }

    // simple regular expression used to check format of email add. 

    if (!email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email format is invalid';
      valid = false;
    }

    // number of characters for the phone number is also checked

    if (!phone.trim()) {
      newErrors.phone = 'Phone is required';
      valid = false;
    } else if (phone.trim().length < 10) {
      newErrors.phone = 'Phone is too short';
      valid = false;
    }

    if (!role) {
      newErrors.role = 'Role is required';
      valid = false;
    }

    setErrors(newErrors); // save the errors into the state variable 
    return valid;
  };

  // --------- FORM SUBMISSION FUNCTION ---------
  const handleSaveUser = () => {
    // Validation 
    if (!validteInputs()) {
      return;   
    }

    // Create new user object (temporary) - loaded at declaration with input 
    const newUser: User = {
      id: Date.now(), 
      name, 
      email, 
      phone, 
      role, 
    };
    
    // Add new user to the state variable (loading the array) 
    setUsers([...users, newUser]);     

    // Clear fields after saving 
    setName(''); 
    setEmail(''); 
    setPhone(''); 
    setRole(''); 
  };

  return (
    <View style={styles.container}>
      <Text>Register User</Text> 
      {/* Name Input */}
      <Text>Name</Text> 
      <TextInput 
        value={name}
        onChangeText={setName}
        placeholder="Enter name" 
        placeholderTextColor="#999"
      />
      {errors.name ? <Text style={styles.error}>{errors.name}</Text> : null}
      {/* Email Input */}
      <Text>Email</Text> 
      <TextInput 
        value={email}
        onChangeText={setEmail}
        placeholder="Enter email" 
        placeholderTextColor="#999"
        keyboardType="email-address"
      />
      {errors.email ? <Text style={styles.error}>{errors.email}</Text> : null}
      {/* Phone Input */}
      <Text>Phone</Text> 
      <TextInput 
        value={phone}
        onChangeText={setPhone}
        placeholder="Enter phone" 
        placeholderTextColor="#999"
        keyboardType="phone-pad"
      /> 
      {errors.phone ? <Text style={styles.error}>{errors.phone}</Text> : null}
      {/* Role Selection */}
      <Text>Role</Text> 
      <Picker
        selectedValue={role}
        onValueChange={(itemValue) => setRole(itemValue)}
      > 
	    <Picker.Item label="Select Role" value=""/>
        <Picker.Item label="DEVELOPER" value="developer" />
        <Picker.Item label="UX DESIGNER" value="ux designer" />
        <Picker.Item label="MANAGER" value="manager" />
      </Picker>
      {errors.role ? <Text style={styles.error}>{errors.role}</Text> : null}

      {/* Save Button */}
      <TouchableOpacity onPress={handleSaveUser}> 
        <Text>SAVE</Text> 
      </TouchableOpacity>
      {/* Display list of saved users */}
      <FlatList 
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}: {item: User}) => (
          <Text>
            {item.name} - {item.role}
          </Text>
        )}
      /> 
    </View>
  );
}

// --------- STYLES ---------
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
### 🧠 What’s New in Stage 2?

This stage adds:

1. **Complete Input Validation**

   * Ensures that all fields are filled correctly.
   * Displays **custom error messages**, instead of using `Alert.alert()` — a more modern UX practice.

---

### 🔧 Code Concepts Explained

#### 1. **Validation Function**

```tsx
const validateInputs = () => {
  let valid = true;
  const newErrors = { name: '', email: '', phone: '', role: '' };

  if (!name.trim()) {
    newErrors.name = 'Name is required';
    valid = false;
  }

  if (!email.trim()) {
    newErrors.email = 'Email is required';
    valid = false;
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    newErrors.email = 'Email format is invalid';
    valid = false;
  }

  if (!phone.trim()) {
    newErrors.phone = 'Phone is required';
    valid = false;
  } else if (phone.trim().length < 10) {
    newErrors.phone = 'Phone is too short';
    valid = false;
  }

  if (!role) {
    newErrors.role = 'Role is required';
    valid = false;
  }

  setErrors(newErrors);
  return valid;
};
```

* This function validates all inputs.
* It uses **regular expressions** to check email format.
* Each error is saved to the `errors` state object.
* `setErrors()` updates the UI to show these messages.

#### 2. **Using Error State in the UI**

```tsx
{errors.name ? <Text style={styles.error}>{errors.name}</Text> : null}
```

* This line conditionally renders the error message (if present) right after the relevant input.

#### 3. **Handling Form Submission**

```tsx
const handleSaveUser = () => {
  if (!validateInputs()) return;

  const newUser: User = {
    id: Date.now(),
    name,
    email,
    phone,
    role,
  };

  setUsers([...users, newUser]);

  setName('');
  setEmail('');
  setPhone('');
  setRole('');
};
```

* Calls the `validateInputs()` function before proceeding.
* If validation fails, the function stops.
* If successful, a user is created and added to the list.

---
### 💻 UI Summary

**Inputs:**

* Name
* Email
* Phone
* Role (`Picker` dropdown)

**Validation:**

* Custom error messages for each field.
* Feedback shown directly below invalid inputs.

**Display:**

* Saved users shown with their name and role.
* Errors disappear after successful save.

---

### 🧠 Key Learning Outcomes from Stage 2

* Understanding **how to structure validation logic** in a React Native app.
* Differentiating between state for inputs vs. state for errors.
* Learning to use **conditional rendering** for user feedback.

---

## 🧱 Stage 3: Complete App with Full Validation and Styled UI (Final Code)

This stage brings everything together:

* Inputs with validation
* Picker dropdown
* Custom error messages
* Styled form using a Green Lantern–inspired theme

---

### ✅ Final Stage 3 Code

```tsx
import { useState } from 'react';
import {
  TextInput,
  TouchableOpacity,
  FlatList,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

// --------- Type Definition for a User ---------
type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: string;
};

export default function App() {
  // --------- Input States ---------
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [role, setRole] = useState<string>('');

  // --------- Stored Users (Array of Objects) ---------
  const [users, setUsers] = useState<User[]>([]);

  // --------- Error State ---------
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
  });

  // --------- Validation Function ---------
  const validateInputs = () => {
    let valid = true;
    const newErrors = { name: '', email: '', phone: '', role: '' };

    if (!name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email format is invalid';
      valid = false;
    }

    if (!phone.trim()) {
      newErrors.phone = 'Phone is required';
      valid = false;
    } else if (phone.trim().length < 10) {
      newErrors.phone = 'Phone is too short';
      valid = false;
    }

    if (!role) {
      newErrors.role = 'Role is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // --------- Save User Function ---------
  const handleSaveUser = () => {
    if (!validateInputs()) return;

    const newUser: User = {
      id: Date.now(),
      name,
      email,
      phone,
      role,
    };

    setUsers([...users, newUser]);

    setName('');
    setEmail('');
    setPhone('');
    setRole('');
    setErrors({ name: '', email: '', phone: '', role: '' });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Register User</Text>

      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter name"
        placeholderTextColor="#888"
      />
      {errors.name ? <Text style={styles.error}>{errors.name}</Text> : null}

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter email"
        placeholderTextColor="#888"
        keyboardType="email-address"
      />
      {errors.email ? <Text style={styles.error}>{errors.email}</Text> : null}

      <Text style={styles.label}>Phone</Text>
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
        placeholder="Enter phone"
        placeholderTextColor="#888"
        keyboardType="phone-pad"
      />
      {errors.phone ? <Text style={styles.error}>{errors.phone}</Text> : null}

      <Text style={styles.label}>Role</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={role}
          onValueChange={(itemValue) => setRole(itemValue)}
          style={styles.picker}
          dropdownIconColor="#00FF00"
        >
          <Picker.Item label="Select Role" value="" />
          <Picker.Item label="DEVELOPER" value="developer" />
          <Picker.Item label="UX DESIGNER" value="ux designer" />
          <Picker.Item label="MANAGER" value="manager" />
        </Picker>
      </View>
      {errors.role ? <Text style={styles.error}>{errors.role}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleSaveUser}>
        <Text style={styles.buttonText}>SAVE</Text>
      </TouchableOpacity>

      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }: {item: User}) => (
          <Text style={styles.userItem}>
            {item.name} - {item.role}
          </Text>
        )}
      />
    </View>
  );
}

// --------- Styles (Green Lantern Theme) ---------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001F1F', // deep black-green
    padding: 20,
  },
  heading: {
    fontSize: 24,
    color: '#A8FF60',
    marginBottom: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  label: {
    fontSize: 20,
    color: '#A8FF60',
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#00FF00',
    padding: 10,
    borderRadius: 5,
    color: '#FFFFFF',
    marginBottom: 5,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#00FF00',
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 5,
    height: 30, 
  },
  picker: {
    color: '#FFFFFF',
    backgroundColor: '#004D40',
    height: 30, 
    fontSize: 16,
  },
  button: {
    backgroundColor: '#00C853',
    padding: 12,
    borderRadius: 8,
    marginTop: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 20,
  },
  error: {
    color: '#FF6B6B',
    fontStyle: 'italic',
    fontSize: 13,
  },
  userItem: {
    color: '#FFFFFF',
    marginTop: 10,
    fontSize: 16,
    padding: 5,
    backgroundColor: '#00332F',
    borderRadius: 5,
  },
});
```

---

## 🏁 Final Conclusion: What Should You Take Away?

### 🎯 The Purpose of This App

The "Register User" app was designed to help you **consolidate your understanding of React Native + TypeScript**, while introducing **real-world form building concepts**. You started with a barebones layout and progressively added logic, state, interaction, validation, and styling.

---

### 🧠 Key Takeaways

1. **Structured State Management**

   * You learned to manage **multiple input states** using `useState`.
   * You stored and displayed **objects** inside an array.

2. **Custom Validation Logic**

   * No more default popups!
   * You now know how to **build your own validation system**.
   * Error messages are **inline** and **visually styled** to guide users effectively.

3. **Using the `Picker` Component**

   * A key addition in this lesson: a user-friendly, dropdown-style selector for roles.
   * Learn how to integrate it into controlled forms.

4. **Styling for Themed UI**

   * You've seen how a colour theme can improve UX.
   * Styling matters — especially in real apps!

5. **UX Considerations**

   * Inputs reset after submission.
   * Invalid fields are clearly identified.
   * Layout is mobile-friendly, readable, and visually structured.

---
