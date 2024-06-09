import React from 'react';
import { IconType } from './actions/iconTypes';
import { StyleSheet, View, Image, Text } from "react-native";
import ImageComponent from "./media/ImageComponent";
import { LinearGradient } from "expo-linear-gradient";

interface CommentComponentProps {
    authorName: string;
    authorPic: string;
    commentText: string;
    commentDate: string;
}

const CommentComponent: React.FC<CommentComponentProps> = ({ 
    authorName = "dolesswaste",
    authorPic = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgQzVcNqn6PnmZvTMThsrrvW_gWVfnVA7FIQ&s",
    commentText = "Participate in our community clean-up event this weekend! Together, we can make our local parks and beaches cleaner and greener. ",
    commentDate = "10-05"
}) => {
    return (
        <View style={styles.card}>
            <View>
                <Image source={{ uri: authorPic }} style={styles.image}/>
            </View>
            <View>
                <Text style={[styles.username, {color: '#5D7971'}]}>{authorName}</Text>
                <Text style={styles.caption}> {commentText} </Text>
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
        height: 400,
        gap: 10,
    }, 
    username: {
        fontSize: 17,
        fontWeight: 'normal',
    },
    image: {
        width: 50,
        height: 50, 
        resizeMode: 'cover',
        borderRadius: 50,
        overflow: 'hidden',
    },
    caption:{
        fontSize: 20,
        color: "#5D7971",
    },
    attr: {
        fontSize: 20,
        color: "#5D7971",
    }
});

export default CommentComponent;