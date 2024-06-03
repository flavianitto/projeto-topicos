import { React, useState} from "react";
import { View, Image, StyleSheet, TextInput, Pressable } from "react-native"
import StyledText from "../Components/StyledText";
import styles from "../src/styles"
import Home from "./Home";

import { Button } from "react-native-paper";
import { auth } from "../src/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";

export default props => {
    const [userMail, setUserMail] = useState('')
    const [userPass, setUserPass] = useState('')

    const [home, mostrarHome] = useState(false)
    const [login, mostrarLogin] = useState(true)

    function userLogin() {
        signInWithEmailAndPassword( auth, userMail, userPass)
        .then((userCredential) => {
            const user = userCredential.user
            alert ('Login efetivado! \nRedirecionando...') 
            mostrarHome(true)
            mostrarLogin(false)
        })
        .catch((error) => {
            const errorMessage = error.message
            alert(errorMessage)
        })
    }
    return (
        <View style={styles.container_login}>
            {login && <View>
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
                    value={userMail}
                    onChangeText={setUserMail}
                />
                <TextInput
                    style={styles.formInput}
                    placeholder="Senha"
                    autoCapitalize="none"
                    secureTextEntry
                    value={userPass}
                    onChangeText={setUserPass}
                />
                <Button
                    mode="contained"
                    style={styles.button}
                    labelStyle={{ fontWeight: 'bold', color: '#fff' }}
                    onPress={userLogin}
                >
                    Login
                </Button>
                <View style={styles.container}>
                    <Pressable>
                        <StyledText size="normal" weight="bold" style={styles.textLogin}>Esqueci a senha</StyledText>
                    </Pressable>
                    <StyledText/>
                    <Pressable>
                        <StyledText size="normal" weight="bold" style={styles.textLogin}>Novo usuário</StyledText>
                    </Pressable>
                </View>
            </View>}
            <View>
                {home && <Home/>}
            </View>
        </View>
    )
}
