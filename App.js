import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoal, setCourseGoal] = useState([]);

  const goalInputHandler = (enteredText)=>{
     setEnteredGoal(enteredText);
  }
  const addGoalHandler = ()=>{
    setCourseGoal(currentGoal => [...currentGoal, enteredGoal]);  
  }

  return (
    <View style={styles.screen}>
      <View style={styles.mainWrapper}>
        <TextInput placeholder='Course Goals' style={styles.inputText} onChangeText={goalInputHandler} value={enteredGoal}></TextInput>
        <Button title='Add Your Goal' style={styles.inputButton} onPress={addGoalHandler}></Button>
      </View>
      <ScrollView>
      {courseGoal.map(goal => 
        <View key={goal} style={styles.listItem}>
          <Text>{goal}</Text>
        </View>
        )}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    marginTop:40,
    padding:20
    },
    mainWrapper:{
      flexDirection:'row', 
      alignItems:'center',
      justifyContent:'space-between'
    },
    inputText:{
      width:'60%',
      borderBottomWidth:1,
      borderBottomColor:'black',
    },
    inputButton: {
      marginTop:15
    },
    listItem:{
      padding:10,
      borderWidth:1,
      marginVertical:10,
      borderColor:'black',
      backgroundColor:'#ccc',
    }

});
