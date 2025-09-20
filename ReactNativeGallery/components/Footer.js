import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.text}>© 2025 Galería de Cursos</Text>
            <Text style={styles.text}>Diseño y Programación de Software Multiplataforma DPS</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        padding: 15,
        backgroundColor: '#1f1f1f',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 1,
        borderTopColor: '#0d0d0dff',
    },
    text: {
        fontSize: 12,
        color: '#a9a9a9',
        marginVertical: 2,
    },
});

export default Footer;