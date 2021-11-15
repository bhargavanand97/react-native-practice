import React from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>Welcome Bhargav Anand</Text>
      <Button 
        onPress={()=> {props.navigation.navigate('Components')}}
        title= "Go to components demo"
        style={styles.text} 
      />
      <TouchableOpacity style={styles.text} onPress= {()=>{props.navigation.navigate('ListScreens')}}>
        <Text>Go To List Demo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.text}  onPress= {()=>{props.navigation.navigate('ImageScreen')}}>
        <Text>Go To Image Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.text}  onPress= {()=>{props.navigation.navigate('Counter')}}>
        <Text>Go To Counter Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.text}  onPress= {()=>{props.navigation.navigate('Colors')}}>
        <Text>Go To Colors Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.text}  onPress= {()=>{props.navigation.navigate('ColorEditor')}}>
        <Text>Go To Color Editor Screen</Text>
      </TouchableOpacity>
    </View>
  )
  
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    marginBottom: 20
  }
});

export default HomeScreen;
