// Dependencies
import React, {useEffect, useState} from "react";
import {View, Text, FlatList, TouchableOpacity} from "react-native";
import {useNavigate} from "react-router-native";
import {useDispatch, useSelector} from "react-redux";
// Files
import {getCryptos, getFavorites, cleanFavorites} from "../../redux/actions/actions";
import CryptoCard from "../CryptoCard/CryptoCard";
import styles from "./FavoritesStyles";


function Favorites()
{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const favoritesCryptos = useSelector(state => state.favoritesCryptos);
    
    const [refresh, setRefresh] = useState(false);
    
    useEffect(() => {
        dispatch(getCryptos());
        dispatch(getFavorites());
    }, []);
    
    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(getCryptos());
            dispatch(getFavorites());
        }, 15000);
        
        return () => clearInterval(interval);
    }, []);
    
    async function handleRefresh()
    {
        setRefresh(true);
        await dispatch(getCryptos());
        await dispatch(getFavorites());
        setRefresh(false);
    };
    
    function handleNavigate(id)
    {
        navigate(`/crypto/${id}`);
    };
    
    function handleCleanFavorites()
    {
        dispatch(cleanFavorites());
    };
    
    if(favoritesCryptos.length)
    {
        return (
            <View style={styles.Container}>
                
                <View style={styles.DeleteButtonContainer}>
                    <TouchableOpacity style={styles.DeleteButton} onPress={handleCleanFavorites}>
                        <Text style={styles.ButtonText}>Delete all favorites</Text>
                    </TouchableOpacity>
                </View>
                
                <FlatList style={styles.List}
                    data={favoritesCryptos}
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
        return (
            <View style={styles.TextContainer}>
                {/* <Text style={styles.Text}>In this section you will be able to see the cryptos that you added as favorites.</Text> */}
                <Text style={styles.Text}>In this section you will be able to see your favorites cryptos.</Text>
            </View>
        );
    };
};


export default Favorites;