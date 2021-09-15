import React, { useRef, useMemo, useState, useEffect } from "react";
import { StyleSheet, View } from 'react-native';
import { getMarketData } from "./services/cryptoService";
import SearchBar from "./components/SearchBar";
import CoinList from "./components/CoinList/CoinList";
import CoinListTest from "./components/CoinList/CoinListTest"
export default function App() {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    const fetchMarketData = async () => {
      const marketData = await getMarketData();
      setData(marketData); // unfiltered
      setFilteredData(marketData); // filtered
    };

    fetchMarketData();
  }, []);

  
  return (
    <View style={styles.container}>
       <SearchBar dataIn={data} searchResult={setFilteredData} />
       {/* <CoinList filteredData={filteredData} /> */}
      <CoinListTest data={filteredData}/>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
  },
})
