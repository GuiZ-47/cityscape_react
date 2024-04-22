import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';

const PortfolioSection = () => {
  return (
    <View style={styles.portfolio}>
      <View style={styles.sectionHeading}>
        <Text style={styles.sectionHeadingSubtitle}><Text style={styles.textGradient}>Latest Portfolio</Text></Text>
        <Text style={styles.sectionHeadingTitle}>Optimum Homes & Properties Realty Experts</Text>
      </View>
      <View style={styles.portfolioWrapper}>
        <View style={styles.portfolioItem}>
          <View style={styles.portfolioItemThumb}>
            <Image source={require('../../../assets/images/thumbs/portfolio1.png')} alt="" style={styles.coverImg} />
          </View>
          <View style={styles.portfolioItemContent}>
            <Text href="portfolio-details.html" style={styles.btn}> 
              <Text style={styles.textGradient}><FontAwesomeIcon icon={faArrowRight} color={'white'} /></Text> 
            </Text>
            <View style={styles.portfolioItemInner}>
              <Text style={styles.portfolioItemTitle}>
                <Text href="portfolio-details.html" style={styles.link}>Outsourcing business</Text>
              </Text>
              <Text style={styles.portfolioItemDesc}>Real Estate is a vast industry that deals with the buying, selling, and renting of properties</Text>
            </View>
          </View>
        </View> 
        <View style={styles.portfolioItem}>
          <View style={styles.portfolioItemThumb}>
            <Image source={require('../../../assets/images/thumbs/portfolio2.png')} alt="" style={styles.coverImg} />
          </View>
          <View style={styles.portfolioItemContent}>
            <Text href="portfolio-details.html" style={styles.btn}> 
              <Text style={styles.textGradient}><FontAwesomeIcon icon={faArrowRight} color={'white'} /></Text> 
            </Text>
            <View style={styles.portfolioItemInner}>
              <Text style={styles.portfolioItemTitle}>
                <Text href="portfolio-details.html" style={styles.link}>Outsourcing business</Text>
              </Text>
              <Text style={styles.portfolioItemDesc}>Real Estate is a vast industry that deals with the buying, selling, and renting of properties</Text>
            </View>
          </View>
        </View> 
        <View style={styles.portfolioItem}>
          <View style={styles.portfolioItemThumb}>
            <Image source={require('../../../assets/images/thumbs/portfolio3.png')} alt="" style={styles.coverImg} />
          </View>
          <View style={styles.portfolioItemContent}>
            <Text href="portfolio-details.html" style={styles.btn}> 
              <Text style={styles.textGradient}><FontAwesomeIcon icon={faArrowRight} color={'white'} /></Text> 
            </Text>
            <View style={styles.portfolioItemInner}>
              <Text style={styles.portfolioItemTitle}>
                <Text href="portfolio-details.html" style={styles.link}>Outsourcing business</Text>
              </Text>
              <Text style={styles.portfolioItemDesc}>Real Estate is a vast industry that deals with the buying, selling, and renting of properties</Text>
            </View>
          </View>
        </View> 
        <View style={styles.portfolioItem}>
          <View style={styles.portfolioItemThumb}>
            <Image source={require('../../../assets/images/thumbs/portfolio4.png')} alt="" style={styles.coverImg} />
          </View>
          <View style={styles.portfolioItemContent}>
            <Text href="portfolio-details.html" style={styles.btn}> 
              <Text style={styles.textGradient}><FontAwesomeIcon icon={faArrowRight} color={'white'} /></Text> 
            </Text>
            <View style={styles.portfolioItemInner}>
              <Text style={styles.portfolioItemTitle}>
                <Text href="portfolio-details.html" style={styles.link}>Outsourcing business</Text>
              </Text>
              <Text style={styles.portfolioItemDesc}>Real Estate is a vast industry that deals with the buying, selling, and renting of properties</Text>
            </View>
          </View>
        </View> 
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  portfolio: {
    paddingTop: '60px',
    paddingBottom: '30px'
  },
  sectionHeading: {
    //marginBottom: '30px',
    //marginLeft: 0,
    //maxWidth: '630px',
    //marginRight: 'auto'
  },
  sectionHeadingSubtitle: {
    textAlign: 'center',
    color: 'white',
    padding: 10,
    borderRadius: 3,
    marginBottom: 10,
    //letterSpacing: 0.11,
    fontSize: 20,
    textTransform: 'uppercase'
  },
  textGradient: {
    textAlign: 'center',
    color: '#FD7E14',
    fontWeight: '600'
  },
  sectionHeadingTitle: {
    textAlign: 'center',
    position: 'relative',
    marginBottom: 0
  },
  portfolioWrapper: {
    alignItems: 'center'
  },
  portfolioItem: {
    width: '100%',
    position: 'relative',
    borderRadius: 5,
    overflow: 'hidden'
  },
  portfolioItemThumb: {
    width: 400,
    height: 250,
    borderRadius: 'inherit'
  },
  coverImg: {
    width: '100%',
    height: '100%',
    //resizeMode: 'contain'
  }, 
  portfolioItemContent: {
    width: '100%',
    backgroundColor: '#181616',
    position: 'absolute',
    left: 0,
    bottom: '-22px'
  },
  btn: {
    position: 'relative',
    borderRadius: 5,
    fontWeight: '500',
    color: 'white',
    zIndex: 1,
    fontSize: 20,
    //lineHeight: 1,
    textTransform: 'uppercase',
    //backgroundColor: 'transparent',
    //borderColor: 'orange',
    padding: '14px 20px'
  },
  portfolioItemInner: {
    alignItems: 'center',
    transition: '0.2s linear',
    padding: 'clamp(1rem, -0.217rem + 2.536vw, 2rem)',
    paddingTop: '32px'
  },
  portfolioItemTitle: {
    color: 'white',
    marginBottom: '14px',
    fontWeight: '600'
  },
  link: {
    overflow: 'hidden'
  },  
  portfolioItemDesc: {
    color: 'white',
    opacity: 0.8,
    fontSize: 1,
    fontWeight: '400',
    margin: 0,
    lineHeight: 1.6,
  }
});

export default PortfolioSection;
