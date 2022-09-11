// Dependencies
import {StyleSheet} from "react-native";


const styles = StyleSheet.create({
    Container:
    {
        display: "flex",
        // justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        // margin: 30,
        // backgroundColor: "#141414",
    },
    Header:
    {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // marginTop: 40,
    },
    NameContainer:
    {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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