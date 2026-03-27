
// C:\repository\proj-full-stack-frontend\src\components\contexts\ContextAcesso.ts
import React from "react";

export type StateAcesso = {
  page: string;
  aplicacao: string;
  path_origem: string;
  path_destino: string;

  qdd_acesso: number;
  ult_acesso: string;
  tempo: string;
  dataini: string;

  mdlogin: number;
  nmlogin: string;
  nrcont: number;
  nmcont: string;

  filttable: boolean;

  modulo: string;
  cor: string;
  acao: string;
  nivel: number;

  systemMode: "LEVE" | "DEV" | "PROD";
  initsys: boolean;
  chkdb: boolean;

  chvkey: boolean;
  ismaster: boolean;
  auth_admin: string;

  logado: boolean;
  auth: string;
  identificador: string;
  senha: string;
  pinnumber: number;
  pinchar: string;

  id_acesso: number;
  permissoes: {
    modulo: string;
    cargo: string;
    acao: string;
    cor: string;
    nivel: number;
  }[];

  nametable: string;
  regtable: boolean;
  vistable: boolean;
  listtable: boolean;
  inctable: boolean;
  alttable: boolean;
  exctable: boolean;

  keyVisitante: boolean;
  keyRecepcao: boolean;
  keyDesign: boolean;
  keyAcabamento: boolean;
  keyProducao: boolean;
  keyAdministracao: boolean;
  keyConfig: boolean;

  id_emp: number;
  nomeemp: string;
  fantemp: string;

  id_vis: number;
  nomevis: string;
  fantvis: string;

  id_con: number;
  nomecon: string;
  fantcom: string;

  id_cli: number;
  nomecli: string;
  fantcli: string;

  id_for: number;
  nomefor: string;
  fantfor: string;

  id_fun: number;
  nomefun: string;
  fantfun: string;

  id_user: number;
  nomeuser: string;
  mailuser: string;
  docuser: string;
  foneuser: string;

  id_logo_emp: number;
  logo_nmarq_emp: string;
  logo_svg_emp: string;

  id_img_user: number;
  img_nmarq_user: string;
  img_svg_user: string;
};

export const initialData: StateAcesso = {
  page: "",
  aplicacao: "",
  path_origem: "",
  path_destino: "",

  qdd_acesso: 0,
  ult_acesso: "",
  tempo: "",
  dataini: "",

  mdlogin: 0,
  nmlogin: "",
  nrcont: 0,
  nmcont: "",

  filttable: false,

  modulo: "",
  cor: "",
  acao: "",
  nivel: 0,

  systemMode: "LEVE",
  initsys: false,
  chkdb: false,

  chvkey: false,
  ismaster: false,
  auth_admin: "",

  logado: false,
  auth: "",
  identificador: "",
  senha: "",
  pinnumber: 0,
  pinchar: "",

  id_acesso: 0,
  permissoes: [],

  nametable: "",
  regtable: false,
  vistable: false,
  listtable: false,
  inctable: false,
  alttable: false,
  exctable: false,

  keyVisitante: false,
  keyRecepcao: false,
  keyDesign: false,
  keyAcabamento: false,
  keyProducao: false,
  keyAdministracao: false,
  keyConfig: false,

  id_emp: 0,
  nomeemp: "",
  fantemp: "",

  id_vis: 0,
  nomevis: "",
  fantvis: "",

  id_con: 0,
  nomecon: "",
  fantcom: "",

  id_cli: 0,
  nomecli: "",
  fantcli: "",

  id_for: 0,
  nomefor: "",
  fantfor: "",

  id_fun: 0,
  nomefun: "",
  fantfun: "",

  id_user: 0,
  nomeuser: "",
  mailuser: "",
  docuser: "",
  foneuser: "",

  id_logo_emp: 0,
  logo_nmarq_emp: "",
  logo_svg_emp: "",

  id_img_user: 0,
  img_nmarq_user: "",
  img_svg_user: "",
};

// action genérica
export type AcessoAction<K extends keyof StateAcesso = keyof StateAcesso> = {
  type: K;
  payload: StateAcesso[K];
};

export interface AcessoContextType {
  state: StateAcesso;
  dispatch: React.Dispatch<AcessoAction>;
}

export const AcessoContext = React.createContext<AcessoContextType | undefined>(undefined);

export const useAcessoContext = (): AcessoContextType => {
  const context = React.useContext(AcessoContext);

  if (!context) {
    throw new Error("useAcessoContext must be used within AcessoProvider");
  }

  return context;
};