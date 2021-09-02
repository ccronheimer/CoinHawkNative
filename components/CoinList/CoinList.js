import React, { useRef, useState, useMemo } from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import CoinListRow from "./CoinListRow/CoinListRow";
import CoinListHeader from "./CoinListHeader";

import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import Chart from "../Chart";

const CoinList = ({ filteredData }) => {
  // To avoid anonymous arrow function on renderItem props.
  const renderItem = ({ item, index }) => (
    <CoinListRow
      name={item.name}
      symbol={item.symbol}
      currentPrice={item.current_price}
      priceChangePercentage7d={item.price_change_percentage_7d_in_currency}
      logoUrl={item.image}
      onPress={() => openModal(item)}
      number={index}
    />
  );

  const bottomSheetModalRef = useRef(null);
  const snapPoints = useMemo(() => ["75%"], []);
  const [selectedCoinData, setSelectedCoinData] = useState(null);

  const openModal = (item) => {
    setSelectedCoinData(item);
    bottomSheetModalRef.current?.present();
  };

  return (
    <BottomSheetModalProvider>
      <FlatList
        keyExtractor={(item) => item.id}
        data={filteredData}
        windowSize={3}
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
};

export default CoinList;

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