import { useState } from 'react'; 
import { TextInput, TouchableOpacity, FlatList, Text, View, StyleSheet } from 'react-native';

// import Picker

import { Picker } from '@react-native-picker/picker';

type User = {
  id: number; 
  name: string; 
  email: string; 
  phone: string; 
  role: string; 
};

function App() {
  const [name, setName] = useState<string>('');  
  const [email, setEmail] = useState<string>('');  
  const [phone, setPhone] = useState<string>('');  
  const [role, setRole] = useState<string>('');  

  const [users, setUsers] = useState<User[]>([]);

  const handleSaveUser = () => {
    // validation + errors 
    if (!name || !email || !phone || !role) {
      return; 
    }

    // construct object for new user 
    const newUser: User = {
      id: Date.now(), 
      name, 
      email, 
      phone, 
      role,   
    };

    // load new user into array 
    setUsers([...users, newUser]);

    // clear the form 
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
        <Picker.Item label="Select Role" value="" /> 
        <Picker.Item label="DEVELOPER" value="Developer" />
        <Picker.Item label="UX DESIGNER" value="UX Designer" />
        <Picker.Item label="MANAGER" value="Manager" />
      </Picker>
      <TouchableOpacity onPress={handleSaveUser}> 
        <Text>SAVE</Text>
      </TouchableOpacity>
      <FlatList 
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}: {item: User}) => (
          <Text>
            {item.name} ({item.role})
          </Text>
        )}  
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

});

export default App;










