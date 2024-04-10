import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const FeaturesPropertyDetails = () => {
  const featuresData = [
    { id: 1, text: 'Dream Property Solutions' },
    { id: 2, text: 'Secure Property Partners' },
    { id: 3, text: 'Doors to Your Future' },
    { id: 4, text: 'Prestige Property Management' },
    { id: 5, text: 'Global Real Estate Investments' },
    { id: 6, text: 'Your Home with Experience' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.checkListItem}>
      <Text style={styles.icon}><Text>&#10004;</Text></Text>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.propertyDetailsItem}>
      <Text style={styles.title}>Features</Text>
      <View style={styles.content}>
        <FlatList
          data={featuresData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          scrollEnabled={false}
        />
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