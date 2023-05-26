import {Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { Ionicons } from 'react-native-vector-icons/Ionicons';
import { FontAwesome5 } from 'react-native-vector-icons/FontAwesome5';


const CustomDrawer = (props) => {
  return (
    <View style={{flex: 1}}>
        <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor: '#309CFF'}}>
            <Image 
                source={require('../assets/images/profile/avatar.jpg')}
                style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10, marginLeft: 20}}
            />
            <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
                <DrawerItemList {...props}/>
            </View>
        </DrawerContentScrollView>
        <View>
            <Text>Custom</Text>
        </View>
    </View>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({})