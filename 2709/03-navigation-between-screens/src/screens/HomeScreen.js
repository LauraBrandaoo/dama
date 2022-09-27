import React from 'react'
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native'

const HomeScreen = (props) => {
    console.log(props)
    const navigation = props.navigation

    return (
        <View>
            <Text style={styles.text}>Welcome Laura to our first project.</Text>
            <Text style={styles.text}>Now we can navigate between screens.</Text>
            <Text style={styles.text}>How are you feeling?</Text>
            <Button
                onPress={() => {
                    console.log('button pressed')
                    navigation.navigate('User')
                }}
                title="User Details" />
            <Button
                onPress={() => {
                    console.log('button pressed')
                    navigation.navigate('About')
                }}
                title="About" />
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20
    }
})

export default HomeScreen