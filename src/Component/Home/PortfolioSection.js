import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';

const PortfolioSection = () => {
  return (
    <View style={styles.portfolio}>
      <View style={styles.sectionHeading}>
        <Text style={styles.sectionHeadingSubtitle}>Latest Portfolio</Text>
        <Text style={styles.sectionHeadingTitle}>Optimum Homes & Properties Realty Experts</Text>
      </View>
      <View style={styles.portfolioWrapper}>
        <View style={styles.portfolioItem}>
          <View style={styles.portfolioItemThumb}>
            <Image source={require('../../../assets/images/thumbs/portfolio1.png')} alt="" style={styles.coverImg} />
          </View>
          <View style={styles.portfolioItemContent}>
            <Text style={styles.btn}><FontAwesomeIcon icon={faArrowRight} color={'#F69120'} size={50} /></Text>
            <View style={styles.portfolioItemInner}>
              <Text style={styles.portfolioItemTitle}>Outsourcing business</Text>
              <Text style={styles.portfolioItemDesc}>Real Estate is a vast industry that deals with the buying, selling, and renting of properties</Text>
            </View>
          </View>
        </View> 
        <View style={styles.portfolioItem}>
          <View style={styles.portfolioItemThumb}>
            <Image source={require('../../../assets/images/thumbs/portfolio2.png')} alt="" style={styles.coverImg} />
          </View>
          <View style={styles.portfolioItemContent}>
            <Text style={styles.btn}><FontAwesomeIcon icon={faArrowRight} color={'#F69120'} size={50} /></Text>
            <View style={styles.portfolioItemInner}>
              <Text style={styles.portfolioItemTitle}>Outsourcing business</Text>
              <Text style={styles.portfolioItemDesc}>Real Estate is a vast industry that deals with the buying, selling, and renting of properties</Text>
            </View>
          </View>
        </View> 
        <View style={styles.portfolioItem}>
          <View style={styles.portfolioItemThumb}>
            <Image source={require('../../../assets/images/thumbs/portfolio3.png')} alt="" style={styles.coverImg} />
          </View>
          <View style={styles.portfolioItemContent}>
            <Text style={styles.btn}><FontAwesomeIcon icon={faArrowRight} color={'#F69120'} size={50} /></Text>
            <View style={styles.portfolioItemInner}>
              <Text style={styles.portfolioItemTitle}>Outsourcing business</Text>
              <Text style={styles.portfolioItemDesc}>Real Estate is a vast industry that deals with the buying, selling, and renting of properties</Text>
            </View>
          </View>
        </View> 
        <View style={styles.portfolioItem}>
          <View style={styles.portfolioItemThumb}>
            <Image source={require('../../../assets/images/thumbs/portfolio4.png')} alt="" style={styles.coverImg} />
          </View>
          <View style={styles.portfolioItemContent}>
            <Text style={styles.btn}><FontAwesomeIcon icon={faArrowRight} color={'#F69120'} size={50} /></Text>
            <View style={styles.portfolioItemInner}>
              <Text style={styles.portfolioItemTitle}>Outsourcing business</Text>
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
    marginTop: 10,
    marginBottom: 5,
    alignItems: 'center',
    width: '100%',
  },
  sectionHeading: {
    alignItems: 'center',
  },
  sectionHeadingSubtitle: {
    textAlign: 'center',
    paddingTop: 10,
    borderRadius: 3,
    margin: 10,
    fontSize: 24,
    textTransform: 'uppercase',
    color: '#F69120',
    fontWeight: '600'
  },
  sectionHeadingTitle: {
    textAlign: 'center',
    marginVertical: 5,
    fontSize: 20,
  },
  portfolioWrapper: {
    alignItems: 'center',
    width: '100%',
  },
  portfolioItem: {
    width: '100%',
    marginVertical: 10,
    position: 'relative',
    borderRadius: 5,
  },
  portfolioItemThumb: {
    width: '100%',
    height: 630,
  },
  coverImg: {
    width: '100%',
    height: '100%',
  }, 
  portfolioItemContent: {
    width: '100%',
    backgroundColor: '#181616',
    position: 'absolute',
    left: 0,
    bottom: 0,
  },
  btn: {
    textAlign: 'right',
    borderRadius: 5,
    fontSize: 20,
    textTransform: 'uppercase',
    color: '#F69120',
    fontWeight: '600',
    paddingTop: 5,
    paddingRight: 10,
  },
  portfolioItemInner: {
    alignItems: 'center',
    paddingTop: 32,
  },
  portfolioItemTitle: {
    color: 'white',
    marginBottom: 14,
    fontWeight: '600',
  },
  portfolioItemDesc: {
    color: 'white',
    opacity: 0.8,
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 10,
  }
});

export default PortfolioSection;
