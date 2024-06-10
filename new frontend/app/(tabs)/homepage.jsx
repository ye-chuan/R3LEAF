import React from 'react';
import { View, Text } from 'react-native';
import ListOfPosts from '../../components/ListOfPosts';

const homepage = () => {
  return (
    <View>
      <Text>Hello world</Text>
      <ListOfPosts place="homepage" userID={'bob'} />
    </View>
  );
};

export default homepage;
