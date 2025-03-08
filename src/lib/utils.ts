import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combina classes CSS usando clsx e tailwind-merge
 * Útil para componentes que aceitam className como prop
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Gera uma string de cores para uso em gradientes
 * @param startColor - Cor inicial do gradiente
 * @param endColor - Cor final do gradiente
 * @param direction - Direção do gradiente (default: 'to right')
 * @returns String CSS para uso em background-image
 */
export function generateGradient(
  startColor: string,
  endColor: string,
  direction: string = 'to right'
): string {
  return `linear-gradient(${direction}, ${startColor}, ${endColor})`;
}

/**
 * Verifica se uma string é uma URL válida
 * @param url - String a ser verificada
 * @returns Boolean indicando se é uma URL válida
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * Formata um valor monetário para o formato brasileiro
 * @param value - Valor a ser formatado
 * @returns String formatada (ex: R$ 1.234,56)
 */
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

/**
 * Trunca um texto para um tamanho máximo
 * @param text - Texto a ser truncado
 * @param maxLength - Tamanho máximo (default: 100)
 * @returns Texto truncado com reticências
 */
export function truncateText(text: string, maxLength: number = 100): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

/**
 * Gera uma cor aleatória em formato hexadecimal
 * @returns String com cor hexadecimal
 */
export function getRandomColor(): string {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

/**
 * Calcula o contraste entre duas cores
 * @param color1 - Primeira cor em formato hexadecimal
 * @param color2 - Segunda cor em formato hexadecimal
 * @returns Valor de contraste (quanto maior, melhor o contraste)
 */
export function calculateContrast(color1: string, color2: string): number {
  // Implementação simplificada
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  
  if (!rgb1 || !rgb2) return 0;
  
  const luminance1 = calculateLuminance(rgb1);
  const luminance2 = calculateLuminance(rgb2);
  
  const brightest = Math.max(luminance1, luminance2);
  const darkest = Math.min(luminance1, luminance2);
  
  return (brightest + 0.05) / (darkest + 0.05);
}

/**
 * Converte uma cor hexadecimal para RGB
 * @param hex - Cor em formato hexadecimal
 * @returns Objeto com valores r, g, b ou null se inválido
 */
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

/**
 * Calcula a luminância de uma cor RGB
 * @param rgb - Objeto com valores r, g, b
 * @returns Valor de luminância
 */
function calculateLuminance(rgb: { r: number; g: number; b: number }): number {
  const { r, g, b } = rgb;
  const a = [r, g, b].map((v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
} 