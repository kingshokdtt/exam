import React from "react"
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView,StyleSheet, Text, TextInput, Pressable, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [numberText, setNumberText] = useState('');
  const [message, setMessage] = useState('');

  function calcSquare() {
    const number = parseInt(numberText);
    if (number) {
      const squared = number + number;
      setMessage(squared.toString());
    } else {
      setMessage('invalid input.');
    }
  }

  return (
    <SafeAreaView>
      <View style={{marginTop:100}}>

    <View style={{paddingleft:20, height:150, width:300, borderWidth:3, marginStart:40, marginEnd:500, backgroundColor:'green'}}>
        <Text style={styles.text}>IS657 Midterm</Text>
    </View>
        
      <View style={styles.container}>
        <View
          style={{
            flexDirection:'row',
            alignItems:'center',
          }}
        >
          <Text style={styles.title}>Number1[10 to 20]:</Text>
          <TextInput style={styles.textInput} onChangeText={setNumberText} />
        </View>
      </View>        
        
      <View style={styles.container}>
        <View
          style={{
            flexDirection:'row',
            alignItems:'center',
          }}
        >
          <Text style={styles.title}>Number2[100 to 200]:</Text>
          <TextInput style={styles.textInput} onChangeText={setNumberText} />
        </View>
      </View>

      <View style={styles.container}>
        <View
          style={{
            flexDirection:'row',
            alignItems:'center',
          }}
        >
          <Pressable style={styles.pressable} onPress={calcSquare}>
            <Text style={styles.title}>CALCULATE SUM</Text>
          </Pressable>
        </View>
      </View>  
        <StatusBar style='auto'/>
      </View>
        
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 30,
  },
  title: {
    fontSize: 20,
    color: 'black',
  },
  pressable: {
    marginVertical: 10,
    borderWidth: 2,
    borderColor: 'green',
    padding: 5,
  },
  textInput: {
    borderWidth: 1,
    width: 60,
    padding: 10,
    marginVertical: 10,
  },

  text:{
    fontSize:35,
    color:'yellow',
    alignItems:'center',
    justifyContent:'center',
    padding:20,
    
  },
});