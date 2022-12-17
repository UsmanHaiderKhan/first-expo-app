import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
export default function App() {
  
  const [courseGoals, setCourseGoal] = useState([]);

 
  const addGoalHandler = goalTitle => {
    setCourseGoal(currentGoal => [
      ...currentGoal, { id: Math.random().toString, value: goalTitle }
    ]);
  }

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler}/>

      <FlatList keyExtractor={(item, index) => item.id}
       data={courseGoals}
       renderItem={itemData => <GoalItem onDelete={()=>console.log('press delete button')} title ={itemData.item.value}/> } 
      />
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    marginTop: 40,
    padding: 20
  },
});
