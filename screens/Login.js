import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from '@rneui/themed';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebase.js';

export default function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      setEmail('');
      setPassword('');
      alert('Login successful!');
      navigation.navigate('NewsBottomTabs');
    } catch (error) {
      let errorString = error.message;
      console.log(error);
      if (errorString.includes('credentials')) {
        alert('Login failed: Invalid login credentials.');
      } else if (errorString.includes('too-many-request')) {
        alert('Login failed: Too many failed login attempts. Account temporarily disabled. Try again later.');
      } else {
        alert('Login failed: ', errorString);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, alignItems: 'center', marginTop: '25%' }}>
        <Text style={{ fontSize: 25, color: '#f9fafb', marginBottom: '10%' }}>
          Log in using an existing account
        </Text>
        <Input
          placeholder="Email"
          value={email}
          leftIcon={{ type: 'font-awesome', name: 'envelope-square', color: '#f9fafb' }}
          onChangeText={text => setEmail(text)}
          inputStyle={styles.input}
        />
        <Input
          placeholder="Password"
          value={password}
          secureTextEntry={!showPassword}
          leftIcon={{ type: 'font-awesome', name: 'lock', color: '#f9fafb' }}
          onChangeText={text => setPassword(text)}
          inputStyle={styles.input}
        />
        <Button
          title={showPassword ? 'Hide Password' : 'Show Password'}
          onPress={toggleShowPassword}
          buttonStyle={styles.button}
          containerStyle={styles.buttonContainer}
          titleStyle={styles.buttonTitleStyle}
        />
        <Button
          title="LOG IN"
          buttonStyle={styles.button}
          containerStyle={styles.buttonContainer}
          titleStyle={styles.buttonTitleStyle}
          onPress={handleLogin}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#030712',
  },
  buttonContainer: {
    width: 250,
    marginHorizontal: 50,
    marginVertical: 10,
  },
  button: {
    borderColor: '#d1d5db',
    borderWidth: 1,
    marginTop: 8,
    borderRadius: 8,
    backgroundColor: '#111827',
  },
  buttonTitleStyle: {
    fontWeight: 'bold',
    color: '#f3f4f6',
  },
  input: {
    color: '#f9fafb', 
    borderColor: '#d1d5db',
    borderRadius: 8,
    marginTop: 8,
    paddingLeft: 10,
    paddingBottom: 8 
  },
});
