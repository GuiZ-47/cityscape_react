import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Breadcrumb = ({ propertyDetails }) => {
  return (
    <View style={styles.breadcrumb}>
      <Image
        source={require('./../../../assets/images/thumbs/breadcrumb-img.png')}
        style={styles.breadcrumbImg}
      />
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.col}>
            <View style={styles.breadcrumbWrapper}>
              <Text style={styles.breadcrumbTitle}>Property Details</Text>
              <View style={styles.breadcrumbList}>
                <Text style={styles.breadcrumbItem}>
                  <Text>ID {propertyDetails[0].propId}: </Text>
                </Text>
                <Text style={styles.breadcrumbItem}>
                  <Text style={styles.breadcrumbItemText}>"{propertyDetails[0].propTitle}"</Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  breadcrumb: {
    paddingVertical: 5,
    backgroundColor: '#181616',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
  },
  breadcrumbImg: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  container: {
    //flex: 1,
    justifyContent: 'center',
    width: 319,
  },
  row: {
    // Define your styles for the row
  },
  col: {
    // Define your styles for the column
  },
  breadcrumbWrapper: {
    // Define your styles for the breadcrumb wrapper
  },
  breadcrumbTitle: {
    color: 'white',
    fontSize: 20,
  },
  breadcrumbList: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  breadcrumbItem: {
    color: 'white',
    fontSize: 20,
  },
  breadcrumbLink: {
    // Define your styles for the breadcrumb link
  },
  breadcrumbItemText: {
    color: 'white',
  },
});

export default Breadcrumb;