import React from "react";
import { View, Image, StyleSheet, TextInput } from "react-native"
import StyledText from "../Components/StyledText";
import styles from "../styles"
import { Button } from "react-native-paper";

export default props => {
    return (
        <View style={styles.container_login}>
            <Image source={require('../assets/logo-horizontal.png')} style={styles.image} />
            <StyledText size="large" weight="bold">Faça login na sua conta</StyledText>
            <StyledText/>
            <StyledText size="normal" weight="medium">Digite seu e-mail e senha para logar</StyledText>
            <StyledText/>
            <TextInput
                style={styles.formInput}
                placeholder="Informe o email"
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
            />
            <TextInput
                style={styles.formInput}
                placeholder="Senha"
                autoCapitalize="none"
                secureTextEntry
            />
            <Button
                mode="contained"
                style={styles.button}
                labelStyle={{ fontWeight: 'bold', color: '#fff' }}
            >
                Login
            </Button>
            
        </View>
    )
}
