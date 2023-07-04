import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { colors } from "../../data";
import { Image } from "react-native";
import Card from "./Card";

export default function Discover() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

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
        data={numbers}
        renderItem={({ item }) => (
          <View style={{ paddingHorizontal: 10 }}>
            <Card />
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
