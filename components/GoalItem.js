import React from "react";
import {View, Text,StyleSheet,TouchableOpacity,TouchableNativeFeedback,TouchableWithoutFeedback,TouchableHighlight} from 'react-native';

const GoalItem = props =>{
    return (
      // <TouchableOpacity TouchableOpacity={0.5} onPress={props.onDelete}>
      //   <View style={styles.listItem}>
      //     <Text>{props.title }</Text>
      //   </View>
      // </TouchableOpacity>
      <TouchableNativeFeedback onPress={props.onDelete}>
        <View style={styles.listItem}>
          <Text>{props.title }</Text>
        </View>
      </TouchableNativeFeedback>

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