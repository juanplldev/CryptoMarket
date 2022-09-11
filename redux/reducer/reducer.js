const initialSate =
{
    cryptos: [],
    allCryptos: [],
    cryptoDetail: {},
    favoriteCryptos: [],
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
        
        case "CLEAN_DETAIL_STATE":
            return {...state, cryptoDetail: payload};
        
        default:
            return {...state};
    };
};


export default rootReducer;