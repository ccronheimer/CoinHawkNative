import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RowRight = ({ currentPrice }) => {
    return (
        <View style={styles.rightWrapper}>
          <Text style={styles.title}>${currentPrice.toLocaleString('en-US', { currency: 'USD' })}</Text>
        </View>
    )
}

export default RowRight

const styles = StyleSheet.create({

    rightWrapper: {
        alignItems: 'flex-end',
      },

      title: {
        fontSize: 18,
        fontWeight: 'bold',
      },
});