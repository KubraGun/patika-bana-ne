import React, {useState} from 'react';
import {SafeAreaView, Text, Alert} from 'react-native';
import{Formik} from 'formik';
import auth from '@react-native-firebase/auth';

import {showMessage} from 'react-native-flash-message';
import authErrorMessageParser from '../../../utils/authErrorMessageParser'

import styles from './Sign.style';


import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/index';

const initialFormValues = {
  usermail: '',
  password: '',
  repassword: '',
}

const Sign = ({navigation}) => {
  const [loading, setLoading] = useState
  function handleLogin(){
    //navigation.navigate('LoginPage'); // bunun yerine:
    navigation.goBack();
  }

  async function handleFormSubmit(formValues){
    if (formValues.password != formValues.repassword)
    {
      showMessage({
        message: 'Şifreler uyuşmuyor' ,
        type: 'danger',
      });
      
      return;
    }

    try {
      await auth().createUserWithEmailAndPassword(
        formValues.usermail,
        formValues.password,
      );

      showMessage({
        message: 'Kullanıcı oluşturuldu',
        type: 'succes',
      });
      navigation.navigate('LoginPage');
      setLoading(false);
    }
    catch (error){
      showMessage({
        message: authErrorMessageParser(error.code) ,
        type: 'danger',
      });

      setLoading(false);
    }
  }

  return(
    <SafeAreaView>
      <Text style={styles.header}>bana ne?</Text>
      <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
        { ({values, handleChange, handleSubmit}) => (   
            <>
              <Input 
                    placeholder='e-postanızı giriniz' 
                    value={values.usermail}
                    onType={handleChange('usermail')}
              />
              <Input 
                    placeholder='şifrenizi giriniz'
                    value={values.password}
                    onType={handleChange('password')}   
                    isSecure    
             />
              <Input 
                    placeholder='şifrenizi tekrar giriniz' 
                    value={values.repassword}
                    onType={handleChange('repassword')}
                    isSecure
              />
              <Button text='Kayıt Ol' onPress={handleSubmit} loading={loading}/>
            </>
        )}
      </Formik>
      <Button text='Giriş sayfasına dön' theme='secondary' onPress={handleLogin}/>
    </SafeAreaView>
  );
}

export default Sign;

// Oluşturulan componentlerde belirlenmiş bir stil özellijkleri atarız.
// farklı stil özellikleri eklemek istersek ynai stil gibi genelleştirilebilir yapıda neler yapılır?
