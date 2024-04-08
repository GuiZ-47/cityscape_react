import React, { useEffect } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Video, {VideoRef} from 'react-native-video';

const BannerSection = () => {
  /*useEffect(() => {
    intersectingAnimation();
  }, []);*/

  return (
    <View style={styles.bannerVideo}>

      <View style={styles.container}>
        <View style={styles.bannerVideoContent}>
          <Text style={styles.bannerVideoSubtitle}>FinTech Fusion</Text>
          <Text style={styles.bannerVideoTitle}>Land Organization find your fantasy house with us</Text>
          <Text style={styles.bannerVideoDesc}>Unlock the Power of Real Estate Making Your Real Estate Dreams a Reality Real Estate here Unlock the Power of Real Estate</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bannerVideo: {
    backgroundColor: 'lightgray',
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 'calc(1.5 * 0.5)',
    paddingLeft: 'calc(1.5 * 0.5)',
    marginRight: 'auto',
    marginLeft: 'auto',
 },
  container: {
    width: '100%',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  bannerVideoContent: {
    textAlign: 'center',
    alignContent: 'center'
  },
  bannerVideoSubtitle: {
    textAlign: 'center',
    color: 'white',
    padding: 10,
    borderRadius: 3,
    marginBottom: 10,
    letterSpacing: 0.11,
    fontSize: 20,
    textTransform: 'uppercase',
  },
  bannerVideoTitle: {
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 32,
    color: 'white',
    fontSize: 22,
    fontWeight: '400',
  },
  bannerVideoDesc: {
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
    maxWidth: '600px',
    margin: '0 auto',
    fontSize: 18,
    fontWeight: '300',
  },  
});

export default BannerSection;