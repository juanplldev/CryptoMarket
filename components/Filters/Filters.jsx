// Dependencies
import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
// Files
import styles from "./FiltersStyles";


function Filters()
{
    return (
        <View style={styles.Container}>
            <TouchableOpacity style={styles.Button}>
                <Text style={styles.ButtonText}>All cryptos</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.Button}>
                <Text style={styles.ButtonText}>Favorites cryptos</Text>
            </TouchableOpacity>
        </View>
    );
};


export default Filters;