import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Breadcrumb = ({ user }) => {
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
              <View style={styles.breadcrumbList}>
                <Text style={styles.breadcrumbItem}>
                  <Text> User n°{user.id}</Text>
                </Text>
                <Text style={styles.breadcrumbItem}>
                  <Text> : </Text>
                </Text>
                <Text style={styles.breadcrumbItem}>
                  <Text style={styles.breadcrumbItemText}>"{user.userName}"</Text>
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
    backgroundColor: 'black',
    height: 200,
  },
  breadcrumbImg: {
    position: 'absolute',
    bottom: 0,

  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',


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