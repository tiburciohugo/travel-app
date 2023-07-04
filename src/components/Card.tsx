import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import { colors, places } from "../../data";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

export default function Card() {
  const [isFavorite, setIsFavorite] = React.useState(false);

  return (
    <TouchableOpacity style={styles.card}>
      <TouchableOpacity
        onPress={() => setIsFavorite(!isFavorite)}
        style={{
          top: 10,
          right: 10,
          position: "absolute",
          zIndex: 1,
          backgroundColor: "#fafafa",
          padding: 4,
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Ionicons
          name="ios-heart"
          size={24}
          color={isFavorite ? colors.blue[8] : "lightgray"}
        />
      </TouchableOpacity>

      <Image
        source={{ uri: places[0].image }}
        alt="rio"
        style={styles.image}
      />

      <Text style={styles.type}>Pacote</Text>

      <View style={{ paddingHorizontal: 10 }}>
        <Text style={styles.title}>Rio de Janeiro</Text>
        <View style={styles.travelContainer}>
          <MaterialCommunityIcons
            name="airplane-takeoff"
            size={20}
            color={colors.blue[1]}
          />

          <Text style={styles.travel}>28 ago 2023</Text>
        </View>
        <View style={styles.travelContainer}>
          <MaterialCommunityIcons
            name="airplane-landing"
            size={20}
            color={colors.blue[1]}
            style={{
              transform: [{ scaleX: -1 }],
            }}
          />

          <Text style={styles.travel}>30 ago 2023</Text>
        </View>

        <Text style={{ fontSize: 12, marginTop: 5 }}>a partir de</Text>
        <View style={styles.priceContainer}>
          <Text style={{ fontSize: 12 }}>R$ </Text>
          <Text style={styles.price}>1.234</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    width: 150,
    marginTop: 10,
    position: "relative",
    paddingBottom: 10,
  },
  image: { width: 150, height: 150, borderRadius: 20, resizeMode: "contain" },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    color: colors.blue[7],
    marginTop: 10,
  },
  type: {
    fontWeight: "bold",
    fontSize: 11,
    color: "white",
    position: "absolute",
    backgroundColor: colors.orange[1],
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 10,
    top: 135,
    alignSelf: "center",
  },
  travelContainer: {
    flexDirection: "row",
    marginTop: 5,
    alignItems: "center",
  },
  travel: {
    marginLeft: 5,
    fontSize: 12,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
