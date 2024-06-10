import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, Platform, Keyboard, Button } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';
import CameraComponent from '../../components/Camera'; // Adjust the path as necessary

const CreatePost = () => {
  const [postContent, setPostContent] = useState('');
  const [media, setMedia] = useState([]);

  useEffect(() => {
    (async () => {r
      const mediaStatus = await MediaLibrary.requestPermissionsAsync();
      if (mediaStatus.status !== 'granted') {
        alert('Permission to access media library is required!');
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setMedia([...media, result.uri]);
    }
  };

  const addCapturedMedia = (uri) => {
    setMedia([...media, uri]);
  };

  const handleSubmit = () => {
    console.log('Post Content:', postContent);
    console.log('Media:', media);
    // Handle post submission logic here
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TextInput
          style={styles.input}
          placeholder="Write your post here..."
          multiline
          numberOfLines={4}
          onChangeText={setPostContent}
          value={postContent}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={pickImage}>
            <Text style={styles.buttonText}>Pick Image/Video</Text>
          </TouchableOpacity>
        </View>
        <CameraComponent addCapturedMedia={addCapturedMedia} />
        <View style={styles.mediaContainer}>
          {media.map((uri, index) => (
            <Image key={index} source={{ uri }} style={styles.media} />
          ))}
        </View>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Post</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  input: {
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  mediaContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  media: {
    width: 100,
    height: 100,
    borderRadius: 10,
    margin: 5,
  },
  submitButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default CreatePost;
