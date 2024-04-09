import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import { SvgUri } from 'react-native-svg';

const AboutSection = () => {
  return (
    <View style={styles.about}>
      <View style={styles.container}>
        <View style={styles.aboutThumb}>
          <Image source={require('../../../assets/images/thumbs/about-img.png')} style={styles.coverImg} alt="" />
          <View style={styles.clientStatistics}>
            <Text style={styles.clientStatisticsIcon}></Text>
            <View style={styles.clientStatisticsContent}>
              <Text style={styles.clientStatisticsNumber}>4,000+</Text>
              <Text style={styles.clientStatisticsText}>Satisfied Clients</Text>
            </View>
          </View>
        </View>
        <View style={styles.aboutContent}>
          <View style={styles.sectionHeading}>
            <Text style={styles.sectionHeadingSubtitle}> <Text style={styles.textGradient}>About Us</Text> </Text>
            <Text style={styles.sectionHeadingTitle}>Stay with us feel at home Your perfect stay awaits</Text>
            <Text style={styles.sectionHeadingDesc}>Real Estate is a vast industry that deals with the buying, selling, and renting of properties. It inv transactions related to residential</Text>
          </View>
          <View style={styles.aboutBox}>
            <View style={styles.aboutBoxIcon}>
              <SvgUri
                width="100%"
                height="100%"
                uri={require('../../../assets/images/icons/about-icon.svg')}
              />
            </View>
            <View style={styles.aboutBoxContent}>
              <Text style={styles.aboutBoxTitle}>Your Dream Home Awaits</Text>
              <Text style={styles.aboutBoxDesc}>Real Estate is a vast industry that deals with the buying, selling, and renting of properties. It inv transactions related to residential, commercial, and industrial properties</Text>
            </View>
          </View>
          <View style={styles.aboutButton}>
            <Text href="#" style={styles.btn}>Learn More</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  about: {
    alignItems: 'center',
    width: '100%',
    padding: '60px',
    margin: '50px',
    justifyContent: 'center'
 },
  container: {
    width: '100%',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  aboutThumb: {
  position: 'relative',
  zIndex: 1,
  textAlign: 'center',
  padding: 'clamp(2rem, -0.13rem + 4.437vw, 3.75rem)',
  maxWidth: '580px'
  },
  coverImg: {
    resizeMode: 'center'
  },
  clientStatistics: {
    backgroundColor: 'white',
    padding: '20px 40px',
    borderRadius: 5,
    position: 'absolute',
    left: '50%',
    transform: 'translateX(200px)',
    bottom: 0,
    gap: 20
  },
  clientStatisticsIcon: {
    fontSize: 20
  },
  clientStatisticsContent: {
    alignContent: 'center',
    justifyContent: 'center'
  },
  clientStatisticsNumber: {
    textAlign: 'center',
    fontWeight: '500',
    marginBottom: '5px'
  },
  clientStatisticsText: {
    textAlign: 'center'
  },
  aboutContent: {
    
  },
  sectionHeading: {
    marginBottom: '30px',
    textAlign: 'left',
    marginLeft: 0,
    maxWidth: '630px',
    marginRight: 'auto'
  },
  sectionHeadingSubtitle: {
    textAlign: 'center',
    color: 'white',
    padding: 10,
    borderRadius: 3,
    marginBottom: 10,
    letterSpacing: 0.11,
    fontSize: 20,
    textTransform: 'uppercase'
  },
  textGradient: {
    color: '#FD7E14',
    backgroundClip: 'text',
    transition: 'background 0.3s ease-in-out',
    fontWeight: '600'
  },
  sectionHeadingTitle: {
    position: 'relative',
    marginBottom: 0
  },
  sectionHeadingDesc: {
    marginLeft: 0,
    marginTop: 'clamp(1rem, -0.217rem + 2.536vw, 2rem)',
    fontSize: 20,
    maxWidth: '750px',
    marginRight: 'auto'
  },  
  aboutBox: {
    borderRadius: 5,
    border: '2px solid lightgray',
    padding: '20px',
    gap: 20
  },
  aboutBoxIcon: {
    flexShrink: 0
  },
  aboutBoxContent: {

  },
  aboutBoxSubtitle: {

  },
  aboutBoxTitle: {
    fontWeight: '600'
  },
  aboutBoxDesc: {
    fontSize: 20
  },
  aboutButton: {
    marginTop: 'clamp(1rem, -0.826rem + 3.803vw, 2.5rem)'
  },
  btn: {
    position: 'relative',
    borderRadius: 5,
    border: '1px solid transparent',
    fontWeight: '500',
    color: 'white',
    zIndex: 1,
    fontSize: 20,
    lineHeight: 1,
    textTransform: 'uppercase',
    backgroundColor: 'transparent',
    borderColor: 'orange',
    padding: '14px 20px'
  }
});

export default AboutSection;
