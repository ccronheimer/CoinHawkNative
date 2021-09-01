import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

const SearchBar = ({ dataIn, searchResult }) => {
  const [search, setSearch] = useState("");

  const searchFilter = (text) => {
    if (text) {
      const newData = dataIn.filter((item) => {
        const name = item.name ? item.name.toUpperCase() : "".toUpperCase();
        const symbol = item.symbol
          ? item.symbol.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        // searching symbol and name
        return symbol.indexOf(textData) > -1 || name.indexOf(textData) > -1;
      });
      searchResult(newData);
      setSearch(text);
    } else {
      searchResult([]);
      setSearch(text);
    }
  };

  return (
    <TextInput
      style={styles.textInputStyle}
      value={search}
      placeholder="search here"
      underlineColorAndroid="transparent"
      onChangeText={(text) => searchFilter(text)}
    />
  );
};
const styles = StyleSheet.create({
  textInputStyle: {
    height: 50,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: "blue",
    backgroundColor: "white",
  },
});

export default SearchBar;
