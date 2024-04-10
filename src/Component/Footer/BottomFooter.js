import React from 'react';
import {View, Text} from 'react-native';

const BottomFooter = () => {
  return (
    <View className="bottom-footer">
      <View className="container container-two">
        <View className="bottom-footer__inner flx-between gap-3">
          <Text className="bottom-footer__text"> &copy; CityScape 2024 | All Rights Reserved.</Text>
          <View className="footer-links">
            <Text href="#" className="footer-link">Terms & Condition</Text>
            <Text href="#" className="footer-link">Privacy Policy</Text>
            <Text href="contact.html" className="footer-link">Contact Us</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BottomFooter;
