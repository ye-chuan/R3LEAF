import { View, Text, TextInput, Image, StyleSheet, Pressable } from "react-native";
import { React, useState } from "react";
import ListOfPosts from '../../components/ListOfPosts';
import { FontAwesome } from "@expo/vector-icons";

const SharingPlace = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (text) => {
    setSearchQuery(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headCont}>
        <Image source={require('../../assets/ui/page-header.png')} style={styles.headBg}/>
        <Text style={styles.title}>Sharing Place</Text>
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
        </View>
      </View>
      <ListOfPosts place="sharing" userID={'bob'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 50,
    zIndex: 11,
    width: '100%',
    textAlign: 'center',
    color: "#fff",
  },
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
  searchCont:{
    position: 'absolute',
    zIndex: 11,
    top: 90,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
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
  }
});

export default SharingPlace;