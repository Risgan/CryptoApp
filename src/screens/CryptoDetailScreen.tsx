// CryptoDetailScreen.tsx
import React, { useState, useEffect } from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import { CryptoService } from '../services/CryptoService';
import { CryptoCurrency } from '../models/CryptoCurrency';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from './CryptoListScreen';
import { colors } from '../utils/Colors';

// RouteProp type to specify the expected params for navigation to this screen
type CryptoDetailScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

// Interface for props of the CryptoDetailScreen component
interface CryptoDetailScreenProps {
  route: CryptoDetailScreenRouteProp;
}

export const CryptoDetailScreen: React.FC<CryptoDetailScreenProps> = ({ route }) => {
  // Destructuring to extract the cryptoId parameter from route params
  const { cryptoId } = route.params;

  // State variables to hold the crypto data and image URL
  const [crypto, setCrypto] = useState<CryptoCurrency | null>(null);
  const [image, setImage] = useState<string>('');

  // useEffect hook to fetch the cryptocurrency details and image when the component is mounted
  useEffect(() => {
    // Function to fetch cryptocurrency details by ID
    const fetchCryptoDetails = async () => {
      const service = new CryptoService(); // Create an instance of the CryptoService
      const data = await service.fetchById(cryptoId); // Fetch details of the crypto by ID
      const img = await service.getImageById(data.nameId); // Fetch the image URL by the crypto's nameId
      setCrypto(data); // Set the fetched crypto data to state
      setImage(img); // Set the fetched image URL to state
    };

    fetchCryptoDetails(); // Call the function to fetch data
  }, [cryptoId]); // The effect runs whenever the cryptoId changes

  return (
      <ScrollView style={styles.container}>
        {crypto ? ( // If crypto data is loaded, display it
            <>
              {image && ( // If an image is available, display it
                  <Image
                      source={{ uri: image }}
                      style={styles.image}
                      resizeMode="contain"
                  />
              )}
              <View style={styles.detailBox}>
                {/* Displaying details of the cryptocurrency */}
                <Text style={styles.label}>Name:</Text>
                <Text style={styles.value}>{crypto.name}</Text>

                <Text style={styles.label}>Symbol:</Text>
                <Text style={styles.value}>{crypto.symbol}</Text>

                <Text style={styles.label}>Ranking:</Text>
                <Text style={styles.value}>{crypto.rank}</Text>

                <Text style={styles.label}>Current Price (USD):</Text>
                <Text style={styles.value}>${crypto.priceUsd.toFixed(2)}</Text>

                <Text style={styles.label}>Price in BTC:</Text>
                <Text style={styles.value}>{crypto.priceBtc}</Text>

                <Text style={styles.label}>Market Cap (USD):</Text>
                <Text style={styles.value}>${crypto.marketCapUsd.toLocaleString()}</Text>

                <Text style={styles.label}>% Change 1h:</Text>
                <Text style={styles.value}>{crypto.percentChange1h}%</Text>

                <Text style={styles.label}>% Change 24h:</Text>
                <Text style={styles.value}>{crypto.percentChange24h}%</Text>

                <Text style={styles.label}>% Change 7d:</Text>
                <Text style={styles.value}>{crypto.percentChange7d}%</Text>

                <Text style={styles.label}>24h Volume:</Text>
                <Text style={styles.value}>${crypto.volume24.toLocaleString()}</Text>

                <Text style={styles.label}>Previous 24h Volume:</Text>
                <Text style={styles.value}>${crypto.volume24a.toLocaleString()}</Text>

                <Text style={styles.label}>Circulating Supply:</Text>
                <Text style={styles.value}>{crypto.csupply.toLocaleString()}</Text>

                <Text style={styles.label}>Total Supply:</Text>
                <Text style={styles.value}>{crypto.tsupply.toLocaleString()}</Text>

                <Text style={styles.label}>Max Supply:</Text>
                <Text style={styles.value}>
                  {crypto.msupply !== null ? crypto.msupply.toLocaleString() : 'N/A'}
                </Text>
              </View>
            </>
        ) : ( // If crypto data is not yet loaded, show a loading indicator
            <ActivityIndicator size="large" color={colors.goldAccent} />
        )}
      </ScrollView>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryDark,
  },
  image: {
    width: 140,
    height: 140,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 70,
    borderWidth: 2,
    borderColor: colors.goldAccent,
  },
  detailBox: {
    backgroundColor: colors.beigeNeutral,
    borderRadius: 16,
    padding: 20,
    margin: 20,
    borderWidth: 1,
    borderColor: colors.goldAccent,
    shadowColor: colors.primaryDark,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.goldAccent,
    marginTop: 10,
    textTransform: 'uppercase',
  },
  value: {
    fontSize: 16,
    color: colors.navyBlue,
    marginBottom: 5,
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: colors.goldAccent,
    textAlign: 'center',
    marginVertical: 10,
  },
});
