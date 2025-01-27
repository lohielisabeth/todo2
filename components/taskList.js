import React from 'react';
import { FlatList, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import TaskItem from './taskItem';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TaskList = ({ tasks, setTasks }) => {
  const toggleTask = async (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
    await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View>
          <TaskItem task={item} onPress={() => toggleTask(item.id)} />
        </View>
      )}
    />
  );
};

export default TaskList;
