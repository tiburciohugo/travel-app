import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { SearchBar } from "@rneui/themed";
import { colors, globalStyles } from "../../data";
import Categories from "../components/Categories";
export default function DashboardScreen() {
  const navigation = useNavigation();
  const [search, setSearch] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const updateSearch = (search: string) => {
    setSearch(search);
  };

  const searchIcon = (
    <MaterialIcons
      name="search"
      size={24}
      color={colors.blue[3]}
    />
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          marginTop: 30,
          alignItems: "center",
        }}
      >
        <Text style={styles.title}>Olá, Usuário</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <TouchableOpacity onPress={() => {}}>
            <Ionicons
              name="md-notifications"
              size={24}
              color="black"
              style={{ backgroundColor: "#fff", borderRadius: 100, padding: 5 }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {}}
            style={{
              padding: 2,
              borderRadius: 100,
              borderWidth: 2,
          borderColor: colors.blue[7]    ,
              marginLeft: 10,
            }}
          >
            <Image
              source={{
                uri: "https://xsgames.co/randomusers/avatar.php?g=male",
              }}
              style={{
                width: 35,
                height: 35,
                borderRadius: 100,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <MaterialIcons
          name="location-pin"
          size={24}
          color={colors.blue[2]}
        />

        <Text style={{ marginLeft: 5, fontSize: 12, color: colors.blue[2] }}>
          Rolândia, PR
        </Text>
      </View>

      <View style={styles.searchBarContainer}>
        <SearchBar
          platform="android"
          containerStyle={[
            {
              borderRadius: 15,
              justifyContent: "flex-start",
              paddingHorizontal: 10,
            },
            globalStyles.dropShadow,
          ]}
          inputContainerStyle={{}}
          inputStyle={{
            color: colors.blue[3],
            justifyContent: "flex-start",
            marginLeft: 10,
          }}
          rightIconContainerStyle={{}}
          onChangeText={updateSearch}
          placeholder="Procure por lugares..."
          placeholderTextColor={colors.blue[3]}
          value={search}
          searchIcon={searchIcon}
          showLoading={isLoading ? true : false}
        />
      </View>

      <View style={{ marginTop: 30 }}>
        <Categories />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D6E0EE",
    height: "100%",
    paddingHorizontal: 30,
  },
  searchBarContainer: {
    marginTop: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.blue[7],
  },
});
