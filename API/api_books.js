const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

// Kết nối tới cơ sở dữ liệu MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'book_reader'
});

// Sử dụng body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Kết nối tới cơ sở dữ liệu
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
  } else {
    console.log('Connected to database');
  }
});

//lấy danh sách bảng books
app.get('/api/books', (req, res) => {
  const query = 'SELECT * FROM books';

  // Thực hiện truy vấn cơ sở dữ liệu
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error executing database query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      // Trả về kết quả cho ứng dụng React Native
      res.json(results);
    }
  });
});
//thêm books mới
// Định nghĩa endpoint API để thêm sách mới
app.post('/api/books', (req, res) => {
    const { title, author, genre, description, cover_image } = req.body;
    const query = 'INSERT INTO Books (title, author, genre, description, cover_image) VALUES (?, ?, ?, ?, ?)';
    const values = [title, author, genre, description, cover_image];
  
    connection.query(query, values, (err, result) => {
      if (err) {
        console.error('Error executing database query:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json({ id: result.insertId, title, author, genre, description, cover_image });
      }
    });
  });
//xóa sách
// Xóa sách từ cơ sở dữ liệu
app.delete('/api/books/:id', (req, res) => {
    const bookId = req.params.id;
    const query = 'DELETE FROM books WHERE id = ?';
    
    connection.query(query, [bookId], (err, result) => {
      if (err) {
        console.error('Error executing database query:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        if (result.affectedRows === 0) {
          // Không tìm thấy sách có id tương ứng
          res.status(404).json({ error: 'Book not found' });
        } else {
          // Xóa sách thành công
          res.json({ message: 'Book deleted successfully' });
        }
      }
    });
  });
  
  
// Khởi động server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
