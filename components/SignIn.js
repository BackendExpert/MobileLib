import React, { useState } from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import { View, StyleSheet, Text , Image, TextInput, Alert} from 'react-native';


const SignIn = ({ navigation }) => {
    const [loginData, SetloginData] = useState({
      email: '',
      password: '',
    })

    const handleInputChange = (name, value) => {
      SetloginData({
        ...loginData,
        [name]: value,
      });
    };

    const headleLogin = () => {

    }
  return (
    <LinearGradient
      colors={['#cda4fb', '#e3ccfc']}
      style={styles.gradient}
      start={{ x: 0, y: 1 }}
      end={{ x: 0, y: 0 }}
    >
      <View style={styles.container}>
      <View className='my-2'>

        <Text className="text-center font-semibold text-xl text-gray-600">SignUp Here</Text>
          <TextInput
            placeholder="Email Address"
            value={loginData.email}
            onChangeText={(value) => handleInputChange('email', value)}
            className='bg-purple-600/70 h-12 rounded-xl pl-4 my-2 text-white'
          />
          <TextInput
            placeholder="Password"
            value={loginData.password}
            secureTextEntry={true}
            onChangeText={(value) => handleInputChange('password', value)}
            className='bg-purple-600/70 h-12 rounded-xl pl-4 my-2 text-white'
          />

          <Text className='bg-purple-400 text-center py-4 rounded-full text-white font-semibold' onPress={headleLogin}>
            Login
          </Text>

        </View>
        <Text className="text-center font-semibold text-xl text-gray-600">Welcome Back</Text>

        <Image
            source={require('../assets/PImage3.png')} 
            style={{
                width: 300,
                height: 300,
                resizeMode: 'contain',
              }}
        >            
        </Image>

        <Text className="text-center font-semibold text-xl text-gray-600">login Here</Text>


        <Text className="text-center text-gray-600">Don't have an Account ? <Text className="text-purple-800 font-semibold" onPress={() => navigation.navigate('SignUp')}>Register</Text></Text>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
    gradient: {
      flex: 1,
      paddingTop: 80,
      alignItems: 'center'
    },
    container: {
      // Additional styling for your container
    },
    text: {
      color: '#000',
      fontSize: 20,
    },
  });

export default SignIn