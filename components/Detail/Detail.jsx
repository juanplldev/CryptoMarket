// Dependencies
import React, {useState, useEffect} from "react";
import {View, Text, ScrollView, BackHandler, TouchableOpacity, RefreshControl, Image} from "react-native";
import {Link, useParams, useNavigate} from "react-router-native";
import {useDispatch, useSelector} from "react-redux";
import * as Linking from "expo-linking";
import Icon from "react-native-vector-icons/AntDesign";
// Files
import {getCryptoInfoById, getCryptoPricesById, getFavorites, getMarketChart, addFavorite, deleteFavorite, cleanDetailState, cleanChartState} from "../../redux/actions/actions";
import Chart from "../Chart/Chart";
import Loader from "../Loader/Loader";
import styles from "./DetailStyles";


function Detail()
{
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const cryptoInfo = useSelector(state => state.cryptoInfo);
    const cryptoPrices = useSelector(state => state.cryptoPrices);
    const chartValues = useSelector(state => state.chartValues);
    const allFavoritesCryptos = useSelector(state => state.allFavoritesCryptos);
    
    const isFavorite = allFavoritesCryptos.filter(e => e.id === id).length ? true : false;
    
    const [refresh, setRefresh] = useState(false);
    const [chartFilter, setChartFilter] = useState(14);
    
    useEffect(() => {
        dispatch(getCryptoInfoById(id));
        dispatch(getCryptoPricesById(id));
        dispatch(getFavorites());
    }, []);
    
    useEffect(() => {
        dispatch(cleanChartState());
        dispatch(getMarketChart(id, chartFilter));
    }, [chartFilter]);
    
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         dispatch(getCryptoPricesById(id));
    //     }, 15000);
        
    //     return () => clearInterval(interval);
    // }, []);
    
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
        dispatch(cleanDetailState());
        dispatch(cleanChartState());
    };
    
    async function handleRefresh()
    {
        await setRefresh(true);
        await dispatch(getCryptoPricesById(id));
        await dispatch(getMarketChart(id, chartFilter));
        await setRefresh(false);
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
    
    function handleOpenBinance()
    {
        const symbol = cryptoInfo.symbol.toUpperCase();
        
        Linking.openURL(`https://www.binance.com/en/trade/${symbol}_USDT`);
    };
    
    function handleOpenExplorer()
    {
        const symbol = cryptoInfo.symbol;
        
        Linking.openURL(`https://www.blockchain.com/explorer/assets/${symbol}`);
    };
    
    function handleWebLinkFormater(string)
    {
        const newLink = string.replace(/http(s)?(:)?(\/\/)?|(\/\/)?(www\.)?/g, "").replace(/\/$/, "");
        
        return <Text style={styles.LinkSubText}>{newLink}</Text>;
    };
    
    if(Object.keys(cryptoInfo).length && Object.keys(cryptoPrices).length)
    {
        return (
            <View style={styles.Container}>
                <View style={styles.Header}>
                    <TouchableOpacity onPress={handleNavigate} style={styles.IconContainer}>
                        <Icon style={styles.Icon} name="left" size={30}/>
                    </TouchableOpacity>
                    
                    <View style={styles.NameContainer}>
                        <Text style={styles.Symbol}>{cryptoInfo.symbol.toUpperCase()}</Text>
                        <Text style={styles.Name}>{cryptoInfo.name}</Text>
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
                    showsVerticalScrollIndicator={true}
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
                                    <Text style={styles.PriceUsd}>{cryptoPrices.price_usd} USD</Text>
                                    <Text style={styles.PriceArs}>{cryptoPrices.price_ars} ARS</Text>
                                </View>
                                
                                {handlePercentage(cryptoPrices.price_percentage_24h)}
                            </View>
                            
                            <View style={styles.BottomPrices}>
                                <Text style={styles.PriceChangeUsd}>{handlePriceChange(cryptoPrices.price_usd_24h)} USD</Text>
                                <Text style={styles.PriceChangeArs}>{handlePriceChange(cryptoPrices.price_ars_24h)} ARS</Text>
                            </View>
                        </View>
                        
                        <View style={styles.ChartContainer}>
                            <Chart
                                chartValues={chartValues}
                            />
                        </View>
                    </View>
                    
                    <View style={styles.ChartFiltersContainer}>
                        <TouchableOpacity onPress={() => setChartFilter(1)} style={chartFilter === 1 ? styles.ActiveChartFilter : styles.ChartFilter}>
                            <Text style={styles.ChartFilterText}>1D</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={() => setChartFilter(7)} style={chartFilter === 7 ? styles.ActiveChartFilter : styles.ChartFilter}>
                            <Text style={styles.ChartFilterText}>1W</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={() => setChartFilter(14)} style={chartFilter === 14 ? styles.ActiveChartFilter : styles.ChartFilter}>
                            <Text style={styles.ChartFilterText}>2W</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={() => setChartFilter(30)} style={chartFilter === 30 ? styles.ActiveChartFilter : styles.ChartFilter}>
                            <Text style={styles.ChartFilterText}>1M</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={() => setChartFilter(365)} style={chartFilter === 365 ? styles.ActiveChartFilter : styles.ChartFilter}>
                            <Text style={styles.ChartFilterText}>1Y</Text>
                        </TouchableOpacity>
                        
                        {/* <TouchableOpacity onPress={() => setChartFilter("max")} style={chartFilter === "max" ? styles.ActiveChartFilter : styles.ChartFilter}>
                            <Text style={styles.ChartFilterText}>All</Text>
                        </TouchableOpacity> */}
                    </View>
                    
                    <Text style={styles.InfoTitle}>Learn more about {cryptoInfo.name}</Text>
                    
                    {
                        cryptoInfo.description ?
                        <View style={styles.InfoContainer}>
                            <Text style={styles.DecriptionText}>{cryptoInfo.description}</Text>
                        </View>
                        :
                        null
                    }
                    
                    <View style={styles.LinksContainer}>
                        <TouchableOpacity onPress={() => {Linking.openURL(cryptoInfo.website)}} style={styles.LinkButton}>
                            <Image style={styles.LinkImage} source={{uri: "https://www.nicepng.com/png/full/170-1709508_web-solutions-web-icon-white-png.png"}} />
                            
                            <View style={styles.LinkTexts}>
                                <Text style={styles.LinkText}>Website</Text>
                                {handleWebLinkFormater(cryptoInfo.website)}
                            </View>
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={handleOpenExplorer} style={styles.LinkButton}>
                            <Image style={styles.LinkImage} source={{uri: "https://exchange.blockchain.com/api/assets/images/logo.png"}} />
                            
                            <View style={styles.LinkTexts}>
                                <Text style={styles.LinkText}>Explorer</Text>
                                <Text style={styles.LinkSubText}>blockchain.com</Text>
                            </View>
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={handleOpenBinance} style={styles.LinkButton}>
                            <Image style={styles.LinkImage} source={{uri: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Binance-coin-bnb-logo.png"}} />
                            
                            <View style={styles.LinkTexts}>
                                <Text style={styles.LinkText}>View on Binance</Text>
                                <Text style={styles.LinkSubText}>binance.com</Text>
                            </View>
                        </TouchableOpacity>
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