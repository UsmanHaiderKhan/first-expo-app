import React,{useState} from 'react';
import { StyleSheet, TextInput, View,Button, Modal} from 'react-native';

const GoalInput = props =>{
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = enteredText => {
        setEnteredGoal(enteredText);
    }
    addGoalHandler = ()=>{
      props.addGoalHandler(enteredGoal);
      setEnteredGoal('');
    }
    return(
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.mainWrapper}>
          <TextInput placeholder='Course Goals' style={styles.inputText} onChangeText={goalInputHandler} value={enteredGoal}></TextInput>
          <View style={styles.buttonAlignment}>
            <View style={styles.button}>
               <Button title='CANCEL' color="red" onPress={props.onCancel}/>
            </View>
            <View style={styles.button}>
               <Button title='Add Your Goal' style={styles.inputButton} onPress={props.onAddGoal.bind(this, enteredGoal)}></Button>
            </View>
          </View>
          
        </View>
      </Modal>
    
    )
}
const styles = StyleSheet.create({
    mainWrapper: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
      }, 
    inputText: {
        width: '80%',
        borderBottomWidth: 1,
        marginBottom:10,
        borderBottomColor: 'black',
      },
      inputButton: {
        marginTop: 15
      },
      buttonAlignment : {
        width:'80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      button:{
        width: '45%'
      }
});
 export default GoalInput;