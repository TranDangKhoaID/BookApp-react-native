import React, {Component} from 'react';
import { StyleSheet, TextInput, Text, View, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import MyFlatList from '../componets/flatlist_item';
import { useNavigation } from '@react-navigation/native'; // Import the useNavigation hook
import { SafeAreaView } from 'react-native-safe-area-context';

function HomePage() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center'}}>
      <View style={styles.container}>
        <View style={styles.navigationBar}>
          <View style={styles.inputTimKiemContainer}>
            <TextInput 
              placeholder="Tìm kiếm"
              style={styles.textTimKiem}
            />
            <TouchableOpacity>
              <Image
                style={styles.iconTimKiem}
                source={require('../assets/books/icon_timkiem.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.content}>
          <MyFlatList navigation={navigation}/>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default HomePage;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigationBar: {
    padding: 10,
    backgroundColor: '#309CFF',
    flexDirection: 'row',
  },
  content: {
    flex: 1,
  },
  iconMenu: {
    justifyContent: 'left',
    alignItems: 'left',
  },
  inputTimKiemContainer: {
    height: 35,
    marginHorizontal: 10,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    alignItems: 'center',
  },
  textTimKiem: {
    flex: 1,
    marginLeft: 7,
    backgroundColor: '#FFF',
  },
  iconTimKiem: {
    backgroundColor: '#FFF',
    marginRight: 7,
  },
  iconList: {
    alignSelf: 'flex-end',
  },
  
});

