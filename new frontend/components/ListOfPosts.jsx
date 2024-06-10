import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import UserPost from './post/UserPost';
import { handleListOfPost } from '../apicalls/post'; // Import the API call

const ListOfPosts = ({ place, userID }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the list of posts when the component mounts
    const fetchPosts = async () => {
      try {
        console.log("Fetching posts for place:", place, "and userID:", userID);
        const postDetailsList = await handleListOfPost(place, userID);
        if (Array.isArray(postDetailsList)) {
          console.log("Fetched posts:", postDetailsList); // Debugging line
          setPosts(postDetailsList);
        } else {
          throw new Error("Invalid data format");
        }
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [place, userID]);

  const renderItem = ({ item }) => {
    if (!item) {
      console.warn("Encountered an undefined item in the list");
      return null;
    }

    return <UserPost postDetails={item} userID={userID} />;
  };

  if (loading) {
    return <Text style={styles.loadingText}>Loading posts...</Text>;
  }

  if (error) {
    return <Text style={styles.errorText}>Error fetching posts: {error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      {posts.length === 0 ? (
        <Text style={styles.emptyText}>No posts available</Text>
      ) : (
        <FlatList
          data={posts}
          renderItem={renderItem}
          keyExtractor={(item) => (item && item.postID ? item.postID.toString() : Math.random().toString())}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    color: '#555',
  },
  loadingText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    color: '#555',
  },
  errorText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    color: 'red',
  },
});

export default ListOfPosts;