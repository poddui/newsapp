import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from '@rneui/themed';

const Card = ({ item, navigation, index }) => {

    const noimage = require('../assets/noimage.jpg');
  return (
    <View style={styles.outerContainer}>
      <View style={styles.cardContainer}>
      <Image
        source={item.urlToImage ? { uri: item.urlToImage } : noimage}
        style={styles.image}
        resizeMethod="resize"
        />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Button
            title=""
            buttonStyle={styles.readMoreButton}
            onPress={() =>
              navigation.navigate('NewsViewer', {
                url: item.url,
              })
            }
          >
            <View style={styles.buttonContent}>
              <Icon name="arrow-right" type="font-awesome-5" size={12} color="#f3f4f6" />
              <Text style={styles.readMoreButtonTitleStyle}>Read more  </Text>
            </View>
          </Button>
        </View>

        <View style={styles.sourceContainer}>
          <Text style={styles.sourceText}>{item.source.name}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    outerContainer: {
        paddingHorizontal: 5,
    },
    cardContainer: {
        paddingHorizontal: 5,
        paddingVertical: 5,
        marginBottom: 20,
        backgroundColor: '#1f2937',
        borderRadius: 10,
    },
    image: {
        height: 170,
        width: '100%',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'white'
    },
    contentContainer: {
        marginTop: 8,
        paddingHorizontal: 5
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#f3f4f6',
    },
    description: {
        fontSize: 14,
        marginTop: 4,
        color: '#9ca3af',
    },
    readMoreButton: {
        borderColor: '#d1d5db',
        borderWidth: 1,
        marginTop: 8,
        borderRadius: 8,
        backgroundColor: "#111827"
    },
    readMoreButtonTitleStyle: {
        fontWeight: 'bold', 
        color: '#f3f4f6',
    },
    readMoreText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
        marginRight: 4,
    },
    sourceContainer: {
        position: 'absolute',
        top: 8,
        right: 8,
        backgroundColor: '#b91c1c',
        paddingHorizontal: 8,
        borderRadius: 8,
    },
    sourceText: {
        fontSize: 12,
        color: '#f9fafb',
        paddingVertical: 4,
    },
    buttonContent: {
      flexDirection: 'row-reverse', 
      alignItems: 'center', 
      justifyContent: 'center', 
    },
});

export default Card;
