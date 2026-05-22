import React, { useState, useEffect } from 'react';
import { CategorySelector } from './CategorySelector';
import perguntasData from '../data/perguntas.json';

export const GameBoard = () => {
  const [categoria, setCategoria] = useState<string | null>(null);
  const [erros, setErros] = useState(0);
  const [tempo, setTempo] = useState(15); // Estado do cronômetro

  // Efeito do Cronômetro
  useEffect(() => {
    if (categoria && tempo > 0) {
      const timer = setInterval(() => setTempo((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    } else if (tempo === 0 && categoria) {
      alert("Tempo Esgotado!");
      setCategoria(null); // Retorna ao início ou lógica de Game Over
      setTempo(15);
    }
  }, [tempo, categoria]);

  const handleSelectCategory = (cat: string) => {
    setCategoria(cat);
    setErros(0);
    setTempo(15); // Reseta o tempo ao selecionar
  };

  // ... (restante da sua lógica de renderização)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      {/* Exibição do Tempo */}
      <div className="text-4xl font-bold mb-4 text-red-500">
        {tempo}s
      </div>
      
      {/* ... (resto do componente) */}
    </div>
  );
};
