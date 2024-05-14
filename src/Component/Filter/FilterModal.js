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
  console.log(`filtre intermédiaire : ${intermediateFilter}`);
   
  if (categories.length === 0 ) {
    return (
        <Modal
        animationType='slide'
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
      <View style={styles.loadingContainer}>
        <Image
          source={require("./../../../assets/LoadingFilter.png")}
          style={styles.image}
        />
      </View>
        </Modal>
    );
  }

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={modalVisible}
      style={{ flex: 1, width: '100%' }}
     >
      <SafeAreaView style={{ flex: 1, padding: 20, gap: 20 }}>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 26 }}>Filtering Properties</Text>
        </View>

        <RadioButton categories={categories} intermediateFilter={intermediateFilter} setIntermediateFilter={setIntermediateFilter} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Button title="Apply" color="#F69120" onPress={() => {
            setModalVisible(!modalVisible);
            setFilter(intermediateFilter);
            setCurrentPage(0);
          }} />
          <Button title="Clear" color="#BDBDBD" onPress={() => {
            setModalVisible(!modalVisible);
            setFilter([]);
            setIntermediateFilter([]);
            setFilteredProperties([]);
            setCurrentPage(0);
          }} />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    backgroundColor: '#9BADC2',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default FilterModal;
