// Dependencies
import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
// Files
import styles from "./SectionsStyles";


function Sections({section, setSection})
{
    function handleChangeSection()
    {
        if(section === "all")
        {
            setSection("favorites");
        }
        else
        {
            setSection("all");
        };
    };
    
    return (
        <View style={styles.Container}>
            <TouchableOpacity onPress={section === "favorites" ? handleChangeSection : null} style={section === "all" ? styles.ActiveSection : styles.Section}>
                <Text style={styles.Text}>All</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={section === "all" ? handleChangeSection : null} style={section === "favorites" ? styles.ActiveSection : styles.Section}>
                <Text style={styles.Text}>Favorites</Text>
            </TouchableOpacity>
        </View>
    );
};


export default Sections;