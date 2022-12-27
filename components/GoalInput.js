import React,{useState} from 'react';
import { StyleSheet, TextInput, View,Button, Modal} from 'react-native';

const GoalInput = props =>{
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = enteredText => {
        setEnteredGoal(enteredText);
    }
    return(
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.mainWrapper}>
          <TextInput placeholder='Course Goals' style={styles.inputText} onChangeText={goalInputHandler} value={enteredGoal}></TextInput>
          <Button title='Add Your Goal' style={styles.inputButton} onPress={props.onAddGoal.bind(this, enteredGoal)}></Button>
        </View>
      </Modal>
    
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