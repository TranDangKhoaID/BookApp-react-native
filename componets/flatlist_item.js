import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, TextInput, Text, View, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import RatingBar from './rating_bar';
import api from '../LinkAPI';

class MyFlatList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [], // Mảng lưu trữ danh sách sách
            chapters:[],
        };
    }
    componentDidMount() {
        fetch(api + ':3001/api/books')
            .then(response => response.json())
            .then(data => {
                this.setState({ books: data });
            })
            .catch(error => {
                console.error(error);
            });
    }
    
    renderItem = ({ item }) => {
        const { navigation } = this.props;
       
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Book', { book: item })}>
                <View style={item.id % 2 === 0 ? styles.contentSub_2 : styles.contentSub}>
                    <Image style={styles.iconContent} source={{ uri: item.cover_image }} />
                    <View style={styles.thongtin}>
                        <Text>{item.title}</Text>
                        <RatingBar totalStars={5} defaultRating={item.rating} />
                        <View style={styles.tacgia_chuong}>
                            <Text style={styles.text_tacgia}>
                                Tác giả: {item.author}
                            </Text>
                           
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    render() {
        const { searchText } = this.props;
        const filteredBooks = this.state.books.filter((book) =>
        book.title.toLowerCase().includes(searchText.toLowerCase())
        );
        return (
            <FlatList
                data={filteredBooks} // Sử dụng dữ liệu sách từ trạng thái
                keyExtractor={item => item.id.toString()}
                renderItem={this.renderItem}
            />
        );
    }

}

const styles = StyleSheet.create({
    contentSub: {
        paddingLeft: 15,
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 5,
        paddingHorizontal: 5,
    },
    contentSub_2: {
        paddingLeft: 15,
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 5,
        paddingHorizontal: 5,
        backgroundColor: '#E1E0E0',
    },
    tacgia_chuong: {
        flexDirection: 'row',
    },
    text_chuong: {
        textAlign: 'right',
    },
    text_tacgia: {
        textAlign: 'left',
    },
    thongtin: {
        marginLeft: 5,
    },
    iconContent: {
        width: 60,
        height: 50,
    }
})

export default MyFlatList