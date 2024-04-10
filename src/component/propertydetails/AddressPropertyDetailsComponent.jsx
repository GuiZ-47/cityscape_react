import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { WebView } from 'react-native-webview';

const AddressPropertyDetails = () => {
  return (
    <View style={styles.propertyDetailsItem}>
      <Text style={styles.title}>Address</Text>
      <View style={styles.content}>
        <View style={styles.row}>
          <View style={styles.column}>
            <View style={styles.addressContent}>
              <Text style={styles.addressText}>Address</Text>
              <Text style={styles.addressTitle}>Mirpur 1, Chineese</Text>
            </View>
          </View>
          <View style={styles.column}>
            <View style={styles.addressContent}>
              <Text style={styles.addressText}>Code</Text>
              <Text style={styles.addressTitle}>2365</Text>
            </View>
          </View>
        </View>
        <View style={styles.addressMap}>
          <WebView
          originWhitelist={['*']}
                    source={{ html: `<html>
                    <body>
                      <iframe width="600" height="450" frameborder="0" style="border:0"
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1150112.1628856962!2d44.64619029447154!3d23.086651461779507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sBurj%20Khalifa!5e0!3m2!1sen!2sbd!4v1707037970965!5m2!1sen!2sbd' allowfullscreen></iframe>
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
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  addressText: {
    fontSize: 18,
  },
  addressTitle: {
    fontSize: 15,
    marginBottom: 0,
  },
  addressMap: {
    marginTop: 10,
    height: 200, // You may adjust the height as needed
  },
});

export default AddressPropertyDetails;
