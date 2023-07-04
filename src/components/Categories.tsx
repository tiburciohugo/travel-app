import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../../data";

const categories = [
  {
    id: 1,
    name: "Locais",
    icon: "restaurant",
  },
  {
    id: 2,
    name: "Cafes",
    icon: "local-cafe",
  },
  {
    id: 3,
    name: "Hotéis",
    icon: "hotel",
  },
  {
    id: 4,
    name: "Postos",
    icon: "local-gas-station",
  },
  {
    id: 5,
    name: "Lojas",
    icon: "shopping-bag",
  },
  {
    id: 6,
    name: "Parques",
    icon: "park",
  },
  {
    id: 7,
    name: "Cinemas",
    icon: "local-movies",
  },
  {
    id: 8,
    name: "Aeroportos",
    icon: "local-airport",
  },
];

export default function Categories() {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.title}>Categorias</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text
            style={{
              color: colors.blue[6],
              fontSize: 16,
              marginLeft: 10,
            }}
          >
            Ver tudo
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={(item) => item.id.toString()} // Added keyExtractor for proper keys
        renderItem={({ item }) => (
          <View
            style={{
              alignItems: "center",
              gap: 5,
              marginRight: 10,
              marginTop: 20,
            }}
          >
            <View
              style={{
                backgroundColor: colors.blue[7],
                padding: 20,
                borderRadius: 100,
              }}
            >
              <MaterialIcons
                /* @ts-ignore */
                name={item.icon}
                size={24}
                color="white"
              />
            </View>
            <Text style={styles.subtitle}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {
    fontWeight: "bold",
    fontSize: 24,
    color: colors.blue[7],
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: 16,
    color: colors.blue[7],
  },
});
