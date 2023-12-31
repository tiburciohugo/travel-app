import { View, StyleSheet, FlatList } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../data";
import Categories from "../components/Categories";
import Discover from "../components/Discover";
import Resorts from "../components/Resorts";
import Search from "../components/Search";
import Header from "../components/Header";

type Item = {
  id: string;
};

type RenderItemProps = {
  item: Item;
};
export default function DashboardScreen() {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");

  const sections = [
    { id: "categories" },
    { id: "discover" },
    { id: "resorts" },
  ];

  const renderItem = ({ item }: RenderItemProps) => {
    if (item.id === "categories") {
      return (
        <View style={styles.marginTop}>
          <Categories />
        </View>
      );
    } else if (item.id.startsWith("discover")) {
      return (
        <View style={styles.marginTop}>
          <Discover />
        </View>
      );
    } else if (item.id.startsWith("resorts")) {
      return (
        <View style={styles.marginTop}>
          <Resorts />
        </View>
      );
    }

    return null;
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <FlatList
        style={{ marginTop: 10 }}
        data={sections}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => <Search />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue.bg,
    height: "100%",
    paddingHorizontal: 30,
    paddingBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.blue[7],
  },
  marginTop: {
    marginTop: 30,
  },
});
