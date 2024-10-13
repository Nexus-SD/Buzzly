import React from 'react';
import { View, Text, Image, TextInput, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Definir as telas da aplicação
function HomePage() {
  // Função para lidar com o clique em cada destino
  const handleDestinationClick = (destination) => {
    console.log(`Destino clicado: ${destination}`);
    // Aqui você pode definir a navegação ou ação futura
  };

  return (
    <View style={styles.container}>

      <View style={styles.backgroundLayer} />

      <ScrollView contentContainerStyle={styles.contentContainer}>
        
        <View style={styles.searchBarWrapper}>
          <View style={styles.searchBar}>
            <TextInput
              placeholder="Qual evento você está procurando?"
              placeholderTextColor="#ccc"
              style={styles.searchInput}
            />
          </View>
        </View>

        {/* Caixa de conteúdo com fundo claro, a partir da seção "Escolha seu destino" */}
        <View style={styles.contentWrapper}>

          <Text style={styles.sectionTitle}>Escolha seu destino</Text>
          <View style={styles.iconRow}>

            {/* Botão de Pubs e Bares */}
            <TouchableOpacity onPress={() => handleDestinationClick('Pubs e Bares')}>
              <View style={styles.iconItem}>
                <View style={styles.iconButton}>
                  <Image source={require('./images/teatros.png')} style={styles.icon} />
                </View>
                <Text style={styles.iconLabel}>Pubs e Bares</Text>
              </View>
            </TouchableOpacity>

            {/* Botão de Boates */}
            <TouchableOpacity onPress={() => handleDestinationClick('Boates')}>
              <View style={styles.iconItem}>
                <View style={styles.iconButton}>
                  <Image source={require('./images/teatros.png')} style={styles.icon} />
                </View>
                <Text style={styles.iconLabel}>Boates</Text>
              </View>
            </TouchableOpacity>

            {/* Botão de Festas e Shows */}
            <TouchableOpacity onPress={() => handleDestinationClick('Festas e Shows')}>
              <View style={styles.iconItem}>
                <View style={styles.iconButton}>
                  <Image source={require('./images/teatros.png')} style={styles.icon} />
                </View>
                <Text style={styles.iconLabel}>Festas e Shows</Text>
              </View>
            </TouchableOpacity>

            {/* Botão de Teatros */}
            <TouchableOpacity onPress={() => handleDestinationClick('Teatros')}>
              <View style={styles.iconItem}>
                <View style={styles.iconButton}>
                  <Image source={require('./images/teatros.png')} style={styles.icon} />
                </View>
                <Text style={styles.iconLabel}>Teatros</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Text style={styles.sectionTitle}>Evento em Destaque</Text>
        </View>
        
      </ScrollView>
    </View>
  );
}

function FavoritesPage() {
  return (
    <View style={styles.centered}>
      <Text style={styles.pageText}>Favoritos</Text>
    </View>
  );
}

function TicketsPage() {
  return (
    <View style={styles.centered}>
      <Text style={styles.pageText}>Ingressos</Text>
    </View>
  );
}

function ProfilePage() {
  return (
    <View style={styles.centered}>
      <Text style={styles.pageText}>Perfil</Text>
    </View>
  );
}


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Início') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Favoritos') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'Ingressos') {
            iconName = focused ? 'ticket' : 'ticket-outline';
          } else if (route.name === 'Perfil') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#f55',  // Cor do ícone quando ativo
        tabBarInactiveTintColor: '#ccc',  // Cor do ícone quando inativo

        headerShown: false,  

        tabBarStyle: {
          backgroundColor: '#17212e', 
          height: 50, 
          paddingBottom: 5, 
          paddingTop: 5, 
          borderTopWidth: 0, 
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: 'bold', 
        },
      })}
    >
      <Tab.Screen name="Início" component={HomePage} />
      <Tab.Screen name="Favoritos" component={FavoritesPage} />
      <Tab.Screen name="Ingressos" component={TicketsPage} />
      <Tab.Screen name="Perfil" component={ProfilePage} />
    </Tab.Navigator>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000', 
  },
  backgroundLayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#000', 
  },
  searchBarWrapper: {
    padding: 16,
    backgroundColor: '#000', 
  },
  searchBar: {
    backgroundColor: '#17212e', 
    borderRadius: 10,
    padding: 10,
  },
  searchInput: {
    color: '#fff',
    fontSize: 15,
  },
  contentWrapper: {
    flex: 1,
    backgroundColor: '#17212e', 

    paddingHorizontal: 16,
    paddingBottom: 400,
    paddingTop: 20,
    marginTop: 5, 
  },
  contentContainer: {
    paddingBottom: 20, 
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  iconItem: {
    alignItems: 'center',
    
  },
  iconButton: {
    backgroundColor: '#000', // 
    borderRadius: 50, 
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  icon: {
    width: 30,
    height: 30,
  },
  iconLabel: {
    color: '#fff',
    fontSize: 14,
    marginTop: 5, 
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageText: {
    fontSize: 18,
    color: '#fff',
  },
});
