import React from 'react';
import {View, Text, Image} from 'react-native';

const PortfolioSection = () => {
  return (
    <View className="portfolio padding-t-120 padding-b-60">
      <View className="section-heading">
        <Text className="section-heading__subtitle"> <Text className="text-gradient fw-semibold">Latest Portfolio</Text> </Text>
        <Text className="section-heading__title">Optimum Homes & Properties Realty Experts</Text>
      </View>
      <View className="portfolio-wrapper">
        <View className="portfolio-item">
          <View className="portfolio-item__thumb">
            <Image source={require('../../../assets/images/thumbs/portfolio1.png')} alt="" className="cover-img" />
          </View>
          <View className="portfolio-item__content">
            <Text href="portfolio-details.html" className="btn btn-icon"> 
              <Text className="text-gradient line-height-0">
                <Text className="fas fa-arrow-right"></Text>
              </Text> 
            </Text>
            <View className="portfolio-item__inner">
              <Text className="portfolio-item__title">
                <Text href="portfolio-details.html" className="link">Outsourcing business</Text>
              </Text>
              <Text className="portfolio-item__desc">Real Estate is a vast industry that deals with the buying, selling, and renting of properties</Text>
            </View>
          </View>
        </View> 
        <View className="portfolio-item">
          <View className="portfolio-item__thumb">
            <Image source={require('../../../assets/images/thumbs/portfolio2.png')} alt="" className="cover-img" />
          </View>
          <View className="portfolio-item__content">
            <Text href="portfolio-details.html" className="btn btn-icon"> 
              <Text className="text-gradient line-height-0">
                <Text className="fas fa-arrow-right"></Text>
              </Text> 
            </Text>
            <View className="portfolio-item__inner">
              <Text className="portfolio-item__title">
                <Text href="portfolio-details.html" className="link">Outsourcing business</Text>
              </Text>
              <Text className="portfolio-item__desc">Real Estate is a vast industry that deals with the buying, selling, and renting of properties</Text>
            </View>
          </View>
        </View> 
        <View className="portfolio-item">
          <View className="portfolio-item__thumb">
            <Image source={require('../../../assets/images/thumbs/portfolio3.png')} alt="" className="cover-img" />
          </View>
          <View className="portfolio-item__content">
            <Text href="portfolio-details.html" className="btn btn-icon"> 
              <Text className="text-gradient line-height-0">
                <Text className="fas fa-arrow-right"></Text>
              </Text> 
            </Text>
            <View className="portfolio-item__inner">
              <Text className="portfolio-item__title">
                <Text href="portfolio-details.html" className="link">Outsourcing business</Text>
              </Text>
              <Text className="portfolio-item__desc">Real Estate is a vast industry that deals with the buying, selling, and renting of properties</Text>
            </View>
          </View>
        </View> 
        <View className="portfolio-item">
          <View className="portfolio-item__thumb">
            <Image source={require('../../../assets/images/thumbs/portfolio4.png')} alt="" className="cover-img" />
          </View>
          <View className="portfolio-item__content">
            <Text href="portfolio-details.html" className="btn btn-icon"> 
              <Text className="text-gradient line-height-0">
                <Text className="fas fa-arrow-right"></Text>
              </Text> 
            </Text>
            <View className="portfolio-item__inner">
              <Text className="portfolio-item__title">
                <Text href="portfolio-details.html" className="link">Outsourcing business</Text>
              </Text>
              <Text className="portfolio-item__desc">Real Estate is a vast industry that deals with the buying, selling, and renting of properties</Text>
            </View>
          </View>
        </View> 
      </View>
    </View>
  );
};

export default PortfolioSection;
