
// C:\repository\proj-full-stack-frontend\src\components\contexts\ContextAcesso.ts
import React from "react";
// ===================== Tipos =====================
export type StateAcesso = {
  page: string | null;
  initsys: boolean | null;
  chkdb: boolean | null;
  chvkey: boolean | null;
  logado: boolean | null;
  auth: string | null;
  aplicacao: string | null;
  id_modulo: number;
  modulo: string | null;
  id_nivel: number;
  acao: string | null;
  id_emp: number;
  nomeemp: string | null;
  fantemp: string | null;
  id_vis: number;
  nomevis: string | null;
  fantvis: string | null;
  id_cli: number;
  nomecli: string | null;
  fantcli: string | null;
  id_for: number;
  nomefor: string | null;
  fantfor: string | null;
  id_fun: number;
  nomefun: string | null;
  fantfun: string | null;
  id_img: number;
  img_logo: Blob | null;
  img_avatar: Blob | null;
  img_path: string | null;
  img_nmarq: string | null;
  id_acesso: number;
  qdd_acesso: number;
  ult_acesso: string | null;
  cadeado: boolean | null;
  id_user: number;
  nomeuser: string | null;
  mail: string | null;
  pseudonimo: string | null;
  psw: string | null;
  pinnumber: number;
  pinchar: string | null;
  dataini: string | null;
  datafim: string | null;
  tempo: string | null;
  mdlogin: number | null;
  nmlogin: string | null;
  nrcont: number | null;
  nmcont: string | null;
  systemMode: 'LEVE' | 'DEV' | 'LEVE';
  nametable: string | null;
  regtable: boolean | null;
  inctable: boolean | null;
  alttable: boolean | null;
  exctable: boolean | null;
  reltable: boolean | null;

};

// ===================== Estado inicial =====================
export const initialData: StateAcesso = {
  page: '',
  initsys: false,
  chkdb: false,
  chvkey: false,
  logado: false,
  auth: '',
  aplicacao: '',
  id_modulo: 0,
  modulo: '',
  id_nivel: 0,
  acao: '',
  id_emp: 0,
  nomeemp: '',
  fantemp: '',
  id_vis: 0,
  nomevis: '',
  fantvis: '',
  id_cli: 0,
  nomecli: '',
  fantcli: '',
  id_for: 0,
  nomefor: '',
  fantfor: '',
  id_fun: 0,
  nomefun: '',
  fantfun: '',
  id_img: 0,
  img_logo: null,
  img_avatar: null,
  img_path: '',
  img_nmarq: '',
  id_acesso: 0,
  qdd_acesso: 0,
  ult_acesso: '',
  cadeado: false,
  id_user: 0,
  nomeuser: '',
  mail: '',
  pseudonimo: '',
  psw: '',
  pinnumber: 0,
  pinchar: '',
  dataini: '',
  datafim: '',
  tempo: '',
  mdlogin: 0,
  nmlogin: '',
  nrcont: 0,
  nmcont: '',
  systemMode: 'DEV', // ou 'LEVE' por padrão
  nametable: '',
  regtable: false,
  inctable: false,
  alttable: false,
  exctable: false,
  reltable: false,

};

// ===================== Enum de ações =====================
export enum UseAcessoActions {
  set_PAGE,
  set_INITSYS,
  set_CHKDB,
  set_CHVKEY,
  set_LOGADO,
  set_AUTH,
  set_APLICACAO,
  set_ID_MODULO,
  set_MODULO,
  set_ID_NIVEL,
  set_ACAO,
  set_ID_EMP,
  set_NOMEEMP,
  set_FANTEMP,
  set_ID_VIS,
  set_NOMEVIS,
  set_FANTVIS,
  set_ID_CLI,
  set_NOMECLI,
  set_FANTCLI,
  set_ID_FOR,
  set_NOMEFOR,
  set_FANTFOR,
  set_ID_FUN,
  set_NOMEFUN,
  set_FANTFUN,
  set_ID_IMG,
  set_IMG_LOGO,
  set_IMG_AVATAR,
  set_IMG_PATH,
  set_IMG_NMARQ,
  set_ID_ACESSO,
  set_QDD_ACESSO,
  set_ULT_ACESSO,
  set_CADEADO,
  set_ID_USER,
  set_NOMEUSER,
  set_MAIL,
  set_PSEUDONIMO,
  set_PSW,
  set_PINNUMBER,
  set_PINCHAR,
  set_DATAINI,
  set_DATAFIM,
  set_TEMPO,
  set_NRCONT,
  set_NMCONT,
  set_MDLOGIN,
  set_NMLOGIN,
  set_SYSTEM_MODE,
  set_NAME_TABLE,
  set_REG_TABLE,
  set_INC_TABLE,
  set_ALT_TABLE,
  set_EXC_TABLE,
  set_REL_TABLE,

}

// ===================== Tipos de ações =====================
export type AcessoAction =
  | { type: UseAcessoActions.set_PAGE; payload: string | null }
  | { type: UseAcessoActions.set_INITSYS; payload: boolean | null }
  | { type: UseAcessoActions.set_CHKDB; payload: boolean | null }
  | { type: UseAcessoActions.set_CHVKEY; payload: boolean | null }
  | { type: UseAcessoActions.set_LOGADO; payload: boolean | null }
  | { type: UseAcessoActions.set_AUTH; payload: string | null }
  | { type: UseAcessoActions.set_APLICACAO; payload: string }
  | { type: UseAcessoActions.set_ID_MODULO; payload: number }
  | { type: UseAcessoActions.set_MODULO; payload: string }
  | { type: UseAcessoActions.set_ID_NIVEL; payload: number }
  | { type: UseAcessoActions.set_ACAO; payload: string }
  | { type: UseAcessoActions.set_ID_EMP; payload: number }
  | { type: UseAcessoActions.set_NOMEEMP; payload: string }
  | { type: UseAcessoActions.set_FANTEMP; payload: string }
  | { type: UseAcessoActions.set_ID_VIS; payload: number }
  | { type: UseAcessoActions.set_NOMEVIS; payload: string }
  | { type: UseAcessoActions.set_FANTVIS; payload: string }
  | { type: UseAcessoActions.set_ID_CLI; payload: number }
  | { type: UseAcessoActions.set_NOMECLI; payload: string }
  | { type: UseAcessoActions.set_FANTCLI; payload: string }
  | { type: UseAcessoActions.set_ID_FOR; payload: number }
  | { type: UseAcessoActions.set_NOMEFOR; payload: string }
  | { type: UseAcessoActions.set_FANTFOR; payload: string }
  | { type: UseAcessoActions.set_ID_FUN; payload: number }
  | { type: UseAcessoActions.set_NOMEFUN; payload: string }
  | { type: UseAcessoActions.set_FANTFUN; payload: string }
  | { type: UseAcessoActions.set_ID_IMG; payload: number }
  | { type: UseAcessoActions.set_IMG_LOGO; payload: Blob | null }
  | { type: UseAcessoActions.set_IMG_AVATAR; payload: Blob | null }
  | { type: UseAcessoActions.set_IMG_PATH; payload: string }
  | { type: UseAcessoActions.set_IMG_NMARQ; payload: string }
  | { type: UseAcessoActions.set_ID_ACESSO; payload: number }
  | { type: UseAcessoActions.set_ID_USER; payload: number }
  | { type: UseAcessoActions.set_NOMEUSER; payload: string }
  | { type: UseAcessoActions.set_QDD_ACESSO; payload: number }
  | { type: UseAcessoActions.set_ULT_ACESSO; payload: string }
  | { type: UseAcessoActions.set_CADEADO; payload: boolean | null }
  | { type: UseAcessoActions.set_MAIL; payload: string }
  | { type: UseAcessoActions.set_PSEUDONIMO; payload: string }
  | { type: UseAcessoActions.set_PSW; payload: string }
  | { type: UseAcessoActions.set_PINNUMBER; payload: number }
  | { type: UseAcessoActions.set_PINCHAR; payload: string }
  | { type: UseAcessoActions.set_DATAINI; payload: string }
  | { type: UseAcessoActions.set_DATAFIM; payload: string }
  | { type: UseAcessoActions.set_TEMPO; payload: string }
  | { type: UseAcessoActions.set_NRCONT; payload: number }
  | { type: UseAcessoActions.set_NMCONT; payload: string }
  | { type: UseAcessoActions.set_MDLOGIN; payload: number }
  | { type: UseAcessoActions.set_NMLOGIN; payload: string }
  | { type: UseAcessoActions.set_SYSTEM_MODE; payload: 'DEV' | 'LEVE' }
  | { type: UseAcessoActions.set_NAME_TABLE; payload: string }
  | { type: UseAcessoActions.set_REG_TABLE; payload: boolean | null }
  | { type: UseAcessoActions.set_INC_TABLE; payload: boolean | null }
  | { type: UseAcessoActions.set_ALT_TABLE; payload: boolean | null }
  | { type: UseAcessoActions.set_EXC_TABLE; payload: boolean | null }
  | { type: UseAcessoActions.set_REL_TABLE; payload: boolean | null };

  // ===================== Reducer =====================

export const AcessoReducer = (state: StateAcesso, action: AcessoAction) => {
  switch (action.type) {  
    case UseAcessoActions.set_PAGE: return { ...state, page: action.payload };
    case UseAcessoActions.set_INITSYS: return { ...state, initsys: action.payload };
    case UseAcessoActions.set_CHKDB: return { ...state, chkdb: action.payload };
    case UseAcessoActions.set_CHVKEY: return { ...state, chvkey: action.payload };
    case UseAcessoActions.set_LOGADO: return { ...state, logado: action.payload };
    case UseAcessoActions.set_AUTH: return { ...state, auth: action.payload };
    case UseAcessoActions.set_APLICACAO: return { ...state, aplicacao: action.payload };
    case UseAcessoActions.set_ID_NIVEL: return { ...state, id_nivel: action.payload };
    case UseAcessoActions.set_ACAO: return { ...state, acao: action.payload };
    case UseAcessoActions.set_ID_MODULO: return { ...state, id_modulo: action.payload };
    case UseAcessoActions.set_MODULO: return { ...state, modulo: action.payload };
    case UseAcessoActions.set_ID_EMP: return { ...state, id_emp: action.payload };
    case UseAcessoActions.set_NOMEEMP: return { ...state, nomeemp: action.payload };
    case UseAcessoActions.set_FANTEMP: return { ...state, fantemp: action.payload };
    case UseAcessoActions.set_ID_VIS: return { ...state, id_vis: action.payload };
    case UseAcessoActions.set_NOMEVIS: return { ...state, nomevis: action.payload };
    case UseAcessoActions.set_FANTVIS: return { ...state, fantvis: action.payload };
    case UseAcessoActions.set_ID_CLI: return { ...state, id_cli: action.payload };
    case UseAcessoActions.set_NOMECLI: return { ...state, nomecli: action.payload };
    case UseAcessoActions.set_FANTCLI: return { ...state, fantcli: action.payload };
    case UseAcessoActions.set_ID_FOR: return { ...state, id_for: action.payload };
    case UseAcessoActions.set_NOMEFOR: return { ...state, nomefor: action.payload };
    case UseAcessoActions.set_FANTFOR: return { ...state, fantfor: action.payload };
    case UseAcessoActions.set_ID_FUN: return { ...state, id_fun: action.payload };
    case UseAcessoActions.set_NOMEFUN: return { ...state, nomefun: action.payload };
    case UseAcessoActions.set_FANTFUN: return { ...state, fantfun: action.payload };
    case UseAcessoActions.set_ID_IMG: return { ...state, id_img: action.payload };
    case UseAcessoActions.set_IMG_LOGO: return { ...state, img_logo: action.payload };
    case UseAcessoActions.set_IMG_AVATAR: return { ...state, img_avatar: action.payload };
    case UseAcessoActions.set_IMG_PATH: return { ...state, img_path: action.payload };
    case UseAcessoActions.set_IMG_NMARQ: return { ...state, img_nmarq: action.payload };
    case UseAcessoActions.set_ID_ACESSO: return { ...state, id_acesso: action.payload };
    case UseAcessoActions.set_ID_USER: return { ...state, id_user: action.payload };
    case UseAcessoActions.set_NOMEUSER: return { ...state, nomeuser: action.payload };
    case UseAcessoActions.set_QDD_ACESSO: return { ...state, qdd_acesso: action.payload };
    case UseAcessoActions.set_ULT_ACESSO: return { ...state, ult_acesso: action.payload };
    case UseAcessoActions.set_CADEADO: return { ...state, cadeado: action.payload };
    case UseAcessoActions.set_MAIL: return { ...state, mail: action.payload };
    case UseAcessoActions.set_PSEUDONIMO: return { ...state, pseudonimo: action.payload };
    case UseAcessoActions.set_PSW: return { ...state, psw: action.payload };
    case UseAcessoActions.set_PINNUMBER: return { ...state, pinnumber: action.payload };
    case UseAcessoActions.set_PINCHAR: return { ...state, pinchar: action.payload };
    case UseAcessoActions.set_DATAINI: return { ...state, dataini: action.payload };
    case UseAcessoActions.set_DATAFIM: return { ...state, datafim: action.payload };
    case UseAcessoActions.set_TEMPO: return { ...state, tempo: action.payload };
    case UseAcessoActions.set_NRCONT: return { ...state, nrcont: action.payload };
    case UseAcessoActions.set_NMCONT: return { ...state, nmcont: action.payload };
    case UseAcessoActions.set_MDLOGIN: return { ...state, mdlogin: action.payload };
    case UseAcessoActions.set_NMLOGIN: return { ...state, nmlogin: action.payload };
    case UseAcessoActions.set_SYSTEM_MODE: return { ...state, systemMode: action.payload };
    case UseAcessoActions.set_NAME_TABLE: return { ...state, nametable: action.payload };
    case UseAcessoActions.set_REG_TABLE: return { ...state, regtable: action.payload };
    case UseAcessoActions.set_INC_TABLE: return { ...state, inctable: action.payload };
    case UseAcessoActions.set_ALT_TABLE: return { ...state, inctable: action.payload };
    case UseAcessoActions.set_EXC_TABLE: return { ...state, alttable: action.payload };
    case UseAcessoActions.set_REL_TABLE: return { ...state, reltable: action.payload };
    default: return state;
  }
};

export interface AcessoContextType  {
  state: StateAcesso;
  dispatch: (action: AcessoAction) => void;
};
export const AcessoContext = React.createContext<AcessoContextType | undefined>(undefined);

export const useAcessoContext = () => {
  const context = React.useContext(AcessoContext);
  if (!context) {
    throw new Error('useAcessoContext must be used within AcessoProvider');
  }
  return context;
};