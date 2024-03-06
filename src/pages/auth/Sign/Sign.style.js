import {StyleSheet, Dimensions, Platform} from 'react-native';
import colors from '../../../styles/colors';

export default StyleSheet.create({
  header:{
    color: colors.darkgreen,
    margin: 5,
    fontSize: Platform.OS == 'android' ? 120 : 160,
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  body_container: {
    flex:1,
  },
});