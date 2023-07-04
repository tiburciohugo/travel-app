import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { SearchBar } from "@rneui/themed";
import { colors, globalStyles } from "../../data";
import { MaterialIcons } from "@expo/vector-icons";

export default function Search() {
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

  return (
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
  );
}

const styles = StyleSheet.create({
  searchBarContainer: {
    marginTop: 30,
  },
});
