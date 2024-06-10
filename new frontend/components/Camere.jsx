import { CameraView, useCameraPermissions, Camera } from 'expo-camera';
import { useState, useRef } from 'react';
import * as MediaLibrary from 'expo-media-library'
import { Button, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';

export default function camera() {
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [flashMode, setFlashMode] = useState("off");
  const [previewVisible, setPreviewVisible] = useState(false)
  const [capturedImage, setCapturedImage] = useState(null)
  const [isRecording, setIsRecording] = useState(false)
  const cameraRef = useRef()
  const options = {
    quality: 0.5,
    base64: true
  }

  const capturePhoto = async() => {
    try {
      let photo = await cameraRef.current.takePictureAsync(options);
      let string = photo.base64 
      setPreviewVisible(true)
      setCapturedImage(photo)

      const asset = await MediaLibrary.createAssetAsync(photo.uri);
      console.log('this will never return', photo)
      console.log(string)
      await MediaLibrary.createAlbumAsync("Gallery", asset, false)
    }
    catch(err) {
      console.warn(err);
    }
  }

  const recordMedia = async() => {
    try {
      setIsRecording(true)
      await Camera.requestMicrophonePermissionsAsync()
      let recording = await cameraRef.current.recordAsync();

      const asset = await MediaLibrary.createAssetAsync(recording.uri);
      await MediaLibrary.createAlbumAsync("Gallery", asset, false)
    }
    catch(err) {
      console.warn(err);
    }
  }
  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }


  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing} ref={cameraRef} autofocus={true}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={capturePhoto}>
            <Text style={styles.text}>Capture</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
