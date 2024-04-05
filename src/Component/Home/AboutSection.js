import React from 'react';
import {View, Text, Image} from 'react-native';

const AboutSection = () => {
  return (
    <View className="about padding-y-120">
      <View className="container container-two">
        <View className="row gy-4 align-items-center">
          <View className="col-lg-6">
            <View className="about-thumb">
              <Image source="assets/images/thumbs/about-img.png" alt="" />
              <View className="client-statistics flx-align">
                <Text className="client-statistics__icon">
                  <Text className="fas fa-users text-gradient"></Text>
                </Text>
                <View className="client-statistics__content">
                  <Text className="client-statistics__number statisticsCounter">4,000+</Text>
                  <Text className="client-statistics__text fs-18">Satisfied Clients</Text>
                </View>
              </View>
            </View>
          </View>
          <View className="col-lg-6">
            <View className="about-content">
              <View className="section-heading style-left">
                <Text className="section-heading__subtitle"> <Text className="text-gradient fw-semibold">About Us</Text> </Text>
                <Text className="section-heading__title">Stay with us feel at home Your perfect stay awaits</Text>
                <Text className="section-heading__desc">Real Estate is a vast industry that deals with the buying, selling, and renting of properties. It inv transactions related to residential</Text>
              </View>
              <View className="about-box d-flex">
                <View className="about-box__icon">
                  <Image source="assets/images/icons/about-icon.svg" alt="" />
                </View>
                <View className="about-box__content">
                  <Text className="about-box__title">Your Dream Home Awaits</Text>
                  <Text className="about-box__desc font-13">Real Estate is a vast industry that deals with the buying, selling, and renting of properties. It inv transactions related to residential, commercial, and industrial properties</Text>
                </View>
              </View>
              <View className="about-button">
                <Text href="#" className="btn btn-main">Learn More <Text className="icon-right"> <Text className="fas fa-arrow-right"></Text> </Text> </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AboutSection;
