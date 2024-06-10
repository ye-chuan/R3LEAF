import { View, Text, StyleSheet, TextInput, ActivityIndicator, Button, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import React, { useState } from "react";
import { firebase_auth } from "../../firebaseconfig"; // Adjust the path as necessary
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  const [loading, setLoading] = useState(false);
  const auth = firebase_auth;
  const navigation = useNavigation();

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      navigation.navigate("tabs");
    } catch (error) {
      console.log(error);
      alert("Sign in failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log(response);
      navigation.navigate("tabs");
    } catch (error) {
      console.log(error);
      alert("Sign up failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <Text style={styles.brand}>R3LEAF</Text>
          <TextInput
            value={email}
            style={styles.input}
            placeholder="email"
            autoCapitalize="none"
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            secureTextEntry
            value={password}
            style={styles.input}
            placeholder="password"
            autoCapitalize="none"
            onChangeText={(text) => setPassword(text)}
          />
          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <View style={styles.loginpos}>
              <Button title="login" onPress={signIn} color="#5D7971" />
              <Button title="register" onPress={signUp} color="#5D7971" />
            </View>
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  brand: {
    paddingTop: 100,
    fontSize: 30,
    textAlign: "center",
    paddingBottom: 150,
  },
  container: {
    flex: 1,
    backgroundColor: "#EAF2EC",
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    marginVertical: 5,
    height: 50,
    width: 250,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#ffffff",
  },
  loginpos: {
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    width: 250,
  },
});

export default Login;
