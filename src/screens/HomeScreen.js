import React from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  console.log(props);
  return (
    <View>
      <Text style={styles.text}>Welcome Bhargav Anand</Text>
      <Button 
        onPress={()=> {props.navigation.navigate('Components')}}
        title= "Go to components demo"
      />
      <TouchableOpacity onPress= {()=>{props.navigation.navigate('ListScreens')}}>
        <Text>Go To List Demo</Text>
      </TouchableOpacity>
    </View>
  )
  
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
