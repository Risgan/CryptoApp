export class CryptoCurrency {
  id: string;
  name: string;
  symbol: string;
  nameId: string;
  rank: number;
  priceUsd: number;
  percentChange24h: number;
  percentChange1h: number;
  percentChange7d: number;
  priceBtc: number;
  marketCapUsd: number;
  volume24: number;
  volume24a: number;
  csupply: number;
  tsupply: number;
  msupply: number | null;

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
