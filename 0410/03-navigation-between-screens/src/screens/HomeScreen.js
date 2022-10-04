import React from 'react'
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native'

const HomeScreen = (props) => {
    console.log(props)
    const navigation = props.navigation

    const Separator = () => (
        <View style={styles.separator} />
      );

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome Laura to our first project.</Text>
            <Text style={styles.text}>Now we can navigate between screens.</Text>
            <Text style={styles.text}>How are you feeling?</Text>
            <Separator />
            <Button
                onPress={() => {
                    console.log('button pressed')
                    navigation.navigate('User')
                }}
                title="User Details" 
                color= "#FFB6B1" />
            <Separator />
            <Button
                onPress={() => {
                    console.log('button pressed')
                    navigation.navigate('About')
                }}
                title="About" 
                color= "#FFB6B1" />
        </View>
    )
}

const styles = StyleSheet.create({
    separator:{
        margin: 5
    },
    container:{
        margin: 10
    },
    text: {
        fontSize: 20
    }
})

export default HomeScreen