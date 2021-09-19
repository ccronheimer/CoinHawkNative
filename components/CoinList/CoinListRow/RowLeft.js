import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

const RowLeft = ({ mrank, name, logoUrl, symbol, priceChangePercentage7d }) => {
  const priceChangeColor = priceChangePercentage7d > 0 ? "#34C759" : "#FF3B30";

  return (
    <View style={styles.container}>
      <Image source={{ uri: logoUrl }} style={styles.image} />
      <View style={styles.titlesWrapper}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.tickerRow}>
          <Text style={styles.subtitle}>{mrank}</Text>
          <Text style={styles.subtitle}>{symbol.toUpperCase()}</Text>
          <Text style={[styles.subtitle, { color: priceChangeColor }]}>
            {priceChangePercentage7d.toFixed(2)}%
          </Text>
        </View>
      </View>
    </View>
  );
};

export default RowLeft;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
  },
  image: {
    height: 42,
    width: 42,
  },
  titlesWrapper: {
    display: "flex",
    flex: 1,
    marginLeft: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  tickerRow: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  subtitle: {
    marginTop: 4,
    fontSize: 14,
    color: "#A9ABB1",
  },
});
