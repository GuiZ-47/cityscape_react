import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

import { SvgXml } from 'react-native-svg';
import SVG from "./../SVG/SvgComponent"


const SubscribeToNewsletter = () => {
  return (
    <View style={styles.cta}>
      <View style={styles.container}>
        <View style={styles.ctaBox}>
          <View style={styles.ctaContent}>
            <Text style={styles.title}>Subscribe To Our <Text style={styles.gradient}>Newsletter</Text></Text>
            <Text style={styles.desc}>It is a long established fact that a reader will be distracted by the
                        readable content of a page when looking at its layout.</Text>
            <View style={styles.form}>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Your Email Address"
                  placeholderTextColor="#999"
                />
                <SvgXml xml={SVG.envelope} width= '25' height='25' style={styles.inputIcon} />
              </View>
              <TouchableOpacity style={styles.subscribeButton}>
                <Text style={styles.buttonText}>Subscribe <Text style={styles.buttonText}>Now</Text></Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  ctaContent: {
    flex: 1,
    marginRight: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  gradient: {
    color: '#f69120', // Utilisez ici la couleur de gradient
  },
  desc: {
    fontSize: 16,
    marginBottom: 20,
    color: '#555',
  },
  form: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputWrapper: {
    position: 'relative',
    flex: 1,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 40,
    fontSize: 12,
    color: '#333',
  },
  inputIcon: {
    position: 'absolute',
    left: 10,
    top: '50%',
    transform: [{ translateY: -12 }],
  },
  subscribeButton: {
    backgroundColor: '#f69120',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  ctaThumb: {
    flex: 1,
  },
  thumbImage: {
    width: '100%', // Ajustez la largeur de l'image selon vos besoins
    height: 200, // Ajustez la hauteur de l'image selon vos besoins
  },
});

export default SubscribeToNewsletter;
