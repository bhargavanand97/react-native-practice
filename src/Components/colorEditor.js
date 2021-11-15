import React from 'react';
import {View,Button,Text,StyleSheet} from 'react-native';

const ColorEditor = ({eachColor, onIncrease, onDecrease}) => {
    return (
        <View>
            <Text>{eachColor}</Text>
            <Button title = {`More ${eachColor}`} style={styles.buttonStyle} onPress={() => onIncrease()}/>
            <Button title = {`Less ${eachColor}`} style={styles.buttonStyle} onPress={() => onDecrease()}/>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        marginBottom: 50
    }
})

export default ColorEditor;