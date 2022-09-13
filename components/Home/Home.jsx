// Dependencies
import React, {useState} from "react";
import {View, Text, StatusBar} from "react-native";
import {useDispatch, useSelector} from "react-redux";
// Files
import {getCryptoByName} from "../../redux/actions/actions";
import Cryptos from "../Cryptos/Cryptos";
import Favorites from "../Favorites/Favorites";
import SearchBar from "../SearchBar/SearchBar";
import Sections from "../Sections/Sections";
import styles from "./HomeStyles";


function Home()
{
    const dispatch = useDispatch();
    const allCryptos = useSelector(state => state.allCryptos);
    const [section, setSection] = useState("all");
    
    function handleInputChange(text)
    {
        const searchedCrypto = allCryptos.filter(e => {
            return e.id.includes(text.toLowerCase()) || e.symbol.includes(text.toLowerCase());
        });
        dispatch(getCryptoByName(searchedCrypto));
    };
    
    return (
        <View style={styles.Container}>
            <StatusBar backgroundColor="#171b26"/>
            
            <View style={styles.Header}>
                <Text style={styles.Title}>Crypto Market</Text>
                <SearchBar
                    searchFunction={handleInputChange}
                />
            </View>
            
            <Sections
                section={section}
                setSection={setSection}
            />
            
            {
                section === "all" ? <Cryptos/>
                :
                <Favorites/>
            }
        </View>
    );
};


export default Home;