import React from 'react'
import { View, StyleSheet , ImageBackground} from 'react-native'
import { Text , Input, Button} from '@rneui/themed';
import { auth } from '../firebase.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native'; 

export default function Register() {

    const navigation = useNavigation();

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [passwordCheck, setPasswordCheck] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(false);

    const toggleShowPassword = () => {
      setShowPassword(!showPassword);
    };

    const handleSignup = async () => {
        if(password === passwordCheck && password.length > 5 && password.length < 37 && email.length > 3 && email.length < 70 && email.includes("@")){
            try{
                const response = await createUserWithEmailAndPassword(auth, email, password)
                setEmail('')
                setPassword('')
                setPasswordCheck('')
                alert('Registration successful!\nPlease login!');
            } catch (error){
                console.log(error);
                alert('Registration failed: ' + error.message);
            } finally{
                navigation.navigate('Login')
            }
        } else{
            let baseString = 'Account creation failed!';
            if(email.length <= 3 || email.length >= 70 || !email.includes("@")){
                baseString += '\nInvalid email.';
            }
            if(password.length <= 5 || password.length >= 37){
                baseString += '\nPassword needs be between 6-36 characters.';
            }
            if(password != passwordCheck){
                baseString += '\nPasswords did not match.';
            } 
            alert(baseString);
        }
    };

  return (
    <View style={styles.container}>
        <View style={{ flex: 1, alignItems: 'center', marginTop: '25%' }}>
            <Text style={{ fontSize: 25, color: '#f9fafb', marginBottom: '10%' }}>
                Register new account
            </Text>
            <Input
                placeholder="Email"
                value={email}
                leftIcon={{ type: 'font-awesome', name: 'envelope-square', color: '#f9fafb' }}
                onChangeText={text => setEmail(text.trim())}
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
            <Input
                placeholder="Password Confirmation"
                value={passwordCheck}
                secureTextEntry={!showPassword}
                leftIcon={{ type: 'font-awesome', name: 'lock', color: '#f9fafb' }}
                onChangeText={text => setPasswordCheck(text)}
                inputStyle={styles.input}
            />
            <Button
                title={showPassword ? 'Hide Passwords' : 'Show Passwords'}
                onPress={toggleShowPassword}
                buttonStyle={styles.button}
                containerStyle={styles.buttonContainer}
                titleStyle={styles.buttonTitleStyle}
            />
            <Button
                title="SIGN UP"
                buttonStyle={styles.button}
                containerStyle={styles.buttonContainer}
                titleStyle={styles.buttonTitleStyle}
                onPress={handleSignup}
            />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#030712',
    },
    buttonContainer:{
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