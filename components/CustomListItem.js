import React, { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { db } from '../firebase';
const CustomListItem = ({ id, chatName, enterChat }) => {
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = db
      .collection('chats')
      .doc(id)
      .collection('messages')
      .orderBy('timestamp', 'asc')
      .onSnapshot((snapshot) =>
        setChatMessages(snapshot.docs.map((doc) => doc.data()))
      );
    return unsubscribe;
  }, []);

  return (
    <View>
      <ListItem onPress={() => enterChat(id, chatName)} key={id} bottomDivider>
        <Avatar
          rounded
          source={{
            uri:
              chatMessages?.[0]?.photoURL ||
              'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          }}
        />
        <ListItem.Content>
          <ListItem.Title style={{ fontWeight: '800' }}>
            {chatName}
          </ListItem.Title>
          <ListItem.Subtitle numberOfLines={1} ellipsizeMode='tail'>
           {chatMessages?.[0]?.displayName} : {chatMessages?.[0]?.message}
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </View>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({});
