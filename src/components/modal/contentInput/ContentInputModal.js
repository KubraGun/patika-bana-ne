import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import Modal from 'react-native-modal';

import styles from './ContentInputModal.style';

import Button from '../../Button/Button';


const ContentInputModal = ({visible, onClose, onSend}) => {
  const [text, setText] = useState(null);

  function handleSend(){
    if(!text)
    {
      return;
    }

    onSend(text);
    setText(null);
  }

  return (
    <Modal 
            style={styles.modal} 
            isVisible={visible} 
            swipeDirection='down'
            onSwipeComplete={onClose} 
            onBackdropPress={onClose} 
            onBackButtonPress={onClose}
    >
      <View style={styles.container}>
        <View>
          <TextInput placeholder='darla hadi milleti..'
                      onChangeText={setText}
                      multiline              
          />        
        </View>
        <Button text='Gönder' onPress={handleSend}/>
      </View>
    </Modal>
  );
}

export default ContentInputModal;