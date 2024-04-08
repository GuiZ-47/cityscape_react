import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';

const BlogSection = () => {
  return (
    <View className="blog padding-t-60 padding-b-120">
      <View className="container container-two">
        <View className="section-heading style-left style-flex flx-between align-items-end gap-3">
          <View className="section-heading__inner">
            <Text className="section-heading__subtitle"> <Text className="text-gradient fw-semibold">Latest Product</Text> </Text>
            <Text className="section-heading__title">Prestige Propert Management  property for you</Text>
          </View>
          <Text href="#" className="btn btn-outline-main">View More <Text className="icon-right"> <Text className="fas fa-plus"></Text> </Text> </Text>
        </View>
        <View className="row gy-4">
          <View className="col-lg-4 col-sm-6">
            <View className="blog-item">
              <View className="blog-item__thumb">
                <Text href="blog-details.html" className="blog-item__thumb-link">
                  <Image source="assets/images/thumbs/blog1.png" className="cover-img" alt="" />
                </Text>
              </View>
              <View className="blog-item__inner">
                <Text className="blog-item__date"> 09 <Text className="text">Mar</Text> </Text>
                <View className="blog-item__content">
                  <FlatList className="text-list flx-align"
                    data={[
                      {key: 'By admin'},
                      {key: 'Comments (05)'},
                    ]}
                    renderItem={({item}) => <View className="text-list__item font-12">
                        <Text className="icon"><Text className="fas fa-user"></Text></Text>
                        <Text href="#" className="link">{item.key}</Text>
                      </View>}
                  />
                  <Text className="blog-item__title">
                    <Text href="blog-details.html" className="blog-item__title-link border-effect"> Discover Endless Possibilities in Real Estate Live Your Best Life in a New Home </Text>
                  </Text>
                  <Text href="#" className="simple-btn text-heading fw-semibold">Book Now 
                    <Text className="icon-right text-gradient"> <Text className="fas fa-plus"></Text> </Text>
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View className="col-lg-4 col-sm-6">
            <View className="blog-item">
              <View className="blog-item__thumb">
                <Text href="blog-details.html" className="blog-item__thumb-link">
                  <Image source="assets/images/thumbs/blog2.png" className="cover-img" alt="" />
                </Text>
              </View>
              <View className="blog-item__inner">
                <Text className="blog-item__date"> 28 <Text className="text">Mar</Text> </Text>
                <View className="blog-item__content">
                  <FlatList className="text-list flx-align"
                    data={[
                      {key: 'By admin'},
                      {key: 'Comments (05)'},
                    ]}
                    renderItem={({item}) => <View className="text-list__item font-12">
                        <Text className="icon"><Text className="fas fa-user"></Text></Text>
                        <Text href="#" className="link">{item.key}</Text>
                      </View>}
                  />
                  <Text className="blog-item__title">
                    <Text href="blog-details.html" className="blog-item__title-link border-effect"> Turn Your Real Estate Dreams Into Reality Embrace the Real Estate Lifestyle </Text>
                  </Text>
                  <Text href="#" className="simple-btn text-heading fw-semibold">Book Now 
                    <Text className="icon-right text-gradient"> <Text className="fas fa-plus"></Text> </Text>
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View className="col-lg-4 col-sm-6">
            <View className="blog-item">
              <View className="blog-item__thumb">
                <Text href="blog-details.html" className="blog-item__thumb-link">
                  <Image source="assets/images/thumbs/blog3.png" className="cover-img" alt="" />
                </Text>
              </View>
              <View className="blog-item__inner">
                <Text className="blog-item__date"> 16 <Text className="text">Mar</Text> </Text>
                <View className="blog-item__content">
                  <FlatList className="text-list flx-align"
                    data={[
                      {key: 'By admin'},
                      {key: 'Comments (05)'},
                    ]}
                    renderItem={({item}) => <View className="text-list__item font-12">
                        <Text className="icon"><Text className="fas fa-user"></Text></Text>
                        <Text href="#" className="link">{item.key}</Text>
                      </View>}
                  />
                  <Text className="blog-item__title">
                    <Text href="blog-details.html" className="blog-item__title-link border-effect"> Discover Endless Possibilities in Real Estate Live Your Best Life in a New Home </Text>
                  </Text>
                  <Text href="#" className="simple-btn text-heading fw-semibold">Book Now 
                    <Text className="icon-right text-gradient"> <Text className="fas fa-plus"></Text> </Text>
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BlogSection;
