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
            <TextInput style={styles.input} />
            <Text style={styles.textStyle}>{password}</Text>
            <TextInput style={styles.input} />
            <Button
                onPress={() => {
                    console.log('button pressed')
                    navigation.navigate('Home')
                }}
                title="Ir para Home" />
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
        fontSize: 16,
        color: 'black'
    },
    input: {
        width: 300,
        height: 40,
        margin: 5,
        borderWidth: 1,
        padding: 10,
        borderBottomColor: '#d3d3d3'
      }
})


export default LoginScreen



