import React, { memo } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import CoinRowChart from './CoinRowChart';
import RowLeft from './RowLeft';
import RowRight from './RowRight';

const ListItem = ({ mrank, name, symbol, currentPrice, priceChangePercentage7d, logoUrl, onPress, sparkLine }) => {
  const priceChangeColor = priceChangePercentage7d > 0 ? '#00e38d' : 'red';
  {/* <Text style={[styles.subtitle, {color: priceChangeColor}]}>{priceChangePercentage7d.toFixed(2)}%</Text> */}
  
  // make this fixed rows 
  return (
    <>
    <TouchableOpacity onPress={onPress}>
      <View style={styles.itemWrapper}>

       {/* Name, Image, %, Ticker */}
       <View style={styles.leftWrapper}>
       <RowLeft mrank={mrank} name={name} logoUrl={logoUrl} symbol={symbol} priceChangePercentage7d={priceChangePercentage7d}/>
       </View>
        
        {/* Chart View */}
        <View style={styles.middleWrapper}> 
        <CoinRowChart sparkLine={sparkLine} width={70} height={34} priceChangeColor={priceChangeColor}/>
        </View>

        {/* Price, Market Cap */}
        <View style={styles.rightWrapper}>
        <RowRight currentPrice={currentPrice}/>
        </View>

      </View>
      
    </TouchableOpacity>
    <View style={styles.divider} />
    </>
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
    paddingHorizontal: 14,
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    height: 50,
  },

  titlesWrapper: {
    marginLeft: 8,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#e6e6e6",
    marginHorizontal: 16,
    marginTop: 16,
  },
  leftWrapper: {
    flexDirection: "row",
    width: 180,
  },

  middleWrapper: {
  },
  rightWrapper: {
    width: 100,
    
  },
  

});

export default memo(ListItem, areEqual);