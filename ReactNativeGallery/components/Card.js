import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet, View } from 'react-native';

const Card = ({ item, onPress }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#1f1f1f', // Fondo de la tarjeta en gris oscuro
        borderRadius: 10,
        margin: 10,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 8,
        marginBottom: 10,
    },
    infoContainer: {
        width: '100%',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5,
        color: '#007AFF', // Título en azul vibrante
    },
    description: {
        fontSize: 14,
        color: '#a9a9a9', // Descripción en gris claro
        textAlign: 'center',
    },
});

export default Card;