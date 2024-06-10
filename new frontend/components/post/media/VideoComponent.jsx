import React from 'react';
import { ResizeMode, Video } from 'expo-av';

const VideoComponent = ({ videoUrl = "https://ia800300.us.archive.org/17/items/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4" }) => {
  const [play, setPlay] = React.useState(true);

  return (
    <Video
      source={{ uri: videoUrl }}
      resizeMode={ResizeMode.CONTAIN}
      useNativeControls
      shouldPlay={play}
      onPlaybackStatusUpdate={(status) => {
        if (status.didJustFinish) {
          setPlay(false);
        }
      }}
      style={{ width: 300, height: 200 }}
    />
  );
};

export default VideoComponent;
