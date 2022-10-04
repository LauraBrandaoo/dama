import React from 'react'
// IMPORT FlatList
import { Text, View, StyleSheet, FlatList, ViewPagerAndroidBase } from 'react-native'

const AboutScreen = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>About</Text>
            <Text style={styles.text}>Developed by Laura Brandão Borges</Text>
            <Text style={styles.textStyle}>Version</Text>
            <Text style={styles.text}>FirstApp version 1.0</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        margin: 10
    },
    textStyle: {
        fontSize: 24,
        color: '#FFB6B1'
    },
    text: {
        fontSize: 16,
        color: 'black'
    }
})

export default AboutScreen