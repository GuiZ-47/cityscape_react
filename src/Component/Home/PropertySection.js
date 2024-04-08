import React from 'react';
import {View, Text, Image} from 'react-native';

const PropertySection = () => {
  return (
    <View className="property padding-y-120">
      <View className="container container-two">
        <View className="section-heading style-left style-dark flx-between align-items-end gap-3">
          <View className="section-heading__inner">
            <Text className="section-heading__subtitle"> <Text className="text-gradient fw-semibold">Latest property</Text> </Text>
            <Text className="section-heading__title">Prestige Propert Management  property for you</Text>
          </View>
          <Text href="#" className="btn btn-main">View More <Text className="icon-right"> <Text className="fas fa-arrow-right"></Text> </Text> </Text>
        </View>

        <View className="row gy-4">
          <View className="col-lg-4 col-sm-6">
            <View className="property-item">
              <View className="property-item__thumb">
                <Text href="property-details.html" className="link">
                  <Image source="assets/images/thumbs/property-1.png" alt="" className="cover-img" />
                </Text> 
                <Text className="property-item__badge">Sale</Text>
              </View>
              <View className="property-item__content">
                <Text className="property-item__price">$500.00 <Text className="day">/per day</Text> </Text>
                <Text className="property-item__title"> <Text href="property-details.html" className="link">Paramount Investments Prestige Property Management </Text> </Text>
                <Text className="property-item__location d-flex gap-2"> <Text className="icon"> <Text className="fas fa-map-marker-alt"></Text></Text> 66 Broklyant, New York America</Text>
                <View className="property-item__bottom flx-between gap-2">
                  <ul className="amenities-list flx-align">
                    <li className="amenities-list__item flx-align">
                      <Text className="icon"><Text className="fas fa-bed"></Text></Text>
                      <Text className="text">3 Beds</Text>
                    </li>
                    <li className="amenities-list__item flx-align">
                      <Text className="icon"><Text className="fas fa-bath"></Text></Text>
                      <Text className="text">3 Baths</Text>
                    </li>
                  </ul>
                  <Text href="#" className="simple-btn">Book Now <Text className="icon-right"> <Text className="fas fa-arrow-right"></Text> </Text> </Text>
                </View>
              </View>
            </View>
          </View>
          <View className="col-lg-4 col-sm-6">
            <View className="property-item">
              <View className="property-item__thumb">
                <Text href="property-details.html" className="link">
                  <Image source="assets/images/thumbs/property-2.png" alt="" className="cover-img" />
                </Text> 
                <Text className="property-item__badge">Sale</Text>
              </View>
              <View className="property-item__content">
                <Text className="property-item__price">$500.00 <Text className="day">/per day</Text> </Text>
                <Text className="property-item__title"> <Text href="property-details.html" className="link">Paramount Investments Prestige Property Management </Text> </Text>
                <Text className="property-item__location d-flex gap-2"> <Text className="icon"> <Text className="fas fa-map-marker-alt"></Text></Text> 66 Broklyant, New York America</Text>
                <View className="property-item__bottom flx-between gap-2">
                  <ul className="amenities-list flx-align">
                    <li className="amenities-list__item flx-align">
                      <Text className="icon"><Text className="fas fa-bed"></Text></Text>
                      <Text className="text">3 Beds</Text>
                    </li>
                    <li className="amenities-list__item flx-align">
                      <Text className="icon"><Text className="fas fa-bath"></Text></Text>
                      <Text className="text">3 Baths</Text>
                    </li>
                  </ul>
                  <Text href="#" className="simple-btn">Book Now <Text className="icon-right"> <Text className="fas fa-arrow-right"></Text> </Text> </Text>
                </View>
              </View>
            </View>
          </View>
          <View className="col-lg-4 col-sm-6">
            <View className="property-item">
              <View className="property-item__thumb">
                <Text href="property-details.html" className="link">
                  <Image source="assets/images/thumbs/property-3.png" alt="" className="cover-img" />
                </Text> 
                <Text className="property-item__badge">Sale</Text>
              </View>
              <View className="property-item__content">
                <Text className="property-item__price">$500.00 <Text className="day">/per day</Text> </Text>
                <Text className="property-item__title"> <Text href="property-details.html" className="link">Paramount Investments Prestige Property Management </Text> </Text>
                <Text className="property-item__location d-flex gap-2"> <Text className="icon"> <Text className="fas fa-map-marker-alt"></Text></Text> 66 Broklyant, New York America</Text>
                <View className="property-item__bottom flx-between gap-2">
                  <ul className="amenities-list flx-align">
                    <li className="amenities-list__item flx-align">
                      <Text className="icon"><Text className="fas fa-bed"></Text></Text>
                      <Text className="text">3 Beds</Text>
                    </li>
                    <li className="amenities-list__item flx-align">
                      <Text className="icon"><Text className="fas fa-bath"></Text></Text>
                      <Text className="text">3 Baths</Text>
                    </li>
                  </ul>
                  <Text href="#" className="simple-btn">Book Now <Text className="icon-right"> <Text className="fas fa-arrow-right"></Text> </Text> </Text>
                </View>
              </View>
            </View>
          </View>
          <View className="col-lg-4 col-sm-6">
            <View className="property-item">
              <View className="property-item__thumb">
                <Text href="property-details.html" className="link">
                  <Image source="assets/images/thumbs/property-4.png" alt="" className="cover-img" />
                </Text> 
                <Text className="property-item__badge">Sale</Text>
              </View>
              <View className="property-item__content">
                <Text className="property-item__price">$500.00 <Text className="day">/per day</Text> </Text>
                <Text className="property-item__title"> <Text href="property-details.html" className="link">Paramount Investments Prestige Property Management </Text> </Text>
                <Text className="property-item__location d-flex gap-2"> <Text className="icon"> <Text className="fas fa-map-marker-alt"></Text></Text> 66 Broklyant, New York America</Text>
                <View className="property-item__bottom flx-between gap-2">
                  <ul className="amenities-list flx-align">
                    <li className="amenities-list__item flx-align">
                      <Text className="icon"><Text className="fas fa-bed"></Text></Text>
                      <Text className="text">3 Beds</Text>
                    </li>
                    <li className="amenities-list__item flx-align">
                      <Text className="icon"><Text className="fas fa-bath"></Text></Text>
                      <Text className="text">3 Baths</Text>
                    </li>
                  </ul>
                  <Text href="#" className="simple-btn">Book Now <Text className="icon-right"> <Text className="fas fa-arrow-right"></Text> </Text> </Text>
                </View>
              </View>
            </View>
          </View>
          <View className="col-lg-4 col-sm-6">
            <View className="property-item">
              <View className="property-item__thumb">
                <Text href="property-details.html" className="link">
                  <Image source="assets/images/thumbs/property-5.png" alt="" className="cover-img" />
                </Text> 
                <Text className="property-item__badge">Sale</Text>
              </View>
              <View className="property-item__content">
                <Text className="property-item__price">$500.00 <Text className="day">/per day</Text> </Text>
                <Text className="property-item__title"> <Text href="property-details.html" className="link">Paramount Investments Prestige Property Management </Text> </Text>
                <Text className="property-item__location d-flex gap-2"> <Text className="icon"> <Text className="fas fa-map-marker-alt"></Text></Text> 66 Broklyant, New York America</Text>
                <View className="property-item__bottom flx-between gap-2">
                  <ul className="amenities-list flx-align">
                    <li className="amenities-list__item flx-align">
                      <Text className="icon"><Text className="fas fa-bed"></Text></Text>
                      <Text className="text">3 Beds</Text>
                    </li>
                    <li className="amenities-list__item flx-align">
                      <Text className="icon"><Text className="fas fa-bath"></Text></Text>
                      <Text className="text">3 Baths</Text>
                    </li>
                  </ul>
                  <Text href="#" className="simple-btn">Book Now <Text className="icon-right"> <Text className="fas fa-arrow-right"></Text> </Text> </Text>
                </View>
              </View>
            </View>
          </View>
          <View className="col-lg-4 col-sm-6">
            <View className="property-item">
              <View className="property-item__thumb">
                <Text href="property-details.html" className="link">
                  <Image source="assets/images/thumbs/property-6.png" alt="" className="cover-img" />
                </Text> 
                <Text className="property-item__badge">Sale</Text>
              </View>
              <View className="property-item__content">
                <Text className="property-item__price">$500.00 <Text className="day">/per day</Text> </Text>
                <Text className="property-item__title"> <Text href="property-details.html" className="link">Paramount Investments Prestige Property Management </Text> </Text>
                <Text className="property-item__location d-flex gap-2"> <Text className="icon"> <Text className="fas fa-map-marker-alt"></Text></Text> 66 Broklyant, New York America</Text>
                <View className="property-item__bottom flx-between gap-2">
                  <ul className="amenities-list flx-align">
                    <li className="amenities-list__item flx-align">
                      <Text className="icon"><Text className="fas fa-bed"></Text></Text>
                      <Text className="text">3 Beds</Text>
                    </li>
                    <li className="amenities-list__item flx-align">
                      <Text className="icon"><Text className="fas fa-bath"></Text></Text>
                      <Text className="text">3 Baths</Text>
                    </li>
                  </ul>
                  <Text href="#" className="simple-btn">Book Now <Text className="icon-right"> <Text className="fas fa-arrow-right"></Text> </Text> </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View className="text-center property__btn">
          <Text href="#" className="btn btn-main"> Sell All Listing <Text className="icon-right"> <Text className="fas fa-arrow-right"></Text> </Text> </Text>
        </View>
      </View>
    </View>
  );
};

export default PropertySection;
