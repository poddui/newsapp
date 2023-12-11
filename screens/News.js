import React, { useEffect , useState } from 'react'
import { ActivityIndicator, FlatList, TouchableOpacity, View, StyleSheet, } from 'react-native'
import { Text } from '@rneui/themed';
import Header from '../components/Header';
import Card from '../components/Card'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Fontisto';

export default function News({keyword, setKeyword }) {

  const [apikey, setApiKey] = React.useState('7f4fa14d74c040b0b119948a4e82933a');
  const [data, setData] = useState(null);
  const [Loading, setLoading] = useState(false);
  const [Select, setSelect] = useState(0);
  const [Category, setCategory] = React.useState([
    {
      id: 1,
      name: 'Main page',
      category: 'general',
    },
    {
      id: 5,
      name: 'Sports',
      category: 'sports',
    },
    {
      id: 2,
      name: 'Business',
      category: 'business',
    },
    {
      id: 3,
      name: 'Entertainment',
      category: 'entertainment',
    },
    {
      id: 4,
      name: 'Health',
      category: 'health',
    },
    {
      id: 6,
      name: 'Science',
      category: 'science',
    },
    {
      id: 7,
      name: 'Technology',
      category: 'technology',
    },
  ]);

  const navigation = useNavigation();

  useEffect(() => {
    if(keyword?.length > 0){
      getDataSearch(keyword)
    }
    else{
      getData(Category[Select].category);
    }
  }, [keyword]);

  const getData = async category => {
    setLoading(true);
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikey}&category=${category}`,
    );
    const data = await response.json();
    setData(data.articles);
    setLoading(false);
  };

  const getDataSearch = async keyword => {
    setLoading(true);
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikey}&q=${keyword}`,
    );
    const data = await response.json();
    setData(data.articles);
    setLoading(false);
  };

  return (
<>
  <View style={styles.pageContainer}>
        <View style={{ flex: 1 }}>
          <Header navigation={navigation} />
          {keyword?.length > 0 ? (
            <View style={styles.searchContainer}>
              <Text style={styles.searchText}>You searched for "{keyword}".</Text>
              <TouchableOpacity onPress={() => setKeyword('')}>
                <Icon name="close-a" size={20} color="#b91c1c" />
              </TouchableOpacity>
            </View>
          ): (
            <View style={styles.categoryContainer}>
            <FlatList
              data={Category}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                style={
                    index === Select
                    ? styles.categoryButton
                    : styles.categoryButtonInactive
                  }
                  onPress={() => {
                    setSelect(index);
                    getData(Category[index].category);
                  }}>
                  <Text
                    style={
                      index === Select
                      ? styles.categoryButtonText
                      : styles.categoryButtonTextInactive
                    }>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              )}/>
          </View> 
          )}
          {Loading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator color={'#db393c'} size={36} />
            </View>
          ) : (
          <View style={styles.cardContainer}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={data}
              renderItem={({ item, index }) => (
                <Card item={item} navigation={navigation} index={index} />
              )}
            />
          </View>
         )}
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
    pageContainer:{
      flex: 1,
      backgroundColor: '#030712',
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    categoryContainer: {
      paddingHorizontal: 5,
      margin: 5,
      paddingVertical: 8,
    },
    categoryButton: {
      paddingHorizontal: 10,
      paddingVertical: 8,
      marginRight: 8,
      borderRadius: 8,
      backgroundColor: '#b91c1c',
      borderWidth: 1,
      borderColor: 'white'
    },
    categoryButtonInactive: {
      paddingHorizontal: 4,
      paddingVertical: 8,
      marginRight: 8,
      borderRadius: 8,
      backgroundColor: '#dddddd',
      borderWidth: 1,
      borderColor: 'white'
    },
    categoryButtonText: {
      color: '#fef2f2',
      fontSize: 16,
    },
    categoryButtonTextInactive: {
      color: '#030712',
      fontSize: 16,
    },
    cardContainer: {
      marginBottom: 16,
    },
    searchText:{
      color: '#f3f4f6',
      fontSize: 20,
    },
    searchContainer:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 15
    }
  });
