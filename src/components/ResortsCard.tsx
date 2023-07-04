import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../data";
import { Resort } from "../../types/types";

type ResortCardProps = {
  resort: Resort;
};

export default function ResortsCard({ resort }: ResortCardProps) {
  const [isFavorite, setIsFavorite] = React.useState(false);

  return (
    <TouchableOpacity style={styles.card}>
      <TouchableOpacity
        onPress={() => setIsFavorite(!isFavorite)}
        style={styles.favorite}
      >
        <Ionicons
          name="ios-heart"
          size={24}
          color={isFavorite ? "red" : "lightgray"}
        />
      </TouchableOpacity>

      <Image
        source={{ uri: resort.image }}
        alt={resort.name}
        style={styles.image}
      />

      <View style={{ paddingHorizontal: 10 }}>
        <Text style={styles.name}>{resort.name}</Text>
        <Text style={styles.location}>
          {resort.location.city}, {resort.location.state}
        </Text>

        <View style={styles.ratingContainer}>
          <Ionicons
            name="star"
            size={14}
            color={colors.blue[1]}
          />
          <Text style={styles.rating}>{resort.rating}</Text>
        </View>

        <View style={styles.priceContainer}>
          <Text style={{ fontSize: 12 }}>R$</Text>
          <Text style={styles.price}>{resort.price.toFixed(2)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    width: 200,
    marginTop: 10,
    paddingbottom: 15,
  },
  favorite: {
    top: 10,
    right: 10,
    position: "absolute",
    zIndex: 1,
    backgroundColor: "#fafafa",
    padding: 4,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 100,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    resizeMode: "cover",
  },
  name: {
    fontWeight: "bold",
    fontSize: 14,
    color: colors.blue[7],
    marginTop: 10,
  },
  location: {
    fontSize: 12,
    color: "gray",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  rating: {
    marginLeft: 5,
    fontSize: 12,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  price: {
    fontWeight: "bold",
    fontSize: 16,
    color: colors.blue[7],
    marginLeft: 3,
  },
});
