import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FeaturesPropertyDetails = ({ propertyDetails }) => {
 
  // gérer si les propFeatures est null
  return (
    <View style={styles.propertyDetailsItem}>
      <Text style={styles.title}> Features </Text>
      <View style={styles.content}>
        {propertyDetails[0].propFeatures.map((feature, index) => (
          <View style={styles.checkListItem}>
          <Text style={styles.icon}><Text>&#10004;</Text></Text>
          <Text style={styles.text}>{feature}</Text>
        </View>
        ))}
       </View>
    </View>
  );
};

const styles = StyleSheet.create({
  propertyDetailsItem: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    marginTop: 10,
  },
  checkListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    marginRight: 5,
  },
  text: {
    fontSize: 14,
  },
});

export default FeaturesPropertyDetails;