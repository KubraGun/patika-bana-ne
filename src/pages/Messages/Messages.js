import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';


import FloatingButton from '../../components/FloatingButton/FloatingButton';
import ContentInputModal from '../../components/modal/contentInput/ContentInputModal';

import MessageCard from '../../components/card/MessageCard/MessageCard';

import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

import styles from './Messages.style';

import parseContentData from '../../utils/parsContentData';

const Messages = () => {
  const [inputModalVisible, setInputModalVisible] = React.useState(false);
  const [contentList, setContentList] = React.useState([]);

  React.useEffect(() => {
    database()
    .ref('messages/')
    .on('value', snapshot => {
      const contentData = snapshot.val();

      /**
       * DB'den silindiği zaman değişiklikler takip edilemeyeceğinden
       * yani DB'den silinir ancak kullanıcı uygulamada yine görür
       if(!contentData) return;

       * bunun yerine : parseContentData içerisine || {} ekleyerek boş bir
       * obje göndermesini sağlayabiliriz
       */


      
      //console.log(contentData/*'User data: ', snapshot.val()*/);
      const parsedData = parseContentData(contentData || {}); //
      setContentList(parsedData);
    });

}, []);

  function handleInputToggle(){
    setInputModalVisible(!inputModalVisible);
  }

  function handleSendContent(content) {
    handleInputToggle();
    sendContent(content);
    //database().ref('messages/'); // bu kısma mesajlar gönderilir

  }

  function sendContent(content){
    const userMail = auth().currentUser.email;

    const contentObj = {
      text: content,
      username: userMail.split('@')[0],
      date: (new Date()).toISOString(),
      dislike: 0,
    };

    database().ref('messages/').push(contentObject);
  }

  const renderItem = ({item}) => <MessageCard message={item} onPress={() => handleBanane(item)}/>

  function handleBanane(item){
    database().ref('messages/${item.id}/').update({dislike: dislike + 1,})
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
                data={contentList}
                renderItem={renderContent}
      />
      <FloatingButton icon='plus' onPress={handleInputToggle}/>
      <ContentInputModal 
                          visible={inputModalVisible} 
                          onClose={handleInputModalClose} 
                          onSend={handleSendContent}
      />
    </SafeAreaView>
  );
}

export default Messages;