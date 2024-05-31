import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native"
import Login from "./Login";

export default props => {
    const [inicio, mostrarInicio] = React.useState(true)
    const [login, mostrarLogin] = React.useState(false)

    const handlePress = () => {
        mostrarInicio(false)
        mostrarLogin(true)
    }

    return(
        <View style={styles.container}>
            {inicio && <TouchableOpacity onPress={handlePress}>
                <Image source={require('../assets/logo.png')} style={styles.image} />
            </TouchableOpacity>}
            {login && <Login/>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FDE6DB'
    },
    image: {
      width: 300, 
      height: 300,
      resizeMode: 'contain',
    },
});