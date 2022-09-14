// Dependencies
import {StyleSheet} from "react-native";


const styles = StyleSheet.create({
    Container:
    {
        display: "flex",
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
        marginBottom: 30,
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
    PriceContainer:
    {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "90%",
        height: 400,
        backgroundColor: "gray"
    },
    Price:
    {
        fontSize: 24,
    },
    PricePercentage:
    {
        fontSize: 15,
        marginLeft: 30,
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
    },
});


export default styles;