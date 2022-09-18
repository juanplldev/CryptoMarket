// Dependencies
import React, {useState, useEffect} from "react";
import {View, Text, ScrollView, BackHandler, TouchableOpacity, Linking, RefreshControl} from "react-native";
import {Link, useParams, useNavigate} from "react-router-native";
import {useDispatch, useSelector} from "react-redux";
import Icon from "react-native-vector-icons/AntDesign";
// Files
import {getCryptoById, cleanDetailState, addFavorite, deleteFavorite, getFavorites, getMarketChart, cleanChartState} from "../../redux/actions/actions";
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
    const [chartFilter, setChartFilter] = useState(14);
    
    useEffect(() => {
        dispatch(getCryptoById(id));
        dispatch(getFavorites());
    }, []);
    
    useEffect(() => {
        dispatch(cleanChartState());
        dispatch(getMarketChart(id, chartFilter));
    }, [chartFilter]);
    
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
        await dispatch(getCryptoById(id));
        await dispatch(getMarketChart(id, chartFilter));
        await setRefresh(false);
    };
    
    // function handleUppercase(string)
    // {
    //     return string && string.toUpperCase();
    // };
    
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
    
    
    if(Object.keys(cryptoDetail).length)
    {
        return (
            <View style={styles.Container}>
                <View style={styles.Header}>
                    <TouchableOpacity onPress={handleNavigate} style={styles.IconContainer}>
                        <Icon style={styles.Icon} name="left" size={30}/>
                    </TouchableOpacity>
                    
                    <View style={styles.NameContainer}>
                        <Text style={styles.Symbol}>{cryptoDetail.symbol.toUpperCase()}</Text>
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