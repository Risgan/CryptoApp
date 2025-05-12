/**
 * Represents a cryptocurrency with various market-related properties.
 */
export class CryptoCurrency {
  id: string;                     // Unique ID of the cryptocurrency
  name: string;                   // Full name of the cryptocurrency (e.g., Bitcoin)
  symbol: string;                 // Symbol/ticker (e.g., BTC)
  nameId: string;                 // URL-friendly version of the name
  rank: number;                   // Market rank based on capitalization
  priceUsd: number;              // Current price in USD
  percentChange24h: number;      // Percentage change in the last 24 hours
  percentChange1h: number;       // Percentage change in the last 1 hour
  percentChange7d: number;       // Percentage change in the last 7 days
  priceBtc: number;              // Price in BTC
  marketCapUsd: number;          // Market capitalization in USD
  volume24: number;              // Trading volume over the last 24 hours
  volume24a: number;             // Adjusted trading volume (alternative calculation)
  csupply: number;               // Circulating supply
  tsupply: number;               // Total supply
  msupply: number | null;        // Maximum supply (can be null if not defined)

  /**
   * Constructs a CryptoCurrency object from raw API data.
   * @param data - The raw data object from the API.
   */
  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.symbol = data.symbol;
    this.nameId = data.nameid;
    this.rank = Number(data.rank);
    this.priceUsd = parseFloat(data.price_usd);
    this.percentChange24h = parseFloat(data.percent_change_24h);
    this.percentChange1h = parseFloat(data.percent_change_1h);
    this.percentChange7d = parseFloat(data.percent_change_7d);
    this.priceBtc = parseFloat(data.price_btc);
    this.marketCapUsd = parseFloat(data.market_cap_usd);
    this.volume24 = parseFloat(data.volume24);
    this.volume24a = parseFloat(data.volume24a);
    this.csupply = parseFloat(data.csupply);
    this.tsupply = parseFloat(data.tsupply);
    this.msupply = data.msupply ? parseFloat(data.msupply) : null;
  }
}
