import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { CryptoCurrency } from '../models/CryptoCurrency';
import { colors } from '../utils/Colors';  // Importa los colores

interface CryptoItemProps {
  crypto: CryptoCurrency;
  onPress: () => void;  // Función para manejar el clic
}

export const CryptoItem: React.FC<CryptoItemProps> = ({ crypto, onPress }) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <View style={styles.contentContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{crypto.name}</Text>
          <Text style={styles.symbol}>{crypto.symbol}</Text>
        </View>

        {/* Precio */}
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
    backgroundColor: colors.pureWhite, // Fondo blanco para contraste con colores oscuros
    padding: 15,
    marginVertical: 10,
    borderRadius: 12,
    elevation: 2,  // Sombra para dar un toque de profundidad
    borderWidth: 1,
    borderColor: colors.softGrey, // Borde suave en gris claro
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',  // Organizar el contenido en fila
    justifyContent: 'space-between',  // Asegura que los elementos estén distribuidos de forma equilibrada
    alignItems: 'center',  // Centra los elementos verticalmente
  },
  priceContainer:{
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'baseline',
  },
  nameContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    //backgroundColor: colors.primaryDark,
    width: '100%',
    alignItems: 'center',  // Alinea el nombre y el símbolo en la misma altura
  },
  name: {
    fontSize: 24,  // Nombre más grande
    fontWeight: 'bold',
    color: colors.primaryDark, // Color oscuro para el nombre
  },
  symbol: {
    fontSize: 22,
    color: colors.navyBlue, // Color azul marino para el símbolo
    marginLeft: 10,  // Espacio entre nombre y símbolo
  },
  price: {
    fontSize: 24,  // Precio grande en el centro
    color: colors.goldAccent, // Color dorado para el valor en USD
    fontWeight: '600',  // Negrita para resaltar el precio
  },
  currency:{
    color: colors.primaryDark,
    fontSize: 16,
  },
});
