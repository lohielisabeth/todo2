import React from 'react';
import { TextInput, Button, View, StyleSheet } from 'react-native';

const TaskInput = ({ value, onChangeText, onAddTask }) => {
  return (
    <View style={styles.inputContainer}>
      {/* Tekstikenttä uuden tehtävän lisäämiseen */}
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder="Add a new task"
      />
      <Pressable
        style={({ pressed }) => [
          styles.button,
          { alignSelf: 'flex-end' }, // Napin sijoittaminen oikealle
          pressed && { opacity: 0.7 }, // Visuaalinen muutos painettaessa
        ]}
        onPress={onAddTask}
      >
        <Text style={styles.buttonText}>Add Task</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
    inputContainer: {
      flexDirection: 'row',        // Asettaminen vierekkäin
      alignItems: 'center',        // Keskitetään pystysuunnassa
      marginBottom: 20,            // Väli muiden komponenttien kanssa
    },
    input: {
      flex: 1,                     // Tekstikenttä vie kaiken tilan vasemmalla
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      marginRight: 10,             // Väli napin ja kentän välillä
      paddingLeft: 8,
    },
    button: {
      backgroundColor: '#6200ea',  // Napin taustaväri
      paddingVertical: 10,         // Napin pystysuora täyttö
      paddingHorizontal: 20,       // Napin vaakasuora täyttö
      borderRadius: 5,             // Kulmat pyöristetään
    },
    buttonText: {
      color: 'white',              // Tekstin väri napissa
      fontSize: 16,                // Tekstin koko
    },
  });

export default TaskInput;
