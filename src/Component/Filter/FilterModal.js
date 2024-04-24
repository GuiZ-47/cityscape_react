import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Modal,
  Button,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import RadioButton from './RadioButton'
// import {initialFilter} from '../data/initialFilter'

const FilterModal = ({ modalVisible, setModalVisible, setCurrentPage, categories, filter, setFilter, setIntermediateFilter, intermediateFilter, setFilteredProperties}) => {
  
  

  console.log(`filtre intermédiare : ${intermediateFilter}`);
 

  
  if (categories.length === 0 ) {
    return (
      <Modal
      animationType="slide"
      transparent={false}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      
        <Image
          source={require("./../../../assets/LoadingFilter.png")}
          style={styles.image}
        />
      
    </Modal>
    )
  }

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={modalVisible}
      style={{ flex: 1, width :'100%'}}
     >
      <SafeAreaView style={{ flex: 1, padding: 20 }}>
        <View style={{ marginBottom: 20, paddingHorizontal: 30 }}>
          <Text style={{ fontSize: 26 }}>Filtering Properties</Text>
        </View>

        <RadioButton categories={categories} intermediateFilter={intermediateFilter} setIntermediateFilter={setIntermediateFilter} />
        <Button title="Apply" onPress={() => {
          setModalVisible(!modalVisible);
          setFilter(intermediateFilter);
          setCurrentPage(0);
        }} />
        <Button title="Clear" onPress={() => {
          setModalVisible(!modalVisible);
          setFilter([]);
          setIntermediateFilter([]);
          setFilteredProperties([]);
          setCurrentPage(0);
        }} />
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    // height: '100%',
  },
  image: {
    width: '130%',
  },
});

export default FilterModal;