import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const Breadcrumb = ({ Breadcrumb, property }) => {
  const navigation = useNavigation();

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
                    {/* Mettre ici un lien vers la page d'accueil */}
                    <Text>Home</Text>
                </Text>
                <Text style={styles.breadcrumbItem}>
                <Text> > </Text></Text>
                <Text style={styles.breadcrumbItem}>
                  <Text style={styles.breadcrumbItemText}>Property Details {property.propId}</Text>
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
    backgroundColor : 'black',
     height : 200 ,
  },
  breadcrumbImg: {
     position: 'absolute',
       bottom: 0,



  },
  container: {
    flex :1,
    justifyContent : 'center',
    alignItems : 'center',


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
    color : 'white',
     fontSize: 20,

  },
  breadcrumbList: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  breadcrumbItem: {
    color : 'white',
    fontSize: 20,
  },
  breadcrumbLink: {
    // Define your styles for the breadcrumb link
  },
  breadcrumbItemText: {
    color : 'white',
  },
});

export default Breadcrumb;