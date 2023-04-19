
import { View, Text, SafeAreaView, Image, ImageBackground } from 'react-native'
import SplashScreen from './Screens/SplashScreen/SplashScreen'
import EmailLogin from './Screens/EmailLogin/EmailLogin'
import Dashboard from './Screens/Dashboard/Dashboard'
import HrPolicies from './Screens/HrPolicies/HrPolicies'
import ApplyLeaves from './Screens/ApplyLeaves/ApplyLeaves'
import LeavesHistory from './Screens/LeavesHistory/LeavesHistory'
import LeaveBalance from './Screens/LeaveBalance/LeaveBalance'
import CancelLeave from './Screens/CancelLeave/CancelLeave'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component } from 'react'


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="SplashScreen" component={SplashScreen}
            options={{ gestureEnabled: false, headerShown: false }}
          />

          <Stack.Screen name="Dashboard" component={Dashboard}
            options={{ gestureEnabled: false, headerShown: false }}
          />
          <Stack.Screen name="EmailLogin" component={EmailLogin}
            options={{ gestureEnabled: false, headerShown: false }}
          />
          <Stack.Screen name="HrPolicies" component={HrPolicies}
            options={{ gestureEnabled: false, headerShown: false }}
          />
          <Stack.Screen name="ApplyLeaves" component={ApplyLeaves}
            options={{ gestureEnabled: false, headerShown: false }}
          />
          <Stack.Screen name="LeavesHistory" component={LeavesHistory}
            options={{ gestureEnabled: false, headerShown: false }}
          />
          <Stack.Screen name="LeaveBalance" component={LeaveBalance}
            options={{ gestureEnabled: false, headerShown: false }}
          />
          <Stack.Screen name="CancelLeave" component={CancelLeave}
            options={{ gestureEnabled: false, headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

