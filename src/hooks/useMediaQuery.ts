'use client'

import { useState, useEffect } from 'react'

/**
 * Hook para detectar se um media query corresponde ao tamanho atual da tela
 * @param query A media query a ser verificada (ex: '(max-width: 768px)')
 * @returns Um booleano indicando se a media query corresponde
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)
  
  useEffect(() => {
    // Verificar se estamos no navegador
    if (typeof window === 'undefined') {
      return
    }
    
    // Criar o media query
    const media = window.matchMedia(query)
    
    // Definir o estado inicial
    setMatches(media.matches)
    
    // Função para atualizar o estado quando a media query mudar
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches)
    }
    
    // Adicionar o listener
    media.addEventListener('change', listener)
    
    // Remover o listener quando o componente for desmontado
    return () => {
      media.removeEventListener('change', listener)
    }
  }, [query])
  
  return matches
} 