// Dependencies
import React, {useEffect, useState} from "react";
import {View, Text, FlatList, StatusBar, TouchableOpacity} from "react-native";
import {useNavigate} from "react-router-native";
import {useDispatch, useSelector} from "react-redux";
// Files
import {getCryptos, getCryptoByName} from "../../redux/actions/actions";
import Cryptos from "../Cryptos/Cryptos";
import SearchBar from "../SearchBar/SearchBar";
import Filters from "../Filters/Filters";
import styles from "./HomeStyles";


function Home()
{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const allCryptos = useSelector(state => state.allCryptos);
    const cryptos = useSelector(state => state.cryptos);
    const [refresh, setRefresh] = useState(false);
    
    useEffect(() => {
        dispatch(getCryptos());
    }, [dispatch, refresh]);
    
    async function handleRefresh()
    {
        await setRefresh(true);
        await dispatch(getCryptos());
        await setRefresh(false);
    };
    
    function handleInputChange(text)
    {
        const searchedCrypto = allCryptos.filter(e => {
            return e.id.includes(text.toLowerCase()) || e.symbol.includes(text.toLowerCase());
        });
        dispatch(getCryptoByName(searchedCrypto));
    };
    
    function handleNavigate(id)
    {
        navigate(`/crypto/${id}`);
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
            
            <Filters/>
            
            <FlatList style={styles.List}
                data={cryptos}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => handleNavigate(item.id)} style={styles.Link}>
                            <Cryptos
                                id={item.id}
                                name={item.name}
                                symbol={item.symbol}
                                image={item.image}
                                price_usd={item.price_usd}
                                price_percentage_24h={item.price_percentage_24h}
                                key={item.id}
                            />
                        </TouchableOpacity>
                    );
                }}
                refreshing={refresh}
                onRefresh={handleRefresh}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};


export default Home;