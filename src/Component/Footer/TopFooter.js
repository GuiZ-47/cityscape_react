import React from 'react';
import {View, Text, Image, TextInput, Button} from 'react-native';

const TopFooter = () => {
  return (
    <View className="footer footer-two padding-y-120">
      <View className="container container-two">
        <View className="row gy-5">
          <View className="col-xl-4 col-lg-6">
            <View className="footer-item">
              <View className="footer-item__logo">
                <Text href="index.html"> <Image src="assets/images/logo/white-logo.png" alt="" /></Text>
              </View>
              <Text className="footer-item__desc">It is a long established fact that a reader will be distracted</Text>
                    
              <Text className="footer-item__title mt-4 mt-lg-5">Lets Work Together</Text>
              <View className="row gy-4">
                <View className="col-6">
                  <View className="contact-info d-flex gap-2">
                    <Text className="contact-info__icon text-gradient"><Text className="fas fa-map-marker-alt"></Text></Text>
                    <View className="contact-info__content">
                      <Text className="contact-info__text text-white">Address</Text>
                      <Text className="contact-info__address text-white">66 Broklyant, New York India</Text>
                    </View>
                  </View>
                </View>
    
                <View className="col-6">
                  <View className="contact-info d-flex gap-2">
                    <Text className="contact-info__icon text-gradient"><Text className="fas fa-phone"></Text></Text>
                    <View className="contact-info__content">
                      <Text className="contact-info__text text-white">Phone Number</Text>
                      <Text className="contact-info__address text-white">012 345 678 9101</Text>
                    </View>
                  </View>
                </View>
              </View>
                    
            </View>
          </View>
          <View className="col-xl-1 d-xl-block d-none"></View>
          <View className="col-xl-3 col-sm-6">
            <View className="footer-item">
              <Text className="footer-item__title">Services</Text>
              <ul className="footer-menu">
                <li className="footer-menu__item"><Text href="property.html" className="footer-menu__link">Reliable Rentals </Text></li>
                <li className="footer-menu__item"><Text href="property.html" className="footer-menu__link">Golden Key Properties </Text></li>
                <li className="footer-menu__item"><Text href="property.html" className="footer-menu__link">Swift Home Sales </Text></li>
                <li className="footer-menu__item"><Text href="property.html" className="footer-menu__link">Elite Realty Services </Text></li>
                <li className="footer-menu__item"><Text href="property.html" className="footer-menu__link">Dream Property Solutions </Text></li>
              </ul>
            </View>
          </View>
          <View className="col-xl-1 d-xl-block d-none"></View>
          <View className="col-xl-3 col-sm-6">
            <View className="footer-item">
              <Text className="footer-item__title">Our gallery</Text>
              <Text className="footer-item__desc">It is a long established fact that  reader will be Elite Property </Text>

              <form action="#" className="mt-4 subscribe-box">
                <View className="input-group">
                  <TextInput type="text" className="form-control common-input common-input--md text-white" placeholder="Your mail address" />
                  <Button type="submit" className="px-4 input-group-text bg--gradient border-0 text-white"><Text className="fas fa-paper-plane"></Text></Button>
                </View>
              </form>

              <ul className="social-list">
                <li className="social-list__item"><Text href="https://www.facebook.com" className="social-list__link flx-center"><Text className="fab fa-facebook-f"></Text></Text> </li>
                <li className="social-list__item"><Text href="https://www.twitter.com" className="social-list__link flx-center"> <Text className="fab fa-twitter"></Text></Text></li>
                <li className="social-list__item"><Text href="https://www.linkedin.com" className="social-list__link flx-center"> <Text className="fab fa-linkedin-in"></Text></Text></li>
                <li className="social-list__item"><Text href="https://www.pinterest.com" className="social-list__link flx-center"> <Text className="fab fa-instagram"></Text></Text></li>
                <li className="social-list__item"><Text href="https://www.pinterest.com" className="social-list__link flx-center"> <Text className="fab fa-instagram"></Text></Text></li>
              </ul>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TopFooter;
