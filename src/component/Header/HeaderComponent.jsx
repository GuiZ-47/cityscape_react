import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Image, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

export default function MobileMenu () {

// https://reactnavigation.org/docs/use-navigation
  const navigation = useNavigation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <View style={styles.container}>
      {/* Barre du haut */}
      <View style={styles.header}>
        {/* Logo */}
        <View style={styles.logo}>
          <TouchableOpacity onPress={() => console.log('Logo pressed')}>
            {/* Mettre ici l'image du logo de cityscape !!!! */}
            <Image
                source={require('./../../../assets/images/logo/logo.png')}
                style={styles.image}
            />
          </TouchableOpacity>
        </View>
        {/* Bouton de menu mobile */}
        <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
          <Ionicons name="menu" size={30} color="black" />
        </TouchableOpacity>
      </View>
      {/* Menu latéral */}
      {isMenuOpen && (
        <View style={styles.mobileMenu}>
          {/* Bouton de fermeture du menu */}
          <TouchableOpacity style={styles.closeButton} onPress={toggleMenu}>
            <Ionicons name="close" size={50} color="black" />
          </TouchableOpacity>
          {/* Contenu du menu */}
          <View style={styles.menuContent}>
            {/* Ajoutez vos éléments de menu ici */}
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text style={styles.textLien}> Home </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('PropertyDetails')}>
                <Text style={styles.textLien}> PropertyDetails </Text>
              </TouchableOpacity>
          </View>
        </View>
      )}
    </ View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex:10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor : 'grey',
    height : 50,
  },
  logo: {
    flex: 1,
  },
  menuButton: {
  height: '100%',
  paddingTop : 5,
  },
  mobileMenu: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '80%', // Largeur du menu latéral
    height: '100%',
    backgroundColor: '#fff',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex : 30,
  },
  menuContent: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    zIndex:20,
    backgroundColor : 'white',
    height : 100,
  },
  sellButton: {
    backgroundColor: 'blue',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  sellButtonText: {
    color: 'white',
    marginRight: 5,
  },
    image: {
      resizeMode: 'cover',
    },
    textLien :{
        fontSize : 20,
    },
});
