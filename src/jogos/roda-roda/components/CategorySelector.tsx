import React from 'react';

export const CategorySelector = ({ onSelectCategory }: { onSelectCategory: (cat: string) => void }) => {
  const categorias = [
    { id: 'vermelho', cor: '#EF4444' },
    { id: 'azul', cor: '#3B82F6' },
    { id: 'verde', cor: '#22C55E' },
    { id: 'amarelo', cor: '#EAB308' }
  ];

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {categorias.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelectCategory(cat.id)}
          style={{ backgroundColor: cat.cor }}
          className="h-32 rounded-2xl shadow-lg transform active:scale-95 transition-transform"
        />
      ))}
    </div>
  );
};
,
