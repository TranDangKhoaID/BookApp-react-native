import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const BookScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topContent}>
                <Image style={styles.iconContent} source={require('../assets/books/onepiece.png')} />
                <View style={styles.thongtin}>
                    <View style={styles.thongtin_sub}>
                        <Text style={styles.text}>Tác giả: </Text>
                        <Text style={styles.text_data}>Trần Đăng Khoa</Text>
                    </View>
                    <View style={styles.thongtin_sub}>
                        <Text style={styles.text}>Thể loại: </Text>
                        <Text style={styles.text_data}>Phiêu lưu, Hành động</Text>
                    </View>
                    <View style={styles.thongtin_sub}>
                        <Text style={styles.text}>Số chương: </Text>
                        <Text style={styles.text_data}>123</Text>
                    </View>
                </View>
            </View>
            <View style={styles.button_control}>
                <TouchableOpacity  onPress={() => { }} style={styles.button_dt}>
                    <Image source={require('../assets/books/doctruyen.png')} style={{marginBottom: 5}} />
                    <Text style={{color:'#FFF'}}>Đọc truyện</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => { }} style={styles.button_dsc}>
                    <Image source={require('../assets/books/dschuong.png')} style={{marginBottom: 5}} />
                    <Text style={{color:'#000'}}>DS Chương</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => { }} style={styles.button_td}>
                    <Image source={require('../assets/books/theodoi.png')} style={{marginBottom: 5}} />
                    <Text style={{color:'#000'}}>Theo dõi</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => { }} style={styles.button_bl}>
                    <Image source={require('../assets/books/binhluan.png')} style={{marginBottom: 5}} />
                    <Text style={{color:'#000'}}>Bình luận</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default BookScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCF6E1'
    },
    iconContent: {
        margin: 10,
        height: 120,
        width: 120,
    },
    topContent: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    thongtin_sub: {
        flexDirection: 'row',
        marginVertical: 5,
    },
    text: {
        fontWeight: 'bold',
    },
    button_control:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 10,
    },
    button_dt:{
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2062AF'
    },
    button_dsc:{
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#97E7A4'
    },
    button_td:{
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#82DDFA'
    },
    button_bl:{
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E1B287'
    }
})