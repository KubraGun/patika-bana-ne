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
  logo_container: {
    justifyContent: 'center',
    flex: 1,
  },
  body_container: {
    flex:1,
  },
  logo: {
    height: Dimensions.get('window')/3,
    width: Dimensions.get('window') * 0.9,
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white', // logodaki siyah alışveriş arabasının rengi beyaz olarak değiştirilir
  },
});