import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Importa los componentes de pantalla
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import AboutScreen from './screens/AboutScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Carga las fuentes de íconos de forma estática para evitar errores de visualización
// Este método es más confiable en Expo Go para Android
const loadIoniconsFont = () => {
    return require('react-native-vector-icons/Fonts/Ionicons.ttf');
};

loadIoniconsFont();

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Definimos un Stack Navigator para la pantalla de inicio y detalle
const HomeStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: '#121212' },
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen
                name="Detail"
                component={DetailScreen}
                options={{
                    headerShown: true,
                    title: 'Detalles del Curso',
                    headerStyle: {
                        backgroundColor: '#1f1f1f',
                        borderBottomWidth: 1,
                        borderBottomColor: '#007AFF',
                    },
                    headerTintColor: '#fff',
                }}
            />
        </Stack.Navigator>
    );
};

const App = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;
                            // Usamos los íconos de la casa y del signo de interrogación
                            if (route.name === 'Inicio') {
                                iconName = focused ? 'home' : 'home-outline';
                            } else if (route.name === 'Acerca de') {
                                iconName = focused ? 'help-circle' : 'help-circle-outline';
                            }
                            return <Ionicons name={iconName} size={size} color={color} />;
                        },
                        tabBarActiveTintColor: '#007AFF',
                        tabBarInactiveTintColor: '#a9a9a9',
                        tabBarStyle: {
                            backgroundColor: '#1f1f1f',
                            borderTopWidth: 1,
                            borderTopColor: '#007AFF',
                        },
                        headerShown: false,
                    })}
                >
                    <Tab.Screen name="Inicio" component={HomeStack} />
                    <Tab.Screen name="Acerca de" component={AboutScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default App;
