import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const ImageComponent = ({ imageUrl = "https://ezop.com/wp-content/uploads/2021/04/dos-donts-of-recycling-wisconsin-750x510.jpg", borderRadius = 10 }) => {
  console.log("im renderin");
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: imageUrl }}
        style={[styles.image, { borderRadius: borderRadius }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: "100%", // Set the width of the image
    height: "100%", // Set the height of the image
    resizeMode: 'cover', // You can change this to 'contain', 'stretch', etc.
  },
});

export default ImageComponent;
