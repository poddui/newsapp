import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Button, Text, Overlay } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

export default function Start() {
  const uutiset = require('../assets/news.png');
  const navigation = useNavigation();

  const [isDialogVisible, setDialogVisible] = React.useState(false);

  const handleOpenDialog = () => {
    setDialogVisible(true);
  };

  const handleCloseDialog = () => {
    setDialogVisible(false);
  };

  const handleConfirmation = () => {
    navigation.navigate('NewsBottomTabs');
    setDialogVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Podduikin News App</Text>
        <Image source={uutiset} style={styles.tinyLogo} />
      </View>
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
        <Text style={styles.text}>
          Don't wanna sign in?{' '}
        </Text>
        <Button type="clear" onPress={handleOpenDialog}>
          <Text style={styles.guestButton}>Use as guest</Text>
        </Button>
        <Overlay
          isVisible={isDialogVisible}
          onBackdropPress={handleCloseDialog}
          overlayStyle={styles.dialogOverlay}
        >
          <Text style={styles.dialogText}>
            Are you sure you want to continue? You will get access to full features when you signup!
          </Text>
          <View style={styles.dialogContent}>
            <Button
              title="Browse as guest"
              onPress={handleConfirmation}
              buttonStyle={styles.confirmButton}
              titleStyle={styles.alertbuttonTitleStyle}
            />
            <Button
              color="error"
              title="Cancel"
              onPress={handleCloseDialog}
              buttonStyle={styles.cancelButton}
              containerStyle={styles.confirmButtonContainer}
              titleStyle={styles.alertbuttonTitleStyle}
            />
          </View>
        </Overlay>
      </View>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50,
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
  guestButton: {
    fontSize: 15,
    color: '#0373fc',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#f9fafb',
  },
  dialogContent: {
    margin: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  confirmButtonContainer: {
    marginLeft: 40,
  },
  confirmButton: {
    borderColor: '#d1d5db',
    borderWidth: 1,
    marginTop: 8,
    borderRadius: 8,
    backgroundColor: '#111827',
  },
  cancelButton: {
    borderColor: '#f9fafb',
    borderWidth: 1,
    marginTop: 8,
    borderRadius: 8,
    backgroundColor: '#b91c1c',
  },
  alertbuttonTitleStyle: {
    color: '#f3f4f6',
  },
  dialogOverlay: {
    backgroundColor: '#1f2937',
    padding: 20,
    borderRadius: 10,
    width: '95%'
  },
  dialogText: {
    fontSize: 18,
    margin: 10,
    color: '#f3f4f6',
  },
});
