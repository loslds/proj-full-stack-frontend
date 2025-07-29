
import { useContext } from 'react';
import { AcessoContext, AcessoContextType } from './ContextAcesso';

export const useAcessoContext = (): AcessoContextType => {
  const context = useContext(AcessoContext);
  if (!context) {
    throw new Error('useAcessoContext deve ser usado dentro de um AcessoProvider');
  }
  return context;
};
