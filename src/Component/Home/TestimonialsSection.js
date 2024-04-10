import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const TestimonialsSection = () => {
  return (
    <View style={styles.testimonial}>
      <View style={styles.container}>
        <View style={styles.sectionHeading}>
          <View style={styles.sectionHeadingInner}>
            <Text style={styles.sectionHeadingSubtitle}> <Text style={styles.textGradient}>Client Testimonial</Text> </Text>
            <Text style={styles.sectionHeadingTitle}>Optimum Homes & Properties property for you</Text>
          </View>
          <Text style={styles.sectionHeadingDesc}>Use receiving accounts a number a currencies and get paid like a local Use receivin accounts a number paid the most beautiful think</Text>
        </View>
        <View style={styles.testimonialInner}>
          <View style={styles.row}>
            <View style={styles.col}>
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
                    <Text style={styles.starRatingItem}><Text className="fas fa-star"></Text></Text>
                    <Text style={styles.starRatingItem}><Text className="fas fa-star"></Text></Text>
                    <Text style={styles.starRatingItem}><Text className="fas fa-star"></Text></Text>
                    <Text style={styles.starRatingItem}><Text className="fas fa-star"></Text></Text>
                    <Text style={styles.starRatingItemUnabled}><Text className="fas fa-star"></Text></Text>
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
                    <Text style={styles.starRatingItem}><Text className="fas fa-star"></Text></Text>
                    <Text style={styles.starRatingItem}><Text className="fas fa-star"></Text></Text>
                    <Text style={styles.starRatingItem}><Text className="fas fa-star"></Text></Text>
                    <Text style={styles.starRatingItem}><Text className="fas fa-star"></Text></Text>
                    <Text style={styles.starRatingItemUnabled}><Text className="fas fa-star"></Text></Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.col}>
              <View style={styles.testimonialThumb}>
                <Image source={require('../../../assets/images/thumbs/testimonial-img.png')} alt="" className="cover-img" />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  testimonials: {
    paddingTop: '30px',
    paddingBottom: '30px'
  },
  container: {
    width: '100%',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  sectionHeading: {
    marginBottom: '30px',
    textAlign: 'left',
    marginLeft: 0,
    maxWidth: '630px',
    marginRight: 'auto'
  },
  sectionHeadingInner: {
    maxWidth: '630px',
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
  testimonialInner: {
    padding: '50px 0',
    position: 'relative',
    zIndex: 1
  },
  row: {
    flexWrap: 'wrap',
    marginTop: 'calc(-1 * 1.5)',
    marginRight: 'calc(-.5 * 1.5)',
    marginLeft: 'calc(-.5 * 1.5)'
  },
  col: {
    flexShrink: 0,
    width: '100%',
    maxWidth: '100%',
    paddingRight: 'calc(1.5 * .5)',
    paddingLeft: 'calc(1.5 * .5)',
    marginTop: 0
  },
  testimonialBox: {
    marginLeft: 0,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 'clamp(1.5rem, -1.239rem + 5.705vw, 3.75rem)',
    maxWidth: '660px',
    boxShadow: '0px 4.8px 24.4px -6px rgba(19, 16, 34, 0.1), 0px 4px 13px -2px rgba(19, 16, 34, 0.06)'
  },
  testimonialItem: {
    width: '100%',
    position: 'relative',
    overflow: 'hidden'
  },
  testimonialItemTop: {
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  testimonialItemInfo: {
    
  },
  testimonialItemName: {
    fontWeight: '600',
    marginBottom: '5px',
    color: 'black',
    lineHeight: 1.2
  },
  testimonialItemDesignation: {
    
  },
  testimonialItemDesc: {
    marginTop: '20px',
    marginBottom: '24px',
    fontSize: 1.2
  },
  starRating: {
    gap: 5,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  starRatingItem: {
    fontSize: 1.25,
    backgroundClip: 'text',
    transition: 'background 0.3s ease-in-out'
  },
  starRatingItemUnabled: {
    background: 'transparent',
    fontSize: 1.25,
    transition: 'background 0.3s ease-in-out'
  },
  testimonialThumb: {
    borderRadius: 5,
    left: '50px',
    right: 0,
    textAlign: 'end',
    width: 'auto',
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    zIndex: -1,
    height: '100%'
  }
})

export default TestimonialsSection;
