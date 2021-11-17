import React, {useState, useReducer} from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';
import ColorEditor from '../Components/colorEditor';

/* Reducer function */

const reducer = (state,action) => {
    if(action.colorToChange === 'red' && (state.red + action.changeValue >= 0) && (state.red + action.changeValue <= 255) ) {
        return {...state, red: state.red + action.changeValue }
    }    
    if(action.colorToChange === 'green' && (state.green + action.changeValue >= 0) && (state.green + action.changeValue <= 255) ) {
        return { ...state, green: state.green + action.changeValue}
    }
    if(action.colorToChange === 'blue' && (state.blue + action.changeValue >= 0) && (state.blue + action.changeValue <= 255) ) {
        return {...state, blue: state.blue + action.changeValue}
    }
    else return state;
}

const ColorEditorScreen = () => {
    // const [redColor,setRedColor] = useState(0);
    // const [greenColor,setGreenColor] = useState(0);
    // const [blueColor,setBlueColor] = useState(0);
    const COLOR_INCREMENT_VALUE = 15;

    // const setColor = (colorName,changeValue) => {
        // if(colorName === 'red' && (redColor + changeValue >= 0) && (redColor + changeValue <= 255) ) {
        //     setRedColor(redColor + changeValue)
        // }
        // if(colorName === 'green' && (greenColor + changeValue >= 0) && (greenColor + changeValue <= 255) ) {
        //     setGreenColor(greenColor + changeValue)
        // }
        // if(colorName === 'blue' && (blueColor + changeValue >= 0) && (blueColor + changeValue <= 255) ) {
        //     setBlueColor(blueColor + changeValue)
        // }
    // }

    /* Using Reducer */
    const stateObj = {
        red: 0,
        green: 0,
        blue: 0
    }

    const[state,dispatch] = useReducer(reducer,stateObj);

    return (
        <View>
            <Text>Color Editor Screen</Text>
            <Text> Current color values are  Red : {state.red} Green : {state.green} Blue : {state.blue} </Text> 
            {/* <Button title = "Zero all values" onPress={()=> {
                setRedColor(0);               
                setGreenColor(0);
                setBlueColor(0);
            }} /> */}
            <ColorEditor 
                onIncrease={() => dispatch({colorToChange: 'red', changeValue: COLOR_INCREMENT_VALUE})}
                onDecrease={() => dispatch({colorToChange: 'red', changeValue: COLOR_INCREMENT_VALUE * -1 })}  
                eachColor = "Red"
            />
             <ColorEditor 
                onIncrease={() => dispatch({colorToChange: 'green', changeValue: COLOR_INCREMENT_VALUE})}
                onDecrease={() => dispatch({colorToChange: 'green', changeValue: COLOR_INCREMENT_VALUE * -1})}                
                eachColor = "Green"
            />
             <ColorEditor 
               onIncrease={() => dispatch({colorToChange: 'blue', changeValue: COLOR_INCREMENT_VALUE})}
               onDecrease={() => dispatch({colorToChange: 'blue', changeValue: COLOR_INCREMENT_VALUE * -1})}  
                eachColor = "Blue"
            />
           

            <View style={{height: 100,width: 100,backgroundColor: `rgb(${state.red},${state.green},${state.blue})`}}/>
        </View>
    )
}



const styles = StyleSheet.create({});

export default ColorEditorScreen;