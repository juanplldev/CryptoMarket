// Dependencies
import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
// Files
import Home from "../components/Home/Home";
import Detail from "../components/Detail/Detail";


function StackNavigation()
{
    const Stack = createNativeStackNavigator();
    
    return (
        <Stack.Navigator
            screenOptions={{
                contentStyle: {
                    backgroundColor: "#171b26",
                }
            }}
        >
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    animation: "slide_from_right",
                }}
            />
            
            <Stack.Screen
                name="Detail"
                component={Detail}
                options={{
                    headerShown: false,
                    animation: "slide_from_right",
                }}
            />
        </Stack.Navigator>
    );
};


export default StackNavigation;