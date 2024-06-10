import { Camera, useCameraPermissions } from 'expo-camera';
import { useState, useRef, useEffect } from 'react';
import * as MediaLibrary from 'expo-media-library';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CameraComponent({ addCapturedMedia }) {
  const [permission, requestPermission] = useCameraPermissions();
  const [facing, setFacing] = useState(Camera.Constants.Type.back);
  const cameraRef = useRef();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission to access camera is required!');
      }
    })();
  }, []);

  const capturePhoto = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      const asset = await MediaLibrary.createAssetAsync(photo.uri);
      addCapturedMedia(asset.uri);
    }
  };

  const toggleCameraFacing = () => {
    setFacing(current => (current === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back));
  };

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant permission" />
      </View>
    );
  }

  return (
    <View style={styles.cameraContainer}>
      <Camera style={styles.camera} type={facing} ref={cameraRef} autoFocus={true}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={capturePhoto}>
            <Text style={styles.text}>Capture</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  camera: {
    width: '100%',
    height: 300,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    position: 'absolute',
    bottom: 20,
  },
  button: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
