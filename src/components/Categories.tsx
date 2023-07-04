import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { colors, categories } from "../../data";

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
          <TouchableOpacity onPress={() => {}}
            style={{
              alignItems: "center",
              gap: 5,
              marginRight: 10,
              marginTop: 20,
            }}
          >
            <View
              style={{
                backgroundColor: colors.blue[8],
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
          </TouchableOpacity>
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
    fontWeight: "500",
    fontSize: 16,
    color: colors.blue[7],
  },
});
