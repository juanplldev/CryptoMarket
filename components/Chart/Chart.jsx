// Dependencies
import React, {useState, useEffect} from "react";
import {View, Text, TouchableOpacity, RefreshControl, Dimensions, ScrollView} from "react-native";
import {ChartDot, ChartPath, ChartPathProvider} from '@rainbow-me/animated-charts';
// Files
import styles from "./ChartStyles";


function Chart({chartValues})
{
    return (
        <View style={styles.Container}>
            <ChartPathProvider data={{points: chartValues, smoothingStrategy: "bezier"}}>
                <ChartPath height={150} width={370} stroke="white"/>
                <ChartDot style={styles.Dot} />
            </ChartPathProvider>
        </View>
    );
};


export default Chart;