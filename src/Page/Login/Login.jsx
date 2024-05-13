import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function Login() {
  // Utilisation des hooks et des props de useState, ici
  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState([]);

  useEffect(() => {
    /*PropertiesService.getProperties()
    .then(function (response) {
      // En cas de réussite
      setProperties(response.data);
    })
    .catch(function (error) {
      // En cas d'erreur
      console.log(error);
    });*/
  }, []);
  
  /*if (properties.length === 0) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingTitle}>Loading…</Text>
        <Image
          source={require("./../../../assets/loading.webp")}
          style={styles.image}
        />
      </View>
    );
  }*/

  function submitLogin() {
    try {
      fetch('https://exp.host/--/api/v2/push/send?useFcmV1=true', {
        method: 'POST',
        headers: {
          /*'Host': 'exp.host',
          'Accept': 'application/json',
          'Accept-Encoding': 'gzip, deflate',*/
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "data": {
            "userEmail": "admin",
            "password": "admin",            
          }
        })
      });
    } catch (error) {
      console.error('Error sending push notification:', error);
    }
  }
  
  return (
    <View style={styles.contentContainer}>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" />
      <Button onPress={submitLogin} title="Submit" />
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: '#F7F7F7',
    padding: 15,
    //paddingTop: 40,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  loadingContainer: {
    flexDirection: 'column',
    height : '100%',
  },
  image: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  loadingTitle: {
    color : 'red',
    fontSize: 40,
    zIndex: 10,
  },
});