import React from 'react'
import {View, Text} from 'react-native';
import{formatDistance} from 'date-fns';
import {tr} from 'date-fns/locale';

import styles from './MessageCard.style';

const MessageCard = ({message}) => {
  const formattedDate = formatDistance(parseISO(message.date), new Date(), {addSuffix: true, locale: tr,});

  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <Text style={styles.user}>{message.username}</Text>
        <Text style={styles.date}>{formattedDate}</Text>
      </View>     
      <Text style={styles.title}>{message.text}</Text>
    </View>
  );
}

export default MessageCard;

