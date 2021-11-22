import React, {useState, useReducer} from 'react';
import {View,Text,StyleSheet,Button, FlatList} from 'react-native';
import ColorBox from '../Components/ColorBox';

const reducer = (state,action) => {
    const actionPayload = action.payload;
    return [...state,  actionPayload]
}

const ColorsScreen = () => {
    // const [colors,setColors] = useState([]);
    const colors = []
    const [state,dispatch] = useReducer(reducer,colors)
    
    return (
        <View>
            <Text>Colors Screen</Text>
            <Button title="Add a color" onPress = {()=> {
                // setColors([...colors, randomRgb()]);
                dispatch({payload: randomRgb()})                
            }}/>

            <FlatList
                keyExtractor = {(item) => item}
                data = {state} 
                renderItem = {({item}) => {
                    return <ColorBox randomColor = {item}/>
                }}
                horizontal = {false}
            />
            
            
        </View>
    )
}

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor (Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red},${green},${blue})`;
}

const styles = StyleSheet.create({

});


export default ColorsScreen;