import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const PortfolioSection = () => {
  return (
    <View style={styles.portfolio}>
      <View style={styles.sectionHeading}>
        <Text style={styles.sectionHeadingSubtitle}> <Text style={styles.textGradient}>Latest Portfolio</Text> </Text>
        <Text style={styles.sectionHeadingTitle}>Optimum Homes & Properties Realty Experts</Text>
      </View>
      <View style={styles.portfolioWrapper}>
        <View style={styles.portfolioItem}>
          <View style={styles.portfolioItemThumb}>
            <Image source={require('../../../assets/images/thumbs/portfolio1.png')} alt="" className="cover-img" />
          </View>
          <View style={styles.portfolioItemContent}>
            <Text href="portfolio-details.html" style={styles.btn}> 
              <Text style={styles.textGradient}></Text> 
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
            <Image source={require('../../../assets/images/thumbs/portfolio2.png')} alt="" className="cover-img" />
          </View>
          <View style={styles.portfolioItemContent}>
            <Text href="portfolio-details.html" style={styles.btn}> 
              <Text style={styles.textGradient}></Text> 
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
            <Image source={require('../../../assets/images/thumbs/portfolio3.png')} alt="" className="cover-img" />
          </View>
          <View style={styles.portfolioItemContent}>
            <Text href="portfolio-details.html" style={styles.btn}> 
              <Text style={styles.textGradient}></Text> 
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
            <Image source={require('../../../assets/images/thumbs/portfolio4.png')} alt="" className="cover-img" />
          </View>
          <View style={styles.portfolioItemContent}>
            <Text href="portfolio-details.html" style={styles.btn}> 
              <Text style={styles.textGradient}></Text> 
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
    paddingBottom: '30px',
    paddingTop: '60px'
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
  portfolioWrapper: {
    
  },
  portfolioItem: {
    width: '100%',
    position: 'relative',
    borderRadius: 5,
    overflow: 'hidden'
  },
  portfolioItemThumb: {
    borderRadius: 'inherit'
  },
  portfolioItemContent: {
    width: '100%',
    backgroundColor: '#181616',
    position: 'absolute',
    left: 0,
    bottom: '-22px',
    transition: '0.2s linear'
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
  },
  portfolioItemInner: {
    padding: 'clamp(1rem, -0.217rem + 2.536vw, 2rem)',
    paddingTop: '32px'
  },
  portfolioItemTitle: {
    color: 'white',
    marginBottom: '14px',
    fontWeight: '600'
  },
  link: {
    overflow: 'hidden',
    transition: '0.2s linear'
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
