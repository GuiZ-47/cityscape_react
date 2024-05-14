import React, { useState, useEffect } from 'react';
import { Text, ScrollView, StyleSheet, View, Image, ActivityIndicator } from 'react-native';
import axios from 'axios';

import GLOBALS from "../../Component/Common/Globals.js";

import Breadcrumb from "../../Component/User/BreadcrumbUserComponent";
import UserInfo from "../../Component/User/UserInfo";
import UserLogin from "../../Component/User/UserLogin";
import SubscribeToNewsletter from "../../Component/Newsletter/SubscribeToNewsletterComponent";

export default function User() {

    // Utilisation des hooks et des props de useState
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [JWT, setJWT] = useState('');
    const [user, setUser] = useState({});

    useEffect(() => {
    }, []);

    // Fonction pour se connecter et obtenir le JWT
    const loginAndGetJWT = async () => {
        const loginUrl = `${GLOBALS.BASE_URL}/api/login_check`;

        try {
            const response = await axios.post(loginUrl, {
                username: email,
                password: password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            // Récupérer le JWT de la réponse
            const jwt = response.data.token;

            // Mettre à jour le state avec le JWT
            setJWT(jwt);

            return jwt; // Retourner le JWT

        } catch (error) {
            console.error('Erreur lors de la connexion:', error);
            throw error;
        }
    };

    // Fonction pour obtenir les informations de l'utilisateur avec le JWT
    const getUserInfoWithJWT = async (jwt) => {
        const userInfoUrl = `${GLOBALS.BASE_URL}/api/react/user`;

        try {
            const response = await axios.get(userInfoUrl, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwt}` // Ajouter le JWT dans l'en-tête Authorization
                }
            });

            // Récupérer les informations de l'utilisateur de la réponse
            const userInfo = response.data;

            // Mettre à jour le state avec les informations de l'utilisateur
            setUser(userInfo);

            return userInfo;

        } catch (error) {
            console.error('Erreur lors de la récupération des informations de l\'utilisateur:', error);
        }
    };

    // Fonction pour gérer le processus complet de connexion et de récupération des informations de l'utilisateur
    const handleLogin = async () => {
        console.log('login Email:', email);
        console.log('login Mot de passe:', password);
        setIsLoading(true);
        try {
            // Se connecter et obtenir le JWT
            const jwt = await loginAndGetJWT();
            console.log('requête terminée : loginAndGetJWT');

            // Utiliser le JWT pour récupérer les données de l'utilisateur authentifié
            // On utilise la valeur de retour de loginAndGetJWT() plutôt que le state JWT car il n'est pas encore à jour ! Cela est dû au fait que les mises à jour de state en React sont asynchrones.
            // Lorsqu'on appelle setJWT(jwt), cela ne met pas immédiatement à jour la valeur de JWT. React planifie cette mise à jour de state et l'applique lors du prochain rendu.
            // Ainsi, lorsqu'on appelle getUserInfoWithJWT juste après loginAndGetJWT, la valeur de JWT est encore vide, car la mise à jour de state n'a pas encore été appliquée.
            await getUserInfoWithJWT(jwt);

            console.log('requête terminée : getUserInfoWithJWT');
            setIsLoading(false);

        } catch (error) {
            console.error('Erreur lors du processus de connexion:', error);
            setIsLoading(false);
            throw error;
        }
    };

    if (JSON.stringify(user) === "{}") {
        // if (true) {
        return (
            <>
                <UserLogin
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    onLogin={handleLogin}
                    JWT={JWT}
                    user={user}
                />
                {isLoading && (
                    <View style={{ position: 'absolute', bottom: 20, left: 170 }}>
                        <ActivityIndicator size="large" color="#0000ff" />
                    </View>
                )}
            </>
        );
    }

    return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <Breadcrumb user={user} />
            <UserInfo user={user} setUser={setUser} setJWT={setJWT} />
            <SubscribeToNewsletter />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        //paddingTop: 40,
    },
    loadingContainer: {
        flexDirection: 'column',
        height: '100%',
    },
    image: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    loadingTitle: {
        color: 'red',
        fontSize: 40,
        zIndex: 10,
    },
});