// sparkline_in_7d: {
//   price: [
//     {
//         "x": 1625261034,
//         "y": 33508.022591394816
//     },
//     {
//         "x": 1625264634,
//         "y": 33451.868571618266
//     },
//     {
//         "x": 1625268234,
//         "y": 33352.778189967095
//     },
//     {
//         "x": 1625271834,
//         "y": 33222.90314028234
//     },
//     {
//         "x": 1625275434,
//         "y": 33565.74294408047
//     },

// if the % is up then green else red 
// 3 coloums
import React from 'react';
import {
  StyleSheet, View, SafeAreaView, Dimensions, Animated, TextInput,
} from 'react-native';
import * as path from 'svg-path-properties';
import * as shape from 'd3-shape';

import {
  scaleTime,
  scaleLinear,
  scaleQuantile,
} from 'd3-scale';

import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

const height = 100;
const width = 200;
const verticalPadding = 5;
const cursorRadius = 10;
const labelWidth = 100;



const CoinRowChart = ({ sparkLine }) => {
 
  const d3 = {
    shape,
  };
  
  const data = [
    { x: 1625261034, y: 0 },
    { x: 1625264634, y: 0 },
    { x: 1625268234, y: 200 },
    { x: 1625271834, y: 200 },
    { x: 1625275434, y: 300 },
  ];

  const maxX = (Math.max.apply(Math, sparkLine.map(function(o) { return o.x; }))) 
  const maxY = (Math.max.apply(Math, sparkLine.map(function(o) { return o.y; }))) 

  const minX = (Math.min.apply(Math, sparkLine.map(function(o) { return o.x; }))) 
  const minY = (Math.min.apply(Math, sparkLine.map(function(o) { return o.y; }))) 

  const scaleX = scaleTime().domain([minX, maxX]).range([0, width]);
  const scaleY = scaleLinear().domain([minY, maxY]).range([height - verticalPadding, verticalPadding]);
  const line = d3.shape.line()
    .x(d => scaleX(d.x))
    .y(d => scaleY(d.y))
    .curve(d3.shape.curveBasis)(sparkLine);
  const properties = path.svgPathProperties(line);
  const lineLength = properties.getTotalLength();

return (
  <>
  <SafeAreaView style={styles.root}>
        <View style={styles.container}>
          <Svg {...{ width, height }}>
            <Defs>
              <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gradient">
                <Stop stopColor="#CDE3F8" offset="0%" />
                <Stop stopColor="#eef6fd" offset="80%" />
                <Stop stopColor="#FEFFFF" offset="100%" />
              </LinearGradient>
            </Defs>
            <Path d={line} fill="transparent" stroke="#367be2" strokeWidth={5} />
            <Path d={`${line} L ${width} ${height} L 0 ${height}`} fill="url(#gradient)" />
          </Svg>
        </View>
      </SafeAreaView>
  </>
)
}

export default CoinRowChart;
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    marginTop: 60,
    height,
    width,
  },
  cursor: {
    width: cursorRadius * 2,
    height: cursorRadius * 2,
    borderRadius: cursorRadius,
    borderColor: '#367be2',
    borderWidth: 3,
    backgroundColor: 'white',
  },
  label: {
    position: 'absolute',
    top: -45,
    left: 0,
    backgroundColor: 'lightgray',
    width: labelWidth,
  },
});
