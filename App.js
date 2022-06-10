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
      <View style={{marginTop:50}}>

    <View style={{paddingleft:30, height:150, borderWidth:3, marginStart:50, marginEnd:500, backgroundColor:'green'}}>
        <Text style={styles.text}>IS657 Midterm</Text>
        </View>

       

    
        
        <View style={styles.container}>
          <Text style={styles.title}>Number1[10 to 20]:</Text>
          <TextInput style={styles.textInput} onChangeText={setNumberText} />
          
        <View style={styles.container}>
          <Text style={styles.title}>Number2[100 to 200]:</Text>
          <TextInput style={styles.textInput} onChangeText={setNumberText} />

          <Pressable style={styles.pressable} onPress={calcSquare}>
            <Text>CALCULATE SUM</Text>
          </Pressable>
          
          <Text style={styles.title}>The square is {message}</Text>
          <StatusBar style="auto" />

        </View>
        </View>
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
    padding: 50,
  },
  title: {
    fontSize: 20,
    color: 'blue',
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

  boxstyle: {
    width: 200,
    height: 100,
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center',
  },
  text:{
    fontSize:40,
    fontColor:'yellow',
    alignItems:'center',
    justifyContent:'center',
  },
});