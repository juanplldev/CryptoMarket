// Dependencies
import {StyleSheet} from "react-native";


const styles = StyleSheet.create({
    Background:
    {
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "#171b26",
    },
    Container:
    {
        display: "flex",
        // justifyContent: "center",
        alignItems: "center",
        // width: "90%",
        // height: "90%",
    },
    Header:
    {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: 80,
        padding: 15,
        backgroundColor: "#1e2633",
        borderBottomColor: "rgba(170, 182, 224, 0.2)",
        borderBottomWidth: 1,
    },
    IconContainer:
    {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    Icon:
    {
        color: "#aab6e0",
    },
    TitleContainer:
    {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    Title:
    {
        color: "#dadeea",
        fontSize: 24,
    },
    NFTContainer:
    {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        borderRadius: 100,
        overflow: "hidden",
    },
    NFT:
    {
        width: 150,
        height: 150,
    },
    TextContainer:
    {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        height: 350,
        marginTop: 10,
        borderRadius: 12,
    },
    Text:
    {
        textAlign: "center",
        color: "rgba(255, 255, 255, 0.8)",
        fontSize: 17,
    },
    TechTitle:
    {
        fontSize: 24,
        textAlign: "center",
        color: "#aab6e0",
        marginTop: 20,
        marginBottom: 15,
    },
    TechContainer:
    {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        height: 360,
        width: "90%",
        // padding: 10,
        backgroundColor: "#1e2633",
        borderRadius: 12,
    },
    TechRow:
    {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    TechCenter:
    {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    SingleTech:
    {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        width: 160,
        height: 100,
        // backgroundColor: "red",
    },
    TechImage:
    {
        width: 60,
        height: 60,
    },
    TechName:
    {
        fontSize: 18,
        color: "rgba(255, 255, 255, 0.6)",
    },
    ContactTitle:
    {
        fontSize: 24,
        textAlign: "center",
        color: "#aab6e0",
        marginTop: 40,
        marginBottom: 15,
    },
    ContactContainer:
    {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        height: 150,
        width: "90%",
        marginBottom: 20,
        backgroundColor: "#1e2633",
        borderRadius: 12,
    },
    CopyrightContainer:
    {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 95,
        width: 168,
    },
    CopyrightIcon:
    {
        color: "rgba(255, 255, 255, 0.5)",
    },
    CopyrightText:
    {
        fontSize: 12,
        color: "rgba(255, 255, 255, 0.5)",
    },
});


export default styles;