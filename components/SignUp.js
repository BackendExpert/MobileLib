import React from 'react'
import { View, Text, Button } from 'react-native'

const SignUp = ({ navigation }) => {
  return (
    <View>
        <Text className="text-4xl text-red-500 bg-green-500">
            SignUp
        </Text>
        <Button
            className="text-blue-900"
            title='SignUp'
            onPress={() => navigation.navigate('SignIn')}
        >

        </Button>
    </View>
  )
}

export default SignUp