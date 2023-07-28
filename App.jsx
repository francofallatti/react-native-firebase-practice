import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UsersList from './screens/UsersList';
import UserDetail from './screens/UserDetail';
import CreateUser from './screens/CreateUser';
import UsersListFunction from './screens/UsersListFunction';

const MainNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CreateUser" component={CreateUser} />
      <Stack.Screen name="UsersListFunction" component={UsersListFunction} />

      <Stack.Screen name="UsersList" component={UsersList} />
      <Stack.Screen name="UserDetail" component={UserDetail} />
    </Stack.Navigator>
  );
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default App;
