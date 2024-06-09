// ImageComponent.tsx
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

interface ImageComponentProps {
  imageBase64: string;
  borderRadius: number;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ imageBase64, borderRadius = 10 }) => {
  
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: imageBase64 }}
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
