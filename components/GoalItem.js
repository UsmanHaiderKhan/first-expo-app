import React from "react";
import {View, Text} from 'react-native';

const GoalItem = prop =>{
    return (
        <View style={styles.listItem.value}>
          <Text>{dataItem.item}</Text>
        </View>
    )
}
export default GoalItem;