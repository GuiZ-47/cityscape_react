import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';

const BlogSection = () => {
  let posts = [];
  
  for (let i = 0; i < 3; i++) {
    posts.push(
      <View style={styles.blogItem}>
        <View style={styles.blogItemThumb}>
          <Text style={styles.blogItemThumbLink}>
            <Image source={require('../../../assets/images/thumbs/blog1.png')} style={styles.coverImg} alt="" />
          </Text>
        </View>
        <View style={styles.blogItemInner}>
          <Text style={styles.blogItemDate}> 09 <Text style={styles.text}>Mar</Text></Text>
          <View style={styles.blogItemContent}>
            <FlatList style={styles.textList}
              scrollEnabled={false}
              data={[
                {key: 'By admin'},
                {key: 'Comments (05)'}
              ]}
              renderItem={({item}) => <View style={styles.textListItem}>
                <FontAwesomeIcon icon={faUser} /><Text style={styles.link}>{item.key}</Text>
              </View>}
            />
            <View style={styles.blogItemTitle}>
              <Text style={styles.blogItemTitleLink}>Discover Endless Possibilities in Real Estate Live Your Best Life in a New Home</Text>
            </View>
            <Text style={styles.simpleBtn}>Book Now <FontAwesomeIcon icon={faPlus} /></Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.blog}>
      <View style={styles.sectionHeading}>
        <View style={styles.sectionHeadingInner}>
          <Text style={styles.sectionHeadingSubtitle}>Latest Product</Text>
          <Text style={styles.sectionHeadingTitle}>Prestige Propert Management property for you</Text>
        </View>
        <Text style={styles.btn}>View More <FontAwesomeIcon icon={faPlus} /></Text>
      </View>
      {posts}
    </View>
  );
};

const styles = StyleSheet.create({
  blogItem: {
    marginBottom: 10,
    flexDirection: 'column',
    width: '100%',
  },
  blogItemThumb: {
    width: 400,
    height: 350,
  },
  blogItemThumbLink: {
    width: 400,
    height: 350,
    color: '#0661E9',
  },
  coverImg: {
    width: 400,
    height: 250,
  },
  blogItemInner: {

  },
  blogItemDate: {
    backgroundColor: 'white',
    color: 'black',
    fontWeight: '500',
  },
  text: {
    color: 'lightgray',
    fontWeight: '300',
  },
  blogItemContent: {
    borderTop: 0,
  },
  textList: {
    width: '100%',
    flexDirection: 'row',
    borderRadius: 5,
  },
  textListItem: {
    flexDirection: 'row',
    gap: 5,
  },
  link: {
    color: 'lightgray'
  },
  blogItemTitle: {
    fontWeight: '600',
    color: 'black',
  },
  blogItemTitleLink: {
    color: 'black',
    fontWeight: '500'
  },
  simpleBtn: {
    textTransform: 'uppercase',
    opacity: 0.9,
    color: 'black',
    fontWeight: '600',
    color: '#FD7E14',
    fontWeight: '600',
  },
  blog: {
    alignItems: 'center',
    width: 400,
    paddingTop: 30,
    paddingBottom: 10,
  },
  sectionHeading: {
    alignItems: 'center',
  },
  sectionHeadingInner: {

  },
  sectionHeadingSubtitle: {
    textAlign: 'center',
    color: 'black',
    marginBottom: 10,
    fontSize: 24,
    textTransform: 'uppercase',
    color: '#F69120',
    fontWeight: '600',
  },
  sectionHeadingTitle: {
    textAlign: 'center',
    marginVertical: 5,
    fontSize: 20,
  },
  btn: {
    color: 'black',
    position: 'relative',
    borderRadius: 5,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
});

export default BlogSection;
