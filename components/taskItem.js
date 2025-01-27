import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TaskItem = ({ task, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.taskContainer}>
      <Text style={[styles.taskText, task.done && styles.doneText]}>
        {task.task}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  taskText: {
    fontSize: 18,
  },
  doneText: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
});

export default TaskItem;
