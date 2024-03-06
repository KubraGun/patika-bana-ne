import React from 'react';
import {} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FlashMessage from 'react-native-flash-message';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import auth from '@react-native-firebase/auth';

// Import pages
import Login from './src/pages/auth/Login/Login';
import Sign from './src/pages/auth/Sign/Sign';

import Messages from './src/pages/Messages/Messages';

import colors from './src/styles/colors';

const Stack = createStackNavigator();

/**
 * rnfirebase.io \ authentication --> auth module | method for user session : 
 * using in React.useEffect method. 
 * 
 */

export default () => {
  const [userSession, setUserSession] = React.useState();

  React.useEffect(() => {
    auth()
    .onAuthStateChanged((user) => {
      
      setUserSession(!!user); // !!: if object is null, return false
    });
  }, []);

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
        {
          !userSession ? (
          <Stack.Screen 
                        name ='AuthStack' 
                        component={AuthStack} 
                        options={{headerShown: false}}
          /> 
          ) : ( 
          <Stack.Screen 
                        name ='MessagesScreen' 
                        component={Messages} 
                        options={{
                          headerTintColor: colors.darkgreen,
                          headerRight: () => 
                                            <Icon 
                                                  name='logout' 
                                                  size={28}
                                                  color={colors.darkgreen}
                                                  onPress = {() => auth().signOut()}
                                                  />, 
                        }}
                        
          /> 
        )}     
       
      </Stack.Navigator>
      <FlashMessage position='top'/>
    </NavigationContainer>
  );
}