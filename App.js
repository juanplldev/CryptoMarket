// Dependencies
import React from "react";
import {SafeAreaView} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
// Files
import StackNavigation from "./navigation/StackNavigation";
import styles from "./AppStyles";


function App()
{
    return (
        <NavigationContainer>
            <SafeAreaView style={styles.Container}>
                <StackNavigation/>
            </SafeAreaView>
        </NavigationContainer>
    );
};


export default App;