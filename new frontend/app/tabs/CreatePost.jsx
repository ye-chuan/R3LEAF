import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, Keyboard } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Camera from '../../components/Camera'; // Adjust the path if necessary

const CreatePost = ({ title = "Create A Post", navigation }) => {
  const [text, onChangeText] = useState('');
  const [showImagePicker, setShowImagePicker] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const showKeyboard = () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };

    showKeyboard();
  }, []);

  const handleUploadedImage = (image) => {
    console.log('Image uploaded: ', image);
    setShowImagePicker(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
          </View>
          <View style={styles.content}>
            <TextInput
              ref={inputRef}
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              placeholder="write your thoughts..."
              placeholderTextColor="#fff"
              multiline
              autoFocus
              blurOnSubmit={true}
              onSubmitEditing={Keyboard.dismiss}
            />
            <TouchableOpacity style={styles.imageButton} onPress={() => setShowImagePicker(true)}>
              <FontAwesome name="image" size={24} color="#fff" />
              <Text style={styles.imageButtonText}>Add Image</Text>
            </TouchableOpacity>
            {showImagePicker && <Camera handleUploadedImage={handleUploadedImage} />}
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Anyone can like and comment</Text>
          <TouchableOpacity style={styles.postButton}>
            <Text style={styles.postButtonText}>Post</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#5D7971',
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#5D7971',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 8,
  },
  content: {
    padding: 16,
    alignItems: 'center',
  },
  imageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#3E6B48',
    borderRadius: 8,
  },
  imageButtonText: {
    color: '#fff',
    marginLeft: 8,
    fontSize: 16,
  },
  input: {
    width: '100%',
    minHeight: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    color: '#fff',
    marginBottom: 16,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#5D7971',
  },
  footerText: {
    color: '#fff',
  },
  postButton: {
    backgroundColor: '#3E6B48',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  postButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default CreatePost;
