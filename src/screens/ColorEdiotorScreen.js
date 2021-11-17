import React, {useState, useReducer} from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';
import ColorEditor from '../Components/colorEditor';

/* Reducer function */

const reducer = (state,action) => {
    if(action.type === 'change_red' && (state.red + action.payload >= 0) && (state.red + action.payload <= 255) ) {
        return {...state, red: state.red + action.payload }
    }    
    if(action.type === 'change_green' && (state.green + action.payload >= 0) && (state.green + action.payload <= 255) ) {
        return { ...state, green: state.green + action.payload}
    }
    if(action.type === 'change_blue' && (state.blue + action.payload >= 0) && (state.blue + action.payload <= 255) ) {
        return {...state, blue: state.blue + action.payload}
    }
    if(action.type === 'all' && action.payload == 0) {
        return {...state, red:0 ,green: 0 , blue: 0}
    }    
    else return state;
}

const ColorEditorScreen = () => {   
    const COLOR_INCREMENT_VALUE = 15;  

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
            <Button title = "Zero all values" onPress={()=> {
              dispatch({type: 'all', payload: 0})
            }} />
            <ColorEditor 
                onIncrease={() => dispatch({type: 'change_red', payload: COLOR_INCREMENT_VALUE})}
                onDecrease={() => dispatch({type: 'change_red', payload: COLOR_INCREMENT_VALUE * -1 })}  
                eachColor = "Red"
            />
             <ColorEditor 
                onIncrease={() => dispatch({type: 'change_green', payload: COLOR_INCREMENT_VALUE})}
                onDecrease={() => dispatch({type: 'change_green', payload: COLOR_INCREMENT_VALUE * -1})}                
                eachColor = "Green"
            />
             <ColorEditor 
               onIncrease={() => dispatch({type: 'change_blue', payload: COLOR_INCREMENT_VALUE})}
               onDecrease={() => dispatch({type: 'change_blue', payload: COLOR_INCREMENT_VALUE * -1})}  
                eachColor = "Blue"
            />
           

            <View style={{height: 100,width: 100,backgroundColor: `rgb(${state.red},${state.green},${state.blue})`}}/>
        </View>
    )
}



const styles = StyleSheet.create({});

export default ColorEditorScreen;