// Dependencies
import {StyleSheet} from "react-native";


const styles = StyleSheet.create({
    Container:
    {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        height: 70,
        marginBottom: 10,
    },
    Section:
    {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        padding: 8,
    },
    ActiveSection:
    {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        padding: 8,
        borderBottomColor: "#23344e",
        borderBottomWidth: 2,
    },
    Text:
    {
        color: "#919bbf",
    },
});


export default styles;