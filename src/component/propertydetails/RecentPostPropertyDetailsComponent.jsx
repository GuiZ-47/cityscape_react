import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { SvgXml } from 'react-native-svg';
import SVG from "./../SVG/SvgComponent"


const RecentPostPropertyDetails = () => {
  const posts = [
    {
      id: 1,
      image: 'https://picsum.photos/82/112',
      category: 'Category',
      title: 'A picture is worth standard and stand us return',
      link: 'blog-details.html',
    },
    {
      id: 2,
      image: 'https://picsum.photos/82/112',
      category: 'Category',
      title: 'Your journ homeownership starts here',
      link: 'blog-details.html',
    },
    {
      id: 3,
      image: 'https://picsum.photos/82/112',
      category: 'Category',
      title: 'Trust us to guide you the a through the process',
      link: 'blog-details.html',
    },
  ];

  const handlePostPress = (link) => {
    // Vous pouvez mettre ici la logique de redirection vers la page de détails du blog
    // Par exemple : navigation.navigate('BlogDetails', { postId });
  };

  return (
    <View style={styles.commonSidebar}>
      <Text style={styles.title}>Recent Post</Text>
      {posts.map((post) => (
        <TouchableOpacity
          key={post.id}
          style={styles.latestBlog}
          onPress={() => handlePostPress(post.link)}>
          <Image source={{ uri : post.image }} style={styles.thumb} />

          <View style={styles.content}>
            <View style={styles.categoryContainer}>
              <Text style={styles.icon}><SvgXml xml={SVG.folderOpen} width= '20' height='20' /> </Text>
              <Text style={styles.category}>{post.category}</Text>
            </View>
            <Text style={styles.title}>{post.title}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  commonSidebar: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  latestBlog: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  thumb: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  content: {
    marginLeft: 10,
    flex: 1,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  category: {
    fontSize: 12,
    marginRight: 5,
  },
  icon: {
    color: '#ff4500',
  },
  title: {
    fontSize: 14,
    color: '#333',
  },
});

export default RecentPostPropertyDetails;
