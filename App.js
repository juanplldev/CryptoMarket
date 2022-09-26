// Dependencies
import React from "react";
import {SafeAreaView, Platform} from "react-native";
import {NavigationContainer, DefaultTheme} from "@react-navigation/native";
if(Platform.OS === "android")
{
    require("intl");
    require("intl/locale-data/jsonp/en-US");
    require("intl/locale-data/jsonp/es-AR");
};
// Files
import StackNavigation from "./navigation/StackNavigation";
import styles from "./AppStyles";


function App()
{
    const theme =
    {
        ...DefaultTheme,
        dark: false,
        colors:
        {
            background: "#171b26",
        },
    };
    
    return (
        <NavigationContainer theme={theme}>
            <SafeAreaView style={styles.Container}>
                <StackNavigation/>
            </SafeAreaView>
        </NavigationContainer>
    );
};


export default App;