import React from 'react';
import {View, Text, Image, FlatList, StyleSheet} from 'react-native';

const BlogSection = () => {
  let posts = [];
  
  for (let i = 0; i < 3; i++) {
    posts.push(
      <View style={styles.col}>
        <View style={styles.blogItem}>
          <View style={styles.blogItemThumb}>
            <Text href="blog-details.html" style={styles.blogItemThumbLink}>
              <Image source={require('../../../assets/images/thumbs/blog1.png')} className="cover-img" alt="" />
            </Text>
          </View>
          <View style={styles.blogItemInner}>
            <Text style={styles.blogItemDate}> 09 <Text className="text">Mar</Text> </Text>
            <View style={styles.blogItemContent}>
              <FlatList style={styles.textList}
                data={[
                  {key: 'By admin'},
                  {key: 'Comments (05)'},
                ]}
                renderItem={({item}) => <View style={styles.textListItem}>
                    <Text className="icon"><Text className="fas fa-user"></Text></Text>
                    <Text href="#" style={styles.link}>{item.key}</Text>
                  </View>}
              />
              <Text style={styles.blogItemTitle}>
                <Text href="blog-details.html" style={styles.blogItemTitleLink}> Discover Endless Possibilities in Real Estate Live Your Best Life in a New Home </Text>
              </Text>
              <Text href="#" style={styles.simpleBtn}>Book Now 
                <Text style={styles.textGradient}> <Text className="fas fa-plus"></Text> </Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.blog}>
      <View style={styles.container}>
        <View style={styles.sectionHeading}>
          <View style={styles.sectionHeadingInner}>
            <Text style={styles.sectionHeadingSubtitle}> <Text style={styles.textGradient}>Latest Product</Text> </Text>
            <Text style={styles.sectionHeadingTitle}>Prestige Propert Management  property for you</Text>
          </View>
          <Text href="#" style={styles.btn}>View More <Text className="icon-right"> <Text className="fas fa-plus"></Text> </Text> </Text>
        </View>
        <View style={styles.row}>
          {posts}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  col: {
    flexShrink: 0,
    width: '100%',
    maxWidth: '100%',
    paddingRight: 'calc(1.5 * .5)',
    paddingLeft: 'calc(1.5 * .5)',
    marginTop: 0
  },
  blogItem: {
    borderRadius: 5,
    overflow: 'hidden',
    height: '100%'
  },
  blogItemThumb: {
    maxHeight: '230px',
    overflow: 'hidden',
    position: 'relative'
  },
  blogItemThumbLink: {
    width: '100%',
    height: '100%',
    transition: '0.2s linear',
    textDecoration: 'none',
    color: '#0661E9'
  },
  blogItemInner: {
    position: 'relative'
  },
  blogItemDate: {
    padding: '6px 12px',
    borderRadius: 5,
    backgroundColor: 'white',
    position: 'absolute',
    right: 'clamp(1rem, -1.827rem + 4.56vw, 1.875rem)',
    top: '-30px',
    color: 'black',
    fontWeight: '500',
    fontSize: 1.75,
    lineHeight: 24
  },
  blogItemContent: {
    padding: 'clamp(1rem, -1.827rem + 4.56vw, 1.875rem)',
    paddingTop: '30px',
    border: '1px solid lightgray',
    borderTop: 0,
    borderRadius: '0 0 5px 5px'
  },
  textList: {
    padding: '8px 12px',
    gap: 10,
    border: '1px solid lightgray',
    borderRadius: 5,
    flexWrap: 'wrap',
    margin: 0,
    listStyle: 'none'
  },
  textListItem: {
    fontSize: 0.75
  },
  link: {
    color: 'lightgray',
    transition: '0.2s linear',
    textDecoration: 'none'
  },
  blogItemTitle: {
    marginTop: '15px',
    fontWeight: '600',
    margin: '0 0 16px 0',
    color: 'black',
    lineHeight: 1.2
  },
  blogItemTitleLink: {
    color: 'black',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontWeight: '500',
    transition: '0.2s linear',
    textDecoration: 'none'
  },
  simpleBtn: {
    fontSize: 0.75,
    textTransform: 'uppercase',
    opacity: 0.9,
    color: 'black',
    fontWeight: '600',
    transition: '0.2s linear',
    textDecoration: 'none'
  },
  blog: {
    paddingTop: '30px',
    paddingBottom: '60px'
  },
    container: {
    width: '100%',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  sectionHeading: {
    marginBottom: '30px',
    textAlign: 'left',
    marginLeft: 0,
    maxWidth: '630px',
    marginRight: 'auto'
  },
  sectionHeadingInner: {
    maxWidth: '630px',
  },
  sectionHeadingSubtitle: {
    textAlign: 'center',
    color: 'white',
    padding: 10,
    borderRadius: 3,
    marginBottom: 10,
    letterSpacing: 0.11,
    fontSize: 20,
    textTransform: 'uppercase'
  },
  textGradient: {
    color: '#FD7E14',
    backgroundClip: 'text',
    transition: 'background 0.3s ease-in-out',
    fontWeight: '600'
  },
  sectionHeadingTitle: {
    position: 'relative',
    marginBottom: 0
  },
  btn: {
    overflow: 'hidden',
    color: 'black',
    zIndex: 1,
    padding: '14px 20px',
    position: 'relative',
    borderRadius: 5,
    border: '1px solid transparent',
    fontWeight: '500',
    fontSize: 0.875,
    lineHeight: 1,
    textTransform: 'uppercase'
  },
  row: {
    flexWrap: 'wrap',
    marginTop: 'calc(-1 * 1.5)',
    marginRight: 'calc(-.5 * 1.5)',
    marginLeft: 'calc(-.5 * 1.5)'
  }
});

export default BlogSection;
