// Dependencies
import React from "react";
import {View, Text, Image} from "react-native";
// Files
import styles from "./CryptoCardStyles";


function CryptoCard({id, name, symbol, image, price_usd, price_percentage_24h})
{
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
    
    function handleFormatPrice()
    {
        const formatedPrice = new Intl.NumberFormat("en-US", {currency: "USD", minimumFractionDigits: 2}).format(price_usd);
        
        return formatedPrice;
    };
    
    return (
        <View style={styles.Container}>
            <Image style={styles.Icons} source={{uri: image}}/>
            
            <View style={styles.NamesContainer}>
                <Text style={styles.Symbol}>{symbol}</Text>
                <Text style={styles.Name}>{name}</Text>
            </View>
            
            <View style={styles.PricesContainer}>
                <Text style={styles.PriceUSD}>{handleFormatPrice()} USD</Text>
                {handlePercentage(price_percentage_24h)}
            </View>
        </View>
    );
};


export default CryptoCard;