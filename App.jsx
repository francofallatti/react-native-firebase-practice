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
      <Stack.Screen
        name="UsersList"
        component={UsersList}
        options={{title: ' Users List'}}
      />
      <Stack.Screen
        name="CreateUser"
        component={CreateUser}
        options={{title: ' Create a New User'}}
      />
      {/* <Stack.Screen name="UsersListFunction" component={UsersListFunction} /> */}

      <Stack.Screen
        name="UserDetail"
        component={UserDetail}
        options={{title: ' User Detail'}}
      />
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
