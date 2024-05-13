import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { SvgUri } from 'react-native-svg';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons/faUsers';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';

const AboutSection = () => {
  return (
    <View style={styles.about}>
      <View style={styles.aboutThumb}>
        <Image source={require('../../../assets/images/thumbs/about-img.png')} style={styles.coverImg} alt="" />
        <View style={styles.clientStatistics}>
          <Text style={styles.clientStatisticsIcon}><FontAwesomeIcon icon={faUsers} color={'orange'} /></Text>
          <View style={styles.clientStatisticsContent}>
            <Text style={styles.clientStatisticsNumber}>4,000+</Text>
            <Text style={styles.clientStatisticsText}>Satisfied Clients</Text>
          </View>
        </View>
      </View>
      <View style={styles.aboutContent}>
        <View style={styles.sectionHeading}>
          <Text style={styles.sectionHeadingSubtitle}>About Us</Text>
          <Text style={styles.sectionHeadingTitle}>Stay with us feel at home Your perfect stay awaits</Text>
          <Text style={styles.sectionHeadingDesc}>Real Estate is a vast industry that deals with the buying, selling, and renting of properties. It inv transactions related to residential</Text>
        </View>
        <View style={styles.aboutBox}>
          <View style={styles.aboutBoxIcon}>
            <SvgUri
              width={400}
              height={300}
              source={require('../../../assets/images/icons/about-icon.svg')}
            />
          </View>
          <View style={styles.aboutBoxContent}>
            <Text style={styles.aboutBoxTitle}>Your Dream Home Awaits</Text>
            <Text style={styles.aboutBoxDesc}>Real Estate is a vast industry that deals with the buying, selling, and renting of properties. It inv transactions related to residential, commercial, and industrial properties</Text>
          </View>
        </View>
        <View style={styles.aboutButton}>
          <Text href="#" style={styles.btn}>Learn More <FontAwesomeIcon icon={faArrowRight} color={'#FFFFFF'} /></Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  about: {
    width: 400,
    flexDirection: 'column',
    alignItems: 'center',
  },
  aboutThumb: {
    width: '100%',
  },
  coverImg: {
    width: '100%',
  },
  clientStatistics: {
    width: '100%',
    backgroundColor: 'lightgray',
    borderRadius: 5,
    gap: 20,
  },
  clientStatisticsIcon: {
    textAlign: 'center',
    fontSize: 20,
  },
  clientStatisticsContent: {
    width: '100%',
  },
  clientStatisticsNumber: {
    textAlign: 'center',
    fontWeight: '500',
  },
  clientStatisticsText: {
    textAlign: 'center',
    fontWeight: '600',
  },
  aboutContent: {
    alignItems: 'center',
    width: '100%',
  },
  sectionHeading: {
    alignItems: 'center',
    width: '100%',
    gap: 7.5,
  },
  sectionHeadingSubtitle: {
    width: '100%',
    textAlign: 'center',
    paddingTop: 10,
    fontSize: 24,
    textTransform: 'uppercase',
    color: '#F69120',
    fontWeight: '600',
  },
  sectionHeadingTitle: {
    width: '100%',
    paddingHorizontal: 5,
    fontSize: 22,
  },
  sectionHeadingDesc: {
    fontSize: 20,
  },
  aboutBox: {
    gap: 20,
  },
  aboutBoxIcon: {
    //flexShrink: 0
  },
  aboutBoxContent: {

  },
  aboutBoxSubtitle: {

  },
  aboutBoxTitle: {
    fontSize: 22,
    //fontWeight: '600'
  },
  aboutBoxDesc: {
    fontSize: 20
  },
  aboutButton: {
    margin: 20,
    backgroundColor: '#F69120',
    borderTopLeftRadius: 17.5,
    borderBottomRightRadius: 17.5,
    //backgroundColor: 'linear-gradient(90deg, #F69220 0.04%, #F68E20 28.67%, #F48421 54.05%, #F37221 78.11%, #F05A22 100.04%)',
  },
  btn: {
    padding: 10,
    fontWeight: '600',
    fontSize: 20,
    color: '#FFFFFF',
    textTransform: 'uppercase',
  }
});

export default AboutSection;
