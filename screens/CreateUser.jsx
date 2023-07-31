import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Button,
  ScrollView,
} from 'react-native';
import firestore, {firebase} from '@react-native-firebase/firestore';

const CreateUser = props => {
  const [usersData, setUsersData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleInput = (name, value) => {
    setUsersData(prevState => ({...prevState, [name]: value}));
  };
  const saveUser = async () => {
    //console.log('user to create: ' + usersData);
    if (usersData.name === '') {
      alert('please provide a name');
    } else if (usersData.email === '') {
      alert('please provide a email');
    } else if (usersData.phone === '') {
      alert('please provide a phone');
    } else {
      try {
        await firestore().collection('users').add({
          name: usersData.name,
          email: usersData.email,
          phone: usersData.phone,
        });
        props.navigation.navigate('UsersList');
      } catch (error) {
        //console.log(error);
      }
    }
  };

  return (
    <ScrollView style={style.container}>
      <View>
        <TextInput
          placeholder={'Name User'}
          style={style.inputGroup}
          onChangeText={value => handleInput('name', value)}
        />
        <TextInput
          placeholder={'Email User'}
          style={style.inputGroup}
          keyboardType={'email-address'}
          onChangeText={value => handleInput('email', value)}
        />
        <TextInput
          placeholder={'Phone User'}
          style={style.inputGroup}
          keyboardType={'phone-pad'}
          onChangeText={value => handleInput('phone', value)}
        />
      </View>
      <View>
        <Button title={'Save user'} onPress={() => saveUser()} />
      </View>
    </ScrollView>
  );
};

export default CreateUser;

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
});
