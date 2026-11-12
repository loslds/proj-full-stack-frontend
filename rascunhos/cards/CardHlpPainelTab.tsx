
import React from 'react';

import { ModalCardCenter } from './ModalCardCenter';
import { ModalCardAround } from './ModalCardAround';
import { ContentCardImgLg } from './ContentCardImgLg';

import { CardModalTextoColumn } from '../modal/CardModalTextoColumn';
import { CardHlpFooter } from './CardHlpFooter';

import { FormHelpNotFound } from './forms/FormHelpNotFound';
import { FormHelpLogoPessoas } from './forms/FormHelpLogoPessoas';

// FORMULÁRIOS ESPECÍFICOS

////////////////////////////////////////////////
// LOGO PADRÃO
////////////////////////////////////////////////
import btn_def_q_close from '../../assets/defaults/btn/btn_def_q_close.svg';
import lg_def_ope_default from '../assets/defaults/lg/lg_def_ope_default.svg';

////////////////////////////////////////////////
// LOGOS DAS TABELAS
////////////////////////////////////////////////

import pnl_def_tab_systables from '../assets/defaults/pnl/pnl_def_tab_systables.svg';

import pnl_def_tab_pessoas from '../assets/defaults/pnl/pnl_def_tab_pessoas.svg';

import pnl_def_tab_estados from '../assets/defaults/pnl/pnl_def_tab_estados.svg';
import pnl_def_tab_cidades from '../assets/defaults/pnl/pnl_def_tab_cidades.svg';

import pnl_def_tab_empresas from '../assets/defaults/pnl/pnl_def_tab_enpresas.svg';

import pnl_def_tab_visitantes from '../assets/defaults/pnl/pnl_def_tab_visitantes.svg';
import pnl_def_tab_visitas from '../assets/defaults/pnl/pnl_def_tab_visitas.svg';

import pnl_def_tab_consumidores from '../assets/defaults/pnl/pnl_def_tab_consumidores.svg';
import pnl_def_tab_clientes from '../assets/defaults/pnl/pnl_def_tab_clientes.svg';
import pnl_def_tab_fornecedores from '../assets/defaults/pnl/pnl_def_tab_fornecedores.svg';
import pnl_def_tab_funcionarios from '../assets/defaults/pnl/pnl_def_tab_funcionarios.svg';

import pnl_def_tab_cadastros from '../assets/defaults/pnl/pnl_def_tab_cadastros.svg';
import pnl_def_tab_emails from '../assets/defaults/pnl/pnl_def_tab_emails.svg';
import pnl_def_tab_docs from '../assets/defaults/pnl/pnl_def_tab_docs.svg';
import pnl_def_tab_fones from '../assets/defaults/pnl/pnl_def_tab_fones.svg';
import pnl_def_tab_imagens from '../assets/defaults/pnl/pnl_def_tab_imagens.svg';

import pnl_def_tab_modulos from '../assets/defaults/pnl/pnl_def_tab_modulos.svg';
import pnl_def_tab_cargos from '../assets/defaults/pnl/pnl_def_tab_cargos.svg';
import pnl_def_tab_acoes from '../assets/defaults/pnl/pnl_def_tab_acoes.svg';

import pnl_def_tab_perguntas from '../assets/defaults/pnl/pnl_def_tab_perguntas.svg';
import pnl_def_tab_pergsresps from '../assets/defaults/pnl/pnl_def_tab_pergsresps.svg';

import pnl_def_tab_users from '../assets/defaults/pnl/pnl_def_tab_users.svg';
import pnl_def_tab_logins from '../assets/defaults/pnl/pnl_def_tab_logins.svg';
import pnl_def_tab_acessos from '../assets/defaults/pnl/pnl_def_tab_acessos.svg';
import pnl_def_tab_chaves from '../assets/defaults/pnl/pnl_def_tab_chaves.svg';

import pnl_def_tab_servicos from '../assets/defaults/pnl/pnl_def_tab_servicos.svg';
import pnl_def_tab_grpservicos from '../assets/defaults/pnl/pnl_def_tab_grpservicos.svg';

////////////////////////////////////////////////
//
// CARD HELP - LOGO DAS TABELAS
//
// A página que utilizar este componente precisa
// informar apenas:
//
// nometabela
// heightlgtab
// widthlgtab
// onclosesair
//
// A imagem, título, click e formulário ficam
// definidos neste arquivo.
//
////////////////////////////////////////////////

interface PropsCardHlpLogoTab {
  nometabela?: string;
  heightlgtab?: string;
  widthlgtab?: string;
  onclosesair?: () => void;
}

////////////////////////////////////////////////
// CONFIGURAÇÃO DAS TABELAS
////////////////////////////////////////////////

interface ConfigTabela {
  imagem_logo: string;
  imagem_painel: string;
  titulo: string;
  formulario_logo?: React.ComponentType;
  formulario_painel?: React.ComponentType;
  onClick_Logo: ({ formulario }: { formulario?: React.ComponentType }) => void;
}

////////////////////////////////////////////////
// CONFIGURAÇÃO
////////////////////////////////////////////////



const CONFIG_TABELA: Record<string, ConfigTabela> = {

//////////////////////////////////////////////////
// SYSTABLES
//////////////////////////////////////////////////
  systables: { 
  imagem_logo: lg_def_tab_systables, 
  imagem_painel: pnl_def_tab_systables,
  titulo: 'Tabelas do Sistema', 
    formulario_logo: FormHelpNotFound,
    formulario_painel: FormHelpNotFound,
  onClick: () => {  },  
  },
//////////////////////////////////////////////////
// PESSOAS
//////////////////////////////////////////////////
  pessoas: { 
    imagem_logo: lg_def_tab_pessoas,
    imagem_painel: pnl_def_tab_pessoas, 
    titulo: 'Pessoas', 
    formulario_logo: FormHelpNotFound,
    formulario_painel: FormHelpNotFound,
    onClick: () => { } ,
  },
  //////////////////////////////////////////////////
  // ESTADOS
  //////////////////////////////////////////////////
  estados: {
    imagem_logo: lg_def_tab_estados,
    imagem_painel: pnl_def_tab_estados,
    titulo: 'Estados',
    formulario_logo: FormHelpNotFound,
    formulario_painel: FormHelpNotFound,
    onClick: () => { },
  },
  //////////////////////////////////////////////////
  // CIDADES
  //////////////////////////////////////////////////
  cidades: {
    imagem_logo: lg_def_tab_cidades,
    imagem_painel: pnl_def_tab_cidades,
    titulo: 'Cidades',
    formulario_logo: FormHelpNotFound,
    formulario_painel: FormHelpNotFound,
    onClick: () => { },
  },
  //////////////////////////////////////////////////
  // EMPRESAS
  //////////////////////////////////////////////////
  empresas: {
    imagem_logo: lg_def_tab_empresas,
    imagem_painel: pnl_def_tab_empresas,
    titulo: 'Empresas',
    formulario_logo: FormHelpNotFound,
    formulario_painel: FormHelpNotFound,
    onClick: () => { },
  },
  //////////////////////////////////////////////////
  // VISITANTES
  //////////////////////////////////////////////////
  visitantes: {
    imagem_logo: lg_def_tab_visitantes,
    imagem_painel: pnl_def_tab_visitantes,
    titulo: 'Visitantes',
    formulario_logo: FormHelpNotFound,
    formulario_painel: FormHelpNotFound,
    onClick: () => { },
    },
  //////////////////////////////////////////////////
  // VISITAS
  //////////////////////////////////////////////////
  visitas: {
    imagem_logo: lg_def_tab_visitas,
    imagem_painel: pnl_def_tab_visitas,
    titulo: 'Visitas',
    formulario_logo: FormHelpNotFound,
    formulario_painel: FormHelpNotFound,
    onClick: () => { },
    },
  //////////////////////////////////////////////////
  // CONSUMIDORES
  //////////////////////////////////////////////////
  consumidores: {
    imagem_logo: lg_def_tab_consumidores,
    imagem_painel: pnl_def_tab_consumidores,
    titulo: 'Consumidores',
    formulario_logo: FormHelpNotFound,
    formulario_painel: FormHelpNotFound,
    onClick: () => { },
  },
  //////////////////////////////////////////////////
  // CLIENTES
  //////////////////////////////////////////////////
  clientes: {
    imagem_logo: lg_def_tab_clientes,
    imagem_painel: pnl_def_tab_clientes,
    titulo: 'Clientes',
    formulario_logo: FormHelpNotFound,
    formulario_painel: FormHelpNotFound,
    onClick: () => { },
  },
  //////////////////////////////////////////////////
  // FORNECEDORES
  //////////////////////////////////////////////////
  fornecedores: {
    imagem_logo: lg_def_tab_fornecedores,
    imagem_painel: pnl_def_tab_fornecedores,
    titulo: 'Fornecedores',
    formulario_logo: FormHelpNotFound,
    formulario_painel: FormHelpNotFound,
    onClick: () => { },
  },
  //////////////////////////////////////////////////
  // FUNCIONÁRIOS
  //////////////////////////////////////////////////
  funcionarios: {
    imagem_logo: lg_def_tab_funcionarios,
    imagem_painel: pnl_def_tab_funcionarios,
    titulo: 'Funcionários',
    formulario_logo: FormHelpNotFound,
    formulario_painel: FormHelpNotFound,
    onClick: () => { },
  },
  //////////////////////////////////////////////////
  // CADASTROS
  //////////////////////////////////////////////////
  cadastros: {
    imagem_logo: lg_def_tab_cadastros,
    imagem_painel: pnl_def_tab_cadastros,
    titulo: 'Cadastros',
    formulario_logo: FormHelpNotFound,
    formulario_painel: FormHelpNotFound,
    onClick: () => { },
  },
  //////////////////////////////////////////////////
  // EMAILS
  //////////////////////////////////////////////////
  emails: {
    imagem_logo: lg_def_tab_emails,
    imagem_painel: pnl_def_tab_emails,
    titulo: 'E-mails',
    formulario_logo: FormHelpNotFound,
    formulario_painel: FormHelpNotFound,
    onClick: () => { },
  },
  //////////////////////////////////////////////////
  // DOCUMENTOS
  //////////////////////////////////////////////////
  docs: {
    imagem_logo: lg_def_tab_docs,
    imagem_painel: pnl_def_tab_docs,
    titulo: 'Documentos',
    formulario_logo: FormHelpNotFound,
    formulario_painel: FormHelpNotFound,
    onClick: () => { },
  },
  //////////////////////////////////////////////////
  // TELEFONES
  //////////////////////////////////////////////////
  fones: {
    imagem_logo: lg_def_tab_fones,
    imagem_painel: pnl_def_tab_fones,
    titulo: 'Telefones',
    formulario_logo: FormHelpNotFound,
    formulario_painel: FormHelpNotFound,
    onClick: () => { },
  },
  //////////////////////////////////////////////////
  // IMAGENS
  //////////////////////////////////////////////////
  imagens: {
    imagem_logo: lg_def_tab_imagens,
    imagem_painel: pnl_def_tab_imagens,
    titulo: 'Imagens',
    formulario_logo: FormHelpNotFound,
    formulario_painel: FormHelpNotFound,
    onClick: () => { },
  },
  //////////////////////////////////////////////////
  // MÓDULOS
  //////////////////////////////////////////////////
  modulos: {
    imagem_logo: lg_def_tab_modulos,
    imagem_painel: pnl_def_tab_modulos,
    titulo: 'Módulos',
    formulario_logo: FormHelpNotFound,
    formulario_painel: FormHelpNotFound,
    onClick: () => { },
  },
  //////////////////////////////////////////////////
  // CARGOS
  //////////////////////////////////////////////////
  cargos: {
    imagem_logo: lg_def_tab_cargos,
    imagem_painel: pnl_def_tab_cargos,
    titulo: 'Cargos',
    formulario_logo: FormHelpNotFound,
    formulario_painel: FormHelpNotFound,
    onClick: () => { },
  },
  //////////////////////////////////////////////////
  // AÇÕES
  //////////////////////////////////////////////////
  acoes: {
    imagem_logo: lg_def_tab_acoes,
    imagem_painel: pnl_def_tab_acoes,
    titulo: 'Ações',
    formulario_logo: FormHelpNotFound,
    formulario_painel: FormHelpNotFound,
    onClick: () => { },
  },
  //////////////////////////////////////////////////
  // PERGUNTAS
  //////////////////////////////////////////////////
  perguntas: {
    imagem_logo: lg_def_tab_perguntas,
    imagem_painel: pnl_def_tab_perguntas,
    titulo: 'Perguntas',
    formulario_logo: FormHelpNotFound,
    formulario_painel: FormHelpNotFound,
    onClick: () => { },
  },
  //////////////////////////////////////////////////
  // USERS
  //////////////////////////////////////////////////
  users: {
    imagem_logo: lg_def_tab_users,
    imagem_painel: pnl_def_tab_users,
    titulo: 'Usuários',
    formulario_logo: FormHelpNotFound,
    formulario_painel: FormHelpNotFound,
    onClick: () => { },
  },
  //////////////////////////////////////////////////
  // LOGINS
  //////////////////////////////////////////////////
  logins: {
    imagem_logo: lg_def_tab_logins,
    imagem_painel: pnl_def_tab_logins,
    titulo: 'Logins',
    formulario_logo: FormHelpNotFound,
    formulario_painel: FormHelpNotFound,
    onClick: () => { },
  },
  //////////////////////////////////////////////////
  // ACESSOS
  //////////////////////////////////////////////////
  acessos: {
    imagem_logo: lg_def_tab_acessos,
    imagem_painel: pnl_def_tab_acessos,
    titulo: 'Acessos',
    formulario_logo: FormHelpNotFound,
    formulario_painel: FormHelpNotFound,
    onClick: () => { },
  },
  //////////////////////////////////////////////////
  // CHAVES
  //////////////////////////////////////////////////
  chaves: {
    imagem_logo: lg_def_tab_chaves,
    imagem_painel: pnl_def_tab_chaves,
    titulo: 'Chaves',
    formulario_logo: FormHelpNotFound,
    formulario_painel: FormHelpNotFound,
    onClick: () => { },
  },
  //////////////////////////////////////////////////
  // PERGUNTAS E RESPOSTAS
  //////////////////////////////////////////////////
  pergsresps: {
    imagem_logo: lg_def_tab_pergsresps,
    imagem_painel: pnl_def_tab_pergsresps,
    titulo: 'Perguntas e Respostas',
    formulario_logo: FormHelpNotFound,
    formulario_painel: FormHelpNotFound,
    onClick: () => { },
  },
  //////////////////////////////////////////////////
  // SERVIÇOS
  //////////////////////////////////////////////////
  servicos: {
    imagem_logo: lg_def_tab_servicos,
    imagem_painel: pnl_def_tab_servicos,
    titulo: 'Serviços',
    formulario_logo: FormHelpNotFound,
    formulario_painel: FormHelpNotFound,
    onClick: () => { },
  },
  //////////////////////////////////////////////////
  // GRUPOS DE SERVIÇOS
  //////////////////////////////////////////////////
  grpservicos: {
    imagem_logo: lg_def_tab_grpservicos,
    imagem_painel: pnl_def_tab_grpservicos,
    titulo: 'Grupos de Serviços',
    formulario_logo: FormHelpNotFound,
    formulario_painel: FormHelpNotFound,
    onClick: () => { },
  },
};
////////////////////////////////////////////////
// COMPONENTE
////////////////////////////////////////////////

export const CardHlpLogoTab = ({
  nometabela,
  heightlgtab,
  widthlgtab,
  onclosesair,
}: PropsCardHlpLogoTab) => {

  //////////////////////////////////////////////////
  // TRATA NOME DA TABELA
  //////////////////////////////////////////////////

  const nomeTabela = nometabela?.trim().toLowerCase();

  //////////////////////////////////////////////////
  // LOCALIZA CONFIGURAÇÃO
  //////////////////////////////////////////////////

  const configTabela = nomeTabela
    ? CONFIG_TABELA[nomeTabela]
    : undefined;

  //////////////////////////////////////////////////
  // IMAGEM
  //
  // Caso não exista configuração ou imagem,
  // apresenta logo padrão.
  //////////////////////////////////////////////////

  const imagemLogo =  configTabela?.imagem_logo ?? lg_def_ope_default;

  //////////////////////////////////////////////////
  // TÍTULO
  //////////////////////////////////////////////////

  const tituloLogo =  configTabela?.titulo ?? 'Sistema';

  //////////////////////////////////////////////////
  // FORMULÁRIO
  //////////////////////////////////////////////////

  const FormularioTabela =
    configTabela?.formulario;

  //////////////////////////////////////////////////
  // abrir modal do cliqck em Painel





  // RETURN
  //////////////////////////////////////////////////
  
  return (
    <ModalCardCenter>

      <ModalCardAround>

        <ContentCardImgLg
          heightlg={heightlgtab}
          widthlg={widthlgtab}
          imglg={imagemLogo}
          titlelg={tituloLogo}
          // chama formulario do LOGO
          onClicklg={ () => {} }
        />

      </ModalCardAround>

      <CardModalTextoColumn>

        {FormularioTabela ? (

          <FormularioTabela />

        ) : (

          <FormHelpNotFound />

        )}

      </CardModalTextoColumn>

      <CardHlpFooter
        onclosesair={onclosesair}
      />
  
      { cardpnl ? (
        <ModalPageCardFound
            btop={'10%'}
            bwidth={'50%'}
            bheight={'50%'}
            
            imgbm={btn_def_q_close}
            titbm={ "Fechar..." }
            titmodal={ 'Acesso Help Negado."}
            titulo={'Acesso Help Negado'}
            onclose={() => setNotOperation(false)}
            >

            <CardImgNeg
              imgcard={pnl_def_ope_negado}
              pminheight={'120px'}
              pwidth={'120px'}
              onclickimg={() => setNotOperation(false)}
            />
            <ContentSysMainItens>
              <form>
                <p> '⛔ ACESSO SISTEMA INOPERANTE.'</p>
                <br />
                <p> Entre em contato com suporte. </p>
              </form>
            </ContentSysMainItens>
            <AutoCloseTimer onClose={() => setNotOperation(false)} seconds={5} />
          </PageModal>
        ) : null}

    ): null}

    btop,
  bwidth,
  bheight,

  titmodal,

  widthbtn,
  heightbtn,

  imgbtn,
  titbtn,
  onclose,
  
  children

    </ModalCardCenter>
  );
};

export default PageCardHlpLogoTab;

///////////////////////////////////////////////////

