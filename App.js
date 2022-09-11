// Dependencies
import React from "react";
import {View} from "react-native";
import {NativeRouter, Route, Routes} from "react-router-native";
// Files
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
import styles from "./AppStyles";


function App()
{
    return (
        <NativeRouter>
            <View style={styles.Container}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/crypto/:id" element={<Detail/>}/>
                </Routes>
            </View>
        </NativeRouter>
    );
};


export default App;