import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        paddingVertical: 15,
        backgroundColor: '#1f1f1f', // Fondo del encabezado en gris oscuro
        borderBottomWidth: 1,
        borderBottomColor: '#007AFF', // Borde en azul
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff', // Título en blanco
    },
});

export default Header;