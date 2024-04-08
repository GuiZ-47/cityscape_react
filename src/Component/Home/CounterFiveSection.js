import React from 'react';
import {View, Text, Image} from 'react-native';

const CounterFiveSection = () => {
  return (
    <View className="counter-five padding-y-120">
      <View className="container container-two">
        <View className="counter-five-wrapper">
          <View className="counter-five-item style-two d-flex align-items-center">
            <Text className="counter-five-item__icon">
              <Image source="assets/images/icons/counter-five-icon1.svg" alt="" />
            </Text>
            <View className="counter-five-item__content">
              <Text className="counter-five-item__number text-heading">200+</Text>
              <Text className="counter-five-item__text text-body">Team member</Text>
            </View>
          </View>
          <View className="counter-five-item style-two d-flex align-items-center">
            <Text className="counter-five-item__icon">
              <Image source="assets/images/icons/counter-five-icon2.svg" alt="" />
            </Text>
            <View className="counter-five-item__content">
              <Text className="counter-five-item__number text-heading">20+</Text>
              <Text className="counter-five-item__text text-body">Winning award</Text>
            </View>
          </View>
          <View className="counter-five-item style-two d-flex align-items-center">
            <Text className="counter-five-item__icon">
              <Image source="assets/images/icons/counter-five-icon3.svg" alt="" />
            </Text>
            <View className="counter-five-item__content">
              <Text className="counter-five-item__number text-heading">10k</Text>
              <Text className="counter-five-item__text text-body">Complete project</Text>
            </View>
          </View>
          <View className="counter-five-item style-two d-flex align-items-center">
            <Text className="counter-five-item__icon">
              <Image source="assets/images/icons/counter-five-icon4.svg" alt="" />
            </Text>
            <View className="counter-five-item__content">
              <Text className="counter-five-item__number text-heading">90k</Text>
              <Text className="counter-five-item__text text-body">Client review</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CounterFiveSection;
