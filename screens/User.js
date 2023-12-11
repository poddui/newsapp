import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, Button } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { getAuth } from "firebase/auth";
import { signOut } from 'firebase/auth';

export default function User() {

  const auth = getAuth();
  const user = auth.currentUser;
  const account = require('../assets/account.png');
  const navigation = useNavigation();
  const [, forceUpdate] = React.useState();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert('Logout successful!');
      navigation.navigate('Start');
    } catch (error) {
      alert('Error logging out:', error.message);
    }
  };

  const isUser = () => {
    console.log("user on : ", user)
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={account} style={styles.tinyLogo} />
        <Text style={styles.title}>{user?.email}</Text>
      </View>
      {user ? (
        <View style={styles.content}>
          <Button 
            title="LOGOUT"
            buttonStyle={styles.button}
            containerStyle={styles.buttonContainer}
            titleStyle={styles.buttonTitleStyle}
            onPress={() => handleLogout()}
          />
        </View>
      ) :
      <View style={styles.content}>
        <Button
          title="LOG IN"
          buttonStyle={styles.button}
          containerStyle={styles.buttonContainer}
          titleStyle={styles.buttonTitleStyle}
          onPress={() => {
            navigation.navigate('Login');
          }}
        />
        <Button
          title="REGISTER"
          buttonStyle={styles.button}
          containerStyle={styles.buttonContainer}
          titleStyle={styles.buttonTitleStyle}
          onPress={() => {
            navigation.navigate('Register');
          }}
        />
        <Button
          title="ONKO USER"
          buttonStyle={styles.button}
          containerStyle={styles.buttonContainer}
          titleStyle={styles.buttonTitleStyle}
          onPress={() => {
            isUser();
          }}
        />
        
      </View>
        }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#030712',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
  tinyLogo: {
    width: 150,
    height: 150,
    marginTop: 10,
  },
  title: {
    fontSize: 30,
    color: '#f9fafb',
  },
  buttonContainer: {
    width: 250,
    marginHorizontal: 50,
    marginVertical: 10,
    marginBottom: 25,
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
});
