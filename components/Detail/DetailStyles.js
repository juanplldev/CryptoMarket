// Dependencies
import {StyleSheet} from "react-native";


const styles = StyleSheet.create({
    Container:
    {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
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
    NameContainer:
    {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    Symbol:
    {
        fontSize: 20,
        color: "#dadeea",
    },
    Name:
    {
        color: "#dadeea",
    },
    ScrollView:
    {
        display: "flex",
        // justifyContent: "center",
        alignItems: "center",
    },
    RateContainer:
    {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "90%",
        height: 400,
        marginTop: 30,
        backgroundColor: "#1e2633",
        borderRadius: 15,
    },
    PriceContainer:
    {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        width: "90%",
        height: 80,
        marginTop: 40,
    },
    TopPrices:
    {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
    },
    PriceUsd:
    {
        fontSize: 28,
        color: "#fff",
    },
    PriceArs:
    {
        fontSize: 22,
        color: "#fff",
    },
    PriceChangeUsd:
    {
        fontSize: 16,
        color: "gray",
    },
    PriceChangeArs:
    {
        fontSize: 12,
        color: "gray",
    },
    PositivePercentage:
    {
        fontSize: 20,
        color: "#51a239",
    },
    NegativePercentage:
    {
        fontSize: 20,
        color: "#d15150",
    },
    InfoContainer:
    {
        width: "90%",
        marginTop: 50,
    },
    InfoTitle:
    {
        fontSize: 20,
        textAlign: "center",
        marginBottom: 15,
        color: "#aab6e0",
    },
});


export default styles;