// Dependencies
import React from "react";
import {View, Text, Image} from "react-native";
// Files
import styles from "./CryptosStyles";


function Cryptos({id, name, symbol, image, price_usd, price_ars, price_percentage_24h})
{
    function handlePercentage(percentage)
    {
        const slicedPositivePercentage = percentage.toString().slice(0, 4);
        const slicedNegativePercentage = percentage.toString().slice(0, 5);
        
        if(Math.sign(percentage) === 1)
        {
            return <Text style={styles.PositivePercentage}>+{slicedPositivePercentage}%</Text>;
        }
        else
        {
            return <Text style={styles.NegativePercentage}>-{slicedNegativePercentage}%</Text>;
        };
    };
    
    return (
        <View style={styles.Container}>
            <Image style={styles.Icons} source={{uri: image}}/>
            
            <View style={styles.NamesContainer}>
                <Text style={styles.Symbol}>{symbol.toUpperCase()}</Text>
                <Text style={styles.Name}>{name}</Text>
            </View>
            
            {handlePercentage(price_percentage_24h)}
            
            <View style={styles.PricesContainer}>
                <Text style={styles.PriceUSD}>{price_usd} USD</Text>
                <Text style={styles.PriceARS}>{price_ars} ARS</Text>
            </View>
        </View>
    );
};


export default Cryptos;