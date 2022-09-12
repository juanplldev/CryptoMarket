// Dependencies
import React, {useEffect} from "react";
import {View, Text} from "react-native";
// Files
import styles from "./FavoritesStyles";


function Favorites()
{
    useEffect(() => {
        // window.localStorage.setItem("test", "aaa");
    }, [])
    
    return (
        <View style={styles.Container}>
            <Text style={styles.Text}>Favorites section</Text>
        </View>
    );
};


export default Favorites;