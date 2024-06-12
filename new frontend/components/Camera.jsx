import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import * as Permissions from 'expo-permissions';

const ImagePickerComponent = ({ handleUploadedImage }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const requestCameraPermission = async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      if (status === 'granted') {
        handleOpenCamera();
      } else {
        Alert.alert('Camera Permission Denied');
      }
    };

    requestCameraPermission();
  }, []);

  const handleOpenCamera = () => {
    launchCamera(
      {
        mediaType: 'photo',
        cameraType: 'back',
        saveToPhotos: true,
      },
      (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorCode) {
          console.log('ImagePicker Error: ', response.errorMessage);
        } else {
          const source = { uri: response.assets[0].uri };
          setSelectedImage(source);
          handleUploadedImage(source);
        }
      }
    );
  };

  const handleOpenGallery = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
      },
      (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorCode) {
          console.log('ImagePicker Error: ', response.errorMessage);
        } else {
          const source = { uri: response.assets[0].uri };
          setSelectedImage(source);
          handleUploadedImage(source);
        }
      }
    );
  };

  return (
    <View style={styles.container}>
      {selectedImage && <Image source={selectedImage} style={styles.image} />}
      <TouchableOpacity style={styles.button} onPress={handleOpenCamera}>
        <Text style={styles.buttonText}>Open Camera</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleOpenGallery}>
        <Text style={styles.buttonText}>Upload Image</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#3E6B48',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginVertical: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ImagePickerComponent;
