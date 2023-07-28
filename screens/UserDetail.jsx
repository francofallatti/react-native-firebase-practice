import React from 'react';
import {Text, View} from 'react-native';

const UserDetail = props => {
  console.log(props.route.params.userId);
  return (
    <View>
      <Text>UserDetail</Text>
    </View>
  );
};

export default UserDetail;
