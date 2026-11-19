// C:\repository\proj-full-stack-frontend\src\layoutpadrao\RelogioData.tsx
//
// Mostra "dia da semana, dd/mm/aa hh:mm" no canto do topo.
// Atualiza a cada 15 segundos: o relógio só mostra minutos, então mais que
// isso seria re-renderizar à toa.

import React from 'react';
import * as S from './styledLayoutPadrao';

/** Formata a data como "qua, 19/11/26 14:32" (semana, dia, mês, ano de 2 dígitos, hora e minuto). */
function formatar(agora: Date): string {
  const semana = agora.toLocaleDateString('pt-BR', { weekday: 'short' }).replace('.', '');
  const data = agora.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  });
  const hora = agora.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  });
  return `${semana}, ${data} ${hora}`;
}

export const RelogioData: React.FC = () => {
  const [agora, setAgora] = React.useState(() => new Date());

  React.useEffect(() => {
    // Guarda o id do intervalo para parar o relógio quando a página sair da tela
    // (sem isso o intervalo continuaria rodando em segundo plano).
    const id = window.setInterval(() => setAgora(new Date()), 15000);
    return () => window.clearInterval(id);
  }, []);

  return <S.DataHora dateTime={agora.toISOString()}>{formatar(agora)}</S.DataHora>;
};
