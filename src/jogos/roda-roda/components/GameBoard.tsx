import React, { useState } from 'react';
import { CategorySelector } from './CategorySelector';

// Importamos nossas perguntas (ajuste o caminho se necessário)
import perguntasData from '../data/perguntas.json';

export const GameBoard = () => {
  const [categoria, setCategoria] = useState<string | null>(null);

  // Função que será chamada quando você selecionar uma cor
  const handleSelectCategory = (cat: string) => {
    setCategoria(cat);
  };

  if (!categoria) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
        <h1 className="text-white text-2xl mb-6">Escolha sua Categoria</h1>
        <CategorySelector onSelectCategory={handleSelectCategory} />
      </div>
    );
  }

  // Lógica para pegar uma pergunta da categoria escolhida
  const perguntasDaCategoria = (perguntasData as any)[categoria] || [];
  const perguntaAtual = perguntasDaCategoria[0];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <h2 className="text-2xl font-bold mb-4 capitalize">{categoria}</h2>
      
      <div className="bg-gray-800 p-6 rounded-2xl w-full max-w-lg shadow-xl border border-white/10">
        <p className="text-lg mb-6">{perguntaAtual?.pergunta || "Sem perguntas disponíveis"}</p>
        
        <button 
          onClick={() => setCategoria(null)}
          className="mt-6 w-full bg-blue-600 py-3 rounded-xl font-bold hover:bg-blue-500 transition-colors"
        >
          Voltar ao Início
        </button>
      </div>
    </div>
  );
};

