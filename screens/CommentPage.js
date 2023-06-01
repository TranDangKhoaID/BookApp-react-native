import React, { useState, Component, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, FlatList } from 'react-native';

const CommentPage = ({route}) => {
  //lay dl tu api
  const { bookID } = route.params;
  const [data, setData] = useState([]);
  const API_URL = `http://192.168.1.7:3001/api/books/${bookID}/comments`;
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
  //them comment
  const [comment, setComment] = useState('');

 const submitComment = () => {
    // Tạo một bình luận mới từ tên tác giả và nội dung
    const newComment = { author: 'Người dùng', content: comment };
    
   
  };

  const renderCommentItem = ({ item }) => (
    <View style={styles.commentItem}>
      <Text style={styles.commentAuthor}>{item.author}</Text>
      <Text>{item.content}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
     <FlatList
        data={data}
        renderItem={renderCommentItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.commentsList}  
        inverted
      />
      <TextInput
        multiline
        placeholder="Nhập bình luận của bạn..."
        value={comment}
        onChangeText={text => setComment(text)}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={submitComment}>
        <Text style={styles.buttonText}>Gửi</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
  commentsList: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  commentItem: {
    marginBottom: 8,
  },
  commentAuthor: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  input: {
    height: 150,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 16,
    paddingHorizontal: 8,
    paddingTop: 8,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CommentPage;
