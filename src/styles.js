import React from "react";
import { StyleSheet } from "react-native"

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FDE6DB'
    },
    container_login: {
      flex: 1,
      backgroundColor: '#FDE6DB'
    },
    image: {
      width: 250, 
      height: 250,
      resizeMode: 'contain',
    },
    textLogin: {
        color: '#1B5400'  
    },
    formInput: {
        borderColor: "#1B5400",
        borderWidth: 2,
        borderRadius: 10,
        fontSize: 14,
        width: 300,
        padding: 10,
        margin: 10
    },
    button: {
        backgroundColor: "#FB8929",
        width: 300,
        padding: 10,
        margin: 10,
        borderRadius: 10,
        alignItems: 'center'
    }
});