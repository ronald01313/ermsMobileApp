import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function attendeeLoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      if (!email || !password) {
        Alert.alert('Error', 'Please fill in all fields');
        return;
      }
  
      // Basic email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        Alert.alert('Error', 'Please enter a valid email address');
        return;
      }
  
      // Password length validation (example: minimum 6 characters)
      if (password.length < 6) {
        Alert.alert('Error', 'Password must be at least 6 characters');
        return;
      }
  
      // Perform login logic here
      // For demonstration, display a success message
      Alert.alert('Success', 'Login Successful!');
    };



  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={24} color="black" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={24} color="black" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
      </View>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    height: 40,
    width: '100%',
    flex: 1,
  },
});