import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import UserPost from './post/UserPost';
import { handleListOfPost } from '../apicalls/post';

const ListOfPosts = ({ place, userID }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postDetailsList = await handleListOfPost(place, userID);
        if (Array.isArray(postDetailsList)) {
          setPosts(postDetailsList);
        } else {
          throw new Error("Invalid data format");
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [place, userID]);

  const onViewableItemsChanged = useCallback(({ viewableItems }) => {
    setVisibleItems(viewableItems.map(item => item.key));
  }, []);

  const renderItem = ({ item }) => {
    if (!item) return null;

    return <UserPost postDetails={item} userID={userID} isVisible={visibleItems.includes(item.postID?.toString())} />;
  };

  const keyExtractor = (item) => {
    return item && item.postID ? item.postID.toString() : Math.random().toString();
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
          keyExtractor={keyExtractor}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: "#EAF2EC",
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
