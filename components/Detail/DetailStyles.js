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
        // backgroundColor: "#171b26",
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
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        // height: "100%",
    },
    RateContainer:
    {
        display: "flex",
        justifyContent: "space-between",
        // alignItems: "center",
        width: "90%",
        height: 420,
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
        color: "rgba(255, 255, 255, 0.5)",
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
        width: "100%",
        height: "60%",
        backgroundColor: "#1e2633",
        borderRadius: 15,
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
        color: "rgba(218, 222, 234, 0.7)",
        fontSize: 15,
    },
    ActiveChartFilterText:
    {
        color: "white",
        fontSize: 16,
    },
    PositivePercentage:
    {
        fontSize: 22,
        color: "#51a239",
    },
    NegativePercentage:
    {
        fontSize: 22,
        color: "#d15150",
    },
    InfoTitle:
    {
        fontSize: 21,
        textAlign: "center",
        color: "#aab6e0",
        marginTop: 40,
        marginBottom: 30,
    },
    InfoContainer:
    {
        width: "90%",
        marginBottom: 50,
        padding: 15,
        backgroundColor: "#1e2633",
        borderRadius: 15,
    },
    DescriptionText:
    {
        textAlign: "left",
        color: "rgba(255, 255, 255, 0.6)",
        fontSize: 15,
    },
    LinksContainer:
    {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        width: "100%",
        // height: 60,
        backgroundColor: "#1e2633",
        borderRadius: 30,
    },
    LinkButton:
    {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        height: 80,
        padding: 25,
    },
    LinkImage:
    {
        width: 50,
        height: 50,
    },
    LinkTexts:
    {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginLeft: 20,
    },
    LinkText:
    {
        color: "#fff",
        fontSize: 16,
    },
    LinkSubText:
    {
        color: "rgba(250, 250, 250, 0.5)",
    },
});


export default styles;