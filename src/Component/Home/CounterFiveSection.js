import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CounterFiveSection = () => {
  return (
    <View style={styles.counterFive}>
      <View style={styles.row}>
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
      </View>
      <View style={styles.row}>
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
  );
};

const styles = StyleSheet.create({
  counterFive: {
    paddingBottom: 20,
    gap: 24,
    width: '100%',
  },
  row: {
    width: '100%',
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'row',
    gap: 50,
  },
  counterFiveItem: {
    alignItems: 'center',
    width: '42.5%',
  },
  counterFiveItemIcon: {
    
  },
  counterFiveItemContent: {
    alignItems: 'center',
    gap: 5,
  },
  counterFiveItemNumber: {
    fontSize: 28,
    fontWeight: '400',
  },
  counterFiveItemText: {
    color: 'gray',
  },
});

export default CounterFiveSection;
