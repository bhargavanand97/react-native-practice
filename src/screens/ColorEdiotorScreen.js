import React, {useState} from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';
import ColorEditor from '../Components/colorEditor';

const ColorEditorScreen = () => {
    const [redColor,setRedColor] = useState(0);
    const [greenColor,setGreenColor] = useState(0);
    const [blueColor,setBlueColor] = useState(0);
    return (
        <View>
            <Text>Color Editor Screen</Text>
            <Text> Current color values are  Red : {redColor} Green : {greenColor} Blue : {blueColor} </Text> 
            <Button title = "Zero all values" onPress={()=> {
                setRedColor(0);
                setGreenColor(0);
                setBlueColor(0);
            }} />
            <ColorEditor 
                onIncrease={() => {
                    setRedColor(redColor+10);                   
                }}
                onDecrease={() => {
                    setRedColor(redColor-10)
                }} 
                eachColor = "Red"
            />
             <ColorEditor 
                onIncrease={() => {
                    setGreenColor(greenColor+10)
                }}
                onDecrease={() => {
                    setGreenColor(greenColor-10)
                }} 
                eachColor = "Green"
            />
             <ColorEditor 
                onIncrease={() => {
                    setBlueColor(blueColor+10)
                }}
                onDecrease={() => {
                    setBlueColor(blueColor-10)
                }} 
                eachColor = "Blue"
            />
           

            <View style={{height: 100,width: 100,backgroundColor: `rgb(${redColor},${greenColor},${blueColor})`}}/>
        </View>
    )
}

const styles = StyleSheet.create({});

export default ColorEditorScreen;