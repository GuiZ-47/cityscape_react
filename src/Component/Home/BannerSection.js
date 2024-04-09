import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BannerSection = () => {
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
    padding: 10,
    backgroundColor: '#F7F7F7',
    width: '100%',
    flex: 1,
    justifyContent: 'center'
 },
  container: {
    width: '100%',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  bannerVideoContent: {
    textAlign: 'center',
    alignContent: 'center'
  },
  bannerVideoSubtitle: {
    textAlign: 'center',
    color: '#8A888D',
    padding: 10,
    borderRadius: 3,
    marginBottom: 10,
    letterSpacing: 0.11,
    fontSize: 20,
    textTransform: 'uppercase'
  },
  bannerVideoTitle: {
    textAlign: 'center',
    color: '#8A888D',
    marginTop: '8px',
    marginBottom: '32px',
    fontSize: 22,
    fontWeight: '400'
  },
  bannerVideoDesc: {
    textAlign: 'center',
    color: '#8A888D',
    maxWidth: '600px',
    margin: '0 auto',
    fontSize: 18,
    fontWeight: '300'
  }
});

export default BannerSection;