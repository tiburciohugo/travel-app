import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { colors } from '../../data';

export default function Header() {
  return (
    <>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          marginTop: 30,
          alignItems: "center",
        }}
      >
        <Text style={styles.title}>Olá, Usuário</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <TouchableOpacity onPress={() => {}}>
            <Ionicons
              name="md-notifications"
              size={24}
              color="black"
              style={{ backgroundColor: "#fff", borderRadius: 100, padding: 5 }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {}}
            style={{
              padding: 2,
              borderRadius: 100,
              borderWidth: 2,
              borderColor: colors.blue[8],
              marginLeft: 10,
            }}
          >
            <Image
              source={{
                uri: "https://xsgames.co/randomusers/avatar.php?g=male",
              }}
              style={{
                width: 35,
                height: 35,
                borderRadius: 100,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <MaterialIcons
          name="location-pin"
          size={24}
          color={colors.blue[2]}
        />

        <Text style={{ marginLeft: 5, fontSize: 12, color: colors.blue[2] }}>
          Rolândia, PR
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D6E0EE",
    height: "100%",
    paddingHorizontal: 30,
    paddingBottom: 10,
  },
  searchBarContainer: {
    marginTop: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.blue[7],
  },
  marginTop: {
    marginTop: 30,
  },
});