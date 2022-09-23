// Dependencies
import React, {useEffect, useState} from "react";
import {View, FlatList, TouchableOpacity} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {useNavigation} from "@react-navigation/native";
// Files
import {getCryptos} from "../../redux/actions/actions";
import CryptoCard from "../CryptoCard/CryptoCard";
import Loader from "../Loader/Loader";
import styles from "./CryptosStyles";


function Cryptos()
{
    const dispatch = useDispatch();
    const navigation = useNavigation();
    
    const cryptos = useSelector(state => state.cryptos);
    const allCryptos = useSelector(state => state.allCryptos);
    
    const [refresh, setRefresh] = useState(false);
    
    useEffect(() => {
        dispatch(getCryptos());
    }, []);
    
    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(getCryptos());
        }, 15000);
        
        return () => clearInterval(interval);
    }, []);
    
    async function handleRefresh()
    {
        setRefresh(true);
        await dispatch(getCryptos());
        setRefresh(false);
    };
    
    function handleNavigate(id)
    {
        return navigation.navigate("Detail", id);
    };
    
    if(allCryptos.length)
    {
        return (
            <View style={styles.Container}>
                <FlatList style={styles.List}
                    data={cryptos}
                    initialNumToRender={100}
                    renderItem={({item}) => {
                        return (
                            <TouchableOpacity onPress={() => handleNavigate(item.id)} style={styles.Button}>
                                <CryptoCard
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
                />
            </View>
        );
    }
    else
    {
        return <Loader/>;
    };
};


export default Cryptos;