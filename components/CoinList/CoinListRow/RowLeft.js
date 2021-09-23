import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

const RowLeft = ({ mrank, name, logoUrl, symbol, priceChangePercentage7d }) => {
  const priceChangeColor = priceChangePercentage7d > 0 ? '#00e38d' : 'red';

  return (
    <View style={styles.container}>
      <Image source={{ uri: logoUrl }} style={styles.image} />
      <View style={styles.titlesWrapper}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.tickerRow}>
        <View style={styles.square}>
        <Text style={styles.rank}>{mrank}</Text>
        </View>
          <Text style={styles.symbol}>{symbol.toUpperCase()}
          </Text>
          <Text style={styles.subtitle}>
          <Icon name={priceChangePercentage7d > 0 ? 'ios-caret-up' : 'ios-caret-down'} size={14} color={priceChangeColor} />
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
    height: 34,
    width: 34,
  },
  titlesWrapper: {
    display: "flex",
    flex: 1,
    marginLeft: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "800",
  },
  tickerRow: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'flex-start',
    fontSize: 1,
    alignItems: 'center',
    marginTop: 4,
  },
  subtitle: {
    color: "#546780",
    fontWeight: "bold",
    fontSize: 12,
  },
  symbol: {
    color: "#546780",
    fontWeight: "bold",
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 12,
  },

  rank: {
    color: "#546780",
    fontWeight: "bold",
    textAlign: 'center',
    fontSize: 12,
    marginTop: 1,
  },
  square: {
    height: 18,
    paddingHorizontal: 8,
    backgroundColor: "#eef2f5",
    borderRadius: 3,
    
    },
});
