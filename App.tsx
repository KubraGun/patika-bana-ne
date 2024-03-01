import React from 'react';
import {} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FlashMessage from 'react-native-flash-message';

// Import pages
import Login from './src/pages/auth/Login/Login';
import Sign from './src/pages/auth/Sign/Sign';

const Stack = createStackNavigator();

export default () => {
  const AuthStack = () => {
    return(
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen 
                      name='LoginPage' // we will use this name when using navigation.navigate
                      component={Login}
                      options={{
                        headerShown:false//true olursa auth ta da true olduğunda 2 header da gözükür
                      }}/>
        <Stack.Screen name='SignPage' component={Sign}/>
      </Stack.Navigator>
    )
  }

  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name ='AuthStack' component={AuthStack} options={{headerShown: false}}/>
      </Stack.Navigator>
      <FlashMessage position='top'/>
    </NavigationContainer>
  );
}