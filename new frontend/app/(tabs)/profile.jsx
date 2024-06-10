import { View, Text } from "react-native";
import React from "react";
import ListOfPosts from '../../components/ListOfPosts';

const profile = () => {
  return (
    <View>
      <Text> Hello world</Text>
      <ListOfPosts place = 'profile' userID  = {'bob'} />
    </View>
  );
};

export default profile;
