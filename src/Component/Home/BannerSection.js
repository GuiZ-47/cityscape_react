import React, { useEffect } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Video, {VideoRef} from 'react-native-video';

const BannerSection = () => {
  /*useEffect(() => {
    intersectingAnimation();
  }, []);*/

  return (
    <View style={styles.bannerVideo}>
      //Video src="https://player.vimeo.com/external/263582970.hd.mp4?s=06ac4b713c0d5bff5071a615862f22c3e34adbc0&profile_id=174" loop muted autoplay class="banner-video__video" />

      <View className="container container-two">
        <View className="row justify-content-center">
          <View className="col-lg-8">
            <View className="banner-video__content text-center">
              <Text className="banner-video__subtitle bg-gray-800 text-uppercase font-14  text-white">FinTech Fusion</Text>
              <Text className="banner-video__title text-white">Land Organization find your fantasy house with us</Text>
              <Text className="banner-video__desc font-18 text-white">Unlock the Power of Real Estate Making Your Real Estate Dreams a Reality Real Estate here Unlock the Power of Real Estate</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bannerVideo: {
    padding: 140,
  },
});

export default BannerSection;
