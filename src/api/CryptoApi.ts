import axios from 'axios';

const API_URL = 'https://api.coinlore.net/api';

/**
 * Retrieves a list of all cryptocurrencies with market data.
 * @returns An array of cryptocurrency objects.
 */
export const getCryptos = async () => {
  const response = await axios.get(`${API_URL}/tickers/`);
  return response.data.data;
};

/**
 * Retrieves detailed information for a specific cryptocurrency by its ID.
 * @param id - The ID of the cryptocurrency to fetch.
 * @returns A single cryptocurrency object with detailed data.
 */
export const getCryptoById = async (id: string) => {
  const response = await axios.get(`${API_URL}/ticker/?id=${id}`);
  return response.data[0];
};
