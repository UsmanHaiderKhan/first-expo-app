import React from "react";
import {View, Text,StyleSheet} from 'react-native';

const GoalItem = props =>{
    return (
        <View style={styles.listItem.value}>
          <Text>{props.Text }</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        borderWidth: 1,
        marginVertical: 10,
        borderColor: 'black',
        backgroundColor: '#ccc',
      }
});
export default GoalItem;