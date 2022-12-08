import React,{useState} from 'react';
import { StyleSheet, TextInput, View,Button } from 'react-native';

const GoalInput = props =>{
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }
    return(
     <View style={styles.mainWrapper}>
        <TextInput placeholder='Course Goals' style={styles.inputText} onChangeText={goalInputHandler} value={enteredGoal}></TextInput>
        <Button title='Add Your Goal' style={styles.inputButton} onPress={props.onAddGoal.bind(this, enteredGoal)}></Button>
      </View>
    )
}
const styles = StyleSheet.create({
    mainWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      }, 
    inputText: {
        width: '60%',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
      },
      inputButton: {
        marginTop: 15
      },
});
 export default GoalInput;