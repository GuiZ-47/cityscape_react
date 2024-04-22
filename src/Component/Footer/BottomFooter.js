import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BottomFooter = () => {
  return (
    <View style={styles.bottomFooter}>
      <View style={styles.container}>
        <View style={styles.bottomFooterInner}>
          <Text style={styles.bottomFooterText}> &copy; CityScape 2024 | All Rights Reserved.</Text>
          <View style={styles.footerLinks}>
            <Text href="#" style={styles.footerLink}>Terms & Condition</Text>
            <Text href="#" style={styles.footerLink}>Privacy Policy</Text>
            <Text href="contact.html" style={styles.footerLink}>Contact Us</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomFooter: {
    width: 400,
    alignItems: 'center',
    backgroundColor: 'black'
  },
  container: {
    //width: '100%',
    //flexWrap: 'wrap',
    justifyContent: 'center'
  },
  bottomFooterInner: {
    padding: '20px 0',
    bordeTop: '1px solid white',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10
  },
  bottomFooterText: {
    //fontSize: 0.9375,
    textAlign: 'center',
    fontWeight: '400',
    color: 'white',
    margin: 0,
    //lineHeight: 1.6
  },
  footerLinks: {
    flexDirection: 'row',
    alignItems: 'center',
    //flexWrap: 'wrap',
    gap: 15
  },
  footerLink: {
    //fontSize: 0.9375,
    fontWeight: '300',
    color: 'white'
  }
});

export default BottomFooter;
