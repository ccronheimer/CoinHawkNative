import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const CoinRowChart = ({ data }) => {
  /* 
        sparkline_in_7d: {
        price: [
          {
              "x": 1625261034,
              "y": 33508.022591394816
          },
          {
              "x": 1625264634,
              "y": 33451.868571618266
          },
          {
              "x": 1625268234,
              "y": 33352.778189967095
          },
        ]
    }
    */

  return (
    <>
      {data.map((item, i) => {
        <tr key={i}>
          <td>{item.x}</td>
          <td>{item.y}</td>
        </tr>;
      })}
    </>
  );
};

export default CoinRowChart;
