import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';
import firestore, {firebase} from '@react-native-firebase/firestore';

class UsersList extends Component {
  state = {
    users: [],
  };
  constructor(props) {
    super(props);
    this.subscriber = firestore()
      .collection('users')
      .onSnapshot(docs => {
        let users = [];
        docs.forEach(doc => {
          users.push(doc.data());
        });
        this.setState({users});
        console.log(users);
      });
  }

  addRandomUser = async () => {
    let name = Math.random().toString(36).substring(7);
    let email = Math.random().toString(36).substring(7) + '@';
    firestore().collection('users').add({
      name,
      email,
      phone: '1234',
    });
  };

  render() {
    return (
      <View>
        <Text>UsersList</Text>
        <Button title={'add random user'} onPress={this.addRandomUser} />
        {this.state.users.map((user, index) => (
          <View key={index}>
            <Text>{user.name}</Text>
          </View>
        ))}
      </View>
    );
  }
}

export default UsersList;
