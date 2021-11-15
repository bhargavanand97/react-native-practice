import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
    const name = "Bhargav Anand Illinda";
    return (
       <View>
            <Text style={styles.headingStyle}>Getting started with React Native</Text>
            <Text style={styles.subHeadingStyle}>My name is {name}</Text>
       </View>
    
    )
}

const styles = StyleSheet.create({
    headingStyle: {
        fontSize: 45       
    },
    subHeadingStyle: {
        fontSize: 20
    }
})

export default ComponentsScreen;