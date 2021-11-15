import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import ImageDetail from "../Components/imageDetail";

const ImageScreen = () => {
    return (
        <View>
            <Text>Image Screen</Text>
            <ImageDetail title="Forest" imgSrc = {require('../../assets/forest.jpg')}/>
            <ImageDetail title="Mountain" imgSrc = {require('../../assets/mountain.jpg')}/>
            <ImageDetail title="Beach" imgSrc = {require('../../assets/beach.jpg')}/>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default ImageScreen;