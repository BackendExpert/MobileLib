import React, { useState } from 'react';
import { View, StyleSheet, Text , Image, TextInput, Alert} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';


const SignUp = ({ navigation }) => {
    const [SignUpData, SetSignUpData] = useState({
      email: '',
      username: '',
      password: '',
    })

    const handleInputChange = (name, value) => {
      SetSignUpData({
        ...SignUpData,
        [name]: value,
      });
    };

    const headleSignUp = () => {
      // console.log(SignUpData);

      if (SignUpData.password === "") {
        Alert.alert('Error', 'Password Feild is Required..!');
        return;
      }
  
      // Display form data in an alert
      Alert.alert('Submitted Data', `Name: ${SignUpData.username}\nEmail: ${SignUpData.email}\nPassword: ${SignUpData.password}`);
    }

  return (
    <LinearGradient
      colors={['#FAC109', '#ffff90']}
      style={styles.gradient}
      start={{ x: 0, y: 1 }}
      end={{ x: 0, y: 0 }}
    >
      <View style={styles.container}>

        <View className='my-2'>

        <Text className="text-center font-semibold text-xl text-gray-600">SignUp Here</Text>
          <TextInput
            placeholder="Email Address"
            value={SignUpData.email}
            onChangeText={(value) => handleInputChange('email', value)}
            className='bg-yellow-600/70 h-12 rounded-xl pl-4 my-2'
          />
          <TextInput
            placeholder="Username"
            value={SignUpData.username}
            onChangeText={(value) => handleInputChange('username', value)}
            className='bg-yellow-600/70 h-12 rounded-xl pl-4 my-2'
          />
          <TextInput
            placeholder="Password"
            value={SignUpData.password}
            secureTextEntry={true}
            onChangeText={(value) => handleInputChange('password', value)}
            className='bg-yellow-600/70 h-12 rounded-xl pl-4 my-2'
          />

          <Text className='bg-yellow-400 text-center py-4 rounded-full' onPress={headleSignUp}>
            SignUp
          </Text>

        </View>

        <Text className="text-center font-semibold text-xl text-gray-600">Welcome to</Text>
        <Text className="text-center font-semibold text-gray-600">E-Library</Text>
        <Image
            source={require('../assets/pImage1.png')} 
            style={{
                width: 300,
                height: 300,
                resizeMode: 'contain',
              }}
        >            
        </Image>




        <Text className="text-center text-gray-600">Already have an Account ? <Text className="text-purple-800 font-semibold" onPress={() => navigation.navigate('SignIn')}>SignIn</Text></Text>
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

export default SignUp