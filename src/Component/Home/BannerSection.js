import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BannerSection = () => {
  return (
    <View style={styles.bannerVideo}>
      <Text style={styles.bannerVideoSubtitle}>FinTech Fusion</Text>
      <Text style={styles.bannerVideoTitle}>Land Organization find your fantasy house with us</Text>
      <Text style={styles.bannerVideoDesc}>Unlock the Power of Real Estate Making Your Real Estate Dreams a Reality Real Estate here Unlock the Power of Real Estate</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bannerVideo: {
    width: '100%',
    marginBottom: 20,
    alignContent: 'center',
  },
  bannerVideoSubtitle: {
    textAlign: 'center',
    color: '#8A888D',
    padding: 10,
    fontSize: 18,
    textTransform: 'uppercase',
  },
  bannerVideoTitle: {
    textAlign: 'center',
    color: '#8A888D',
    marginBottom: 5,
    fontSize: 20,
    fontWeight: '400',
  },
  bannerVideoDesc: {
    textAlign: 'center',
    color: '#8A888D',
    fontSize: 18,
    fontWeight: '300',
  }
});

export default BannerSection;