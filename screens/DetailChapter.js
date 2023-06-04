import { View, Text, ScrollView, StyleSheet, Switch } from 'react-native';
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useEffect } from 'react'
import { Picker } from '@react-native-picker/picker';
import api from '../LinkAPI';


const DetailChapter = ({ route }) => {
    //lay data
    const { id } = route.params;
    const [data, setData] = useState(null);
    const API_URL =  api + `:3001/api/chapters/${id}`;
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [fontSize, setFontSize] = useState(15);


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
    //đổi màu nền
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
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
        <SafeAreaView style={{ flex: 1, backgroundColor: isDarkMode ? 'black' : 'white' }}>
            <View style={{ flex: 1 }}>
                <Text style={[styles.text_title, { color: isDarkMode ? 'white' : 'black' }]}>Chương {data[0].chapter_number} :  {data[0].title}</Text>
                <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                        <Switch
                            value={isDarkMode}
                            onValueChange={toggleDarkMode}
                        />
                        <Picker
                            selectedValue={fontSize}
                            style={{ height: '100%', width: 120 }}
                            onValueChange={(itemValue) => setFontSize(itemValue)}
                        >
                            <Picker.Item label="Nhỏ" value={12} />
                            <Picker.Item label="Trung bình" value={15} />
                            <Picker.Item label="Lớn" value={20} />
                        </Picker>

                    </View>
                </View>
                <ScrollView>
                    <Text style={[styles.text_content, { color: isDarkMode ? 'white' : 'black', fontSize: fontSize }]}>{data[0].content}</Text>
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
    }
})