import React from 'react';
import { useState } from 'react';
import { View, TextInput, Image, StyleSheet, Dimensions, Pressable, Alert } from 'react-native';
import ListOfPosts from '../../components/ListOfPosts';
import { FontAwesome } from '@expo/vector-icons';

const Homepage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (text) => {
    setSearchQuery(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headCont}>
        <Image source={require('../../assets/ui/page-header.png')} style={styles.headBg}/>
        <Image source={require('../../assets/logo/R3LEAF-icon.png')} style={styles.logo}/>
        <View style={styles.searchCont}>
          <View style={styles.searchText}>
            <TextInput
              style={styles.searchBar}
              placeholder="Search..."
              placeholderTextColor="#FFF" 
              value={searchQuery}
              onChangeText={handleSearchChange}
            />
            <Pressable style={styles.searchBtn}
            onPress={()=> {Alert.alert("hello")}}>
              <FontAwesome name="search" size={20} color={"#fff"}/>
            </Pressable>
          </View>
          <View style={styles.searchCamera}>
            <Pressable style={styles.cameraBtn}
            onPress={()=> {Alert.alert("hello")}}>
              <FontAwesome name="camera" size={20} color={"#fff"}/>
            </Pressable>
          </View>
        </View>
      </View>
      <ListOfPosts place="homepage" userID={'bob'} />
    </View>
  );
};

const styles = StyleSheet.create({
  headCont:{
    position: 'relative',
    top: 0,
    zIndex: 10,
    height: 130,
    width: '100%',
  },
  headBg:{
    zIndex: 10,
    height: 180,
    width: '100%',
  },
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: "#EAF2EC",
  },
  logo: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 40,
    left: 80,
    right: 80,
    zIndex: 11,
    height: 80,
    width: '60%',
    resizeMode: 'contain',
  },
  searchCont:{
    position: 'absolute',
    zIndex: 11,
    top: 90,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    width: '100%',
    paddingHorizontal: 30,
    marginTop: 20,
  },
  searchText:{
    width: '100%',
    position: 'relative',
  },
  searchBar: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    padding: 10,
    borderRadius: 4,
    color: '#fff',
  },
  searchBtn: {
    position: 'absolute',
    right: 0,
    padding: 6,
  },
  cameraBtn:{
    padding: 6,
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },

});

export default Homepage;