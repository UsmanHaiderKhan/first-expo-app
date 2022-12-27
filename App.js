import { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
export default function App() {
  
  const [courseGoals, setCourseGoal] = useState([]);
  const[isAddMode, setIsAddMode] = useState([]);


 
  const addGoalHandler = goalTitle => {
    setCourseGoal(currentGoal => [
      ...currentGoal, { id: Math.random().toString, value: goalTitle }
    ]);
  }
 
  const removeGoalHandler = goalId=> {
    setCourseGoal(currentGoal =>{
        return currentGoal.filter((goal)=>{
          goal.id !== goalId;
        });
    });
  }

  return (
    <View style={styles.screen}>
      <Button title='Add New Goals' onPress={()=>setIsAddMode(true)}/>
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler}/>

      <FlatList keyExtractor={(item, index) => item.id}
       data={courseGoals}
       renderItem={itemData => 
       <GoalItem  id={itemData.item.id} 
       onDelete={removeGoalHandler} 
       title ={itemData.item.value}/> } 
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
