// import React from 'react';
import { FontAwesome } from '@expo/vector-icons';


interface PostIconProps {
    icon: string;
    size?: number;
    color?: string;
}

const PostIcon: React.FC<PosttIconProps> = ({ icon, size, color })  => {
    return (
        <FontAwesome name={icon} size={size} color={color}/> 
    );
};



export default PostIcon;