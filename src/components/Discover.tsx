import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { colors, locations } from "../../data";
import LocationCard from "./LocationCard";

export default function Discover() {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.title}>Descubra</Text>
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
        data={locations}
        renderItem={({ item }) => (
          <View style={{ paddingHorizontal: 10 }}>
            <LocationCard location={item} />
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
