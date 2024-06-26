import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { WebView } from 'react-native-webview';

const AddressPropertyDetails = ({propertyDetails}) => {
  return (
    <View style={styles.propertyDetailsItem}>
      <Text style={styles.title}>Address</Text>
      <View style={styles.content}>
        <View style={styles.row}>
          <View style={styles.column}>
            <View style={styles.addressContent}>
              <Text style={styles.addressText}>Location</Text>
              <Text style={styles.addressTitle}>{propertyDetails[0].propLocation}, {propertyDetails[0].propCity}</Text>
            </View>
          </View>
          <View style={styles.column}>
            <View style={styles.addressContent}>
              <Text style={styles.addressText}>Code</Text>
              <Text style={styles.addressTitle}>{propertyDetails[0].propPostcode}</Text>
            </View>
          </View>
          <View style={styles.column}>
            <View style={styles.addressContent}>
              <Text style={styles.addressText}>Country</Text>
              <Text style={styles.addressTitle}>{propertyDetails[0].propCountry}</Text>
            </View>
          </View>
        </View>
        <View style={styles.addressMap}>
          <WebView
          originWhitelist={['*']}
                    source={{ html: `<html>
                    <body>
                      <iframe width="100%" height="100%" frameborder="0" style="border:0"
                src='https://maps.google.com/maps?q=${propertyDetails[0].propLatitude},${propertyDetails[0].propLongitude}&output=embed' allowfullscreen></iframe>
                    </body>
                </html>` }}
          />
        </View>
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
    marginLeft: 7.5,
    marginBottom: 10,
  },
  content: {
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flex: 1,
  },
  addressContent: {
    //flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  addressText: {
    fontSize: 15,
  },
  addressTitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 0,
  },
  addressMap: {
    marginTop: 10,
    height: 200, // You may adjust the height as needed
    // width: '100%',
  },
});

export default AddressPropertyDetails;
