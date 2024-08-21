import React from 'react';
import { View, StyleSheet, Text , Image} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';


const SignUp = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['#FAC109', '#ffff90']}
      style={styles.gradient}
      start={{ x: 0, y: 1 }}
      end={{ x: 0, y: 0 }}
    >
      <View style={styles.container}>
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

        <Text className="text-center font-semibold text-xl text-gray-600">SignUp Here</Text>


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