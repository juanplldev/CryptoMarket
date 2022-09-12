// Dependencies
import React from "react";
import {View, TextInput} from "react-native";
// Files
import styles from "./SearchBarStyles";


function SearchBar({searchFunction})
{
    return (
        <View style={styles.Container}>
            <TextInput
                style={styles.SearchInput}
                placeholder="Search by name or symbol"
                placeholderTextColor="#858585"
                onChangeText={searchFunction}
            />
        </View>
    );
};


export default SearchBar;