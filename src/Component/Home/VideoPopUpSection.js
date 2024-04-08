import React from 'react';
import {View, Text, Image} from 'react-native';

const VideoPopUpSection = () => {
  return (
    <View className="video-popup bg-gray-100">
      <View className="container container-two">
        <View className="video-popup__thumb">
          <Image source="assets/images/thumbs/video-popup.png" alt="" className="cover-img" />
          <Text href="https://www.youtube.com/watch?v=pPl3ZZdTP3g" className="popup-video-link video-popup__button">
            <Text className="fas fa-play"></Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default VideoPopUpSection;
