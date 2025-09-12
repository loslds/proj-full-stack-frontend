
import React, { createContext } from 'react';

export type StateAcesso = {
  page: string | null;
  chkdb: boolean | null; chvkey: boolean | null; logado: boolean | null;
  auth: string | null;
  aplicacao: string | null;
  id_setor: number; modulo: string | null;
  id_nivel: number; acao: string | null;
  id_emp: number; nomeemp: string | null; fantemp: string | null;
  id_vis: number; nomevis: string | null; fantvis: string | null;
  id_cli: number; nomecli: string | null; fantcli: string | null;
  id_for: number; nomefor: string | null; fantfor: string | null;
  id_fun: number; nomefun: string | null; fantfun: string | null;
  id_img: number; img_logo: Blob | null; img_avatar: Blob | null; img_path: string | null; img_nmarq: string | null;
  id_acesso: number; qdd_acesso: number; ult_acesso: string | null;
  cadeado: boolean | null;
  id_user: number;  nomeuser: string | null;
  mail: string | null; pseudonimo: string | null;
  psw: string | null; pinnumber: number; pinchar: string | null;
  dataini: string | null; datafim: string | null; tempo: string | null; 
  mdlogin: number | null; nmlogin: string | null; nrcont: number | null; nmcont: string | null;
};

export const initialData: StateAcesso = {
  page: '',
  chkdb: false, chvkey: false, logado: false,
  auth: '',
  aplicacao: '',
  id_setor: 0, modulo: '',
  id_nivel: 0, acao: '',
  id_emp: 0, nomeemp: '', fantemp: '',
  id_vis: 0, nomevis: '', fantvis: '',
  id_cli: 0, nomecli: '', fantcli: '',
  id_for: 0, nomefor: '', fantfor: '',
  id_fun: 0, nomefun: '', fantfun: '',
  id_img: 0, img_logo: null, img_avatar: null, img_path: '', img_nmarq: '',
  id_acesso: 0, qdd_acesso: 0, ult_acesso: '', 
  cadeado: false,
  id_user: 0, nomeuser: '',
  mail: '', pseudonimo: '',
  psw: '', pinnumber: 0, pinchar: '',
  dataini: '', datafim: '', tempo: '',
  nrcont: 0, nmcont: '',
  mdlogin: 0, nmlogin: '',
};

export enum UseAcessoActions {
  SET_PAGE = 'SET_PAGE',
  SET_CHKDB = 'SET_CHKDB', SET_CHVKEY = 'SET_CHVKEY', SET_LOGADO = 'SET_LOGADO',
  SET_AUTH = 'SET_AUTH',
  SET_APLICACAO = 'SET_APLICACAO',
  SET_ID_NIVEL = 'SET_ID_NIVEL', SET_ACAO = 'SET_ACAO',
  SET_ID_SETOR = 'SET_ID_SETOR', SET_MODULO = 'SET_MODULO',
  SET_ID_EMP = 'SET_ID_EMP', SET_NOMEEMP = 'SET_NOMEEMP', SET_FANTEMP = 'SET_FANTEMP',
  SET_ID_VIS = 'SET_ID_VIS', SET_NOMEVIS = 'SET_NOMEVIS', SET_FANTVIS = 'SET_FANTVIS',
  SET_ID_CLI = 'SET_ID_CLI', SET_NOMECLI = 'SET_NOMECLI', SET_FANTCLI = 'SET_FANTCLI',
  SET_ID_FOR = 'SET_ID_FOR', SET_NOMEFOR = 'SET_NOMEFOR', SET_FANTFOR = 'SET_FANTFOR',
  SET_ID_FUN = 'SET_ID_FUN', SET_NOMEFUN = 'SET_NOMEFUN', SET_FANTFUN = 'SET_FANTFUN',
  SET_ID_IMG = 'SET_ID_IMG', SET_IMG_LOGO = 'SET_IMG_LOGO', SET_IMG_AVATAR = 'SET_IMG_AVATAR', 
  SET_IMG_PATH = 'SET_IMG_PATH', SET_IMG_NMARQ = 'SET_IMG_NMARQ',
  SET_ID_ACESSO = 'SET_ID_ACESSO', SET_QDD_ACESSO = 'SET_QDD_ACESSO', SET_ULT_ACESSO = 'SET_ULT_ACESSO',
  SET_CADEADO = 'SET_CADEADO',
  SET_ID_USER = 'SET_ID_USER', SET_NOMEUSER = 'SET_NOMEUSER',
  SET_MAIL = 'SET_MAIL', SET_PSEUDONIMO = 'SET_PSEUDONIMO',
  SET_PSW = 'SET_PSW', SET_PINNUMBER = 'SET_PIN_NUMBER', SET_PINCHAR = 'SET_PINCHAR',
  SET_DATAINI = 'SET_DATAINI', SET_DATAFIM = 'SET_DATAFIM', SET_TEMPO = 'SET_TEMPO',
  SET_NRCONT = 'SET_NRCONT', SET_NMCONT = 'SET_NMCONT',
  SET_MDLOGIN = 'SET_MDLOGIN', SET_NMLOGIN = 'SET_NMLOGIN',
}

type AcessoAction =
  | { type: UseAcessoActions.SET_PAGE; payload: string | null }
  | { type: UseAcessoActions.SET_CHKDB; payload: boolean | null }
  | { type: UseAcessoActions.SET_CHVKEY; payload: boolean | null }
  | { type: UseAcessoActions.SET_LOGADO; payload: boolean }
  | { type: UseAcessoActions.SET_AUTH; payload: string | null }
  | { type: UseAcessoActions.SET_APLICACAO; payload: string }
  | { type: UseAcessoActions.SET_ID_NIVEL; payload: number }
  | { type: UseAcessoActions.SET_ACAO; payload: string }
  | { type: UseAcessoActions.SET_ID_SETOR; payload: number }
  | { type: UseAcessoActions.SET_MODULO; payload: string }
  | { type: UseAcessoActions.SET_ID_EMP; payload: string } 
  | { type: UseAcessoActions.SET_NOMEEMP; payload: string }
  | { type: UseAcessoActions.SET_FANTEMP; payload: string }
  | { type: UseAcessoActions.SET_ID_VIS; payload: string }
  | { type: UseAcessoActions.SET_NOMEVIS; payload: string }
  | { type: UseAcessoActions.SET_FANTVIS; payload: string }
  | { type: UseAcessoActions.SET_ID_CLI; payload: string }
  | { type: UseAcessoActions.SET_NOMECLI; payload: string }
  | { type: UseAcessoActions.SET_FANTCLI; payload: string }
  | { type: UseAcessoActions.SET_ID_FOR; payload: string }
  | { type: UseAcessoActions.SET_NOMEFOR; payload: string }
  | { type: UseAcessoActions.SET_FANTFOR; payload: string }
  | { type: UseAcessoActions.SET_ID_FUN; payload: string }
  | { type: UseAcessoActions.SET_NOMEFUN; payload: string }
  | { type: UseAcessoActions.SET_FANTFUN; payload: string }
  | { type: UseAcessoActions.SET_ID_IMG; payload: string } 
  | { type: UseAcessoActions.SET_IMG_LOGO; payload: null }
  | { type: UseAcessoActions.SET_IMG_AVATAR; payload: null }
  | { type: UseAcessoActions.SET_IMG_PATH; payload: string }
  | { type: UseAcessoActions.SET_IMG_NMARQ; payload: string }
  | { type: UseAcessoActions.SET_ID_ACESSO; payload: number }
  | { type: UseAcessoActions.SET_ID_USER; payload: boolean }
  | { type: UseAcessoActions.SET_NOMEUSER; payload: boolean }
  | { type: UseAcessoActions.SET_QDD_ACESSO; payload: number }
  | { type: UseAcessoActions.SET_ULT_ACESSO; payload: string }
  | { type: UseAcessoActions.SET_CADEADO; payload: boolean }
  | { type: UseAcessoActions.SET_MAIL; payload: string }
  | { type: UseAcessoActions.SET_PSEUDONIMO; payload: string }
  | { type: UseAcessoActions.SET_PSW; payload: string }
  | { type: UseAcessoActions.SET_PINNUMBER; payload: number }
  | { type: UseAcessoActions.SET_PINCHAR; payload: string }
  | { type: UseAcessoActions.SET_DATAINI; payload: string }
  | { type: UseAcessoActions.SET_DATAFIM; payload: string }
  | { type: UseAcessoActions.SET_TEMPO; payload: string }
  | { type: UseAcessoActions.SET_NRCONT; payload: number }
  | { type: UseAcessoActions.SET_NMCONT; payload: string }
  | { type: UseAcessoActions.SET_MDLOGIN; payload: number }
  | { type: UseAcessoActions.SET_NMLOGIN; payload: string };

export const AcessoReducer = (state: StateAcesso, action: AcessoAction) => {
  switch (action.type) {
    case UseAcessoActions.SET_PAGE:        return { ...state, page: action.payload };
    case UseAcessoActions.SET_CHVKEY:      return { ...state, chvkey: action.payload };
    case UseAcessoActions.SET_CHKDB:       return { ...state, chkdb: action.payload };
    case UseAcessoActions.SET_LOGADO:      return { ...state, logado: action.payload };
    case UseAcessoActions.SET_AUTH:        return { ...state, auth: action.payload };
    case UseAcessoActions.SET_APLICACAO:   return { ...state, aplicacao: action.payload };
    case UseAcessoActions.SET_ID_NIVEL:    return { ...state, id_nivel: action.payload };
    case UseAcessoActions.SET_ACAO:        return { ...state, acao: action.payload };
    case UseAcessoActions.SET_ID_SETOR:    return { ...state, id_setor: action.payload };
    case UseAcessoActions.SET_MODULO:      return { ...state, modulo: action.payload };
    case UseAcessoActions.SET_ID_EMP:      return { ...state, id_emp: action.payload };
    case UseAcessoActions.SET_NOMEEMP:     return { ...state, nomeemp: action.payload };
    case UseAcessoActions.SET_FANTEMP:     return { ...state, fantemp: action.payload };
    case UseAcessoActions.SET_ID_VIS:      return { ...state, id_vis: action.payload };
    case UseAcessoActions.SET_NOMEVIS:     return { ...state, nomevis: action.payload };
    case UseAcessoActions.SET_FANTVIS:     return { ...state, fantvis: action.payload };
    case UseAcessoActions.SET_ID_CLI:      return { ...state, ide_cli: action.payload };
    case UseAcessoActions.SET_NOMECLI:     return { ...state, nomecli: action.payload };
    case UseAcessoActions.SET_FANTCLI:     return { ...state, fantcli: action.payload };
    case UseAcessoActions.SET_ID_FOR:      return { ...state, id_for: action.payload };
    case UseAcessoActions.SET_NOMEFOR:     return { ...state, nomefor: action.payload };
    case UseAcessoActions.SET_FANTFOR:     return { ...state, fantfor: action.payload };
    case UseAcessoActions.SET_ID_FUN:      return { ...state, id_fun: action.payload };
    case UseAcessoActions.SET_NOMEFUN:     return { ...state, nomefun: action.payload };
    case UseAcessoActions.SET_FANTFUN:     return { ...state, fantfun: action.payload };
    case UseAcessoActions.SET_ID_IMG:      return { ...state, id_img: action.payload };
    case UseAcessoActions.SET_IMG_LOGO:    return { ...state, img_logo: action.payload };
    case UseAcessoActions.SET_IMG_AVATAR:  return { ...state, img_avatar: action.payload };
    case UseAcessoActions.SET_IMG_PATH:    return { ...state, img_path: action.payload };
    case UseAcessoActions.SET_IMG_NMARQ:   return { ...state, img_nmarq: action.payload };
    case UseAcessoActions.SET_ID_ACESSO:   return { ...state, id_acesso: action.payload };
    case UseAcessoActions.SET_ID_USER:     return { ...state, id_user: action.payload };
    case UseAcessoActions.SET_NOMEUSER:    return { ...state, nomeuser: action.payload };
    case UseAcessoActions.SET_QDD_ACESSO:  return { ...state, qdd_acesso: action.payload };
    case UseAcessoActions.SET_ULT_ACESSO:  return { ...state, ult_acesso: action.payload };
    case UseAcessoActions.SET_CADEADO:     return { ...state, cadeado: action.payload };
    case UseAcessoActions.SET_MAIL:        return { ...state, mail: action.payload };
    case UseAcessoActions.SET_PSEUDONIMO:  return { ...state, pseudonimo: action.payload };
    case UseAcessoActions.SET_PSW:         return { ...state, psw: action.payload };
    case UseAcessoActions.SET_PINNUMBER:   return { ...state, pinnumber: action.payload };
    case UseAcessoActions.SET_PINCHAR:     return { ...state, pinchar: action.payload };
    case UseAcessoActions.SET_DATAINI:     return { ...state, dataini: action.payload };
    case UseAcessoActions.SET_DATAFIM:     return { ...state, datafim: action.payload };
    case UseAcessoActions.SET_TEMPO:       return { ...state, tempo: action.payload };
    case UseAcessoActions.SET_NRCONT:      return { ...state, nrcont: action.payload };
    case UseAcessoActions.SET_NMCONT:      return { ...state, nmcont: action.payload };
    case UseAcessoActions.SET_MDLOGIN:     return { ...state, mdlogin: action.payload };
    case UseAcessoActions.SET_NMLOGIN:     return { ...state, nmlogin: action.payload };

    default:
      return state;
    }
};


// Define o tipo do contexto
export type AcessoContextType = {
  state: StateAcesso;
  dispatch: React.Dispatch<AcessoAction>;
};

// Cria o contexto
export const AcessoContext = createContext<AcessoContextType | undefined>(undefined);
 
///// fim  ///////