import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/types";
import { globalStyles } from "../../data";

const image = {
  uri: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop",
};

export default function WelcomeScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.image}
      />

      <View style={[styles.modalContainer, globalStyles.dropShadow]}>
        <Text style={styles.title}>
          Descubra os melhores lugares pelo mundo
        </Text>

        <Text style={styles.text}>O que você está procurando?</Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("MyTabs", {screen: "Home"})}
          style={[styles.button, globalStyles.dropShadow]}
        >
          <Text style={{ color: "#fff" }}>Vamos lá</Text>
          <AntDesign
            name="arrowright"
            size={20}
            color="white"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  modalContainer: {
    flex: 1,
    zIndex: 10,
    paddingHorizontal: 30,
    paddingVertical: 40,
    backgroundColor: "#fff",
    margin: 20,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#06192b",
  },
  text: { fontSize: 16, marginTop: 10, color: "#405f7d" },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#06192b",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
    width: 200,
    alignSelf: "center",
  },
});
