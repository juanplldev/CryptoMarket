// Dependencies
import React, {useEffect} from "react";
import {View, Text, Button, ScrollView, BackHandler, TouchableOpacity, Linking} from "react-native";
import {Link, useParams, useNavigate} from "react-router-native";
import {useDispatch, useSelector} from "react-redux";
import Icon from "react-native-vector-icons/AntDesign";
// Files
import {getCryptoById, cleanDetailState, addFavorite, deleteFavorite, getFavorites} from "../../redux/actions/actions";
import Loader from "../Loader/Loader";
import styles from "./DetailStyles";


function Detail()
{
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cryptoDetail = useSelector(state => state.cryptoDetail);
    const allFavoritesCryptos = useSelector(state => state.allFavoritesCryptos);
    const isFavorite = allFavoritesCryptos.filter(e => e.id === cryptoDetail.id).length ? true : false;
    
    useEffect(() => {
        dispatch(getCryptoById(id));
        dispatch(cleanDetailState());
        dispatch(getFavorites());
    }, [dispatch, id]);
    
    function handleBackAction()
    {
        const action = BackHandler.exitApp();
        BackHandler.addEventListener("hardwareBackPress", action);
    };
    
    function handleNavigate()
    {
        navigate("/");
    };
    
    function handleUppercase(string)
    {
        return string && string.toUpperCase();
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
    
    if(Object.keys(cryptoDetail).length)
    {
        return (
            <ScrollView>
                <View style={styles.Container}>
                    <View style={styles.Header}>
                        <TouchableOpacity onPress={handleNavigate} style={styles.IconContainer}>
                            <Icon style={styles.Icon} name="left" size={30}/>
                        </TouchableOpacity>
                        
                        <View style={styles.NameContainer}>
                            <Text style={styles.Symbol}>{handleUppercase(cryptoDetail.symbol)}</Text>
                            <Text style={styles.Name}>{cryptoDetail.name}</Text>
                        </View>
                        
                        {
                            isFavorite ?
                            <TouchableOpacity onPress={() => handleDeleteFavorite(cryptoDetail.id)} style={styles.IconContainer}>
                                <Icon style={styles.Icon} name="heart" size={30}/>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={() => handleAddFavorite(cryptoDetail.id)} style={styles.IconContainer}>
                                <Icon style={styles.Icon} name="hearto" size={30}/>
                            </TouchableOpacity>
                        }
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