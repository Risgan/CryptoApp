import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { CryptoService } from '../services/CryptoService';
import { CryptoCurrency } from '../models/CryptoCurrency';
import { StackNavigationProp } from '@react-navigation/stack';
import { CryptoItem } from '../components/CryptoItem';
import { colors } from '../utils/Colors';

// Tipos para la navegación
export type RootStackParamList = {
  Home: undefined;
  Details: { cryptoId: string };
};

type CryptoListScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface CryptoListScreenProps {
  navigation: CryptoListScreenNavigationProp;
}

export const CryptoListScreen: React.FC<CryptoListScreenProps> = ({ navigation }) => {
  const [cryptos, setCryptos] = useState<CryptoCurrency[]>([]);
  const [filteredCryptos, setFilteredCryptos] = useState<CryptoCurrency[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Cargar criptos al montar el componente
  useEffect(() => {
    const loadCryptos = async () => {
      const service = new CryptoService();
      const data = await service.fetchAll();
      setCryptos(data);
      setFilteredCryptos(data); // Al principio mostramos todas
    };

    loadCryptos();
  }, []); // El arreglo vacío asegura que se ejecute solo una vez al montar

  const handleSearch = (text: string) => {
    setSearchTerm(text);
    const filtered = cryptos.filter((crypto) =>
      crypto.name.toLowerCase().includes(text.toLowerCase()) ||
      crypto.symbol.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredCryptos(filtered);
  };

  const handleNavigateToDetail = (cryptoId: string) => {
    navigation.navigate('Details', { cryptoId });
  };

  return (
    <View style={styles.container}>
      {/* Barra de búsqueda */}
      <TextInput
        value={searchTerm}
        onChangeText={handleSearch}
        placeholder="Buscar criptomonedas"
        placeholderTextColor={colors.navyBlue}
        style={styles.searchInput}
      />

      {/* Lista de criptomonedas */}
      <FlatList
        data={filteredCryptos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleNavigateToDetail(item.id)}>
            <CryptoItem crypto={item} onPress={() => handleNavigateToDetail(item.id)} />
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

// Estilos de la pantalla
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryDark,
    padding: 20,
  },
  searchInput: {
    height: 50,
    borderColor: colors.softGrey,
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: colors.beigeNeutral,
    color: colors.primaryDark,
    marginBottom: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
});
