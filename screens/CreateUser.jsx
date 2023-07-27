import React, {useState} from 'react';
import {
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  StyleSheet,
} from 'react-native';

const CreateUser = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleInput = (property, value) => {
    setState({...state, [property]: value});
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
          onChangeText={value => handleInput('email', value)}
        />
        <TextInput
          placeholder={'Phone User'}
          style={style.inputGroup}
          onChangeText={value => handleInput('phone', value)}
        />
      </View>
      <View>
        <Button title={'Save user'} onPress={() => console.log(state)} />
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
