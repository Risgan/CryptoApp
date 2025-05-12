import { getCryptos, getCryptoById } from '../api/CryptoApi';
import { CryptoCurrency } from '../models/CryptoCurrency';
import { getCryptoBySymbol } from '../api/CryptoImageApi.ts';

// CryptoService class to handle fetching cryptocurrency data and images
export class CryptoService {
  /**
   * Fetches all cryptocurrencies.
   *
   * Calls the getCryptos function from the API and maps the response to an array
   * of CryptoCurrency objects.
   *
   * @returns A promise that resolves to an array of CryptoCurrency objects.
   */
  async fetchAll(): Promise<CryptoCurrency[]> {
    const data = await getCryptos(); // Fetch all cryptos from the API
    return data.map((item: any) => new CryptoCurrency(item)); // Map response to CryptoCurrency instances
  }

  /**
   * Fetches a single cryptocurrency by its ID.
   *
   * Calls the getCryptoById function from the API and maps the response to a
   * CryptoCurrency object.
   *
   * @param id - The ID of the cryptocurrency to fetch.
   * @returns A promise that resolves to a CryptoCurrency object.
   */
  async fetchById(id: string): Promise<CryptoCurrency> {
    const data = await getCryptoById(id); // Fetch the crypto by ID from the API
    return new CryptoCurrency(data); // Map response to a CryptoCurrency instance
  }

  /**
   * Fetches the image URL of a cryptocurrency by its symbol.
   *
   * Calls the getCryptoBySymbol function from the API to retrieve the image URL.
   * If there's an error fetching the image, it logs the error and returns an empty string.
   *
   * @param id - The symbol of the cryptocurrency to fetch the image for.
   * @returns A promise that resolves to the URL of the cryptocurrency's image.
   */
  async getImageById(id: string): Promise<string> {
    try {
      const cryptoData = await getCryptoBySymbol(id); // Fetch the image URL by crypto symbol
      return cryptoData; // Return the image URL
    } catch (error) {
      console.error('Error obtaining cryptocurrency image:', error); // Log any error that occurs
      return ''; // Return an empty string in case of an error
    }
  }
}
