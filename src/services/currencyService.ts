// Tipos para as taxas de câmbio e dados econômicos
export interface ExchangeRates {
  [currency: string]: number;
}

export interface CountryEconomicData {
  [countryCode: string]: {
    currency: string;
    gdpPerCapita: number;
    discountFactor: number;
  };
}

// Dados simulados de taxas de câmbio (em relação ao BRL)
const mockExchangeRates: ExchangeRates = {
  BRL: 1.0,      // Real brasileiro (moeda base)
  USD: 0.2,      // Dólar americano
  EUR: 0.18,     // Euro
  GBP: 0.15,     // Libra esterlina
  ARS: 17.5,     // Peso argentino
  CLP: 180.0,    // Peso chileno
  MXN: 3.4,      // Peso mexicano
  COP: 780.0,    // Peso colombiano
  PEN: 0.75,     // Sol peruano
  UYU: 7.8,      // Peso uruguaio
  BOB: 1.4,      // Boliviano
  PYG: 1450.0,   // Guarani paraguaio
  VES: 7.2,      // Bolívar venezuelano
};

// Dados simulados de PIB per capita e fator de desconto por país
const mockCountryEconomicData: CountryEconomicData = {
  BR: { currency: 'BRL', gdpPerCapita: 8500, discountFactor: 0.0 },   // Brasil (referência)
  US: { currency: 'USD', gdpPerCapita: 65000, discountFactor: -0.1 }, // EUA (preço maior)
  CA: { currency: 'CAD', gdpPerCapita: 48000, discountFactor: -0.05 }, // Canadá
  GB: { currency: 'GBP', gdpPerCapita: 42000, discountFactor: -0.05 }, // Reino Unido
  DE: { currency: 'EUR', gdpPerCapita: 46000, discountFactor: -0.05 }, // Alemanha
  FR: { currency: 'EUR', gdpPerCapita: 40000, discountFactor: -0.05 }, // França
  ES: { currency: 'EUR', gdpPerCapita: 27000, discountFactor: 0.0 },  // Espanha
  IT: { currency: 'EUR', gdpPerCapita: 31000, discountFactor: 0.0 },  // Itália
  PT: { currency: 'EUR', gdpPerCapita: 22000, discountFactor: 0.05 }, // Portugal
  AR: { currency: 'ARS', gdpPerCapita: 10000, discountFactor: 0.15 }, // Argentina
  CL: { currency: 'CLP', gdpPerCapita: 15000, discountFactor: 0.1 },  // Chile
  MX: { currency: 'MXN', gdpPerCapita: 9000, discountFactor: 0.15 },  // México
  CO: { currency: 'COP', gdpPerCapita: 6000, discountFactor: 0.2 },   // Colômbia
  PE: { currency: 'PEN', gdpPerCapita: 6500, discountFactor: 0.2 },   // Peru
  UY: { currency: 'UYU', gdpPerCapita: 17000, discountFactor: 0.1 },  // Uruguai
  BO: { currency: 'BOB', gdpPerCapita: 3500, discountFactor: 0.25 },  // Bolívia
  PY: { currency: 'PYG', gdpPerCapita: 5500, discountFactor: 0.2 },   // Paraguai
  VE: { currency: 'VES', gdpPerCapita: 3000, discountFactor: 0.3 },   // Venezuela
};

// Função para obter a taxa de câmbio
export async function getExchangeRate(currency: string): Promise<number> {
  // Em uma aplicação real, você faria uma chamada para uma API de câmbio
  // Por exemplo: const response = await fetch(`https://api.exchangerate-api.com/v4/latest/BRL`);
  
  // Simulando uma chamada de API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockExchangeRates[currency] || 1.0);
    }, 300);
  });
}

// Função para obter dados econômicos do país
export async function getCountryEconomicData(countryCode: string): Promise<{
  currency: string;
  gdpPerCapita: number;
  discountFactor: number;
}> {
  // Em uma aplicação real, você faria uma chamada para uma API de dados econômicos
  
  // Simulando uma chamada de API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        mockCountryEconomicData[countryCode] || 
        { currency: 'BRL', gdpPerCapita: 8500, discountFactor: 0.0 }
      );
    }, 300);
  });
}

// Função para detectar o país do usuário
export async function detectUserCountry(): Promise<string> {
  // Em uma aplicação real, você usaria uma API de geolocalização
  // Por exemplo: const response = await fetch('https://ipapi.co/json/');
  
  // Simulando uma chamada de API - retornando Brasil como padrão
  return new Promise((resolve) => {
    setTimeout(() => {
      // Aqui você poderia usar uma API real para detectar o país
      // Por enquanto, vamos simular um país aleatório para demonstração
      const countries = Object.keys(mockCountryEconomicData);
      const randomCountry = countries[Math.floor(Math.random() * countries.length)];
      resolve(randomCountry);
    }, 300);
  });
}

// Função para calcular o preço ajustado com base na localização
export async function calculateLocalizedPrice(
  basePriceInBRL: number,
  countryCode?: string
): Promise<{
  price: number;
  currency: string;
  formattedPrice: string;
  discount: number;
  originalPrice: number;
  countryCode: string;
}> {
  // Detectar o país do usuário se não for fornecido
  const userCountry = countryCode || await detectUserCountry();
  
  // Obter dados econômicos do país
  const economicData = await getCountryEconomicData(userCountry);
  
  // Obter a taxa de câmbio
  const exchangeRate = await getExchangeRate(economicData.currency);
  
  // Calcular o preço na moeda local (sem desconto)
  const originalPrice = basePriceInBRL / exchangeRate;
  
  // Aplicar o fator de desconto baseado no PIB
  const discount = economicData.discountFactor;
  const discountMultiplier = 1 - discount;
  
  // Preço final com desconto
  const finalPrice = originalPrice * discountMultiplier;
  
  // Formatar o preço de acordo com a moeda local
  const formatter = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: economicData.currency,
  });
  
  return {
    price: finalPrice,
    currency: economicData.currency,
    formattedPrice: formatter.format(finalPrice),
    discount: discount * 100, // Converter para porcentagem
    originalPrice: originalPrice,
    countryCode: userCountry
  };
}

// Função para obter o símbolo da moeda
export function getCurrencySymbol(currency: string): string {
  const formatter = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  
  const formatted = formatter.format(0);
  return formatted.replace(/[0-9]/g, '').trim();
} 