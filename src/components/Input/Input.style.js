import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 10, 
    margin: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    flexDirection: 'row',
  },

  input: {
    flex:1, // kalan alanın tamamını kaplar
    padding: Platform.OS == 'android' ? 0 : 5,
  },
//Platform.OS -> 'android' ya da 'ios' olarak döner
});