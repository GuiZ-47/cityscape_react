import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const Login = ({ email, setEmail, password, setPassword, onLogin, JWT, user }) => {

  const handleLogin = () => {
    onLogin({ email, password });
  };

  const handleConsoleLog = () => {
    console.log(JWT);
    console.log(user);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={{ margin: 10 }}>
        <Button title="Se connecter" onPress={handleLogin} />
      </View>
      <View style={{ margin: 10 }}>
        <Button title="Console Log" onPress={handleConsoleLog} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  }
});

export default Login;