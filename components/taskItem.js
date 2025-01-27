
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TaskItem = ({ task, onPress }) => {
  return (
    <View style={styles.taskItemContainer}>
      <TouchableOpacity onPress={onPress} style={styles.taskTextContainer}>
        <Text style={[styles.taskText, task.done && styles.completedTask]}>
          {task.task}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  taskItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  taskTextContainer: {
    flex: 1, 
    padding: 10,
  },
  taskText: {
    fontSize: 18,
    color: 'deeppink',
    textAlign: 'center'
  },
  completedTask: {
    textDecorationLine: 'line-through',
    color: 'blue',
    textAlign: 'center'
  },
});

export default TaskItem;
