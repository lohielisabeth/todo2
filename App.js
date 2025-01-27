// App.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TaskInput from './components/taskInput';
import TaskList from './components/taskList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const storedTasks = await AsyncStorage.getItem('tasks');
        if (storedTasks) {
          setTasks(JSON.parse(storedTasks));
        }
      } catch (error) {
        console.error(error);
      }
    };
    loadTasks();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.appBarContainer}>
        <Text style={styles.appTitle}>Todo List</Text>
      </View>
      <TaskInput tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  appBarContainer: {
    backgroundColor: 'lightpink',
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: '100%',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  appTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
