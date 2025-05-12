import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { CryptoService } from '../services/CryptoService';
import { CryptoCurrency } from '../models/CryptoCurrency';
import { StackNavigationProp } from '@react-navigation/stack';
import { CryptoItem } from '../components/CryptoItem';
import { colors } from '../utils/Colors';

// Types for navigation
export type RootStackParamList = {
  Home: undefined;
  Details: { cryptoId: string };
};

// Navigation prop for the Home screen
type CryptoListScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

// Props interface for the CryptoListScreen component
interface CryptoListScreenProps {
  navigation: CryptoListScreenNavigationProp;
}

export const CryptoListScreen: React.FC<CryptoListScreenProps> = ({ navigation }) => {
  // State variables to manage the list of cryptos and the filtered cryptos based on search
  const [cryptos, setCryptos] = useState<CryptoCurrency[]>([]);
  const [filteredCryptos, setFilteredCryptos] = useState<CryptoCurrency[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  // useEffect hook to load cryptos when the component is mounted
  useEffect(() => {
    // Function to fetch all cryptos from the API service
    const loadCryptos = async () => {
      const service = new CryptoService(); // Create an instance of CryptoService
      const data = await service.fetchAll(); // Fetch all cryptos from the service
      setCryptos(data); // Set the fetched cryptos to state
      setFilteredCryptos(data); // Initially show all cryptos
    };

    loadCryptos(); // Call the function to load cryptos
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Function to handle search input and filter cryptos based on the search term
  const handleSearch = (text: string) => {
    setSearchTerm(text); // Update the search term state
    // Filter cryptos based on the name or symbol matching the search term (case-insensitive)
    const filtered = cryptos.filter((crypto) =>
        crypto.name.toLowerCase().includes(text.toLowerCase()) ||
        crypto.symbol.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredCryptos(filtered); // Set the filtered list of cryptos
  };

  // Function to navigate to the Details screen with the selected crypto's ID
  const handleNavigateToDetail = (cryptoId: string) => {
    navigation.navigate('Details', { cryptoId }); // Navigate to the 'Details' screen with the selected crypto ID
  };

  return (
      <View style={styles.container}>
        {/* Search bar to filter cryptocurrencies */}
        <TextInput
            value={searchTerm}
            onChangeText={handleSearch}
            placeholder="Search Cryptocurrencies"
            placeholderTextColor={colors.navyBlue}
            style={styles.searchInput}
        />

        {/* List of cryptocurrencies */}
        <FlatList
            data={filteredCryptos}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleNavigateToDetail(item.id)}>
                  {/* Render individual CryptoItem component and navigate to details on press */}
                  <CryptoItem crypto={item} onPress={() => handleNavigateToDetail(item.id)} />
                </TouchableOpacity>
            )}
            contentContainerStyle={styles.listContainer} // Style for the FlatList container
        />
      </View>
  );
};

// Styles for the screen components
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
