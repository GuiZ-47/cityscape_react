import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const VideoPopUpSection = () => {
  return (
    <View style={styles.videoPopUp}>
      <View style={styles.container}>
        <View style={styles.videoPopUpThumb}>
          <Image source={require('../../../assets/images/thumbs/video-popup.png')} alt="" className="cover-img" />
          <Text href="https://www.youtube.com/watch?v=pPl3ZZdTP3g" style={styles.videoPopUpButton}></Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  videoPopUp: {
    position: 'relative',
    zIndex: 1,
    backgroundColor: '#F8F8F8'
  },
  container: {
    width: '100%',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  videoPopUpThumb: {
    position: 'relative',
    minHeight: '220px',
    borderRadius: 5,
    overflow: 'hidden'
  },
  videoPopUpButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '80px',
    height: '80px',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: 26,
    borderRadius: 50,
    transition: '0.2s linear'
  }
});

export default VideoPopUpSection;
