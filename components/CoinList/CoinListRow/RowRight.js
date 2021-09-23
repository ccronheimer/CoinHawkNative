import React from "react";
import { View, Text, StyleSheet } from "react-native";

const RowRight = ({ currentPrice }) => {
  return (
    <View style={styles.rightWrapper}>
      <Text style={styles.title}>
        {currentPrice.toLocaleString("en-US", { currency: "USD" })}
      </Text>
      <Text style={styles.mcap}> 68.703 Bn</Text>
    </View>
  );
};

export default RowRight;

const styles = StyleSheet.create({
  rightWrapper: {
    alignItems: "flex-end",
  },

  title: {
    fontSize: 16,
    fontWeight: "800",
  },

  mcap: {
    fontSize: 12,
    color: "#546780",
    fontWeight: "bold",
    marginTop: 4,
  },
});
