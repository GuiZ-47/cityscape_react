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
      <View style={styles.videoPopUpThumb}>
        <Image source={require('../../../assets/images/thumbs/video-popup.png')} alt="" style={styles.coverImg} />
          <TouchableOpacity
            onPress={handlePlayVideo}
            style={styles.playButton}>
              <FontAwesomeIcon icon={faPlay} color={'white'} />
          </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  videoPopUp: {
    backgroundColor: '#F8F8F8',
    width: '100%',
  },
  videoPopUpThumb: {
    overflow: 'hidden',
    width: '100%',
    height: 150,
  },
  coverImg: {
    width: '100%',
    height: '100%',
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
});

export default VideoPopUpSection;
