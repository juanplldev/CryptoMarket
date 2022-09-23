// Dependencies
import React from "react";
import {View} from "react-native";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
// Files
import Cryptos from "../components/Cryptos/Cryptos";
import Favorites from "../components/Favorites/Favorites";
import styles from "./TabNavigationStyles";


function TabNavigation({tab, setTab})
{
    const Tab = createMaterialTopTabNavigator();
    
    function handleChangeSection()
    {
        if(tab === "all")
        {
            setTab("favorites");
        }
        else
        {
            setTab("all");
        };
    };
    
    return (
        <View style={styles.Container}>
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: styles.TabBarStyle,
                }}
            >
                <Tab.Screen
                listeners={{
                    tabPress: tab === "favorites" ? handleChangeSection : null,
                    swipeStart: tab === "all" ? handleChangeSection : null,
                    swipeEnd: tab === "favorites" ? handleChangeSection : null,
                }}
                    name="Cryptos"
                    component={Cryptos}
                    options={{
                        tabBarLabel: "All",
                        tabBarLabelStyle: tab === "all" ? styles.ActiveText : styles.Text,
                        tabBarIndicatorStyle: styles.TabBarIndicator,
                        tabBarPressColor: "transparent"
                    }}
                />
                
                <Tab.Screen
                listeners={{
                    tabPress: tab === "all" ? handleChangeSection : null,
                    swipeStart: tab === "favorites" ? handleChangeSection : null,
                    swipeEnd: tab === "all" ? handleChangeSection : null,
                }}
                    name="Favorites"
                    component={Favorites}
                    options={{
                        tabBarLabel: "Favorites",
                        tabBarLabelStyle: tab === "favorites" ? styles.ActiveText : styles.Text,
                        tabBarIndicatorStyle: styles.TabBarIndicator,
                        tabBarPressColor: "transparent",
                    }}
                />
            </Tab.Navigator>
        </View>
    );
};


export default TabNavigation;