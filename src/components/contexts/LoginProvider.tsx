import React, { createContext, useContext, useReducer, ReactNode } from 'react';

export type StateAcesso = {
  page: string | null;
  auth: string | null;
  pinAdm: number;
  id_acesso: number;
  qdd_acesso: number;
  ult_acesso: string | null;
  usando_tb: string | null;
  usando_id_tb: number;
  modulo: string | null;
  descnivel: string | null;
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
  aplicacao: string | null;
};

export const initialData: StateAcesso = {
  page: '',
  auth: '',
  pinAdm: 0,
  id_acesso: 0,
  qdd_acesso: 0,
  ult_acesso: '',
  usando_tb: '',
  usando_id_tb: 0,
  modulo: '',
  descnivel: '',
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
  aplicacao: '',
};

export enum AcessoUseActions {
  SET_PAGE = 'SET_PAGE',
  SET_AUTH = 'SET_AUTH',
  SET_PIN_ADM = 'SET_PIN_ADM',
  SET_ID_ACESSO = 'SET_ID_ACESSO',
  SET_QDD_ACESSO = 'SET_QDD_ACESSO',
  SET_ULT_ACESSO = 'SET_ULT_ACESSO',
  SET_USANDO_TB = 'SET_USANDO_TB',
  SET_USANDO_ID_TB = 'SET_USANDO_TB_ID',
  SET_MODULO = 'SET_MODULO',
  SET_DESCRNIVEL = 'SET_DESCRNIVEL',
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
  SET_APLICACAO = 'SET_APLICACAO',
}

type AcessoAction =
  | { type: AcessoUseActions.SET_PAGE; payload: string | null }
  | { type: AcessoUseActions.SET_AUTH; payload: string | null }
  | { type: AcessoUseActions.SET_PIN_ADM; payload: number }
  | { type: AcessoUseActions.SET_ID_ACESSO; payload: number }
  | { type: AcessoUseActions.SET_QDD_ACESSO; payload: number }
  | { type: AcessoUseActions.SET_ULT_ACESSO; payload: string }
  | { type: AcessoUseActions.SET_USANDO_TB; payload: string }
  | { type: AcessoUseActions.SET_USANDO_ID_TB; payload: number }
  | { type: AcessoUseActions.SET_MODULO; payload: string }
  | { type: AcessoUseActions.SET_DESCRNIVEL; payload: string }
  | { type: AcessoUseActions.SET_NIVEL; payload: number }
  | { type: AcessoUseActions.SET_CADEADO; payload: boolean }
  | { type: AcessoUseActions.SET_MAIL; payload: string }
  | { type: AcessoUseActions.SET_PSEUDONIMO; payload: string }
  | { type: AcessoUseActions.SET_PSW; payload: string }
  | { type: AcessoUseActions.SET_PINNUMBER; payload: number }
  | { type: AcessoUseActions.SET_PINCHAR; payload: string }
  | { type: AcessoUseActions.SET_AVATAR; payload: null }
  | { type: AcessoUseActions.SET_PATH_AVATAR; payload: string }
  | { type: AcessoUseActions.SET_NMARQ_AVATAR; payload: string }
  | { type: AcessoUseActions.SET_IDEMP; payload: number }
  | { type: AcessoUseActions.SET_NMFANT; payload: string }
  | { type: AcessoUseActions.SET_LOGO; payload: null }
  | { type: AcessoUseActions.SET_PATH_LOGO; payload: string }
  | { type: AcessoUseActions.SET_NMARQ_LOGO; payload: string }
  | { type: AcessoUseActions.SET_DATINI; payload: string }
  | { type: AcessoUseActions.SET_DATAFIM; payload: string }
  | { type: AcessoUseActions.SET_TEMPO; payload: string }
  | { type: AcessoUseActions.SET_LOGADO; payload: boolean }
  | { type: AcessoUseActions.SET_NRCONT; payload: number }
  | { type: AcessoUseActions.SET_NMCONT; payload: string }
  | { type: AcessoUseActions.SET_MDLOGIN; payload: number }
  | { type: AcessoUseActions.SET_NMLOGIN; payload: string }
  | { type: AcessoUseActions.SET_APLICACAO; payload: string };

const AcessoReducer = (state: StateAcesso, action: AcessoAction) => {
  switch (action.type) {
    case AcessoUseActions.SET_PAGE:
      return { ...state, page: action.payload };
    case AcessoUseActions.SET_AUTH:
      return { ...state, auth: action.payload };
    case AcessoUseActions.SET_PIN_ADM:
      return { ...state, pinadm: action.payload };
    case AcessoUseActions.SET_ID_ACESSO:
      return { ...state, id_acesso: action.payload };
    case AcessoUseActions.SET_QDD_ACESSO:
      return { ...state, qdd_acesso: action.payload };
    case AcessoUseActions.SET_ULT_ACESSO:
      return { ...state, ult_acesso: action.payload };
    case AcessoUseActions.SET_USANDO_TB:
      return { ...state, usando_tb: action.payload };
    case AcessoUseActions.SET_USANDO_ID_TB:
      return { ...state, usando_id_tb: action.payload };
    case AcessoUseActions.SET_MODULO:
      return { ...state, modulo: action.payload };
    case AcessoUseActions.SET_DESCRNIVEL:
      return { ...state, descrnivel: action.payload };
    case AcessoUseActions.SET_NIVEL:
      return { ...state, nivel: action.payload };
    case AcessoUseActions.SET_CADEADO:
      return { ...state, cadeado: action.payload };
    case AcessoUseActions.SET_MAIL:
      return { ...state, mail: action.payload };
    case AcessoUseActions.SET_PSEUDONIMO:
      return { ...state, pseudonimo: action.payload };
    case AcessoUseActions.SET_PSW:
      return { ...state, psw: action.payload };
    case AcessoUseActions.SET_PINNUMBER:
      return { ...state, pinnumber: action.payload };
    case AcessoUseActions.SET_PINCHAR:
      return { ...state, pinchar: action.payload };
    case AcessoUseActions.SET_AVATAR:
      return { ...state, avatar: action.payload };
    case AcessoUseActions.SET_PATH_AVATAR:
      return { ...state, path_avatar: action.payload };
    case AcessoUseActions.SET_NMARQ_AVATAR:
      return { ...state, nmarq_avatar: action.payload };
    case AcessoUseActions.SET_IDEMP:
      return { ...state, idemp: action.payload };
    case AcessoUseActions.SET_NMFANT:
      return { ...state, nmfant: action.payload };
    case AcessoUseActions.SET_LOGO:
      return { ...state, logo: action.payload };
    case AcessoUseActions.SET_PATH_LOGO:
      return { ...state, path_logo: action.payload };
    case AcessoUseActions.SET_NMARQ_LOGO:
      return { ...state, nmarq_logo: action.payload };
    case AcessoUseActions.SET_DATINI:
      return { ...state, data_ini: action.payload };
    case AcessoUseActions.SET_DATAFIM:
      return { ...state, data_fim: action.payload };
    case AcessoUseActions.SET_TEMPO:
      return { ...state, tempo: action.payload };
    case AcessoUseActions.SET_LOGADO:
      return { ...state, logado: action.payload };
    case AcessoUseActions.SET_NRCONT:
      return { ...state, nrcont: action.payload };
    case AcessoUseActions.SET_NMCONT:
      return { ...state, nmcont: action.payload };
    case AcessoUseActions.SET_MDLOGIN:
      return { ...state, mdlogin: action.payload };
    case AcessoUseActions.SET_NMLOGIN:
      return { ...state, nmlogin: action.payload };
    case AcessoUseActions.SET_APLICACAO:
      return { ...state, aplicacao: action.payload };
    default:
      return state;
  }
};

type AcessoContextType = {
  state: StateAcesso;
  dispatch: React.Dispatch<AcessoAction>;
};
const AcessoContext = createContext<AcessoContextType | undefined>(undefined);

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
    throw new Error('useAcessoContext must be used within AcessoProvider');
  }
  return context;
};
