import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CategoryPropertyDetails = () => {
  const categories = [
    { name: 'Prime Investments', count: 1 },
    { name: 'ProHome Finders', count: 8 },
    { name: 'SmartHouse Agency', count: 3 },
    { name: 'Secure Property Partners', count: 5 },
  ];

  const handleCategoryPress = (categoryName) => {
    // Vous pouvez mettre ici la logique de redirection vers la page correspondante
    // Par exemple : navigation.navigate('CategoryDetails', { categoryName });
  };

  return (

      <View style={styles.commonSidebar}>
        <Text style={styles.title}>Category</Text>
        <View style={styles.categoryList}>
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              style={styles.categoryItem}
              onPress={() => handleCategoryPress(category.name)}>
              <Text style={styles.categoryName}>{category.name}</Text>
              <Text style={styles.categoryCount}>({category.count})</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

  );
};

const styles = StyleSheet.create({
  commonSidebar: {
    marginBottom: 20,
    backgroundColor: '#F8F8F8',
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categoryList: {
    marginTop: 5,
  },
  categoryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  categoryName: {
    fontSize: 16,
    color: '#333',
  },
  categoryCount: {
    fontSize: 14,
    color: '#999',
  },
});

export default CategoryPropertyDetails;
