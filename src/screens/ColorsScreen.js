import React, {useState} from 'react';
import {View,Text,StyleSheet,Button, FlatList} from 'react-native';
import ColorBox from '../Components/colorBox';

const ColorsScreen = () => {
    const [colors,setColors] = useState([]);
    
    return (
        <View>
            <Text>Colors Screen</Text>
            <Button title="Add a color" onPress = {()=> {
                setColors([...colors, randomRgb()]);
            }}/>

            <FlatList
                keyExtractor = {(item) => item}
                data = {colors} 
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