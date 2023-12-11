import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from '@rneui/themed';

const Search = ({ navigation, keyword, setKeyword }) => {

  const searchNews = async (text) => {
    if (text.length > 0) {
      setKeyword(text)
      navigation.navigate('News');
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, alignItems: 'center', marginTop: '25%' }}>
        <Input
          placeholder="Search news..."
          value={keyword}
          onChangeText={text => setKeyword(text)}
          inputStyle={styles.input}
        />
        <Button
          title="Search"
          buttonStyle={styles.button}
          containerStyle={styles.buttonContainer}
          titleStyle={styles.buttonTitleStyle}
          onPress={() => searchNews(keyword)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#030712',
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
  header: {
    backgroundColor: '#db393c',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  input: {
    color: '#f9fafb', 
    borderColor: '#d1d5db',
    borderRadius: 8,
    marginTop: 8,
    paddingLeft: 10,
    paddingBottom: 8 
  },
  resultContainer: {
    marginBottom: 16,
  },
});

export default Search;
