import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { CryptoCurrency } from '../models/CryptoCurrency';
import { colors } from '../utils/Colors';  // Import color palette

interface CryptoItemProps {
  crypto: CryptoCurrency;
  onPress: () => void;  // Function to handle press events
}

export const CryptoItem: React.FC<CryptoItemProps> = ({ crypto, onPress }) => {
  return (
      <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
        <View style={styles.contentContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{crypto.name}</Text>
            <Text style={styles.symbol}>{crypto.symbol}</Text>
          </View>

          {/* Price display */}
          <View style={styles.priceContainer}>
            <Text style={styles.price}>${crypto.priceUsd}</Text>
            <Text style={styles.currency}>USD</Text>
          </View>
        </View>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: colors.pureWhite, // White background for contrast with dark elements
    padding: 15,
    marginVertical: 10,
    borderRadius: 12,
    elevation: 2,  // Shadow for a subtle depth effect
    borderWidth: 1,
    borderColor: colors.softGrey, // Light gray border for a soft outline
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',  // Arrange content vertically
    justifyContent: 'space-between',  // Distribute items evenly
    alignItems: 'center',  // Center items horizontally
  },
  priceContainer:{
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'baseline',  // Align text to baseline for visual balance
  },
  nameContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',  // Align name and symbol on the same vertical line
  },
  name: {
    fontSize: 24,  // Larger font for the crypto name
    fontWeight: 'bold',
    color: colors.primaryDark, // Dark color for better readability
  },
  symbol: {
    fontSize: 22,
    color: colors.navyBlue, // Navy blue for symbol differentiation
    marginLeft: 10,  // Space between name and symbol
  },
  price: {
    fontSize: 24,  // Large font for price emphasis
    color: colors.goldAccent, // Gold accent color to highlight value
    fontWeight: '600',  // Semi-bold for emphasis
  },
  currency:{
    color: colors.primaryDark,
    fontSize: 16,
  },
});
