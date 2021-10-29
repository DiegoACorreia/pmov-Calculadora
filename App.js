import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';

  
 
export default function App() {
  const [screenValue, setScreenValue] = useState('');
  
  const erase = () => {
    setScreenValue(screenValue.slice(0, (screenValue.length - 1)));
  }
  const result = () => {
    setScreenValue((eval(screenValue)).toString());
  }
  const CalcButton = (buttonValue) => {
    const {content} = buttonValue;
    
    const addToScreen = (buttonValue) =>{
      const mathSigns = ['/','*','-',',','+'];
      setScreenValue(screenValue + buttonValue);
      if (mathSigns.includes(buttonValue)){
        const previousValue = screenValue.length - 1;
        const verification = ['/','*',',','+'];
        if ((verification).includes(buttonValue) & screenValue.length == 0){
          setScreenValue('');
        }
        else if (mathSigns.includes(screenValue[previousValue])){
          setScreenValue(screenValue.substring(0, (screenValue.length - 1)) + buttonValue);
        }
      }
    } 
    return (
      <TouchableOpacity style={styles.button} onPress={() => {addToScreen(content)}}>
        <Text style={styles.buttonText}>{content}</Text>
      </TouchableOpacity>
    );
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <Text style={styles.screenText}>{screenValue}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <CalcButton content="7"/>
        <CalcButton content="8"/>
        <CalcButton content="9"/>
        <CalcButton content="*"/>
      </View>
      <View style={styles.buttonContainer}>
        <CalcButton content="4"/>
        <CalcButton content="5"/>
        <CalcButton content="6"/>
        <CalcButton content="+"/>
      </View>
      <View style={styles.buttonContainer}>
        <CalcButton content="1"/>
        <CalcButton content="2"/>
        <CalcButton content="3"/>
        <CalcButton content="-"/>
      </View>
      <View style={styles.buttonContainer}>
        <CalcButton content="0"/>
        <CalcButton content=","/>
        <TouchableOpacity style={styles.button} onPress = {erase}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
        <CalcButton content="/"/>
      </View>
      <View>
        <TouchableOpacity style={styles.equalButton} onPress = {result}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  screen: {
    flex: 1,
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    marginBottom: 20,
    marginRight: 12,
  },
  screenText:{
    color: '#fff',
    fontSize: 60,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#353839',
    flex: 1,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderWidth: 1, 
  },
  equalButton: {
    backgroundColor: '#87CEFA',
    width: 500,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  }
  });

