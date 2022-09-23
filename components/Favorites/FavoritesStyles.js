// Dependencies
import {StyleSheet} from "react-native";


const styles = StyleSheet.create({
    Container:
    {
        width: "100%",
        height: "100%",
        paddingBottom: 140, // Temporal
        backgroundColor: "#171b26",
    },
    DeleteButtonContainer:
    {
        display:"flex",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        height: 45,
        marginLeft: 15,
        marginRight: 15,
    },
    DeleteButton:
    {
        width: "100%",
        padding: 5,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: "#23344e",
    },
    ButtonText:
    {
        color: "#fff",
        textAlign: "center",
    },
    List:
    {
        backgroundColor: "#171b26",
    },
    Button:
    {
        marginBottom: 10,
        borderRadius: 12,
    },
    TextContainer:
    {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80%",
    },
    Text:
    {
        width: "80%",
        color: "#fff",
        textAlign: "center",
        fontSize: 15,
    },
});


export default styles;