import {
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { SearchBar } from "@rneui/themed";
import { colors, locations, resorts } from "../../data";
import { Location, Resort, RootStackParamList } from "../../types/types";
import { MaterialIcons } from "@expo/vector-icons";
import useDebounce from "../../hooks/useDebounce";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export default function Search() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [search, setSearch] = React.useState("");
  const [searchResults, setSearchResults] = React.useState<
    (Location | Resort)[]
  >([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const debouncedSearchTerm = useDebounce(search, 2000);

  React.useEffect(() => {
    if (debouncedSearchTerm) {
      setIsLoading(true);
      const lowerCaseSearch = debouncedSearchTerm.toLowerCase();

      let locationsResults = locations.filter((location) =>
        location.name.toLowerCase().includes(lowerCaseSearch)
      );

      let resortsResults = resorts.filter((resort) =>
        resort.location.city.toLowerCase().includes(lowerCaseSearch)
      );

      setSearchResults([...locationsResults, ...resortsResults]);
      setIsLoading(false);
    } else {
      setSearchResults([]);
    }
  }, [debouncedSearchTerm]);

  const handleSearch = (search: string) => {
    setIsLoading(true);
    const lowerCaseSearch = search.toLowerCase();

    let locationsResults = locations.filter((location) =>
      location.name.toLowerCase().includes(lowerCaseSearch)
    );

    let resortsResults = resorts.filter((resort) =>
      resort.location.city.toLowerCase().includes(lowerCaseSearch)
    );

    setSearchResults([...locationsResults, ...resortsResults]);
    setIsLoading(false);
  };

  const searchIcon = (
    <MaterialIcons
      name="search"
      size={24}
      color={colors.blue[3]}
    />
  );

  return (
    <>
      <View style={styles.searchBarContainer}>
        <SearchBar
          platform="android"
          containerStyle={{
            borderRadius: 15,
            justifyContent: "flex-start",
            paddingHorizontal: 10,
          }}
          inputContainerStyle={{}}
          inputStyle={{
            color: colors.blue[3],
            justifyContent: "flex-start",
            marginLeft: 10,
          }}
          rightIconContainerStyle={{}}
          onChangeText={(search) => {
            setSearch(search);
          }}
          placeholder="Procure por lugares..."
          placeholderTextColor={colors.blue[3]}
          value={search}
          searchIcon={searchIcon}
          showLoading={isLoading ? true : false}
        />
      </View>

      {isLoading && (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <ActivityIndicator
            size="large"
            color={colors.blue[3]}
          />
        </View>
      )}

      {search && (
        <View style={styles.searchResultsContainer}>
          <Text style={styles.searchResultsTitle}>Resultados da busca:</Text>

          <FlatList
            data={searchResults}
            keyExtractor={(item) =>
              ("departureDate" in item ? "l" : "r") + item.id
            }
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  "departureDate" in item
                    ? navigation.navigate("LocationDetails", {
                        locationId: item.id,
                      })
                    : navigation.navigate("ResortDetails", {
                        resortId: item.id,
                      })
                }
                style={styles.searchResultsCard}
              >
                <Image
                  style={{
                    width: 100,
                    height: 100,
                    resizeMode: "cover",
                    borderBottomLeftRadius: 15,
                    borderTopLeftRadius: 15,
                  }}
                  source={{ uri: item.image }}
                />

                <View style={{ alignItems: "flex-start", marginLeft: 15 }}>
                  <Text style={styles.searchResultsTitle}>
                    {"departureDate" in item
                      ? item.name
                      : item.name.replace(" Hotel", "")}
                  </Text>

                  <Text
                    style={[
                      styles.searchResultsText,
                      {
                        backgroundColor:
                          "departureDate" in item
                            ? colors.orange[1]
                            : colors.blue[4],
                      },
                    ]}
                  >
                    {"departureDate" in item ? "Cidade" : "Resort"}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  searchBarContainer: {
    marginTop: 10,
  },
  searchResultsContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  searchResultsCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: 320,
    paddingRight: 30,
    backgroundColor: "white",
    marginVertical: 10,
    borderRadius: 15,
  },
  searchResultsTitle: {
    color: colors.blue[7],
    fontSize: 20,
    fontWeight: "bold",
  },
  searchResultsText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 15,
    marginTop: 10,
  },
});
