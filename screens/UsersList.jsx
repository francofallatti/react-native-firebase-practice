import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';
import firestore, {firebase} from '@react-native-firebase/firestore';

const UsersList = props => {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    const subscriber = firestore()
      .collection('users')
      .onSnapshot(querySnapshot => {
        let users = [];
        querySnapshot.forEach(doc => {
          const {name, email, phone} = doc.data();
          users.push({
            id: doc.id,
            name,
            email,
            phone,
          });
        });
        setUsersData(users);
        console.log(usersData);
      });

    return () => {
      subscriber;
    };
  }, []);

  return (
    <ScrollView>
      <Button
        onPress={() => props.navigation.navigate('CreateUser')}
        title="Create User"
      />
      {usersData.map(user => {
        return (
          <TouchableOpacity // Reemplaza ListItem con TouchableOpacity
            key={user.id}
            style={styles.listItem}
            onPress={() => {
              props.navigation.navigate('UserDetail', {
                userId: user.id,
              });
            }}>
            <View style={styles.avatar}>
              <Text>{user.name.charAt(0)}</Text>
            </View>
            <View style={styles.userInfo}>
              <Text style={styles.userName}>{user.name}</Text>
              <Text style={styles.userEmail}>{user.email}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default UsersList;

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 14,
    color: '#888',
  },
});
