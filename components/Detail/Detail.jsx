// Dependencies
import React, {useEffect} from "react";
import {View, Text, Button, ScrollView} from "react-native";
import {Link, useParams, useNavigate} from "react-router-native";
import {useDispatch, useSelector} from "react-redux";
// Files
import {getCryptoById, cleanDetailState} from "../../redux/actions/actions";
import Loader from "../Loader/Loader";
import styles from "./DetailStyles";


function Detail()
{
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cryptoDetail = useSelector(state => state.cryptoDetail);
    
    useEffect(() => {
        dispatch(getCryptoById(id));
        dispatch(cleanDetailState());
    }, [dispatch, id]);
    
    function handleNavigate()
    {
        navigate("/");
    };
    
    function handleUppercase(string)
    {
        return string && string.toUpperCase();
    }
    
    if(Object.keys(cryptoDetail).length)
    {
        return (
            <ScrollView>
                <View style={styles.Container}>
                    <View style={styles.Header}>
                        <Button
                            title="Go Back"
                            onPress={handleNavigate}
                        />
                        <View style={styles.NameContainer}>
                            <Text>{handleUppercase(cryptoDetail.symbol)}</Text>
                            <Text>{cryptoDetail.name}</Text>
                        </View>
                        <Button
                            title="Go Back"
                            onPress={handleNavigate}
                        />
                    </View>
                    
                    <View style={styles.PriceContainer}>
                        <Text style={styles.Price}>{cryptoDetail.price_usd} USD</Text>
                        <Text style={styles.PricePercentage}>{cryptoDetail.price_percentage_24h}%</Text>
                    </View>
                    
                    <View style={styles.InfoContainer}>
                        <Text style={styles.InfoTitle}>Learn more about {cryptoDetail.name}</Text>
                        <Text>{cryptoDetail.description}</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
    else
    {
        return <Loader/>;
    };
};


export default Detail;