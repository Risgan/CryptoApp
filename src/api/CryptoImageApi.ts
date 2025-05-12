import axios from 'axios';

const API_URL = 'https://api.coingecko.com/api/v3';

/**
 * Fetches the image URL of a cryptocurrency based on its symbol (CoinGecko ID).
 * @param symbol - The ID of the cryptocurrency as used in CoinGecko (e.g., 'bitcoin').
 * @returns The image URL of the cryptocurrency, or an empty string if not found.
 */
export const getCryptoBySymbol = async (symbol: string) => {
    try {
        console.log(symbol); // Debug: print the symbol to the console

        const response = await axios.get(`${API_URL}/coins/markets`, {
            params: {
                vs_currency: 'usd',
                ids: symbol.toLowerCase(), // The symbol must match the CoinGecko ID (lowercase)
            },
        });

        const crypto = response.data[0]; // Get the first result from the array

        return crypto?.image; // Return the image URL if available

    } catch (error) {
        console.error('Error fetching crypto data:', error); // Log any errors to the console
        return ''; // Return an empty string in case of error
    }
};
