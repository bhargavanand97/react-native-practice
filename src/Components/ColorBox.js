import React from 'react';
import {View} from 'react-native';

const ColorBox = (props) => {
    return (
        <View style = {{height: 100,width: 100, backgroundColor: props.randomColor }}></View>
    )
}
export default ColorBox;