import React, {useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

import PropertiesService from '../../Service/PropertyService';
import BannerSection from '../../Component/Home/BannerSection';
import AboutSection from '../../Component/Home/AboutSection';
import PropertySection from '../../Component/Home/PropertySection';
import CounterFiveSection from '../../Component/Home/CounterFiveSection';
import VideoPopUpSection from '../../Component/Home/VideoPopUpSection';
import PortfolioSection from '../../Component/Home/PortfolioSection';
import TestimonialsSection from '../../Component/Home/TestimonialsSection';
import BlogSection from '../../Component/Home/BlogSection';
import Footer from '../../Component/Footer/Footer';

const Home = ({ }) => {
  // Utilisation des hooks et des props de useState, ici
  // Pour l'utilisation de Redux, voir le projet « cityscape-react-native-redux »
  const [properties, setProperties] = useState([]);
  
  useEffect(() => {
    PropertiesService.getProperties()
    .then(function (response) {
      // En cas de réussite
      setProperties(response.data);
    })
    .catch(function (error) {
      // En cas d'erreur
      console.log(error);
    });
  }, []);

  if (properties.length === 0) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingTitle}>Loading ...</Text>
        <Image
          source={require("./../../../assets/loading.webp")}
          style={styles.image}
        />
      </View>
    );
  }
  
  if (properties.length === 0) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingTitle}>Loading…</Text>
        <Image
          source={require("./../../../assets/loading.webp")}
          style={styles.image}
        />
      </View>
    );
  }
  
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <BannerSection />
      <AboutSection />
      <PropertySection properties={properties} />
      <CounterFiveSection />
      <VideoPopUpSection />
      <PortfolioSection />
      <TestimonialsSection />
      <BlogSection />
      <Footer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: '#F7F7F7',
    padding: 15,
    //paddingTop: 40,
    width: '100%',
    alignItems: 'center',
  },
  loadingContainer: {
    flexDirection: 'column',
    height : '100%',
  },
  image: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  loadingTitle: {
    color : 'red',
     fontSize: 40,
     zIndex: 10,
  },
});

export default Home;