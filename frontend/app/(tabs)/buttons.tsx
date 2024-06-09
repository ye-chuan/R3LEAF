import ImageComponent from "@/components/post/media/ImageComponent";
import PostIcon from "@/components/post/actions/PostIcon";
import UserPost from "@/components/post/UserPost";
import { View } from "react-native";
import CollageComponent from "@/components/post/CollageComponent";
import CommentComponent from "@/components/post/CommentComponent";

export default function TestScreen() {
    const imageBase64 = `https://ezop.com/wp-content/uploads/2021/04/dos-donts-of-recycling-wisconsin-750x510.jpg`;
    return(
        // <View style={{ width:'100%' ,flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        // <UserPost heartCount={20} commentCount={20} bookmarkCount={20}/>
        // </View>

        <CommentComponent/>
        // <CollageComponent/>
        // <ImageComponent imageBase64={imageBase64}/>
        // <PostIcon icon={"heart"} />
        // <PostActions heartCount={20} commentCount={21} bookmarkCount={22} heartLiked={true} bookmarkLiked={true}/>
    );
}