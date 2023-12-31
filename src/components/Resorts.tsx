import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { colors, resorts } from "../../data";
import { Image } from "react-native";
import ResortsCard from "./ResortsCard";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/types";

export default function Resorts() {
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
        <Text style={styles.title}>Resorts</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Resorts")}>
          <Text
            style={{
              color: colors.blue[4],
              fontSize: 16,
              marginLeft: 10,
            }}
          >
            Aproveite nossas ofertas
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={resorts}
        renderItem={({ item }) => (
          <View style={{ paddingHorizontal: 10 }}>
            <ResortsCard resort={item} />
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
