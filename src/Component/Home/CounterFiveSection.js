import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const CounterFiveSection = () => {
  return (
    <View style={styles.counterFive}>
      <View style={styles.container}>
        <View style={styles.counterFiveWrapper}>
          <View style={styles.counterFiveItem}>
            <Text style={styles.counterFiveItemIcon}>
              <Image source={require('../../../assets/images/icons/counter-five-icon1.svg')} alt="" />
            </Text>
            <View style={styles.counterFiveItemContent}>
              <Text style={styles.counterFiveItemNumber}>200+</Text>
              <Text style={styles.counterFiveItemText}>Team member</Text>
            </View>
          </View>
          <View style={styles.counterFiveItem}>
            <Text style={styles.counterFiveItemIcon}>
              <Image source={require('../../../assets/images/icons/counter-five-icon2.svg')} alt="" />
            </Text>
            <View style={styles.counterFiveItemContent}>
              <Text style={styles.counterFiveItemNumber}>20+</Text>
              <Text style={styles.counterFiveItemText}>Winning award</Text>
            </View>
          </View>
          <View style={styles.counterFiveItem}>
            <Text style={styles.counterFiveItemIcon}>
              <Image source={require('../../../assets/images/icons/counter-five-icon3.svg')} alt="" />
            </Text>
            <View style={styles.counterFiveItemContent}>
              <Text style={styles.counterFiveItemNumber}>10k</Text>
              <Text style={styles.counterFiveItemText}>Complete project</Text>
            </View>
          </View>
          <View style={styles.counterFiveItem}>
            <Text style={styles.counterFiveItemIcon}>
              <Image source={require('../../../assets/images/icons/counter-five-icon4.svg')} alt="" />
            </Text>
            <View style={styles.counterFiveItemContent}>
              <Text style={styles.counterFiveItemNumber}>90k</Text>
              <Text style={styles.counterFiveItemText}>Client review</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  counterFive: {
    paddingTop: '60px',
    paddingBottom: '60px',
  },
  container: {
    width: '100%',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  counterFiveWrapper: {
    gridTemplateColumns: '1fr 1fr',
    gap: 24,
  },
  counterFiveItem: {
    justifyContent: 'start',
    gap: 1.5,
    alignItems: 'center',
  },
  counterFiveItemIcon: {
    width: 'clamp(4rem, 2.022rem + 4.12vw, 5.625rem)',
    height: 'clamp(4rem, 2.022rem + 4.12vw, 5.625rem)',
    border: '1px solid gray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    flexShrink: 0,
  },
  counterFiveItemContent: {
    
  },
  counterFiveItemNumber: {
    marginBottom: '4px',
    color: 'black',
  },
  counterFiveItemText: {
    color: 'black',
  },
});

export default CounterFiveSection;
