// Dependencies
import React, {useState} from "react";
import {View, Text, StatusBar} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {useNavigation} from "@react-navigation/native";
// Files
import {getCryptoByName, getFavoriteCryptoByName} from "../../redux/actions/actions";
import SearchBar from "../SearchBar/SearchBar";
import TabNavigation from "../../navigation/TabNavigation";
import styles from "./HomeStyles";


function Home()
{
    const dispatch = useDispatch();
    const navigation = useNavigation();
    
    const allCryptos = useSelector(state => state.allCryptos);
    const allFavoritesCryptos = useSelector(state => state.allFavoritesCryptos);
    
    const [tab, setTab] = useState("all");
    
    function handleSearchAll(text)
    {
        const searchedCrypto = allCryptos.filter(e => {
            return e.id.includes(text.toLowerCase()) || e.symbol.includes(text.toLowerCase());
        });
        dispatch(getCryptoByName(searchedCrypto));
    };
    
    function handleSearchFavorites(text)
    {
        const searchedCrypto = allFavoritesCryptos.filter(e => {
            return e.id.includes(text.toLowerCase()) || e.symbol.includes(text.toLowerCase());
        });
        dispatch(getFavoriteCryptoByName(searchedCrypto));
    };
    
    function handleNavigate()
    {
        navigation.navigate("About");
    };
    
    return (
        <View style={styles.Container}>
            <StatusBar backgroundColor="#171b26"/>
            
            <View style={styles.Header}>
                <Text onPress={handleNavigate} style={styles.Title}>Crypto Market</Text>
                {
                    tab === "all" ? <SearchBar searchFunction={handleSearchAll}/>
                    :
                    <SearchBar searchFunction={handleSearchFavorites}/>
                }
            </View>
            
            <TabNavigation
                tab={tab}
                setTab={setTab}
            />
        </View>
    );
};


export default Home;