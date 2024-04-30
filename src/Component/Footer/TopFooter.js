import React from 'react';
import { View, Text, Image, FlatList, TextInput, Button, StyleSheet } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons/faMapMarkerAlt';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons/faPaperPlane';

const TopFooter = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.container}>
        <View style={styles.row1}>
          <View style={styles.col1}>
            <View style={styles.footerItem}>
              <View style={styles.footerItemLogo}>
                <Text href="index.html"> <Image source={require('../../../assets/images/logo/white-logo.png')} alt="" /></Text>
              </View>
              <Text style={styles.footerItemDesc}>It is a long established fact that a reader will be distracted</Text>
                    
              <Text style={styles.footerItemTitle}>Lets Work Together</Text>
              <View style={styles.row2}>
                <View style={styles.col2}>
                  <View style={styles.contactInfo}>
                    <Text style={styles.contactInfoIcon}><FontAwesomeIcon icon={faMapMarkerAlt} /></Text>
                    <View style={styles.contactInfoContent}>
                      <Text style={styles.contactInfoText}>Address</Text>
                      <Text style={styles.contactInfoAddress}>66 Broklyant, New York India</Text>
                    </View>
                  </View>
                </View>
    
                <View style={styles.col2}>
                  <View style={styles.contactInfo}>
                    <Text style={styles.contactInfoIcon}><FontAwesomeIcon icon={faPhone} /></Text>
                    <View style={styles.contactInfoContent}>
                      <Text style={styles.contactInfoText}>Phone Number</Text>
                      <Text style={styles.contactInfoAddress}>012 345 678 9101</Text>
                    </View>
                  </View>
                </View>
              </View>
                    
            </View>
          </View>
          <View style={styles.col3}></View>
          <View style={styles.col4}>
            <View style={styles.footerItem}>
              <Text style={styles.footerItemTitle}>Services</Text>
                <FlatList style={styles.footerMenu}
                  scrollEnabled={false}
                  data={[
                    {key: 'Reliable Rentals'},
                    {key: 'Golden Key Properties'},
                    {key: 'Swift Home Sales'},
                    {key: 'Elite Realty Services'},
                    {key: 'Dream Property Solutions'}
                  ]}
                  renderItem={({item}) => <View style={styles.footerMenuItem}><Text href="property.html" style={styles.footerMenuLink}>{item.key}</Text></View>}
                />
            </View>
          </View>
          <View style={styles.col3}></View>
          <View style={styles.col4}>
            <View style={styles.footerItem}>
              <Text style={styles.footerItemTitle}>Our gallery</Text>
              <Text style={styles.footerItemDesc}>It is a long established fact that  reader will be Elite Property </Text>

              <View action="#" style={styles.subscribeBox}>
                <View style={styles.inputGroup}>
                  <TextInput type="text" style={styles.formControl} placeholder="Your mail address" />
                  <Button title="Suscribe to the newslettter" color="#F69120" type="submit" style={styles.inputGroupText}><FontAwesomeIcon icon={faPaperPlane} /></Button>
                </View>
              </View>

              <FlatList style={styles.socialList}
                scrollEnabled={false}
                data={[
                  {key: 'Facebook'},
                  {key: 'Twitter'},
                  {key: 'LinkedIn'},
                  {key: 'Pinterest'},
                  {key: 'Instagram'},
                ]}
                renderItem={({item}) => <View style={styles.socialListItem}><Text href="https://www.facebook.com" style={styles.socialListLink}><Text className="fab fa-facebook-f"></Text>{item.key}</Text></View>}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    width: 400,
    marginTop: 'auto',
    backgroundColor: 'black',
    paddingTop: '60px',
    paddingBottom: '60px'
  },
  container: {
    width: '100%',
    //flexWrap: 'wrap',
    justifyContent: 'center'
  },
  row1: {
    //flexWrap: 'wrap',
    flexDirection: 'column',
    marginTop: 'calc(-1 * 3em)',
    marginRight: 'calc(-.5 * 1.5em)',
    marginLeft: 'calc(-.5 * 1.5em)'
  },
  col1: {
    //flexShrink: 0,
    width: '100%',
    maxWidth: '100%',
    paddingRight: 'calc(1.5em * .5)',
    paddingLeft: 'calc(1.5em * .5)',
    marginTop: '3em'
  },
  footerItem: {
    flexDirection: 'column',
    width: '100%',
    height: 250,
    margin: '0',
    padding: '0',
    //boxSizing: 'border-box'
  },
  footerItemLogo: {
    marginBottom: '20px'
  },
  footerItemDesc: {
    //maxWidth: '100%',
    color: 'white',
    opacity: 0.8,
    marginTop: '32px',
    //fontSize: 1.125,
    fontWeight: '300',
    //lineHeight: 1.6
  },
  footerItemTitle: {
    marginBottom: 'clamp(1rem, -0.826rem + 3.803vw, 2.5rem)',
    color: 'white',
    fontWeight: '500',
    marginTop: '1.5',
    //lineHeight: 1.2
  },
  row2: {
    //flexWrap: 'wrap',
    marginTop: 'calc(-1 * 1.5em)',
    marginRight: 'calc(-.5 * 1.5em)',
    marginLeft: 'calc(-.5 * 1.5em)'
  },
  col2: {
    flex: 0,
    flexShrink: 0,
    width: '50%',
    maxWidth: '100%',
    paddingRight: 'calc(1.5em * .5)',
    paddingLeft: 'calc(1.5em * .5)',
    marginTop: '1.5em'
  },
  contactInfo: {
    transition: 'background 0.3s ease-in-out',
    gap: 0.5
  },
  contactInfoIcon: {
    color: 'white'
  },
  contactInfoContent: {
    
  },
  contactInfoText: {
    opacity: 0.8,
    //fontSize: 1.125,
    fontWeight: '300',
    marginBottom: '4px',
    color: 'white'
  },
  contactInfoAddress: {
    color: 'white'
  },
  col3: {
    //display: 'none',
    flexShrink: 0,
    width: '100%',
    maxWidth: '100%',
    paddingRight: 'calc(1.5em * .5)',
    paddingLeft: 'calc(1.5em .5)',
    marginTop: '3em'
  },
  col4: {
    flexShrink: 0,
    width: '100%',
    maxWidth: '100%',
    paddingRight: 'calc(1.5em * .5)',
    paddingLeft: 'calc(1.5em * .5)',
    marginTop: '3em'
  },
  footerMenu: {
    color: 'white',
    padding: 0,
    margin: 0,
    listStyle: 'none'
  },
  footerMenuItem: {
    color: 'white',
    paddingBottom: '16px'
  },
  footerMenuLink: {
    position: 'relative',
    paddingLeft: '28px',
    //fontSize: 1,
    color: 'white',
    fontWeight: '300'
  },
  subscribeBox: {
    marginTop: '1.5rem'
  },
  inputGroup: {
    position: 'relative',
    //flexWrap: 'wrap',
    width: '100%'
  },
  formControl: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    position: 'relative',
    flex: 1,
    flexShrink: 1,
    width: '1%',
    minWidth: 0,
    borderColor: 'white',
    padding: '13px 16px',
    //fontSize: 0.9375,
    borderRadius: 5,
    fontWeight: '400',
    backgroundColor: 'transparent',
    color: 'white',
    //lineHeight: 1,
    margin: 0
  },
  inputGroupText: {
    marginLeft: '-1px',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    cursor: 'pointer',
    color: 'white',
    paddingRight: '1.5rem',
    paddingLeft: '1.5rem',
    border: 0,
    //fontSize: 1,
    fontWeight: '400',
    //lineHeight: 1.5,
    textAlign: 'center',
    //whiteSpace: 'nowrap',
    backgroundColor: '#E9ECEF',
    borderRadius: 0.375,
    textTransform: 'none',
    marginLeft: '0px',
    //fontFamily: 'inherit'
  },
  socialList: {
    //gap: 24,
    marginTop: '30px',
    border: '1px solid white',
    padding: '12px',
    borderRadius: 5,
    color: 'white',
    //listStyle: 'none'
  },
  socialListItem: {
    color: 'white'
  },
  socialListLink: {
    color: 'white',
    //flexWrap: 'wrap',
    //justifyContent: 'center'
  }
});

export default TopFooter;
