// Dependencies
import {StyleSheet} from "react-native";


const styles = StyleSheet.create({
    Container:
    {
        display: "flex",
        flexDirection: "row",
        // justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
        // paddingTop: 10,
        // paddingBottom: 10,
        backgroundColor: "#1e2633",
        marginBottom: 10,
        borderRadius: 12,
    },
    Icons:
    {
        width: 45,
        height: 45,
        // backgroundColor: "red",
    },
    NamesContainer:
    {
        left: 20,
    },
    Symbol:
    {
        color: "#fff",
        fontSize: 18,
    },
    Name:
    {
        color: "#919bbf",
        fontSize: 15,
    },
    PricesContainer:
    {
        position: "absolute",
        right: 20,
        display: "flex",
        alignItems: "flex-end",
    },
    PriceUSD:
    {
        color: "#fff",
        fontSize: 18,
    },
    PriceARS:
    {
        color: "#919bbf",
        fontSize: 15,
    },
    PositivePercentage:
    {
        position: "absolute",
        top: 15,
        left: 140,
        color: "#51a239",
    },
    NegativePercentage:
    {
        position: "absolute",
        top: 15,
        left: 140,
        color: "#d15150",
    },
});


export default styles;