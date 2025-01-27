
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TaskInput = ({ tasks, setTasks }) => {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = async () => {
    if (newTask.trim()) {
      const newTaskObject = { id: Date.now(), task: newTask, done: false };
      const updatedTasks = [...tasks, newTaskObject];
      setTasks(updatedTasks);
      await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
      setNewTask('');
    }
  };

  return (
    <View style={styles.inputRow}>
      <TextInput
        value={newTask}
        onChangeText={setNewTask}
        style={styles.input}
        placeholder="Add a new task"
      />
      <TouchableOpacity onPress={handleAddTask} style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    inputRow: {
      flexDirection: 'row',
      justifyContent: 'space-between', 
      alignItems: 'center',
      marginBottom: 20,
    },
    input: {
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      paddingLeft: 8,
      flex: 1,
    },
    saveButton: {
      backgroundColor: 'lightblue',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginLeft: 10,
      height: 40, 
      justifyContent: 'center',  
      alignItems: 'center', 
    },
    saveButtonText: {
      color: 'white',
      fontWeight: 'bold',
    },
  });
  
  export default TaskInput;
  