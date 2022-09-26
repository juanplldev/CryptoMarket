// Dependencies
import React from "react";
import {View} from "react-native";
import {ChartDot, ChartPath, ChartPathProvider, ChartYLabel, ChartXLabel} from "@rainbow-me/animated-charts";
// Files
import Loader from "../Loader/Loader";
import styles from "./ChartStyles";


function Chart({chartValues, handleFormatChartPrice, handleFormatChartDate})
{
    if(chartValues.length)
    {
        return (
            <View style={styles.Container}>
                <ChartPathProvider data={{points: chartValues, smoothingStrategy: "bezier"}}>
                    <ChartYLabel format={handleFormatChartPrice} style={styles.PriceLabel}/>
                    <ChartXLabel format={handleFormatChartDate} style={styles.DateLabel}/>
                    
                    <View>
                        <ChartPath height={150} width={370} stroke="white" selectedOpacity={1} />
                        <ChartDot style={styles.Dot} />
                    </View>
                    
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