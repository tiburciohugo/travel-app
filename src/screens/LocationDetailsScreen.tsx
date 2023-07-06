import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../types/types";
import { colors, globalStyles, locations } from "../../data";
import { Ionicons } from "@expo/vector-icons";

export default function LocationDetailsScreen({
  route,
}: {
  route: RouteProp<RootStackParamList, "LocationDetails">;
}) {
  const { locationId } = route.params;
  const location = locations.find((location) => location.id === locationId);
  const navigation = useNavigation();

  if (!location) {
    return (
      <View style={styles.container}>
        <Text>No location found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Ionicons
          name="chevron-back-sharp"
          size={24}
          color={colors.blue[4]}
        />
      </TouchableOpacity>

      <Image
        style={styles.image}
        source={{ uri: location.image }}
      />

      <View style={styles.innerContainer}>
        <Text style={styles.title}>{location.name}</Text>

        <Text style={styles.description}>{location.description}</Text>

        <View style={styles.details}>
          <View style={styles.detailBlocks}>
            <Text style={styles.smallText}>Ida: </Text>
            <Text style={styles.detail}>{location.departureDate}</Text>
          </View>
          <View style={styles.detailBlocks}>
            <Text style={styles.smallText}>Volta: </Text>
            <Text style={styles.detail}>{location.returnDate}</Text>
          </View>

          <View style={styles.detailBlocks}>
            <Text style={styles.smallText}>Taxa por viajante: </Text>
            <Text style={styles.detail}>R$ {location.price}</Text>
          </View>
        </View>

        <TouchableOpacity style={globalStyles.dropShadow}>
          <Text style={styles.buyButton}>Reservar Agora</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    backgroundColor: colors.blue.bg,
  },
  innerContainer: {
    padding: 20,
  },
  backButton: {
    position: "absolute",
    top: 30,
    left: 20,
    zIndex: 1,
    backgroundColor: "white",
    borderRadius: 50,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    alignSelf: "center",
    color: colors.blue[7],
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    color: colors.blue[6],
    textAlign: "center",
  },
  details: {
    flexDirection: "column",
  },
  detailBlocks: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 10,
    borderRadius: 10,
  },
  detail: {
    fontSize: 16,
    marginBottom: 5,
    color: colors.blue[7],
    fontWeight: "bold",
  },
  smallText: {
    fontSize: 12,
    fontWeight: "bold",
    color: colors.gray[3],
  },
  buyButton: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
    backgroundColor: colors.yellow[1],
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 40,
  },
});
