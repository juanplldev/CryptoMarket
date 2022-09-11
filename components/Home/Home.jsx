// Dependencies
import React, {useEffect, useState} from "react";
import {View, Text, FlatList, ScrollView} from "react-native";
import {Link} from "react-router-native";
import {useDispatch, useSelector} from "react-redux";
// Files
import {getCryptos} from "../../redux/actions/actions";
import Cryptos from "../Cryptos/Cryptos";
import styles from "./HomeStyles";


function Home()
{
    const dispatch = useDispatch();
    const allCryptos = useSelector(state => state.allCryptos);
    const [refresh, setRefresh] = useState(false);
    
    useEffect(() => {
        dispatch(getCryptos());
    }, [dispatch, refresh]);
    
    return (
        <View style={styles.Container}>
            <Text style={styles.Title}>Crypto Prices</Text>
            {/* <ScrollView showsVerticalScrollIndicator={false}>
                {
                    allCryptos.map(coin => {
                        return (
                            <Link to={`/crypto/${coin.id}`}>
                                <CryptoCard
                                    id={coin.id}
                                    name={coin.name}
                                    symbol={coin.symbol}
                                    image={coin.image}
                                    current_price={coin.current_price}
                                    key={coin.id}
                                />
                            </Link>
                        );
                    })
                }
            </ScrollView> */}
            
            <FlatList style={styles.List}
                data={allCryptos}
                renderItem={({item}) => {
                    return (
                        <Link to={`/crypto/${item.id}`}>
                            <Cryptos
                                id={item.id}
                                name={item.name}
                                symbol={item.symbol}
                                image={item.image}
                                price_usd={item.price_usd}
                                price_ars={item.price_ars}
                                price_percentage_24h={item.price_percentage_24h}
                                key={item.id}
                            />
                        </Link>
                    );
                }}
                refreshing={refresh}
                onRefresh={async () => {
                    setRefresh(true);
                    dispatch(getCryptos());
                    setRefresh(false);
                }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};


export default Home;