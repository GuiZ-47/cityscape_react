import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';



const UserInfo = ({ user, setUser, setJWT }) => {

  const handleLogout = () =>{
    setUser({});
    setJWT('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Username:</Text>
        <Text style={styles.value}>{user.userName}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Nom:</Text>
        <Text style={styles.value}>{user.lastName}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Prénom:</Text>
        <Text style={styles.value}>{user.firstName}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Email :</Text>
        <Text style={styles.value}>{user.email}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Email vérifié :</Text>
        <Text style={styles.value}>{user.isVerified.toString()}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Rôles:</Text>
        <Text style={styles.value}>{user.roles.join(', ')}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Date de création du compte :</Text>
        <Text style={styles.value}>{user.createdAt}</Text>
      </View>
      <View style={{ margin: 10 }}>
        <Button title="Logout" onPress={handleLogout} />
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  label: {
    flex: 1,
    fontWeight: 'bold',
    marginRight: 10,
  },
  value: {
    flex: 2,
  },
});

export default UserInfo;