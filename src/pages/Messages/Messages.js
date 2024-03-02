import React from 'react';
import {SafeAreaView} from 'react-native';


import FloatingButton from '../../components/FloatingButton/FloatingButton';
import ContentInputModal from '../../components/modal/contentInput/ContentInputModal';

import database from '@react-native-firebase/database';

import styles from './Messages.style';

const Messages = () => {
  const [inputModalVisible, setInputModalVisible] = React.useState(false);

  function handleSendContent(content) {
    handleInputToggle();
  }

  function handleInputToggle(){
    setInputModalVisible(!inputModalVisible);
  }

  return (
    <SafeAreaView style={styles.container}>
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