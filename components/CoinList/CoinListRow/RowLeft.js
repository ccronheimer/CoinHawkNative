import React from 'react'
import { View, StyleSheet, Image, Text} from 'react-native'

const RowLeft = ({ name, logoUrl, symbol, priceChangePercentage7d }) => {
    const priceChangeColor = priceChangePercentage7d > 0 ? '#34C759' : '#FF3B30';

    return (
        <View style={styles.leftWrapper}>
          <Image source={{ uri: logoUrl }} style={styles.image} />
          <View style={styles.titlesWrapper}>
            <Text style={styles.title}>{ name}</Text>
            <Text style={styles.subtitle}>{symbol.toUpperCase()}</Text>
              <Text style={[styles.subtitle, {color: priceChangeColor}]}>{priceChangePercentage7d.toFixed(2)}%</Text>

          </View>
        </View>
    )
}

export default RowLeft

const styles = StyleSheet.create({
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
        fontWeight: 'bold',
      },
      subtitle: {
        marginTop: 4,
        fontSize: 14,
        color: "#A9ABB1",
      },
})