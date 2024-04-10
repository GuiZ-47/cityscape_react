import React from 'react';
import BannerSection from '../../Component/Home/BannerSection.js';
import AboutSection from '../../Component/Home/AboutSection.js';
import PropertySection from '../../Component/Home/PropertySection.js';
import CounterFiveSection from '../../Component/Home/CounterFiveSection.js';
import VideoPopUpSection from '../../Component/Home/VideoPopUpSection.js';
import PortfolioSection from '../../Component/Home/PortfolioSection.js';
import TestimonialsSection from '../../Component/Home/TestimonialsSection.js';
import BlogSection from '../../Component/Home/BlogSection.js';
import Footer from '../Partials/Footer.jsx';
import { StyleSheet, ScrollView } from 'react-native';
import MobileMenu from "./../../Component/Header/HeaderComponent";

const Home = () => {
  return (
  <>
    < MobileMenu />
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <BannerSection />
      <AboutSection />
      <PropertySection />
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
    margin: 15,
    paddingTop: 40,
    padding: 0,
    alignItems: 'center'
  }
});

export default Home;
