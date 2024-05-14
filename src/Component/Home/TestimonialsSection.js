import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';

const TestimonialsSection = () => {
  return (
    <View style={styles.testimonial}>
      <View style={styles.sectionHeading}>
        <View style={styles.sectionHeadingInner}>
          <Text style={styles.sectionHeadingSubtitle}>Client Testimonial</Text>
          <Text style={styles.sectionHeadingTitle}>Optimum Homes & Properties property for you</Text>
        </View>
        <Text style={styles.sectionHeadingDesc}>Use receiving accounts a number a currencies and get paid like a local Use receivin accounts a number paid the most beautiful think</Text>
      </View>
      <View style={styles.testimonialInner}>
        <View style={styles.testimonialBox}>
          <View style={styles.testimonialItem}>
            <View style={styles.testimonialItemTop}>
              <View style={styles.testimonialItemInfo}>
                <Text style={styles.testimonialItemName}>Sakib Fahad</Text>
                <Text style={styles.testimonialItemDesignation}>Content Creator</Text>
              </View>
              <Image source={require('../../../assets/images/icons/quote.svg')} alt="" />
            </View>
            <Text style={styles.testimonialItemDesc}>Their product exceeded his my routi  expectations. The the quality and attention to detail a the a moutstanding and it has become an essential most a education the a man who can do tant clearly</Text>
            <View style={styles.starRating}>
              <Text style={styles.starRatingItem}><FontAwesomeIcon icon={faStar} /></Text>
              <Text style={styles.starRatingItem}><FontAwesomeIcon icon={faStar} /></Text>
              <Text style={styles.starRatingItem}><FontAwesomeIcon icon={faStar} /></Text>
              <Text style={styles.starRatingItem}><FontAwesomeIcon icon={faStar} /></Text>
              <Text style={styles.starRatingItemUnabled}><FontAwesomeIcon icon={faStar} /></Text>
            </View>
          </View>
          <View style={styles.testimonialItem}>
            <View style={styles.testimonialItemTop}>
              <View style={styles.testimonialItemInfo}>
                <Text style={styles.testimonialItemName}>John Doe</Text>
                <Text style={styles.testimonialItemDesignation}>Frontend Developer</Text>
              </View>
              <Image source={require('../../../assets/images/icons/quote.svg')} alt="" />
            </View>
            <Text style={styles.testimonialItemDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, autem! Consectetur illo tempora sed repudiandae eaque velit expedita, ipsa earum explicabo libero, voluptatibus aliquid odio</Text>
            <View style={styles.starRating}>
              <Text style={styles.starRatingItem}><FontAwesomeIcon icon={faStar} /></Text>
              <Text style={styles.starRatingItem}><FontAwesomeIcon icon={faStar} /></Text>
              <Text style={styles.starRatingItem}><FontAwesomeIcon icon={faStar} /></Text>
              <Text style={styles.starRatingItem}><FontAwesomeIcon icon={faStar} /></Text>
              <Text style={styles.starRatingItemUnabled}><FontAwesomeIcon icon={faStar} /></Text>
            </View>
          </View>
        </View>
        <View style={styles.testimonialThumb}>
          <Image source={require('../../../assets/images/thumbs/testimonial-img.png')} alt="" style={styles.coverImg} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  testimonials: {
    width: '100%',
  },
  sectionHeading: {
    marginLeft: 0,
  },
  sectionHeadingInner: {
    //maxWidth: '630px',
  },
  sectionHeadingSubtitle: {
    textAlign: 'center',
    padding: 10,
    marginBottom: 10,
    fontSize: 24,
    textTransform: 'uppercase',
    color: '#F69120',
    fontWeight: '600',
  },
  sectionHeadingTitle: {
    textAlign: 'center',
    marginVertical: 5,
    fontSize: 20,
  },
  sectionHeadingDesc: {
    marginLeft: 0,
    fontSize: 20,
  },
  testimonialInner: {
    //flexWrap: 'wrap',
  },
  testimonialBox: {
    width: '100%',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  testimonialItem: {
    width: '100%',
  },
  testimonialItemTop: {
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  testimonialItemInfo: {
    
  },
  testimonialItemName: {
    fontWeight: '600',
  },
  testimonialItemDesignation: {
    
  },
  testimonialItemDesc: {

  },
  starRating: {
    flexDirection: 'row',
    gap: 5,
  },
  starRatingItem: {

  },
  starRatingItemUnabled: {

  },
  testimonialThumb: {
    width: '100%',
  },
  coverImg: {
    width: 380,
    height: 250,
  } 
});

export default TestimonialsSection;
