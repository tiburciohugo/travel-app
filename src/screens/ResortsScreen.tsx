import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import React from "react";
import { colors, resorts } from "../../data";
import ResortsCard from "../components/ResortsCard";

export default function ResortsScreen() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.title}>Resorts</Text>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={resorts}
        style={{}}
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
  container: {
    backgroundColor: colors.blue.bg,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    color: colors.blue[7],
    marginTop: 20,
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: 16,
    color: colors.blue[7],
  },
});
