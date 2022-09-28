// Dependencies
import React from "react";
import {View, Text, TouchableOpacity, Image, ScrollView} from "react-native";
import {useNavigation} from "@react-navigation/native";
import Icon from "react-native-vector-icons/AntDesign";
import * as Linking from "expo-linking";
// Files
import NFT from "../../assets/NFT.gif";
import JavaScript from "../../assets/JavaScript.png";
import ReactNative from "../../assets/ReactNative.png";
import Expo from "../../assets/Expo.png";
import ReactNavigation from "../../assets/ReactNavigation.png";
import Redux from "../../assets/Redux.png";
import GitHub from "../../assets/GitHub.png";
import LinkedIn from "../../assets/LinkedIn.png";
import Gmail from "../../assets/Gmail.png";
import styles from "./AboutStyles";


function About()
{
    const navigation = useNavigation();
    
    function handleNavigate()
    {
        navigation.navigate("Home");
    };
    
    function handleOpenLink(tech)
    {
        switch(tech)
        {
            case "API":
                return Linking.openURL("https://www.coingecko.com");
            
            case "JavaScript":
                return Linking.openURL("https://www.javascript.com");
            
            case "ReactNative":
                return Linking.openURL("https://reactnative.dev");
            
            case "Expo":
                return Linking.openURL("https://expo.dev");
            
            case "ReactNavigation":
                return Linking.openURL("https://reactnavigation.org");
            
            case "Redux":
                return Linking.openURL("https://redux.js.org");
            
            case "GitHub":
                return Linking.openURL("https://github.com/JuanPablo-Llorente");
            
            case "LinkedIn":
                return Linking.openURL("https://www.linkedin.com/in/juanpll");
            
            case "Gmail":
                return Linking.openURL("mailto:juanpablollorentej@gmail.com");
            
            default:
                return false;
        };
    };
    
    return (
        <View>
            <View style={styles.Header}>
                <TouchableOpacity onPress={handleNavigate} style={styles.IconContainer}>
                    <Icon style={styles.Icon} name="left" size={30}/>
                </TouchableOpacity>
                
                <View style={styles.TitleContainer}>
                    <Text style={styles.Title}>About</Text>
                </View>
                
                <TouchableOpacity onPress={handleNavigate} style={styles.IconContainer}>
                    <Icon style={styles.Icon} name="close" size={30}/>
                </TouchableOpacity>
            </View>
            
            <ScrollView
                contentContainerStyle={styles.Container}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.NFTContainer}>
                    <Image style={styles.NFT} source={NFT}/>
                </View>
                
                <View style={styles.TextContainer}>
                    <Text style={styles.Text} selectable>
                        Hey! You found the easter egg!
                        {"\n"}
                        Bah, "easter egg", you know.
                        {"\n"}
                        {"\n"}
                        However, I'm Juan, the developer behind this app. Let me tell you about this project.
                        {"\n"}
                        {"\n"}
                        The idea was make a functional app that can also be useful.
                        {"\n"}
                        So, Crypto Market was born to introduce me and practice about mobile apps, in this case, with React Native and Expo.
                        {"\n"}
                        {"\n"}
                        All data is provided from the <Text style={{fontWeight: "bold"}} onPress={() => handleOpenLink("API")}>CoinGecko API</Text> on their free plan.
                    </Text>
                </View>
                
                <Text style={styles.TechTitle}>Main technologies used</Text>
                
                <View style={styles.TechContainer}>
                    <View style={styles.TechRow}>
                        <TouchableOpacity onPress={() => handleOpenLink("JavaScript")} style={styles.SingleTech}>
                            <Image style={styles.TechImage} source={JavaScript} />
                            <Text style={styles.TechName}>JavaScript</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={() => handleOpenLink("ReactNative")} style={styles.SingleTech}>
                            <Image style={styles.TechImage} source={ReactNative} />
                            <Text style={styles.TechName}>React Native</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.TechCenter}>
                        <TouchableOpacity onPress={() => handleOpenLink("Expo")} style={styles.SingleTech}>
                            <Image style={styles.TechImage} source={Expo} />
                            <Text style={styles.TechName}>Expo</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.TechRow}>
                        <TouchableOpacity onPress={() => handleOpenLink("ReactNavigation")} style={styles.SingleTech}>
                            <Image style={styles.TechImage} source={ReactNavigation} />
                            <Text style={styles.TechName}>React Navigation</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={() => handleOpenLink("Redux")} style={styles.SingleTech}>
                            <Image style={styles.TechImage} source={Redux} />
                            <Text style={styles.TechName}>Redux</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
                <Text style={styles.ContactTitle}>Contact</Text>
                
                <View style={styles.ContactContainer}>
                    <TouchableOpacity onPress={() => handleOpenLink("GitHub")} style={styles.SingleTech}>
                        <Image style={styles.TechImage} source={GitHub} />
                        <Text style={styles.TechName}>GitHub</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => handleOpenLink("Gmail")} style={styles.SingleTech}>
                        <Image style={styles.TechImage} source={Gmail} />
                        <Text style={styles.TechName}>Gmail</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => handleOpenLink("LinkedIn")} style={styles.SingleTech}>
                        <Image style={styles.TechImage} source={LinkedIn} />
                        <Text style={styles.TechName}>LinkedIn</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.CopyrightContainer}>
                    <Icon style={styles.CopyrightIcon} name="copyright" size={15}/>
                    <Text style={styles.CopyrightText}>2022. All rights reserved.</Text>
                </View>
            </ScrollView>
        </View>
    );
};


export default About;