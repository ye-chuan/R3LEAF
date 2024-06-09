import React from 'react';
import CommentIcon from './actions/CommentIcon';
import PostBtn from './actions/PostBtn';
import { IconType } from './actions/iconTypes';
import { StyleSheet, View, Image, Text } from "react-native";
import ImageComponent from "./media/ImageComponent";
import { LinearGradient } from "expo-linear-gradient";

interface UserPostProps {
    heartCount?: number;
    commentCount?: number;
    bookmarkCount?: number;
    heartLiked?: boolean;
    bookmarkLiked?: boolean;
    imageBase64: string;
    authorName: string;
    authorPic: string;
    postCaption: string;
}

const UserPost: React.FC<UserPostProps> = ({ 
    heartCount = 0, 
    commentCount = 0,
    bookmarkCount = 0, 
    heartLiked = false, 
    bookmarkLiked = false,
    imageBase64 = "https://ezop.com/wp-content/uploads/2021/04/dos-donts-of-recycling-wisconsin-750x510.jpg",
    authorName = "dolesswaste",
    authorPic = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgQzVcNqn6PnmZvTMThsrrvW_gWVfnVA7FIQ&s",
    postCaption = "Participate in our community clean-up event this weekend! Together, we can make our local parks and beaches cleaner and greener. "
}) => {
    return (
        <View style={styles.card}>
            <View style={styles.container}>
                <Image source={{ uri: authorPic }} style={styles.image}/>
                <Text style={[styles.username, {color: '#5D7971'}]}>{authorName}</Text>
            </View>
            <Text style={styles.caption}>
                {postCaption}
            </Text>
            <View style={styles.media}>
                <LinearGradient colors={['transparent', 'rgba(0,0,0,0.8)']} style={styles.overlay}/>
                <View style={styles.attribute}>
                    <CommentIcon size={20} color={"white"} oriCount={1} iconType={"image"}/>
                </View>
                <ImageComponent imageBase64={imageBase64}/>
            </View>
            <View style={styles.actions}>
                <PostBtn oriCount={heartCount} liked={heartLiked} iconType={IconType.HEART} justifyContent={"flex-start"}/>
                <CommentIcon oriCount={commentCount}/>
                <PostBtn oriCount={bookmarkCount} liked={bookmarkLiked} iconType={IconType.BOOKMARK} justifyContent={"flex-end"}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    actions: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    card: {
        flexDirection: 'column',
        width: "90%",
        height: 400,
        gap: 10,
    }, 
    image: {
        width: 30,
        height: 30, 
        resizeMode: 'cover',
        borderRadius: 20,
        overflow: 'hidden',
    },
    username: {
        fontSize: 25,
        fontWeight: 'normal',
    },
    media: {
        backgroundColor: '#5D7971',
        padding: 10,
        position: 'relative',
        width: '100%',
        height: 300,
        borderRadius: 15,
    },
    overlay:{
        width: '100%',
        height: 300,
        position: 'absolute',
        zIndex: 1,
        top: 0,
        left: 0,
        borderRadius: 15,
    },
    attribute:{
        position: 'absolute',
        bottom: 20,
        right: 20,
        zIndex: 2,
    },
    caption:{
        fontSize: 17,
        color: "#5D7971"
    }
});

export default UserPost;