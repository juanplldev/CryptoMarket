// Dependencies
import React, {useState, useEffect} from "react";
import {View, Text, ScrollView, TouchableOpacity, RefreshControl, Image, StatusBar} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {useNavigation, useRoute} from "@react-navigation/native";
import Icon from "react-native-vector-icons/AntDesign";
import * as Linking from "expo-linking";

// Files
import {getCryptoInfoById, getCryptoPricesById, getFavorites, getMarketChart, addFavorite, deleteFavorite, cleanDetailState, cleanChartState} from "../../redux/actions/actions";
import Chart from "../Chart/Chart";
import Loader from "../Loader/Loader";
import styles from "./DetailStyles";


function Detail()
{
    const dispatch = useDispatch();
    const id = useRoute().params;
    const navigation = useNavigation();
    
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
        dispatch(cleanDetailState());
        dispatch(cleanChartState());
    }, []);
    
    useEffect(() => {
        dispatch(cleanChartState());
        dispatch(getMarketChart(id, chartFilter));
    }, [chartFilter]);
    
    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(getCryptoPricesById(id));
        }, 15000);
        
        return () => clearInterval(interval);
    }, []);
    
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
    
    function handleFormatPrice(currency)
    {
        if(currency === "USD")
        {
            const formatedPrice = new Intl.NumberFormat("en-US", {currency: "USD", minimumFractionDigits: 2}).format(cryptoPrices.price_usd);
            
            return formatedPrice;
        }
        else
        {
            const formatedPrice = new Intl.NumberFormat("es-AR", {currency: "ARS", minimumFractionDigits: 2}).format(cryptoPrices.price_ars);
            
            return formatedPrice;
        };
    };
    
    function handleFormatChartPrice(price)
    {
        "worklet";
        
        if(price === "")
        {
            return "";
        }
        else
        {
            const formatedPrice = `${parseFloat(price).toFixed(2)} USD`.replace(/\d(?=(\d{3})+\.)/g, "$&,");
            
            return formatedPrice;
        };
    };
    
    function handleFormatChartDate(timestamp)
    {
        "worklet";
        
        if(timestamp === "")
        {
            return "";
        }
        else
        {
            const date = new Date(Number(timestamp));
            const formatedDate = `${date.toLocaleDateString("es-US")} - ${date.toLocaleTimeString("es-US", {hour12: false})}`;
            
            return formatedDate;
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
        dispatch(cleanDetailState());
        dispatch(cleanChartState());
        navigation.navigate("Home");
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
    
    function handleWebLinkFormater(link)
    {
        const splittedLink = link.split(/[?#]/)[0];
        const formatedLink = splittedLink.replace(/http(s)?(:)?(\/\/)?|(\/\/)?(www\.)?/g, "").replace(/\/$/, "");
        
        return <Text style={styles.LinkSubText}>{formatedLink}</Text>;
    };
    
    function handleFormatDescriptionLinks(text)
    {
        const tagRegExp = /<a [^>]+>(.*?)<\/a>/g;
        const verifyMatch = tagRegExp.test(text);
        
        if(verifyMatch)
        {
            const matchedTags = text.match(tagRegExp);
            const savedStrings = matchedTags.map(() => tagRegExp.exec(text)[1]);
            const mapObj = {};
            
            matchedTags.forEach((e, i) => {
                mapObj[e] = savedStrings[i];
            });
            
            const formatedText = text.replace(tagRegExp, (matched) => mapObj[matched]);
            
            return <Text selectable selectionColor="#dadeff66" style={styles.DescriptionText}>{formatedText}</Text>;
        }
        else
        {
            return <Text selectable selectionColor="#dadeff66" style={styles.DescriptionText}>{text}</Text>;
        };
    };
    
    if(Object.keys(cryptoInfo).length && Object.keys(cryptoPrices).length)
    {
        return (
            <View style={styles.Container}>
                <StatusBar backgroundColor="#1e2633"/>
                
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
                                    <Text style={styles.PriceUsd}>{handleFormatPrice("USD")} USD</Text>
                                    <Text style={styles.PriceArs}>{handleFormatPrice("ARS")} ARS</Text>
                                </View>
                                
                                {handlePercentage(cryptoPrices.price_percentage_24h)}
                            </View>
                            
                            <View style={styles.BottomPrices}>
                                {/* <Text style={styles.PriceChangeUsd}>{handlePriceChange(cryptoPrices.price_usd_24h)} USD</Text> */}
                                {/* <Text style={styles.PriceChangeArs}>{handlePriceChange(cryptoPrices.price_ars_24h)} ARS</Text> */}
                            </View>
                        </View>
                        
                        <View style={styles.ChartContainer}>
                            <Chart
                                chartValues={chartValues}
                                handleFormatChartPrice={handleFormatChartPrice}
                                handleFormatChartDate={handleFormatChartDate}
                            />
                        </View>
                    </View>
                    
                    <View style={styles.ChartFiltersContainer}>
                        <TouchableOpacity onPress={() => setChartFilter(1)} style={chartFilter === 1 ? styles.ActiveChartFilter : styles.ChartFilter}>
                            <Text style={chartFilter === 1 ? styles.ActiveChartFilterText : styles.ChartFilterText}>1D</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={() => setChartFilter(7)} style={chartFilter === 7 ? styles.ActiveChartFilter : styles.ChartFilter}>
                            <Text style={chartFilter === 7 ? styles.ActiveChartFilterText : styles.ChartFilterText}>1W</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={() => setChartFilter(14)} style={chartFilter === 14 ? styles.ActiveChartFilter : styles.ChartFilter}>
                            <Text style={chartFilter === 14 ? styles.ActiveChartFilterText : styles.ChartFilterText}>2W</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={() => setChartFilter(30)} style={chartFilter === 30 ? styles.ActiveChartFilter : styles.ChartFilter}>
                            <Text style={chartFilter === 30 ? styles.ActiveChartFilterText : styles.ChartFilterText}>1M</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={() => setChartFilter(365)} style={chartFilter === 365 ? styles.ActiveChartFilter : styles.ChartFilter}>
                            <Text style={chartFilter === 365 ? styles.ActiveChartFilterText : styles.ChartFilterText}>1Y</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <Text style={styles.InfoTitle}>Learn more about {cryptoInfo.name}</Text>
                    
                    {
                        cryptoInfo.description ?
                        <View style={styles.InfoContainer}>
                            {handleFormatDescriptionLinks(cryptoInfo.description)}
                        </View>
                        :
                        null
                    }
                    
                    <View style={styles.LinksContainer}>
                        <TouchableOpacity style={styles.LinkButton} onPress={() => {Linking.openURL(cryptoInfo.website)}} >
                            <Image style={styles.LinkImage} source={{uri: cryptoInfo.image}} />
                            
                            <View style={styles.LinkTexts}>
                                <Text style={styles.LinkText}>Website</Text>
                                {handleWebLinkFormater(cryptoInfo.website)}
                            </View>
                        </TouchableOpacity>
                        
                        <TouchableOpacity  style={styles.LinkButton} onPress={handleOpenExplorer} >
                            <Image style={styles.LinkImage} source={{uri: "https://exchange.blockchain.com/api/assets/images/logo.png"}} />
                            
                            <View style={styles.LinkTexts}>
                                <Text style={styles.LinkText}>Explorer</Text>
                                <Text style={styles.LinkSubText}>blockchain.com</Text>
                            </View>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={styles.LinkButton} onPress={handleOpenBinance} >
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