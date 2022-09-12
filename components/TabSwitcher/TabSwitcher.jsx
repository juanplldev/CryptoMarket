// Dependencies
import React, {useState} from "react";
import {View} from "react-native";
import {TabView, SceneMap} from "react-native-tab-view";
// Files
import Home from "../Home/Home";
import Favorites from "../Favorites/Favorites";
import styles from "./TabSwitcherStyles";


function TabSwitcher()
{
    const [index, setIndex] = useState(0);
    const [routes, setRoutes] = useState([
        {
            key: 'first',
            title: 'Home'
        },
        {
            key: 'second',
            title: 'Favorites'
        },
    ]);
    
    const renderScene = SceneMap({
        first: Home,
        second: Favorites,
    });
    
    return (
        <TabView
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
        />
    );
};


export default TabSwitcher;