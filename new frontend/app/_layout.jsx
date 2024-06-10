import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import ListOfPosts from '../components/ListOfPosts';

const _layout = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View>
          <Text>Hello World</Text>
          <ListOfPosts place='homepage' userID='BOB' />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default _layout;
