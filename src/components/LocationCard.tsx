import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import { colors, locations } from "../../data";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { Location, RootStackParamList } from "../../types/types";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const windowWidth = Dimensions.get("window").width;

type LocationCardProps = {
  location: Location;
};

export default function LocationCard({ location }: LocationCardProps) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [isFavorite, setIsFavorite] = React.useState(false);

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("LocationDetails", { locationId: location.id })
      }
      style={styles.card}
    >
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
        source={{ uri: location.image }}
        alt={location.name}
        style={styles.image}
      />

      <Text style={styles.type}>Pacote</Text>

      <View style={{ paddingHorizontal: 10 }}>
        <Text style={styles.title}>{location.name}</Text>
        <View style={styles.travelContainer}>
          <MaterialCommunityIcons
            name="airplane-takeoff"
            size={20}
            color={colors.blue[1]}
          />

          <Text style={styles.travel}>{location.departureDate}</Text>
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

          <Text style={styles.travel}>{location.returnDate}</Text>
        </View>

        <Text style={{ fontSize: 12, marginTop: 5 }}>a partir de</Text>
        <View style={styles.priceContainer}>
          <Text style={{ fontSize: 12 }}>R$ </Text>
          <Text style={styles.price}>{location.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    width: windowWidth / 2.3,
    marginTop: 10,
    position: "relative",
    paddingBottom: 10,
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
    width: windowWidth / 2.3,
    height: 150,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    resizeMode: "cover",
  },
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
