import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = () => {
  const router = useRouter();

  return (
    <LinearGradient
      colors={['#38A2CC', '#73ABAF', '#FFC068']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.content}>
        <Text style={styles.text}>Bem-vindo ao VitalMind</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 24,
    textAlign: 'center',
  },
});

export default HomeScreen;