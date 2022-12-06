import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoal, setCourseGoal] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }
  const addGoalHandler = () => {
    setCourseGoal(currentGoal => [...currentGoal, { id: Math.random().toString, value: enteredGoal }]);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.mainWrapper}>
        <TextInput placeholder='Course Goals' style={styles.inputText} onChangeText={goalInputHandler} value={enteredGoal}></TextInput>
        <Button title='Add Your Goal' style={styles.inputButton} onPress={addGoalHandler}></Button>
      </View>
      <FlatList keyExtractor={(item, index) => item.id} data={courseGoal} renderItem={dataItem => <View style={styles.listItem.value}>
        <Text>{dataItem.item}</Text>
      </View>} />
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    marginTop: 40,
    padding: 20
  },
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
  listItem: {
    padding: 10,
    borderWidth: 1,
    marginVertical: 10,
    borderColor: 'black',
    backgroundColor: '#ccc',
  }

});
