import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons/faUsers';

const AboutSection = () => {
  return (
    <View style={styles.about}>
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.col}>
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
          </View>
          <View style={styles.col}>
            <View style={styles.aboutContent}>
              <View style={styles.sectionHeading}>
                <Text style={styles.sectionHeadingSubtitle}> <Text style={styles.textGradient}>About Us</Text> </Text>
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
                <Text href="#" style={styles.btn}>Learn More<Text class="icon-right"><Text class="fas fa-arrow-right"></Text></Text></Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  about: {
    alignItems: 'center',
    width: 400,
    flexDirection: 'column', 
    //padding: '60px',
    //margin: '50px',
    //justifyContent: 'center'
  },
  container: {
    width: '100%',
    flexDirection: 'column', 
    //flexWrap: 'wrap',
    //justifyContent: 'center'
  },
  row: {
    flexDirection: 'column', 
    alignItems: 'center',
    //flexWrap: 'wrap',
    marginTop: 'calc(-1 * 1.5)',
    marginRight: 'calc(-.5 * 1.5)',
    marginLeft: 'calc(-.5 * 1.5)'
  },
  col: {
    flexDirection: 'column',
    //flexShrink: 0,
    width: '100%',
    maxWidth: '100%',
    paddingRight: 'calc(1.5 * .5)',
    paddingLeft: 'calc(1.5 * .5)',
    marginTop: 0 
 },
  aboutThumb: {
    //position: 'relative',
    flexDirection: 'column',
    //flexWrap: 'nowrap',
    //zIndex: 1,
    //textAlign: 'center',
    padding: 'clamp(2rem, -0.13rem + 4.437vw, 3.75rem)',
    //maxWidth: '580px'
  },
  coverImg: {
    width: '100%',
    //height: '100%',
    //resizeMode: 'stretch'
  },
  clientStatistics: {
    //backgroundColor: 'lightgray',
    padding: '20px 40px',
    //alignItems: 'center',
    //justifyContent: 'right', 
    borderRadius: 5,
    //position: 'absolute',
    //left: '50%',
    //transform: 'translateX(200px)',
    //bottom: 0,
    gap: 20
  },
  clientStatisticsIcon: {
    textAlign: 'center',
    fontSize: 20
  },
  clientStatisticsContent: {
    flexDirection: 'column',
    alignContent: 'center',
    //justifyContent: 'center'
  },
  clientStatisticsNumber: {
    textAlign: 'center',
    fontWeight: '500',
    marginBottom: '5px'
  },
  clientStatisticsText: {
    textAlign: 'center',
    fontWeight: '600'
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
    padding: 10,
    borderRadius: 3,
    marginBottom: 10,
    letterSpacing: 0.11,
    fontSize: 24,
    textTransform: 'uppercase'
  },
  textGradient: {
    color: '#FD7E14',
    fontWeight: '600'
  },
  sectionHeadingTitle: {
    fontSize: 22,
    marginBottom: 8
  },
  sectionHeadingDesc: {
    fontSize: 20
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
    fontSize: 22
    //fontWeight: '600'
  },
  aboutBoxDesc: {
    fontSize: 20
  },
  aboutButton: {
    marginTop: 'clamp(1rem, -0.826rem + 3.803vw, 2.5rem)'
  },
  btn: {
    textAlign: 'center',
    borderRadius: 5,
    fontWeight: '400',
    color: 'black',
    zIndex: 1,
    fontSize: 20,
    textTransform: 'uppercase',
    backgroundColor: 'transparent',
    borderColor: 'orange',
    padding: '14px 20px'
  }
});

export default AboutSection;
