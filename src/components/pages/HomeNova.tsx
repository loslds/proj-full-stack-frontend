// C:\repository\proj-full-stack-frontend\src\components\pages\HomeNova.tsx
//
// HOME PILOTO da nova cara do sistema (branch nova-ui).
// Serve para validar o LayoutPadrao antes de migrar as outras páginas.
// A Home antiga (Home.tsx) continua intacta na rota "/".

import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useNavigate } from 'react-router-dom';

import light from '@/themes/light';
import dark from '@/themes/dark';
import { LayoutPadrao } from '@/layoutpadrao';
import type { ConfigPagina, ItemMenu } from '@/layoutpadrao';

import lgSistema from '@/assets/defaults/lg/lg_def_ope_sistema.svg';
import btnVisitante from '@/assets/defaults/btn/btn_def_mod_c_visitantes.svg';
import btnRecepcao from '@/assets/defaults/btn/btn_def_mod_c_recepcao.svg';
import btnDesign from '@/assets/defaults/btn/btn_def_mod_c_design.svg';
import btnProducao from '@/assets/defaults/btn/btn_def_mod_c_producao.svg';
import btnAcabamento from '@/assets/defaults/btn/btn_def_mod_c_acabamento.svg';
import btnExpedicao from '@/assets/defaults/btn/btn_def_mod_c_expedicao.svg';
import btnAdministracao from '@/assets/defaults/btn/btn_def_mod_c_administracao.svg';
import btnConfig from '@/assets/defaults/btn/btn_def_mod_c_config.svg';
import btnVoltar from '@/assets/defaults/btn/btn_def_c_voltar.svg';
import btnContinuar from '@/assets/defaults/btn/btn_def_c_continuar.svg';
import btnSair from '@/assets/defaults/btn/btn_def_c_sair.svg';

// ------------------------------------------------------------
// Estilo do conteúdo desta página (cores só pelo tema)
// ------------------------------------------------------------

/** Grade de cartões: o número de colunas se ajusta sozinho à largura da tela. */
const GradeModulos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 12px;
`;

const CartaoModulo = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.backgroundColorAlt};
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 15px;
  cursor: pointer;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.hoverColor};
  }
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.textColor};
    outline-offset: 2px;
  }
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
  img {
    height: 56px;
    width: 56px;
  }
`;

const Saudacao = styled.p`
  margin: 0 0 16px;
`;

// ------------------------------------------------------------
// Página
// ------------------------------------------------------------

const HomeNova: React.FC = () => {
  const navigate = useNavigate();

  // Tema da página: o Switch do cabeçalho alterna entre claro e escuro.
  const [temaEscuro, setTemaEscuro] = React.useState(false);
  // Mensagem do rodapé: o que a página está fazendo.
  const [mensagem, setMensagem] = React.useState('Aguardando seleção...');

  /**
   * Módulos do sistema. Só Visitante e Config têm rota hoje (routeList.tsx);
   * os outros aparecem desabilitados até existirem.
   */
  const modulos: ItemMenu[] = [
    { id: 'visitante', rotulo: 'Visitante', imagem: btnVisitante, onClick: () => navigate('/modulos/visitante') },
    { id: 'recepcao', rotulo: 'Recepção', imagem: btnRecepcao, desabilitado: true },
    { id: 'design', rotulo: 'Design', imagem: btnDesign, desabilitado: true },
    { id: 'producao', rotulo: 'Produção', imagem: btnProducao, desabilitado: true },
    { id: 'acabamento', rotulo: 'Acabamento', imagem: btnAcabamento, desabilitado: true },
    { id: 'expedicao', rotulo: 'Expedição', imagem: btnExpedicao, desabilitado: true },
    { id: 'administracao', rotulo: 'Administração', imagem: btnAdministracao, desabilitado: true },
    { id: 'config', rotulo: 'Config', imagem: btnConfig, onClick: () => navigate('/modulos/config') },
  ];

  /** Tudo o que é específico desta página, num objeto só. */
  const config: ConfigPagina = {
    titulo: 'Home',
    logo: lgSistema,
    titleLogo: 'Sistema',
    titleAjuda: 'Ajuda da Home',
    onClickAjuda: () => setMensagem('Ajuda da Home: escolha um módulo no menu ou nos cartões.'),
    itensMenu: modulos,
    acoesRodape: [
      { id: 'voltar', rotulo: 'Voltar', imagem: btnVoltar, onClick: () => setMensagem('Voltar: ainda não há tela anterior.') },
      { id: 'continuar', rotulo: 'Continuar', imagem: btnContinuar, onClick: () => setMensagem('Continuar: escolha um módulo primeiro.') },
      { id: 'sair', rotulo: 'Sair', imagem: btnSair, onClick: () => setMensagem('Sair: a sessão ainda não existe nesta tela piloto.') },
    ],
  };

  return (
    // O ThemeProvider fica FORA do layout para o tema pintar a página inteira.
    <ThemeProvider theme={temaEscuro ? dark : light}>
      <LayoutPadrao
        config={config}
        temaEscuro={temaEscuro}
        onAlternarTema={() => setTemaEscuro((anterior) => !anterior)}
        mensagem={mensagem}
      >
        <Saudacao>Escolha um módulo:</Saudacao>
        <GradeModulos>
          {modulos.map((m) => (
            <CartaoModulo
              key={m.id}
              type="button"
              disabled={m.desabilitado}
              onClick={m.onClick}
            >
              {m.imagem && <img src={m.imagem} alt="" />}
              <span>{m.rotulo}</span>
            </CartaoModulo>
          ))}
        </GradeModulos>
      </LayoutPadrao>
    </ThemeProvider>
  );
};

export default HomeNova;
