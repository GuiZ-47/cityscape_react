import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const RadioButton = ({ categories, intermediateFilter, setIntermediateFilter }) => {
  const handleAddCategory = (catId) => {
    setIntermediateFilter([...intermediateFilter, catId]);
  };

  // création d'un objet qui trie et regroupe les objets catégories en tableaux en fonction de 'catMainCategoryName' 
  const categoriesByMainCategory = {};
  categories.forEach((category) => {
    const mainCategoryName = category.catMainCategoryName;
    // Condition pour exclure les objets des catégories principales du nouvel objet
    if (mainCategoryName) {
      // Création d'un tableau vide chaque fois qu'une nouvelle catégorie est rencontrée
      if (!categoriesByMainCategory[mainCategoryName]) {
        categoriesByMainCategory[mainCategoryName] = [];
      }
      // Ajout des catégories au bon tableau dans le nouvel objet créé
      categoriesByMainCategory[mainCategoryName].push(category);
    }
  });
  // console.log(JSON.stringify(categoriesByMainCategory,null,4));

  return (
    <View>
      {Object.keys(categoriesByMainCategory).map((mainCategoryName) => (
        <View key={mainCategoryName}>
          <Text style={styles.mainCategoryTitle}>{mainCategoryName}</Text>
          <View style={styles.categoryContainer}>
            {categoriesByMainCategory[mainCategoryName].map((category) => (
              <TouchableOpacity
                key={category.catId}
                style={styles.categoryButton}
                onPress={() => handleAddCategory(category.catId)}
                activeOpacity={0.8}
              >
                <View style={styles.radioCircle}>
                  {intermediateFilter.includes(category.catId) && <View style={styles.selectedRb} />}
                </View>
                <Text style={styles.radioText}>{category.catName}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ))}
    </View>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
    mainCategoryTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 10,
        marginLeft: 10,
    },
    categoryContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginLeft: 10,
    },
    categoryButton: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 10,
        marginTop: 5,
    },
    radioCircle: {
        height: 20,
        width: 20,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: "#000000",
        alignItems: "center",
        justifyContent: "center",
    },
    selectedRb: {
        width: 10,
        height: 10,
        borderRadius: 50,
        backgroundColor: "#000000",
    },
    radioText: {
        fontSize: 16,
        marginLeft: 10,
        color: "#000000",
        fontWeight: "500",
    },
});