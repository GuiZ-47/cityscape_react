import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking, StyleSheet } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons/faPlay';

const VideoPopUpSection = () => {
  const handlePlayVideo = () => {
    Linking.openURL('https://www.youtube.com/watch?v=pPl3ZZdTP3g');
  };

  return (
    <View style={styles.videoPopUp}>
      <View style={styles.container}>
        <View style={styles.videoPopUpThumb}>
          <Image source={require('../../../assets/images/thumbs/video-popup.png')} alt="" style={styles.coverImg} />
            <TouchableOpacity
              onPress={handlePlayVideo}
              style={styles.playButton}>
                <Text style={styles.videoPopUpButton}><FontAwesomeIcon icon={faPlay} color={'white'} /></Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  videoPopUp: {
    //position: 'relative',
    zIndex: 1,
    backgroundColor: '#F8F8F8'
  },
  container: {
    width: '100%',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  videoPopUpThumb: {
    /*position: 'relative',
    minHeight: '220px',
    borderRadius: 5,*/
    overflow: 'hidden',
    width: 400,
    height: 150,
    //resizeMode: 'contain',
    transition: '0.2s linear'
  },
  coverImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  }, 
  houseImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover'
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
    alignItems: 'center'
  },
  videoPopUpButton: {
    position: 'absolute',
    width: '80px',
    height: '80px',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: 50,
    borderRadius: 50
  }
});

export default VideoPopUpSection;
