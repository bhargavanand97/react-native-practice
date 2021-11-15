import React from "react";
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreens = () => {
    const fruits = [
        {name: 'Apple', origin: 'India'},
        {name: 'Banana', origin: 'India'},
        {name: 'Papaya', origin: 'India'},
        {name: 'Guava', origin: 'India'},
        {name: 'Apple2', origin: 'India'},
        {name: 'Banana2', origin: 'India'},
        {name: 'Papaya2', origin: 'India'},
        {name: 'Guava2', origin: 'India'},
        {name: 'Apple3', origin: 'India'},
        {name: 'Banana3', origin: 'India'},
        {name: 'Papaya3', origin: 'India'},
        {name: 'Guava3', origin: 'India'},
        {name: 'Apple4', origin: 'India'},
        {name: 'Banana4', origin: 'India'},
        {name: 'Papaya4', origin: 'India'},
        {name: 'Guava4', origin: 'India'},
        {name: 'Apple5', origin: 'India'},
        {name: 'Banan5a', origin: 'India'},
        {name: 'Papaya5', origin: 'India'},
        {name: 'Guava5', origin: 'India'}
    ]
    
    return (
        <View>
            <Text>List Screens page with a list of fruits</Text>
            <FlatList               
                keyExtractor= {(fruit)=> {
                    return fruit.name;
                }}
                data = {fruits}
                renderItem = {({ item })=>{
                    return <Text style = {styles.textStyle}>{item.name} -  Origin :  {item.origin}</Text>
                }}
            />
        </View>
    )   
}
const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 20,
        marginHorizontal: 5
    }
})

export default ListScreens;
