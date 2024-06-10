import React from 'react';
import { StyleSheet, View, Image, Text } from "react-native";

const CommentComponent = ({ 
    authorName = "dolesswaste",
    authorPic = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgQzVcNqn6PnmZvTMThsrrvW_gWVfnVA7FIQ&s",
    commentText = "Participate in our community clean-up event this weekend! Together, we can make our local parks and beaches cleaner and greener.",
    commentDate = "10-05"
}) => {
    return (
        <View style={styles.card}>
            <View>
                <Image source={{ uri: authorPic }} style={styles.image}/>
            </View>
            <View>
                <Text style={[styles.username, {color: '#5D7971'}]}>{authorName}</Text>
                <Text style={styles.caption}>{commentText}</Text>
            </View>
            <View>
                <Text style={styles.attr}>{commentDate}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flexDirection: 'row',
        // alignItems: 'center',
        // gap: 10,
    },
    card: {
        flexDirection: 'row',
        width: "90%",
        height: 100, // Adjusted height for better layout
        gap: 10,
        alignItems: 'center',
    }, 
    username: {
        fontSize: 17,
        fontWeight: 'normal',
    },
    image: {
        width: 50,
        height: 50, 
        resizeMode: 'cover',
        borderRadius: 25, // Adjusted to be half of the width/height for perfect circle
        overflow: 'hidden',
    },
    caption:{
        fontSize: 16, // Adjusted font size for better layout
        color: "#5D7971",
    },
    attr: {
        fontSize: 12, // Adjusted font size for better layout
        color: "#5D7971",
    }
});

export default CommentComponent;
