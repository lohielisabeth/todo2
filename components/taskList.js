import React from 'react';
import { FlatList, View } from 'react-native';
import TaskItem from './taskItem';

const TaskList = ({ tasks, toggleTask }) => {
  return (
    <View>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TaskItem task={item} onPress={() => toggleTask(item.id)} />
        )}
      />
    </View>
  );
};

export default TaskList;
