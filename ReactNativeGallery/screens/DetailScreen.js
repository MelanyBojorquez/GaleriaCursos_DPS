import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const DetailScreen = ({ route }) => {
    const { item } = route.params;

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.fullDescription}>{item.fullDescription}</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212', // Fondo de la pantalla de detalle en negro
    },
    image: {
        width: '100%',
        height: 300,
        resizeMode: 'cover',
    },
    content: {
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: '#007AFF', // Título en azul
    },
    fullDescription: {
        fontSize: 16,
        lineHeight: 24,
        color: '#a9a9a9', // Descripción completa en gris claro
        textAlign: 'justify',
    },
});

export default DetailScreen;
