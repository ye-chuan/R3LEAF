import React from 'react';
import { View, FlatList, StyleSheet, ScrollView } from 'react-native';
import ImageComponent from './ImageComponent';

const ListOfImage = ({ imageUrls, borderRadius = 10 }) => {
  console.log('Image URLs:', imageUrls); // Debugging line

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <FlatList
          data={imageUrls}
          horizontal
          renderItem={({ item }) => (
            <View style={styles.imageWrapper}>
              <ImageComponent imageUrl={item} borderRadius={borderRadius} />
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    width: 200, // Adjust width to fit your design
    height: '100%', // Adjust height to fit your design
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10, // Add some spacing between images
  },
});

export default ListOfImage;
