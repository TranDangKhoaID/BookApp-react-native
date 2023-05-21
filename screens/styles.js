import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  containerInput: {
    borderWidth: 2,
    borderRadius: 25,
    borderColor: 'pink',
    padding : 10,
    margin: 5,
  },
    navigationBar: {
    padding: 10,
    backgroundColor: '#309CFF',
    flexDirection: 'row',
  },
  content: {},
  contentSub: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  contentSub_2: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 5,
    backgroundColor: '#E1E0E0',
  },
  iconMenu: {
    justifyContent: 'left',
    alignItems: 'left',
  },
  inputTimKiemContainer: {
    marginHorizontal: 10,
    flex: 5,
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


export { styles };