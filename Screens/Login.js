import React from "react";
import { View, Image, StyleSheet } from "react-native"
import StyledText from "../Components/StyledText";

export default props => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/logo-horizontal.png')} style={styles.image} />
            <StyledText size="large" weight="bold">Oii login</StyledText>

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
      width: 250, 
      height: 250,
      resizeMode: 'contain',
    },
});