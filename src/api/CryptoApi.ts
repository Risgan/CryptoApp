import axios from 'axios';

const API_URL = 'https://api.coinlore.net/api';

export const getCryptos = async () => {
  const response = await axios.get(`${API_URL}/tickers/`);
  return response.data.data;
};

export const getCryptoById = async (id: string) => {
  const response = await axios.get(`${API_URL}/ticker/?id=${id}`);
  return response.data[0];
};
