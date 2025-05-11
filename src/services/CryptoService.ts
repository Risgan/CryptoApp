import { getCryptos, getCryptoById } from '../api/CryptoApi';
import { CryptoCurrency } from '../models/CryptoCurrency';
import {getCryptoBySymbol} from '../api/CryptoImageApi.ts';

export class CryptoService {
  async fetchAll(): Promise<CryptoCurrency[]> {
    const data = await getCryptos();
    return data.map((item: any) => new CryptoCurrency(item));
  }

  async fetchById(id: string): Promise<CryptoCurrency> {
    const data = await getCryptoById(id);
    return new CryptoCurrency(data);
  }

  async getImageById(id: string): Promise<string> {
    try {
      const cryptoData = await getCryptoBySymbol(id);
      return cryptoData; // Regresa la URL de la imagen
    } catch (error) {
      console.error('Error obteniendo imagen de cripto', error);
      return '';
    }
  }
}
