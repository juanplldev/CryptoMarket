const initialSate =
{
    cryptos: [],
    allCryptos: [],
    cryptoDetail: {},
    favoritesCryptos: [],
    allFavoritesCryptos: [],
    chartValues: [],
};


function rootReducer(state = initialSate, {type, payload})
{
    switch(type)
    {
        case "GET_CRYPTOS":
            return {...state, cryptos: payload, allCryptos: payload};
        
        case "GET_CRYPTO_BY_ID":
            return {...state, cryptoDetail: payload};
        
        case "GET_CRYPTO_BY_NAME":
            return {...state, cryptos: payload};
        
        case "GET_FAVORITES":
            const newPayload = [...state.allCryptos.filter(e => payload.includes(e.id))];
            
            return {...state, favoritesCryptos: newPayload, allFavoritesCryptos: newPayload};
        
        case "GET_FAVORITE_CRYPTO_BY_NAME":
            return {...state, favoritesCryptos: payload};
        
        case "GET_MARKET_CHART":
            const transformedPayload = [];
            
            payload.map(e => {
                const newObject =
                {
                    x: e[0],
                    y: e[1],
                };
                transformedPayload.push(newObject);
            });
            
            return {...state, chartValues: transformedPayload};
        
        case "ADD_FAVORITE":
            return {...state};
        
        case "DELETE_FAVORITE":
            return {...state};
        
        case "CLEAN_FAVORITES":
            return {...state, favoritesCryptos: payload};
        
        case "CLEAN_DETAIL_STATE":
            return {...state, cryptoDetail: payload[0], chartValues: payload[1]};
        
        default:
            return {...state};
    };
};


export default rootReducer;