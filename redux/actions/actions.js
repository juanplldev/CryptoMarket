// Dependencies
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
// Files
import {API_URL} from "@env";


export function getCryptos()
{
    return async function(dispatch)
    {
        const allData = (await axios(`${API_URL}/markets?vs_currency=usd`)).data;
        const data = allData.map(e => {
            return {
                id: e.id,
                name: e.name,
                symbol: e.symbol,
                image: e.image,
                price_usd: e.current_price,
                price_percentage_24h: e.price_change_percentage_24h,
            };
        });
        
        console.log("get cryptos");
        
        return dispatch({type: "GET_CRYPTOS", payload: data});
    };
};

export function getCryptoInfoById(id)
{
    return async function(dispatch)
    {
        const allData = (await axios(`${API_URL}/${id}`)).data;
        const data =
        {
            id: allData.id,
            name: allData.name,
            symbol: allData.symbol,
            image: allData.image.large,
            hashing_algorithm: allData.hashing_algorithm,
            description: allData.description.en,
            website: allData.links.homepage[0],
            explorer: allData.links.blockchain_site[0],
        };
        
        return dispatch({type: "GET_CRYPTO_INFO_BY_ID", payload: data});
    };
};

export function getCryptoPricesById(id)
{
    return async function(dispatch)
    {
        const allData = (await axios(`${API_URL}/${id}`)).data;
        const data =
        {
            price_usd: allData.market_data.current_price.usd,
            price_ars: allData.market_data.current_price.ars,
            price_usd_24h: allData.market_data.price_change_24h,
            price_ars_24h: allData.market_data.price_change_24h_in_currency.ars,
            price_percentage_24h: allData.market_data.price_change_percentage_24h,
        };
        
        // console.log("Actions price:", data.price_usd);
        
        return dispatch({type: "GET_CRYPTO_PRICES_BY_ID", payload: data});
    };
};

export function getCryptoByName(searchedCrypto)
{
    return async function(dispatch)
    {
        return dispatch({type: "GET_CRYPTO_BY_NAME", payload: searchedCrypto});
    };
};

export function getFavorites()
{
    return async function(dispatch)
    {
        const favorites = await AsyncStorage.getItem("Favorites");
        const data = JSON.parse(favorites) || [];
        
        console.log("get favorites cryptos");
        
        return dispatch({type: "GET_FAVORITES", payload: data});
    };
};

export function getFavoriteCryptoByName(searchedCrypto)
{
    return async function(dispatch)
    {
        return dispatch({type: "GET_FAVORITE_CRYPTO_BY_NAME", payload: searchedCrypto});
    };
};

export function getMarketChart(id, days=14)
{
    return async function(dispatch)
    {
        const allData = (await axios(`${API_URL}/${id}/market_chart?vs_currency=usd&days=${days}`)).data;
        const data = allData.prices;
        // console.log(data, "action");
        return dispatch({type: "GET_MARKET_CHART", payload: data});
    };
};

export function addFavorite(crypto)
{
    return async function(dispatch)
    {
        const favoritesString = await AsyncStorage.getItem("Favorites");
        const favorites = JSON.parse(favoritesString) || [];
        
        if(!favorites.includes(crypto))
        {
            await favorites.push(crypto);
            
            const data = JSON.stringify(favorites);
            await AsyncStorage.setItem("Favorites", data);
            
            return dispatch({type: "ADD_FAVORITE"});
        };
    };
};

export function deleteFavorite(crypto)
{
    return async function(dispatch)
    {
        const favoritesString = await AsyncStorage.getItem("Favorites");
        const favorites = JSON.parse(favoritesString) || [];
        
        if(favorites.includes(crypto))
        {
            const index = favorites.indexOf(crypto);
            await favorites.splice(index, 1);
            
            const data = JSON.stringify(favorites);
            await AsyncStorage.setItem("Favorites", data);
            
            return dispatch({type: "DELETE_FAVORITE"});
        };
    };
};

export function cleanFavorites()
{
    return async function(dispatch)
    {
        await AsyncStorage.clear();
        
        return dispatch({type: "CLEAN_FAVORITES", payload: []});
    };
};

export function cleanDetailState()
{
    return async function(dispatch)
    {
        return dispatch({type: "CLEAN_DETAIL_STATE", payload: {}});
    };
};

export function cleanChartState()
{
    return async function(dispatch)
    {
        return dispatch({type: "CLEAN_CHART_STATE", payload: []});
    };
};