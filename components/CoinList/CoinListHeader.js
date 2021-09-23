import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const CoinListHeader = () => {
    return (
        <>
    <View style={styles.titleWrapper}>
      <Text style={styles.largeTitle}>Markets</Text>
    </View>
    {/* <View style={styles.divider} /> */}
  </>
    )
}

export default CoinListHeader

const styles = StyleSheet.create({
    titleWrapper: {
        marginTop: 20,
        paddingHorizontal: 16,
      },
      largeTitle: {
        fontSize: 24,
        fontWeight: "bold",
      },

      divider: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: "#A9ABB1",
        marginHorizontal: 16,
        marginTop: 16,
      },

})