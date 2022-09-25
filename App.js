// Dependencies
import React from "react";
import {SafeAreaView} from "react-native";
import {NavigationContainer, DefaultTheme} from "@react-navigation/native";
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