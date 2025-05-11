import axios from 'axios';

const API_URL = 'https://api.coingecko.com/api/v3';

export const getCryptoBySymbol = async (symbol: string) => {
    try {
        console.log(symbol);
        const response = await axios.get(`${API_URL}/coins/markets`, {
            params: {
                vs_currency: 'usd',
                ids: symbol.toLowerCase(), // El símbolo debe coincidir con el id en CoinGecko
            },
        });

        const crypto = response.data[0];

        return crypto?.image;

    } catch (error) {
        console.error('Error fetching crypto data:', error);
        return '';
    }
};
