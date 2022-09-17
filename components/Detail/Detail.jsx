// Dependencies
import React, {useState, useEffect} from "react";
import {View, Text, ScrollView, BackHandler, TouchableOpacity, Linking, RefreshControl} from "react-native";
import {Link, useParams, useNavigate} from "react-router-native";
import {useDispatch, useSelector} from "react-redux";
import Icon from "react-native-vector-icons/AntDesign";
// Files
import {getCryptoById, cleanDetailState, addFavorite, deleteFavorite, getFavorites, getMarketChart} from "../../redux/actions/actions";
import Chart from "../Chart/Chart";
import Loader from "../Loader/Loader";
import styles from "./DetailStyles";


function Detail()
{
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const cryptoDetail = useSelector(state => state.cryptoDetail);
    const allFavoritesCryptos = useSelector(state => state.allFavoritesCryptos);
    const chartValues = useSelector(state => state.chartValues);
    
    const isFavorite = allFavoritesCryptos.filter(e => e.id === id).length ? true : false;
    
    const [refresh, setRefresh] = useState(false);
    
    function handleBackAction()
    {
        const action = BackHandler.exitApp();
        BackHandler.addEventListener("hardwareBackPress", action);
    };
    
    
    useEffect(() => {
        dispatch(getCryptoById(id));
        dispatch(getFavorites());
        dispatch(getMarketChart(id));
        dispatch(cleanDetailState());
    }, [dispatch, id]);
    
    function handlePercentage(percentage)
    {
        const shortedPrice = percentage.toFixed(2);
        
        if(Math.sign(percentage) === 1)
        {
            return <Text style={styles.PositivePercentage}>+{shortedPrice}%</Text>;
        }
        else
        {
            return <Text style={styles.NegativePercentage}>{shortedPrice}%</Text>;
        };
    };
    
    function handlePriceChange(price)
    {
        const shortedPrice = price.toFixed(2);
        const isPositive = Math.sign(price) === 1;
        
        return <Text>{isPositive && "+"}{shortedPrice}</Text>;
    };
    
    function handleNavigate()
    {
        navigate("/");
    };
    
    async function handleRefresh()
    {
        setRefresh(true);
        await dispatch(getCryptoById(id));
        await dispatch(getMarketChart(id));
        setRefresh(false);
    };
    
    function handleUppercase(string)
    {
        return string && string.toUpperCase();
    };
    
    async function handleAddFavorite(cryptoId)
    {
        await dispatch(addFavorite(cryptoId));
        await dispatch(getFavorites());
    };
    
    async function handleDeleteFavorite(cryptoId)
    {
        await dispatch(deleteFavorite(cryptoId));
        await dispatch(getFavorites());
    };
    
    if(Object.keys(cryptoDetail).length && chartValues.length)
    {
        return (
            <View style={styles.Container}>
                <View style={styles.Header}>
                    <TouchableOpacity onPress={handleNavigate} style={styles.IconContainer}>
                        <Icon style={styles.Icon} name="left" size={30}/>
                    </TouchableOpacity>
                    
                    <View style={styles.NameContainer}>
                        <Text style={styles.Symbol}>{handleUppercase(cryptoDetail.symbol)}</Text>
                        <Text style={styles.Name}>{cryptoDetail.name}</Text>
                    </View>
                    
                    {
                        isFavorite ?
                        <TouchableOpacity onPress={() => handleDeleteFavorite(id)} style={styles.IconContainer}>
                            <Icon style={styles.Icon} name="heart" size={30}/>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={() => handleAddFavorite(id)} style={styles.IconContainer}>
                            <Icon style={styles.Icon} name="hearto" size={30}/>
                        </TouchableOpacity>
                    }
                </View>
                
                <ScrollView
                contentContainerStyle={styles.ScrollView}
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl
                            refreshing={refresh}
                            onRefresh={handleRefresh}
                        />
                    }
                >
                    <View style={styles.RateContainer}>
                        <View style={styles.PriceContainer}>
                            <View style={styles.TopPrices}>
                                <View>
                                    <Text style={styles.PriceUsd}>{cryptoDetail.price_usd} USD</Text>
                                    <Text style={styles.PriceArs}>{cryptoDetail.price_ars} ARS</Text>
                                </View>
                                
                                {handlePercentage(cryptoDetail.price_percentage_24h)}
                            </View>
                            
                            <View style={styles.BottomPrices}>
                                <Text style={styles.PriceChangeUsd}>{handlePriceChange(cryptoDetail.price_usd_24h)} USD</Text>
                                <Text style={styles.PriceChangeArs}>{handlePriceChange(cryptoDetail.price_ars_24h)} ARS</Text>
                            </View>
                        </View>
                        
                        <View style={styles.ChartContainer}>
                            <Chart
                                chartValues={chartValues}
                            />
                        </View>
                    </View>
                    
                    <View style={styles.InfoContainer}>
                        <Text style={styles.InfoTitle}>Learn more about {cryptoDetail.name}</Text>
                        
                        <View>
                            <TouchableOpacity>
                                <Text>Website</Text>
                            </TouchableOpacity>
                            
                            <TouchableOpacity>
                                <Text>Website</Text>
                            </TouchableOpacity>
                            
                            <TouchableOpacity>
                                <Text>Website</Text>
                            </TouchableOpacity>
                        </View>
                        {/* <Text>{cryptoDetail.description}</Text> */}
                    </View>
                </ScrollView>
            </View>
        );
    }
    else
    {
        return <Loader/>;
    };
};


export default Detail;