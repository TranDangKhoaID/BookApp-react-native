import React, { useState } from 'react';
import {
  Button,
  View,
  Text,
  TextInput,
  Platform,
  DatePickerIOS,
} from 'react-native';
import moment from 'moment';
import { styles } from './styles'
function SinhNhat() {
  const [birthday, setBirthday] = useState(new Date());
  const [age, setAge] = useState('0');
  const [daysToBirthday, setDaysToBirthday] = useState('0');
  const [text, onChangeText] = React.useState(moment().format('DD/MM/YYYY'));

  const calculateAgeAndDaysToBirthday = () => {
    const now = moment();
    const birthdate = moment(birthday);

    const years = now.diff(birthdate, 'years');
    setAge(years.toString());

    birthdate.year(now.year());
    const isBirthdayToday = birthdate.isSame(now, 'day');

    if (isBirthdayToday) {
      // Nếu ngày sinh nhật trùng với ngày hôm nay
      alert('Happy birthday');
      setDaysToBirthday('0');
    } else {
      if (birthdate.isSameOrBefore(now)) {
        birthdate.add(1, 'year');
      }
      const days = birthdate.diff(now, 'days');
      setDaysToBirthday(days.toString());
    }
  };
  const handleBirthdayChange = (selectedDate) => {
    const currentDate = selectedDate || birthday;
    setBirthday(currentDate);
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 16, color:'red' }}>Tính tuổi</Text>
      {Platform.OS === 'ios' ? (
        <DatePickerIOS date={birthday} onDateChange={handleBirthdayChange} />
      ) : (
        <View>
          <TextInput
            style={styles.containerInput}
            onChangeText={(text) => {
              onChangeText(text);
              setBirthday(moment(text, 'DD/MM/YYYY').toDate());
            }}
            value={text}
          />
        </View>
      )}
      <Button title="Tính" onPress={calculateAgeAndDaysToBirthday} />
      <Text style={{ fontSize: 18, marginTop: 8 }}>
        Tuổi: {age} tuổi
      </Text>
      <Text style={{ fontSize: 18, marginTop: 8 }}>
        Số ngày đến sinh nhật tiếp theo: {daysToBirthday} ngày
      </Text>
    </View>
  );
}
export default SinhNhat