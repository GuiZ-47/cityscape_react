import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import GLOBALS from "./../../Component/Common/Globals";

const VideoPropertyDetails = ({propertyDetails}) => {

  const handlePlayVideo = () => {
    Linking.openURL('https://www.youtube.com/watch?v=pPl3ZZdTP3g');
  };

  return (
    <View style={styles.propertyDetailsItem}>
      <Text style={styles.title}>Video Presentation</Text>
      <View style={styles.content}>
        <View style={styles.houseContent}>
          <Image
            source={{ uri: `${GLOBALS.BASE_URL}${GLOBALS.URL_IMAGES_PROPERTIES}${propertyDetails[0].picName}` }}
            style={styles.houseImage}
          />
          <TouchableOpacity
            onPress={handlePlayVideo}
            style={styles.playButton}>
            <Text style={styles.playIcon}>▶️</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  propertyDetailsItem: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 7.5,
    marginBottom: 10,
  },
  content: {
    marginTop: 10,
  },
  houseContent: {
    position: 'relative',
  },
  houseImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  playButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -25 }, { translateY: -25 }],
    width: 50,
    height: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playIcon: {
    fontSize: 30,
    color: '#fff',
  },
});

export default VideoPropertyDetails;