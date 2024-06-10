import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import ListOfPosts from '../../components/ListOfPosts';
// import page-header from 'assets/ui/page-header.png';

const Homepage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headCont}>
        <Image source={require('../../assets/ui/page-header.png')} style={styles.headBg}/>
        <Image source={require('../../assets/logo/R3LEAF-icon.png')} style={styles.logo}/>
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
    top: 50,
    left: 80,
    right: 80,
    zIndex: 11,
    height: 80,
    width: '60%',
    resizeMode: 'contain',
  },
});

export default Homepage;