import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../data";

export default function ProfileScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons
          name="chevron-back-circle-outline"
          size={34}
          color={colors.blue[7]}
        />
      </TouchableOpacity>
      <View style={styles.header}></View>
      <Image
        style={styles.profileImage}
        source={{
          uri: "https://xsgames.co/randomusers/avatar.php?g=male",
        }}
      />
      <Text style={styles.userName}>John Doe</Text>
      <Text style={styles.userEmail}>johndoe@example.com</Text>
      <Text style={styles.userDescription}>
        Hello! I am John Doe, an enthusiastic traveler, photographer, and
        adventure seeker living on planet Earth.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    backgroundColor: colors.blue.bg,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 26,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  userName: {
    fontSize: 22,
    fontWeight: "bold",
  },
  userEmail: {
    fontSize: 16,
    color: "#888",
    marginBottom: 10,
  },
  userDescription: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
});
