import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CounterFiveSection = () => {
  return (
    <View style={styles.counterFive}>
      <View style={styles.container}>
        <View style={styles.counterFiveWrapper}>
          <View style={styles.col}>
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
          <View style={styles.col}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  counterFive: {
    //paddingTop: 20,
    paddingBottom: 20
  },
  container: {
    width: '100%',
    flexWrap: 'wrap'
  },
  col: {
    flexDirection: 'row',
    gap: 50
  },
  counterFiveWrapper: {
    gap: 24
  },
  counterFiveItem: {
    alignItems: 'center'
  },
  counterFiveItemIcon: {
    alignItems: 'center',
    flexShrink: 0
  },
  counterFiveItemContent: {
    gap: 5
  },
  counterFiveItemNumber: {
    color: 'black',
    fontSize: 28,
    fontWeight: '400'
  },
  counterFiveItemText: {
    color: 'gray'
  },
});

export default CounterFiveSection;
