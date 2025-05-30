import React, { createContext, useContext, useReducer, ReactNode } from 'react';

export type StateAcesso = {
  page: string | null;
  aplicacao: string | null;
  auth: string | null;
  chvkey: boolean | null;
  id_acesso: number;
  qdd_acesso: number;
  ult_acesso: string | null;
  modulo: string | null;
  id_setor: number;
  acao: string | null;
  nivel: number;
  cadeado: boolean | null;
  mail: string | null;
  pseudonimo: string | null;
  psw: string | null;
  pinnumber: number;
  pinchar: string | null;
  avatar: Blob | null;
  path_avatar: string | null;
  nmarq_avatar: string | null;
  idemp: number;
  nmfant: string | null;
  logo: Blob | null;
  path_logo: string | null;
  nmarq_logo: string | null;
  dtini: string | null;
  dtfim: string | null;
  tempo: string | null;
  logado: boolean | null;
  mdlogin: number | null;
  nmlogin: string | null;
  nrcont: number | null;
  nmcont: string | null;

};

export const initialData: StateAcesso = {
  page: '',
  aplicacao: '',
  auth: '',
  chvkey: false,
  id_acesso: 0,
  qdd_acesso: 0,
  ult_acesso: '',
  id_setor: 0,
  modulo: '',
  acao: '',
  nivel: 0,
  cadeado: false,
  mail: '',
  pseudonimo: '',
  psw: '',
  pinnumber: 0,
  pinchar: '',
  avatar: null,
  path_avatar: '',
  nmarq_avatar: '',
  idemp: 0,
  nmfant: '',
  logo: null,
  path_logo: '',
  nmarq_logo: '',
  dtini: '',
  dtfim: '',
  tempo: '',
  logado: false,
  nrcont: 0,
  nmcont: '',
  mdlogin: 0,
  nmlogin: '',
};

export enum UseAcessoActions {
  SET_PAGE = 'SET_PAGE',
  SET_APLICACAO = 'SET_APLICACAO',
  SET_AUTH = 'SET_AUTH',
  SET_CHVKEY = 'SET_CHVKEY',
  SET_ID_ACESSO = 'SET_ID_ACESSO',
  SET_QDD_ACESSO = 'SET_QDD_ACESSO',
  SET_ULT_ACESSO = 'SET_ULT_ACESSO',
  SET_ID_SETOR = 'SET_ID_SETOR',
  SET_MODULO = 'SET_MODULO',
  SET_ACAO = 'SET_ACAO',
  SET_NIVEL = 'SET_NIVEL',
  SET_CADEADO = 'SET_CADEADO',
  SET_MAIL = 'SET_PIN_CHAR',
  SET_PSEUDONIMO = 'SET_PSEUDONIMO',
  SET_PSW = 'SET_PSW',
  SET_PINNUMBER = 'SET_PIN_NUMBER',
  SET_PINCHAR = 'SET_PINCHAR',
  SET_AVATAR = 'SET_AVATAR',
  SET_PATH_AVATAR = 'SET_PATH_AVATAR',
  SET_NMARQ_AVATAR = 'SET_NMARQ_AVATAR',
  SET_IDEMP = 'SET_IDEMP',
  SET_NMFANT = 'SET_NMFANT',
  SET_LOGO = 'SET_LOGO',
  SET_PATH_LOGO = 'SET_PATH_LOGO',
  SET_NMARQ_LOGO = 'SET_NMARQ_LOGO',
  SET_DATINI = 'SET_DATINI',
  SET_DATAFIM = 'SET_DATAFIM',
  SET_TEMPO = 'SET_TEMPO',
  SET_LOGADO = 'SET_LOGADO',
  SET_NRCONT = 'SET_NRCONT',
  SET_NMCONT = 'SET_NMCONT',
  SET_MDLOGIN = 'SET_MDLOGIN',
  SET_NMLOGIN = 'SET_NMLOGIN',

}

type AcessoAction =
  | { type: UseAcessoActions.SET_PAGE; payload: string | null }
  | { type: UseAcessoActions.SET_APLICACAO; payload: string }
  | { type: UseAcessoActions.SET_AUTH; payload: string | null }
  | { type: UseAcessoActions.SET_CHVKEY; payload: boolean | null }
  | { type: UseAcessoActions.SET_ID_ACESSO; payload: number }
  | { type: UseAcessoActions.SET_QDD_ACESSO; payload: number }
  | { type: UseAcessoActions.SET_ULT_ACESSO; payload: string }
  | { type: UseAcessoActions.SET_ID_SETOR; payload: number }
  | { type: UseAcessoActions.SET_MODULO; payload: string }
  | { type: UseAcessoActions.SET_ACAO; payload: string }
  | { type: UseAcessoActions.SET_NIVEL; payload: number }
  | { type: UseAcessoActions.SET_CADEADO; payload: boolean }
  | { type: UseAcessoActions.SET_MAIL; payload: string }
  | { type: UseAcessoActions.SET_PSEUDONIMO; payload: string }
  | { type: UseAcessoActions.SET_PSW; payload: string }
  | { type: UseAcessoActions.SET_PINNUMBER; payload: number }
  | { type: UseAcessoActions.SET_PINCHAR; payload: string }
  | { type: UseAcessoActions.SET_AVATAR; payload: null }
  | { type: UseAcessoActions.SET_PATH_AVATAR; payload: string }
  | { type: UseAcessoActions.SET_NMARQ_AVATAR; payload: string }
  | { type: UseAcessoActions.SET_IDEMP; payload: number }
  | { type: UseAcessoActions.SET_NMFANT; payload: string }
  | { type: UseAcessoActions.SET_LOGO; payload: null }
  | { type: UseAcessoActions.SET_PATH_LOGO; payload: string }
  | { type: UseAcessoActions.SET_NMARQ_LOGO; payload: string }
  | { type: UseAcessoActions.SET_DATINI; payload: string }
  | { type: UseAcessoActions.SET_DATAFIM; payload: string }
  | { type: UseAcessoActions.SET_TEMPO; payload: string }
  | { type: UseAcessoActions.SET_LOGADO; payload: boolean }
  | { type: UseAcessoActions.SET_NRCONT; payload: number }
  | { type: UseAcessoActions.SET_NMCONT; payload: string }
  | { type: UseAcessoActions.SET_MDLOGIN; payload: number }
  | { type: UseAcessoActions.SET_NMLOGIN; payload: string };
  

const AcessoReducer = (state: StateAcesso, action: AcessoAction) => {
  switch (action.type) {
    case UseAcessoActions.SET_PAGE:
      return { ...state, page: action.payload };
    case UseAcessoActions.SET_APLICACAO:
      return { ...state, aplicacao: action.payload };
    case UseAcessoActions.SET_AUTH:
      return { ...state, auth: action.payload };
    case UseAcessoActions.SET_CHVKEY:
      return { ...state, chvkey: action.payload };
    case UseAcessoActions.SET_ID_ACESSO:
      return { ...state, id_acesso: action.payload };
    case UseAcessoActions.SET_QDD_ACESSO:
      return { ...state, qdd_acesso: action.payload };
    case UseAcessoActions.SET_ULT_ACESSO:
      return { ...state, ult_acesso: action.payload };
    case UseAcessoActions.SET_ID_SETOR:
      return { ...state, id_setor: action.payload };
    case UseAcessoActions.SET_MODULO:
      return { ...state, modulo: action.payload };
    case UseAcessoActions.SET_ACAO:
      return { ...state, descrnivel: action.payload };
    case UseAcessoActions.SET_NIVEL:
      return { ...state, nivel: action.payload };
    case UseAcessoActions.SET_CADEADO:
      return { ...state, cadeado: action.payload };
    case UseAcessoActions.SET_MAIL:
      return { ...state, mail: action.payload };
    case UseAcessoActions.SET_PSEUDONIMO:
      return { ...state, pseudonimo: action.payload };
    case UseAcessoActions.SET_PSW:
      return { ...state, psw: action.payload };
    case UseAcessoActions.SET_PINNUMBER:
      return { ...state, pinnumber: action.payload };
    case UseAcessoActions.SET_PINCHAR:
      return { ...state, pinchar: action.payload };
    case UseAcessoActions.SET_AVATAR:
      return { ...state, avatar: action.payload };
    case UseAcessoActions.SET_PATH_AVATAR:
      return { ...state, path_avatar: action.payload };
    case UseAcessoActions.SET_NMARQ_AVATAR:
      return { ...state, nmarq_avatar: action.payload };
    case UseAcessoActions.SET_IDEMP:
      return { ...state, idemp: action.payload };
    case UseAcessoActions.SET_NMFANT:
      return { ...state, nmfant: action.payload };
    case UseAcessoActions.SET_LOGO:
      return { ...state, logo: action.payload };
    case UseAcessoActions.SET_PATH_LOGO:
      return { ...state, path_logo: action.payload };
    case UseAcessoActions.SET_NMARQ_LOGO:
      return { ...state, nmarq_logo: action.payload };
    case UseAcessoActions.SET_DATINI:
      return { ...state, data_ini: action.payload };
    case UseAcessoActions.SET_DATAFIM:
      return { ...state, data_fim: action.payload };
    case UseAcessoActions.SET_TEMPO:
      return { ...state, tempo: action.payload };
    case UseAcessoActions.SET_LOGADO:
      return { ...state, logado: action.payload };
    case UseAcessoActions.SET_NRCONT:
      return { ...state, nrcont: action.payload };
    case UseAcessoActions.SET_NMCONT:
      return { ...state, nmcont: action.payload };
    case UseAcessoActions.SET_MDLOGIN:
      return { ...state, mdlogin: action.payload };
    case UseAcessoActions.SET_NMLOGIN:
      return { ...state, nmlogin: action.payload };
    default:
      return state;
  }
};

type AcessoContextType = {
  state: StateAcesso;
  dispatch: React.Dispatch<AcessoAction>;
};
export const AcessoContext = createContext<AcessoContextType | undefined>(undefined);

export const AcessoProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(AcessoReducer, initialData);
  return (
    <AcessoContext.Provider value={{ state, dispatch }}>
      {children}
    </AcessoContext.Provider>
  );
};

export const useAcessoContext = (): AcessoContextType => {
  const context = useContext(AcessoContext);
  if (!context) {
    throw new Error('useAcessoContext deve ser usado dentro de um AcessoProvider');
  }
  return context;
};

///// fim  ///////