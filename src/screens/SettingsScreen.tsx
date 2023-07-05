import React, { useState, useLayoutEffect } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import { colors } from "../../data";
import { useNavigation } from "@react-navigation/native";

export default function SettingsScreen() {
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);
  const [isSoundEnabled, setIsSoundEnabled] = useState(false);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: colors.blue.bg,
      }
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.settingRow}>
        <Text style={styles.settingText}>Enable Notifications</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isNotificationsEnabled ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={() =>
            setIsNotificationsEnabled(!isNotificationsEnabled)
          }
          value={isNotificationsEnabled}
        />
      </View>
      <View style={styles.settingRow}>
        <Text style={styles.settingText}>Enable Sound</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isSoundEnabled ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={() => setIsSoundEnabled(!isSoundEnabled)}
          value={isSoundEnabled}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.blue.bg,
  },
  settingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginBottom: 20,
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
  },
  settingText: {
    fontSize: 16,
  },
});
