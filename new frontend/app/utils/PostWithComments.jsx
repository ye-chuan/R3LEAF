import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import UserPost from '../../components/post/UserPost';
import CommentComponent from '../../components/post/CommentComponent';
import { useRoute } from '@react-navigation/native';
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view';

const PostWithComments = () => {
  const route = useRoute();
  const { postDetails, userID } = route.params;

  const [comment, setComment] = useState('');
  const [comments, setComments] = useState(postDetails.comments);

  const handleCommentChange = (text) => {
    setComment(text);
  };

  const handleCommentSubmit = () => {
    const newComment = {
      commentID: comments.length + 1,
      authorPic: 'https://example.com/newpic.jpg',
      authorName: 'New User',
      commentText: comment,
      commentDate: new Date().toLocaleString(),
    };
    setComments([...comments, newComment]);
    setComment('');
    Keyboard.dismiss();
  };

  const renderComment = ({ item }) => <CommentComponent commentDetails={item} />;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      keyboardVerticalOffset={90} // Adjust this value as needed
    >
      <View style={styles.flex}>
        <KeyboardAwareFlatList
          data={[{ key: 'post' }, ...comments.map((comment, index) => ({ key: index.toString(), ...comment }))]}
          renderItem={({ item }) => {
            if (item.key === 'post') {
              return <UserPost postDetails={postDetails} userID={userID} isVisible={true} darkMode={true}/>;
            }
            return renderComment({ item });
          }}
          keyExtractor={(item) => item.key}
          contentContainerStyle={styles.scrollContainer}
          enableOnAndroid={true}
          extraScrollHeight={120}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Write a comment..."
            value={comment}
            onChangeText={handleCommentChange}
            onSubmitEditing={handleCommentSubmit}
            placeholderTextColor={'#ddd'}
          />
          <Text style={styles.sendButton} onPress={handleCommentSubmit}>
            Send
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5D7971',
    // padding: 30,
  },
  flex: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#fff',
    paddingBottom: 30
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginRight: 10,
    color: '#fff'
  },
  sendButton: {
    color: '#fff',
    backgroundColor: '#28909E',
    padding: 10,
    borderRadius: 4,
    overflow: 'hidden',
  },
});

export default PostWithComments;
