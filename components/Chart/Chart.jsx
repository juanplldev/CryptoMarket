// Dependencies
import React from "react";
import {View} from "react-native";
import {ChartDot, ChartPath, ChartPathProvider, ChartYLabel} from '@rainbow-me/animated-charts';
// Files
import Loader from "../Loader/Loader";
import styles from "./ChartStyles";


function Chart({chartValues})
{
    if(chartValues.length)
    {
        return (
            <View style={styles.Container}>
                <ChartPathProvider data={{points: chartValues, smoothingStrategy: "bezier"}}>
                    <ChartPath height={150} width={370} stroke="white"/>
                    <ChartDot style={styles.Dot} />
                    <ChartYLabel style={{color: "white"}}/>
                </ChartPathProvider>
            </View>
        );
    }
    else
    {
        return <Loader/>;
    };
};


export default Chart;