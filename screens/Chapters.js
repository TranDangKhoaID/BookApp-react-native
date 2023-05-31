import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {useNavigation, useRoute } from '@react-navigation/native'

const ChaptersScreen = ({route }) => {
  const navigation = useNavigation();
  const { bookID } = route.params;
  const [data, setData] = useState([]);
  const API_URL = `http://192.168.1.7:3001/api/books/${bookID}/chapters`;
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error(error);
    }
  };

  const renderItem = ({ item }) => {
    return <ListItem navigation={navigation} id={item.id} chapter={item.chapter_number} title={item.title} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textC}>Danh sách chương</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

export default ChaptersScreen

class ListItem extends Component {
  render() {
    const { navigation,chapter, title, id } = this.props;

    return (

      <View style={styles.textContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('DetailChapter', {id : id})}>
          <View style={styles.textContent}>
            <Text style={{ fontSize: 15 }}>Chương </Text>
            <Text style={{ fontSize: 15 }}>{chapter} : </Text>
            <Text style={{ fontSize: 15 }}>{title}</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.border}></Text>
      </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textC: {
    fontWeight: 'bold',
    margin: 10,
    fontSize: 25,
  },
  textContainer: {
    marginTop: 10,
    marginHorizontal: 10,
  },
  textContent: {
    flexDirection: 'row',
    fontSize: 15,
  },
  border: {
    borderBottomWidth: 1,
    borderBottomColor: "#000"
  }
})