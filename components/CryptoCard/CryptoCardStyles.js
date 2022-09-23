// Dependencies
import {StyleSheet} from "react-native";


const styles = StyleSheet.create({
    Container:
    {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: "#1e2633",
        borderRadius: 12,
    },
    Icons:
    {
        width: 45,
        height: 45,
    },
    NamesContainer:
    {
        left: 20,
    },
    Symbol:
    {
        color: "#fff",
        fontSize: 18,
        textTransform: "uppercase",
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
        color: "#51a239",
        fontSize: 15,
    },
    NegativePercentage:
    {
        color: "#d15150",
        fontSize: 15,
    },
});


export default styles;