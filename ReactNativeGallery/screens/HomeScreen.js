import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator, Text } from 'react-native';
import Card from '../components/Card';
import Header from '../components/Header';
import Footer from '../components/Footer';
import itemsData from '../data/itemsData';

const HomeScreen = ({ navigation }) => {
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);

    useEffect(() => {
        // Simular una carga asincrónica de datos de una API
        const timer = setTimeout(() => {
            setItems(itemsData);
            setLoading(false);
        }, 10000); // Aumentamos el tiempo a 10 segundos para que sea más visible.

        return () => clearTimeout(timer);
    }, []);

    const renderItem = ({ item }) => (
        <Card
            item={item}
            onPress={() => navigation.navigate('Detail', { item })}
        />
    );

    return (
        <View style={styles.container}>
            <Header title="Galería de Cursos" />
            {loading ? (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#007AFF" />
                    <Text style={styles.loadingText}>Cargando elementos...</Text>
                </View>
            ) : (
                <FlatList
                    data={items}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.list}
                    showsVerticalScrollIndicator={false}
                    // Agregamos el Footer al final de la lista, para que se desplace con ella
                    ListFooterComponent={<Footer />}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        marginTop: 10,
        fontSize: 16,
        color: '#fff',
    },
    list: {
        paddingBottom: 20,
    },
});

export default HomeScreen;
