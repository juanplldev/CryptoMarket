// Dependencies
import React from "react";
import {View, ActivityIndicator} from "react-native";
// Files
import styles from "./LoaderStyles";


function Loader()
{
    return (
        <View style={styles.Container}>
            <ActivityIndicator size={"large"}/>
        </View>
    );
};


export default Loader;