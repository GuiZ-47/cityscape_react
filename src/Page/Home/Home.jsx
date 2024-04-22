import React, {useState, useEffect } from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import PropertiesService from '../../Service/PropertyService';
import MobileMenu from './../../Component/Header/HeaderComponent';
import BannerSection from '../../Component/Home/BannerSection';
import AboutSection from '../../Component/Home/AboutSection';
import PropertySection from '../../Component/Home/PropertySection';
import CounterFiveSection from '../../Component/Home/CounterFiveSection';
import VideoPopUpSection from '../../Component/Home/VideoPopUpSection';
import PortfolioSection from '../../Component/Home/PortfolioSection';
import TestimonialsSection from '../../Component/Home/TestimonialsSection';
import BlogSection from '../../Component/Home/BlogSection';
import Footer from '../../Component/Footer/Footer';

const Home = ({ navigation }) => {
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
  
  return (
    <>
      <MobileMenu />
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
    </>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: '#F7F7F7',
    padding: 15,
    paddingTop: 40,
    width: '100%',
    alignItems: 'center'
  }
});

export default Home;
