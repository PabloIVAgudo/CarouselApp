import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E1ABD5',
        width: 240,
        height: 350,
        margin: 5,
        borderRadius: 10,        
    },
    image: {
        width: 225,
        height: 325,
        borderRadius: 10,
    },
    title: {
        color: 'black',
        paddingLeft: 25,
        paddingRight: 25,
        paddingBottom: 2,
        paddingTop: 2,
        borderRadius: 10,
        borderColor: '#3B5DC8',
        borderStyle: 'solid',
        borderWidth: 3,
        fontWeight: 'bold',
    },
});

export default styles;