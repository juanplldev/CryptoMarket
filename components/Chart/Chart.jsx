// Dependencies
import React, {useState, useEffect} from "react";
import {View, Text, TouchableOpacity, RefreshControl, Dimensions, ScrollView} from "react-native";
import {useDispatch, useSelector} from "react-redux";
// Files
import {getMarketChart} from "../../redux/actions/actions";
import Loader from "../Loader/Loader";
import styles from "./ChartStyles";


function Chart({id, chartValues})
{
    const screenWidth = Dimensions.get('window').width;
    
    return (
        <View>

        </View>
    );
};


export default Chart;