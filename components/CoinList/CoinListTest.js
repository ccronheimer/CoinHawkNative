import { filter } from "d3-array";
import React, { memo } from "react";
import { Text, FlatList} from "react-native";
import CoinListRow from "./CoinListRow/CoinListRow";
// To avoid anonymous arrow function on renderItem props.
const renderItem = ({ item, index }) => (

    <CoinListRow 
      name={ item.name}
      symbol={item.symbol}
      currentPrice={item.current_price}
      priceChangePercentage7d={item.price_change_percentage_7d_in_currency}
      logoUrl={ item.image}
      onPress={() => openModal(item)}
      number={index}
      sparkLine={ item.sparkline_in_7d.price}
    />
  );

const CoinListTest = ({ data }) => {
    if (data === null) {
    return (
    // data is loading 
    <Text>Loading...</Text>

    );
  } else { 
      // if data is loaded
      console.log(data);
    return (
        <FlatList
        keyExtractor={(item) => item.id}
        data={data}
        windowSize={3}
        renderItem={renderItem}
      />

    );
  }
};
// List optimization memo avoid re render
const areEqual = (prevProps, nextProps) => {
  const { data } = nextProps;
  const { data: prevData } = prevProps;

  // if the props are equal, it won't update
  const isDataEqual = data === prevData;

  return isDataEqual;
};

export default memo(CoinListTest, areEqual);
