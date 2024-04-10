import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const OtherPropertiesPropertyDetails = () => {
  const properties = [
    {
      id: 1,
      image: 'https://picsum.photos/160/110',
      name: 'Relax House',
      link: 'property.html',
    },
    {
      id: 2,
      image: 'https://picsum.photos/160/110',
      name: 'Hunting Adventure',
      link: 'property.html',
    },
    {
      id: 3,
      image: 'https://picsum.photos/160/110',
      name: 'Homeownership',
      link: 'property.html',
    },
    {
      id: 4,
      image: 'https://picsum.photos/160/110',
      name: 'Real Dreams',
      link: 'property.html',
    },
    {
      id: 5,
      image: 'https://picsum.photos/160/110',
      name: 'New Doors',
      link: 'property.html',
    },
    {
      id: 6,
      image: 'https://picsum.photos/160/110',
      name: 'The Heart',
      link: 'property.html',
    },
  ];

  const handlePropertyPress = (link) => {
    // Mettez ici la logique pour rediriger vers la page de propriété
    // Par exemple : navigation.navigate('PropertyDetails', { propertyId });
  };

  return (
    <View style={styles.commonSidebar}>
      <Text style={styles.title}> Other Properties</Text>
      <View style={styles.row}>
        {properties.map((property) => (
          <TouchableOpacity
            key={property.id}
            style={styles.propertyItem}
            onPress={() => handlePropertyPress(property.link)}>
            <Image source={{ uri : property.image }} style={styles.coverImg} />
            <Text style={styles.text}>{property.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  commonSidebar: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  propertyItem: {
    width: '48%',
    marginBottom: 10,
  },
  coverImg: {
    width: '100%',
    height: 150, // Vous pouvez ajuster la hauteur selon vos besoins
    borderRadius: 5,
  },
  text: {
    fontSize: 14,
    marginTop: 5,
    textAlign: 'center',
  },
});

export default OtherPropertiesPropertyDetails;
