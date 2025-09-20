import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';

const AboutScreen = () => {
    return (
        <View style={styles.container}>
            <Header title="Acerca de" />
            <View style={styles.content}>
                <Text style={styles.text}>
                    Esta aplicación fue desarrollada como un ejercicio para demostrar los conceptos de React Native.
                </Text>
                <Text style={styles.text}>
                    Utiliza componentes reutilizables, estado, props, navegación con React Navigation y simulación de carga asincrónica.
                </Text>
                <Text style={styles.text}> Desarrollado por: Manuel Castro, Melany Bojorquez y Rafael Ruíz.</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1f1d1dff',
        alignItems: 'center',
    },
    content: {
        padding: 20,
    },
    text: {
        fontSize: 16,
        marginBottom: 15,
        textAlign: 'center',
        lineHeight: 22,
        color: '#ffffffff',
    },
});

export default AboutScreen;