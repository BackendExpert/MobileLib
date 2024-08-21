import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';


const SignIn = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['#af6df9', '#FFFFFF']}
      style={styles.gradient}
      start={{ x: 0, y: 1 }}
      end={{ x: 0, y: 0 }}
    >
      <View style={styles.container}>
        <Text style={styles.text}> Gradient Background</Text>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
    gradient: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      // Additional styling for your container
    },
    text: {
      color: '#fff',
      fontSize: 20,
    },
  });

export default SignIn