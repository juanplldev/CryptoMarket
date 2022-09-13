// Dependencies
import {StyleSheet} from "react-native";


const styles = StyleSheet.create({
    Container:
    {
        width: "100%",
        height: "100%",
        paddingBottom: 140, // Temporal
    },
    DeleteButtonContainer:
    {
        display:"flex",
        alignItems: "flex-end",
        justifyContent: "center",
        marginBottom: 10,
    },
    DeleteButton:
    {
        padding: 5,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: "#23344e",
    },
    ButtonText:
    {
        color: "#fff",
    },
    List:
    {
        
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
        height: "70%",
    },
    Text:
    {
        width: "80%",
        color: "#fff",
        textAlign: "center",
    },
});


export default styles;