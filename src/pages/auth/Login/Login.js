import {SafeAreaView, Text} from 'react-native';
import React, {useState} from 'react';
import styles from './Login.style';
import {Formik} from 'formik';
import {showMessage} from 'react-native-flash-message';
import auth from '@react-native-firebase/auth';

import authErrorMessageParser from '../../../utils/authErrorMessageParser'

import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/index';

const initialFormValues = {
  usermail: '',
  password: '', 
}

const Login = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  function handleSignUp(){
    navigation.navigate('SignPage')
  }


  // ya then catch ile try catch fonksiyonunda yazarız ya da async-await kullanarak yine try catch içinde yazarız.
  async function handleFormSubmit(formValues){
    try {
      setLoading(true);
      await auth.signInWithEmailAndPassword(formValues.usermail, formValues.password);
    }
    setLoading(false);
    catch (error) {
      // Alert.alert('giriş başarısız'); //bunun yreine:
      showMessage({
        message: authErrorMessageParser(error.code),
        type: 'danger', // kırmızı renkli kayanbildirim
      })
      setLoading(false)
    }
  }

  return(
    <SafeAreaView>    
      <Text style={styles.header}>bana ne?</Text>
      <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
        {({values, handleChange, handleSubmit}) => (
                  <>
                    <Input 
                          value={values.usermail}
                          onType={handleChange('usermail')}
                          placeholder='e-postanızı giriniz'                          
                    />
                    <Input
                          value={values.password}
                          onType={handleChange('password')} 
                          placeholder='şifrenizi giriniz' 
                          isSecure
                    />
                    <Button 
                            text='Giriş Yap' 
                            onPress={handleSubmit} 
                            loading={loading}       
                    />
                  </> 
        )

        }
      </Formik>
      <Button text='Kayıt Ol' theme='secondary' onPress={handleSignUp}/>
    </SafeAreaView>
  );
}

export default Login;

// Oluşturulan componentlerde belirlenmiş bir stil özellijkleri atarız.
// farklı stil özellikleri eklemek istersek ynai stil gibi genelleştirilebilir yapıda neler yapılır?
