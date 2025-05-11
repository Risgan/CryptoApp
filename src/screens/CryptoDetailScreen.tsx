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

type CryptoDetailScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

interface CryptoDetailScreenProps {
  route: CryptoDetailScreenRouteProp;
}

export const CryptoDetailScreen: React.FC<CryptoDetailScreenProps> = ({ route }) => {
  const { cryptoId } = route.params;
  const [crypto, setCrypto] = useState<CryptoCurrency | null>(null);
  const [image, setImage] = useState<string>('');

  useEffect(() => {
    const fetchCryptoDetails = async () => {
      const service = new CryptoService();
      const data = await service.fetchById(cryptoId);
      const img = await service.getImageById(data.nameId);
      setCrypto(data);
      setImage(img);
    };

    fetchCryptoDetails();
  }, [cryptoId]);

  return (
    <ScrollView style={styles.container}>
      {crypto ? (
        <>
          {image && (
            <Image
              source={{ uri: image }}
              style={styles.image}
              resizeMode="contain"
            />
          )}
          <View style={styles.detailBox}>
            <Text style={styles.label}>Nombre:</Text>
            <Text style={styles.value}>{crypto.name}</Text>

            <Text style={styles.label}>Símbolo:</Text>
            <Text style={styles.value}>{crypto.symbol}</Text>

            <Text style={styles.label}>Ranking:</Text>
            <Text style={styles.value}>{crypto.rank}</Text>

            <Text style={styles.label}>Precio actual (USD):</Text>
            <Text style={styles.value}>${crypto.priceUsd.toFixed(2)}</Text>

            <Text style={styles.label}>Precio en BTC:</Text>
            <Text style={styles.value}>{crypto.priceBtc}</Text>

            <Text style={styles.label}>Market Cap (USD):</Text>
            <Text style={styles.value}>${crypto.marketCapUsd.toLocaleString()}</Text>

            <Text style={styles.label}>% Cambio 1h:</Text>
            <Text style={styles.value}>{crypto.percentChange1h}%</Text>

            <Text style={styles.label}>% Cambio 24h:</Text>
            <Text style={styles.value}>{crypto.percentChange24h}%</Text>

            <Text style={styles.label}>% Cambio 7d:</Text>
            <Text style={styles.value}>{crypto.percentChange7d}%</Text>

            <Text style={styles.label}>Volumen 24h:</Text>
            <Text style={styles.value}>${crypto.volume24.toLocaleString()}</Text>

            <Text style={styles.label}>Volumen 24h anterior:</Text>
            <Text style={styles.value}>${crypto.volume24a.toLocaleString()}</Text>

            <Text style={styles.label}>Suministro en circulación:</Text>
            <Text style={styles.value}>{crypto.csupply.toLocaleString()}</Text>

            <Text style={styles.label}>Suministro total:</Text>
            <Text style={styles.value}>{crypto.tsupply.toLocaleString()}</Text>

            <Text style={styles.label}>Suministro máximo:</Text>
            <Text style={styles.value}>
              {crypto.msupply !== null ? crypto.msupply.toLocaleString() : 'N/A'}
            </Text>
          </View>
        </>
      ) : (
        <ActivityIndicator size="large" color={colors.goldAccent} />
      )}
    </ScrollView>
  );
};

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

