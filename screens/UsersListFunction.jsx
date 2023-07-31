import React, {useState, useEffect} from 'react';
import {Button, Text, View, ScrollView} from 'react-native';
import firestore, {firebase} from '@react-native-firebase/firestore';

const UsersListFunction = props => {
  const [usersData, setUsersData] = useState([]); // Cambio de nombre de 'state' a 'usersData'

  useEffect(() => {
    const subscriber = firestore()
      .collection('users')
      .onSnapshot(querySnapshot => {
        let users = [];
        querySnapshot.forEach(doc => {
          users.push(doc.data());
        });
        setUsersData(users); // Usamos setUsersData en lugar de setState
        //console.log(users);
      });

    return () => {
      subscriber();
    };
  }, []);

  const saveUser = async () => {
    let name = Math.random().toString(36).substring(7);
    let email = Math.random().toString(36).substring(7) + '@';
    firestore().collection('users').add({
      name,
      email,
      phone: '1234',
    });
  };

  return (
    <ScrollView>
      <Text>UsersListFunction</Text>

      {usersData.map((user, index) => (
        <View
          key={index}
          style={{borderBottomWidth: 3, borderBottomColor: 'black'}}>
          <Text>Name: {user.name}</Text>
          <Text>Email: {user.email}</Text>
          <Text>Phone: {user.phone}</Text>
        </View>
      ))}
      <View>
        <Button title={'Save user'} onPress={() => saveUser()} />
      </View>
    </ScrollView>
  );
};

export default UsersListFunction;

// const addRandomUser = async () => {
//     let name = Math.random().toString(36).substring(7);
//     let email = Math.random().toString(36).substring(7) + '@';
//     firestore().collection('users').add({
//       name,
//       email,phone: '1234',});};
//<Button title={'add random user'} onPress={addRandomUser} />;
