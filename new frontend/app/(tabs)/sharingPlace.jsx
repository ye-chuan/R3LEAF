import { View, Text } from "react-native";
import React from "react";
import ListOfPosts from '../../components/ListOfPosts';

const sharingPlace = () => {
  return (
    <View>
      <Text> Hello world</Text>
      <ListOfPosts place = 'sharing' userID  = {'bob'} />
    </View>
  );
};

export default sharingPlace;
