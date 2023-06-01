import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React,{ useRef, useState }  from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useEffect } from 'react'

const DetailChapter = ({ navigation, route }) => {
    //lay data
    const { id } = route.params;
    const [data, setData] = useState(null);
    const API_URL = `http://192.168.1.7:3001/api/chapters/${id}`;

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
    
    if (!data) {
        // Xử lý khi đang tải dữ liệu
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#FCF6E1' }}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.text_title}>Đang tải dữ liệu...</Text>
                </View>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FCF6E1' }}>
            <View style={{ flex: 1 }}>
                <Text style={styles.text_title}>Chương {data[0].chapter_number} :  {data[0].title}</Text>
                <ScrollView>
                    <Text style={styles.text_content}>{data[0].content}</Text>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};
export default DetailChapter;

const styles = StyleSheet.create({
    text_title: {
        marginHorizontal: 20,
        marginTop: 10,
        fontSize: 23,
    },
    text_content: {
        marginHorizontal: 20,
        marginVertical: 10,
        fontSize: 15,
    }
})