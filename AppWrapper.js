// Dependencies
import React from "react";
// import {NavigationContainer, Route} from "@react-navigation/native";
import {Provider} from "react-redux";
// Files
import App from "./App";
import store from "./redux/store/store";


function AppWrapper()
{
    return (
        <Provider store={store}>
            {/* <NavigationContainer> */}
                <App/>
            {/* </NavigationContainer> */}
        </Provider>
    );
};

// App wrapper to add the Provider
// Change the AppEntry import in "./node_modules/expo/AppEntry.js"


export default AppWrapper;