import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function SettingsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Кнопка ← Home */}
      <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.homeButtonText}>← Home</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Settings</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  homeButton: {
    position: 'absolute',
    top: 60,
    left: 20,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  homeButtonText: {
    fontSize: 14,
    color: '#007AFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

