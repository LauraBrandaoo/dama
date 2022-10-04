// PART 1 - IMPORT LIBRARIES
import React from 'react'; // importing entire library
import { Text, StyleSheet, View } from 'react-native'; // importing some piees of react-native

// PART 2 - CREATE A COMPONENT 
// A FUNCTION THAT RETURNS SOME JSX
const UserScreen = () => {
    const name = 'Laura'
    const age = '17'
    const email = 'laura@gmail.com'

    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>Name</Text>
            <Text style={styles.text}>{name}</Text>
            <Text style={styles.textStyle}>Age</Text>
            <Text style={styles.text}>{age}</Text>
            <Text style={styles.textStyle}>Email</Text>
            <Text style={styles.text}>{email}</Text>
            
        </View>
    )
}

// PART 3 CREATE A STYLESHEET TO STYLE OUR COMPONENT
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

// PART 4 - EXPORT THE COMPONENT SO WE CAN USE IT ELSEWHERE IN OUR PROJECT
export default UserScreen



