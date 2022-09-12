// Dependencies
import {StyleSheet} from "react-native";


const styles = StyleSheet.create({
    Container:
    {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 70,
        marginBottom: 10,
    },
    Button:
    {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // minWidth: 80,
        // height: 50,
        padding: 10,
        backgroundColor: "#1e2633",
        borderColor: "#23344e",
        borderWidth: 2,
        borderRadius: 8,
    },
    ButtonText:
    {
        color: "#919bbf",
    },
});


export default styles;