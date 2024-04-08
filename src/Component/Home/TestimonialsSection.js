import React from 'react';
import {View, Text, Image} from 'react-native';

const TestimonialsSection = () => {
  return (
    <View className="testimonial padding-y-60">
      <View className="container container-two">
        <View className="section-heading style-left style-flex">
          <View className="section-heading__inner">
            <Text className="section-heading__subtitle"> <Text className="text-gradient fw-semibold">Client Testimonial</Text> </Text>
            <Text className="section-heading__title">Optimum Homes & Properties property for you</Text>
          </View>
          <Text className="section-heading__desc">Use receiving accounts a number a currencies and get paid like a local Use receivin accounts a number paid the most beautiful think</Text>
        </View>
        <View className="testimonial__inner">
          <View className="row">
            <View className="col-lg-6 col-md-8">
              <View className="testimonial-box">
                <View className="testimonial-item">
                  <View className="testimonial-item__top flx-between">
                    <View className="testimonial-item__info">
                      <Text className="testimonial-item__name">Sakib Fahad</Text>
                      <Text className="testimonial-item__designation">Content Creator</Text>
                    </View>
                    <Image source="assets/images/icons/quote.svg" alt="" />
                  </View>
                  <Text className="testimonial-item__desc">Their product exceeded his my routi  expectations. The the quality and attention to detail a the a moutstanding and it has become an essential most a education the a man who can do tant clearly</Text>
                  <View className="star-rating flx-align justify-content-end">
                    <Text className="star-rating__item"><Text className="fas fa-star"></Text></Text>
                    <Text className="star-rating__item"><Text className="fas fa-star"></Text></Text>
                    <Text className="star-rating__item"><Text className="fas fa-star"></Text></Text>
                    <Text className="star-rating__item"><Text className="fas fa-star"></Text></Text>
                    <Text className="star-rating__item unabled"><Text className="fas fa-star"></Text></Text>
                  </View>
                </View>
                <View className="testimonial-item">
                  <View className="testimonial-item__top flx-between">
                    <View className="testimonial-item__info">
                      <Text className="testimonial-item__name">John Doe</Text>
                      <Text className="testimonial-item__designation">Frontend Developer</Text>
                    </View>
                    <Image source="assets/images/icons/quote.svg" alt="" />
                  </View>
                  <Text className="testimonial-item__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, autem! Consectetur illo tempora sed repudiandae eaque velit expedita, ipsa earum explicabo libero, voluptatibus aliquid odio</Text>
                  <View className="star-rating flx-align justify-content-end">
                    <Text className="star-rating__item"><Text className="fas fa-star"></Text></Text>
                    <Text className="star-rating__item"><Text className="fas fa-star"></Text></Text>
                    <Text className="star-rating__item"><Text className="fas fa-star"></Text></Text>
                    <Text className="star-rating__item"><Text className="fas fa-star"></Text></Text>
                    <Text className="star-rating__item unabled"><Text className="fas fa-star"></Text></Text>
                  </View>
                </View>
              </View>
            </View>
            <View className="col-lg-6">
              <View className="testimonial-thumb">
                <Image source="assets/images/thumbs/testimonial-img.png" alt="" className="cover-img" />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TestimonialsSection;
