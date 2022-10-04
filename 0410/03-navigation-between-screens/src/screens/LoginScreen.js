import React from 'react';
import { Text, StyleSheet, View, Button, TextInput } from 'react-native'; 


const LoginScreen = (props) => {
    const email = <Text>Email</Text>
    const password = <Text>Password</Text>
    console.log(props)
    const navigation = props.navigation

    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>{email}</Text>
            <TextInput style={styles.input} placeholder="Insira seu email" />
            <Text style={styles.textStyle}>{password}</Text>
            <TextInput style={styles.input} placeholder="Insira sua senha" />
            <Button
                onPress={() => {
                    console.log('button pressed')
                    navigation.navigate('Home')
                }}
                title="Ir para Home" 
                color= "#FFB6B1" 
                 />
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        fontFamily: 'Arial, sans-serif',
        fontSize: 18,
        color: 'black',
        margin: 5
    },
    input: {
        width: 300,
        height: 40,
        margin: 5,
        borderWidth: 1,
        padding: 10,
        borderBottomColor: '#d3d3d3',
        borderRadius: 10,
        
      }
})


export default LoginScreen



