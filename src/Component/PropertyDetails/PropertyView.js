import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useSelector } from "react-redux";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import GLOBALS from "../Common/Globals";

// -----------TRADUCTION-------------
// import "intl";
// import "intl/locale-data/jsonp/en"; les fichiers de trad 

export default function PropertyView() {
    // const [propertyDB, setPropertyDB] = useState({});
    // const [isOpen, setOpen] = useState(false);
    // const openGallery = () => setOpen(true);
    // const closeGallery = () => setOpen(false);
    // const navigation = useNavigation();

    // const { id } = route.params;
    // const { list } = useSelector((state) => state.properties);
    // const property = list.find((x) => x.id === id); // en symfony ça serait un truc comme : select * from properties where id = id
   
    // console.log(useSelector((state)=>state.properties.filtered));

    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#fff',
            borderRadius: 8,
            padding: 15,
            marginBottom: 15,
            borderWidth: 1,
            borderColor: '#ddd',
        },
        title: {
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 10,
        },
        detail: {
            fontSize: 16,
            marginBottom: 5,
        },
    });

    return (
    <View style={styles.container}>
        <Text style={styles.title}>nom</Text>
        <Text style={styles.detail}>Size: taille</Text>
        <Text style={styles.detail}>Address: adresse</Text>
        <Text style={styles.detail}>Price: prix</Text>
    </View>
    );
};
