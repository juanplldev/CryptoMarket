// Dependencies
import {StyleSheet} from "react-native";


const styles = StyleSheet.create({
    Container:
    {
        display: "flex",
        // justifyContent: "space-between",
        // alignItems: "center",
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
        width: "100%",
        height: "100%",
    },
    RateContainer:
    {
        display: "flex",
        justifyContent: "space-between",
        // alignItems: "center",
        width: "90%",
        height: 450,
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
        width: "100%",
        height: 130,
        marginTop: 30,
        // marginBottom: 30,
        paddingLeft: 30,
        paddingRight: 30,
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
    BottomPrices:
    {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
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
    ChartContainer:
    {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "60%",
        // backgroundColor: "gray",
        // opacity: 0.2,
    },
    ChartFiltersContainer:
    {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "90%",
        height: 50,
        marginTop: 30,
        backgroundColor: "#1e2633",
        borderRadius: 10,
    },
    ChartFilter:
    {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "20%",
        height: "100%",
    },
    ActiveChartFilter:
    {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "20%",
        height: "100%",
        backgroundColor: "rgba(170, 182, 224, 0.6)",
        borderRadius: 10,
    },
    ChartFilterText:
    {
        color: "#dadeea",
        fontSize: 15,
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