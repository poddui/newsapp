import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/Foundation';

const Header = ({ navigation }) => {
  const uutiset = require('../assets/news.png');
  return (
    <SafeAreaView style={styles.headerContainer}>
      <View style={styles.innerHeader}>
        <Text style={styles.titleText}>Podduikin News App</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Icon name="magnifying-glass" type="entypo" size={25} color="#f9fafb" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#111827',
  },
  innerHeader: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f9fafb',
  },
});

export default Header;
