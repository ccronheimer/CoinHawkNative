import { filter } from "d3-array";
import React, { memo, useState, useRef, useMemo } from "react";
import { Text, FlatList, StyleSheet } from "react-native";
import CoinListRow from "./CoinListRow/CoinListRow";

import CoinListHeader from "./CoinListHeader";

import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

import Chart from "../Chart";

const CoinListTest = ({ data }) => {
    
  // To avoid anonymous arrow function on renderItem props.
const renderItem = ({ item, index }) => (
  
  <CoinListRow 
    name={ item.name }
    symbol={item.symbol}
    currentPrice={item.current_price}
    priceChangePercentage7d={item.price_change_percentage_7d_in_currency}
    logoUrl={ item.image}
    onPress={() => openModal(item)}
    number={index}
    sparkLine={item.sparkline_in_7d.price}

  />

);
  const bottomSheetModalRef = useRef(null);
  const snapPoints = useMemo(() => ["75%"], []);
  const [selectedCoinData, setSelectedCoinData] = useState(null);

  
  const openModal = (item) => {
    setSelectedCoinData(item);
    bottomSheetModalRef.current?.present();
  };
    if (data === null) {
    return (
    // data is loading 
    <Text>Loading...</Text>
    
    );
  } else { 
      // if data is loaded
      console.log(data);
    return (
      <BottomSheetModalProvider>
<FlatList
          keyExtractor={(item) => item.id}
          data={data}
          windowSize={20}
          renderItem={renderItem}
          ListHeaderComponent={<CoinListHeader />}
        />
  
      <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
          style={styles.bottomSheet}
        >
          {selectedCoinData ? (
            <Chart
              currentPrice={selectedCoinData.current_price}
              logoUrl={selectedCoinData.image}
              name={selectedCoinData.name}
              symbol={selectedCoinData.symbol}
              priceChangePercentage7d={
                selectedCoinData.price_change_percentage_7d_in_currency
              }
              sparkline={selectedCoinData?.sparkline_in_7d.price}
            />
          ) : null}
        </BottomSheetModal>
      </BottomSheetModalProvider>
       

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  bottomSheet: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
});