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
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/types";

export default function Discover() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

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
        <TouchableOpacity onPress={() => navigation.navigate("Locations")}>
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
