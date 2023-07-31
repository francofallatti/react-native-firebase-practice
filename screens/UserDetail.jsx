import React, {useEffect, useState} from 'react';
import {StyleSheet, View, TextInput, ScrollView, Button} from 'react-native';
import firestore, {firebase} from '@react-native-firebase/firestore';

const UserDetail = props => {
  //console.log(props.route.params.userId);

  const [usersData, setUsersData] = useState({
    id: '',
    name: '',
    email: '',
    phone: '',
  });

  //loader
  const [loading, setLoading] = useState(true);

  const getUserByID = async id => {
    console.log('id: ' + id);
    try {
      const doc = await firestore().collection('users').doc(id).get();
      const user = doc.data();
      console.log(user);
      setUsersData({...user, id: doc.id});
    } catch (error) {
      console.error('Error fetching user:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getUserByID(props.route.params.userId);
  }, []);

  const handleInput = (name, value) => {
    setUsersData(prevState => ({...prevState, [name]: value}));
  };

  return (
    <ScrollView style={style.container}>
      <View>
        <TextInput
          placeholder={'Name User'}
          style={style.inputGroup}
          value={usersData.name}
          onChangeText={value => handleInput('name', value)}
        />
        <TextInput
          placeholder={'Email User'}
          style={style.inputGroup}
          value={usersData.email}
          keyboardType={'email-address'}
          onChangeText={value => handleInput('email', value)}
        />
        <TextInput
          placeholder={'Phone User'}
          style={style.inputGroup}
          value={usersData.phone}
          keyboardType={'phone-pad'}
          onChangeText={value => handleInput('phone', value)}
        />
      </View>
      <View style={{paddingBottom: 10}}>
        <Button title={'Update User'} onPress={() => saveUser()} />
      </View>
      <View>
        <Button
          title={'Delete User'}
          color={'#E37399'}
          onPress={() => saveUser()}
        />
      </View>
    </ScrollView>
  );
};

export default UserDetail;

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
