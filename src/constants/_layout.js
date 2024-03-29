import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import OnboardingScreen from '../screens/OnboardingScreen';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';

const Stack = createStackNavigator();
const Layout = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                options={{headerShown:false}}
                name="OnboardingScreen" 
                component={OnboardingScreen} />
                 <Stack.Screen 
                options={{headerShown:false}}
                name="Home" 
                component={Home} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default Layout

const styles = StyleSheet.create({})