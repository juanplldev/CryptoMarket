// Dependencies
import axios from "axios";
// Files
import {API_URL} from "@env";


export function getCryptos()
{
    async function getPriceArs(id)
    {
        const allData = (await axios(`${API_URL}/${id}`)).data;
        const data = allData.market_data.current_price.ars;
        return data;
    };
    
    return async function(dispatch)
    {
        const allData = (await axios(`${API_URL}/markets?vs_currency=usd&per_page=50`)).data;
        const data = allData.map(e => {
            // const price_ars = getPriceArs(e.id);
            // console.log(price_ars);
            
            return {
                id: e.id,
                name: e.name,
                symbol: e.symbol,
                image: e.image,
                price_usd: e.current_price,
                price_ars: e.current_price,
                price_percentage_24h: e.price_change_percentage_24h,
            };
        });
        // console.log("get cryptos");
        return dispatch({type: "GET_CRYPTOS", payload: data});
    };
};

export function getCryptoById(id)
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
            price_usd: allData.market_data.current_price.usd,
            price_ars: allData.market_data.current_price.ars,
            price_percentage_24h: allData.market_data.price_change_percentage_24h,
            hashing_algorithm: allData.hashing_algorithm,
            description: allData.description.en,
            web: allData.links.homepage[0],
        };
        // console.log(data.price_ars);
        return dispatch({type: "GET_CRYPTO_BY_ID", payload: data});
    };
};

export function getCryptoByName(name)
{
    return async function(dispatch)
    {
        const data = (await axios(`${API_URL}/${name}`)).data;
        return dispatch({type: "GET_CRYPTO_BY_NAME", payload: data});
    };
};

export function cleanDetailState()
{
    return async function(dispatch)
    {
        return await dispatch({type: "CLEAN_DETAIL_STATE", payload: {}});
    };
}