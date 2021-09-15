import React, { memo } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import CoinRowChart from './CoinRowChart';
import RowLeft from './RowLeft';
import RowRight from './RowRight';

const ListItem = ({ name, symbol, currentPrice, priceChangePercentage7d, logoUrl, onPress, number, sparkLine }) => {
  const priceChangeColor = priceChangePercentage7d > 0 ? '#34C759' : '#FF3B30';
  {/* <Text style={[styles.subtitle, {color: priceChangeColor}]}>{priceChangePercentage7d.toFixed(2)}%</Text> */}
  
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.itemWrapper}>
        {/* Name, Image, %, Ticker */}
        <RowLeft name={name} logoUrl={logoUrl} symbol={symbol} priceChangePercentage7d={priceChangePercentage7d}/>
        {/* {console.log("Rendering: " + name + number + sparkLine)} */}
        {/* Chart View */}
       
        {/* <CoinListChart {...{ data }} /> */}
        {/* Price, Market Cap */}
        <RowRight currentPrice={currentPrice}/>

      </View>
    </TouchableOpacity>
  )
  
}

// List optimization memo avoid re render
const areEqual = (prevProps, nextProps) => {
  const { name } = nextProps;
  const { name: prevName } = prevProps;
  
  // if the props are equal, it won't update
  const isNameEqual = name === prevName;

  return isNameEqual;
};

const styles = StyleSheet.create({
  itemWrapper: {
    paddingHorizontal: 16,
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
  },
  leftWrapper: {
    flexDirection: "row",
    alignItems: 'center',
  },
  image: {
    height: 48,
    width: 48,
  },
  titlesWrapper: {
    marginLeft: 8,
  },
  title: {
    fontSize: 18,
  },
  subtitle: {
    marginTop: 4,
    fontSize: 14,
    color: "#A9ABB1",
  },
  rightWrapper: {
    alignItems: 'flex-end',
  },
});

export default memo(ListItem, areEqual);