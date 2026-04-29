
import { useAcessoContext } from "../components/contexts/ContextAcesso";
//import { ContentMainPage } from '../components/ContentMainPage';
//import { ContentMainTitle } from '../components/ContentMainTitle';


import { CardModalCenter } from '../modal/CardModalCenter';
//import { CardModalAround } from '../modal/CardModalAround';
import { CardModalTextoColumn } from '../modal/CardModalTextoColumn';


export const CardStateContext = () => {

  const { state } = useAcessoContext();

  return (
    <CardModalCenter>
      <CardModalTextoColumn>
        <label>page: {state.page}</label>
        <label>aplicacao: {state.aplicacao}</label>
        <label>path_origem: {state.path_origem}</label>
        <label>path_destino: {state.path_destino}</label>
    
        <label>qdd_acesso: {state.qdd_acesso}</label>
        <label>ult_acesso: {state.ult_acesso}</label>
        <label>tempo: {state.tempo}</label>
        <label>dataini: {state.dataini}</label>
    
        <label>mdlogin: {state.mdlogin}</label>
        <label>nmlogin: {state.nmlogin}</label>
        <label>nrcont: {state.nrcont}</label>
        <label>nmcont: {state.nmcont}</label>
    
        <label>modulo: {state.modulo}</label>
        <label>cor: {state.cor}</label>
        <label>acao: {state.acao}</label>
        <label>nivel: {state.nivel}</label>
    
        <label>systemMode: {state.systemMode ? "true" : "false"}</label>
        <label>initsys: {state.initsys ? "true" : "false"}</label>
        <label>chkdb: {state.chkdb ? "true" : "false"}</label>
    
        <label>chvkey: {state.chvkey ? "true" : "false"}</label>
        <label>ismaster: {state.ismaster ? "true" : "false"}</label>
        <label>auth_admin: {state.auth_admin}</label>
    
        <label>logado: {state.logado ? "true" : "false"}</label>
        <label>auth: {state.auth}</label>
        <label>identificador: {state.identificador}</label>
        <label>senha: {state.senha}</label>
        <label>pinnumber: {state.pinnumber}</label>
        <label>pinchar: {state.pinchar}</label>
    
        <label>id_acesso: {state.id_acesso}</label>
    
        <div>
          <strong>permissoes:</strong>
          <pre>{JSON.stringify(state.permissoes, null, 2)}</pre>
        </div>
    
        <label>nametable: {state.nametable}</label>
        <label>regtable: {state.regtable ? "true" : "false"}</label>
        <label>vistable: {state.vistable ? "true" : "false"}</label>
        <label>listtable: {state.listtable ? "true" : "false"}</label>
        <label>inctable: {state.inctable ? "true" : "false"}</label>
        <label>alttable: {state.alttable ? "true" : "false"}</label>
        <label>exctable: {state.exctable ? "true" : "false"}</label>
        <label>filttable: {state.filttable ? "true" : "false"}</label>
    
        <label>keyVisitante: {state.keyVisitante ? "true" : "false"}</label>
        <label>keyRecepcao: {state.keyRecepcao ? "true" : "false"}</label>
        <label>keyDesign: {state.keyDesign ? "true" : "false"}</label>
        <label>keyAcabamento: {state.keyAcabamento ? "true" : "false"}</label>
        <label>keyProducao: {state.keyProducao ? "true" : "false"}</label>
        <label>keyAdministracao: {state.keyAdministracao ? "true" : "false"}</label>
        <label>keyConfig: {state.keyConfig ? "true" : "false"}</label>
    
        <label>id_emp: {state.id_emp}</label>
        <label>nomeemp: {state.nomeemp}</label>
        <label>fantemp: {state.fantemp}</label>
    
        <label>id_vis: {state.id_vis}</label>
        <label>nomevis: {state.nomevis}</label>
        <label>fantvis: {state.fantvis}</label>
    
        <label>id_con: {state.id_con}</label>
        <label>nomecon: {state.nomecon}</label>
        <label>fantcom: {state.fantcom}</label>
    
        <label>id_cli: {state.id_cli}</label>
        <label>nomecli: {state.nomecli}</label>
        <label>fantcli: {state.fantcli}</label>
    
        <label>id_for: {state.id_for}</label>
        <label>nomefor: {state.nomefor}</label>
        <label>fantfor: {state.fantfor}</label>
    
        <label>id_fun: {state.id_fun}</label>
        <label>nomefun: {state.nomefun}</label>
        <label>fantfun: {state.fantfun}</label>
    
        <label>id_user: {state.id_user}</label>
        <label>nomeuser: {state.nomeuser}</label>
        <label>mailuser: {state.mailuser}</label>
        <label>docuser: {state.docuser}</label>
        <label>foneuser: {state.foneuser}</label>
    
        <label>id_logo_emp: {state.id_logo_emp}</label>
        <label>logo_nmarq_emp: {state.logo_nmarq_emp}</label>
        <label>logo_svg_emp: {state.logo_svg_emp}</label>
    
        <label>id_img_user: {state.id_img_user}</label>
        <label>img_nmarq_user: {state.img_nmarq_user}</label>
        <label>img_svg_user: {state.img_svg_user}</label>
      </CardModalTextoColumn>
    </CardModalCenter>
  );
};

    // <CardModalCenter>
    //   <CardModalAround>
    //     <M.ContainerModalImg
    //       pminheight={'60px'}
    //       pwidth={'80px'}
    //       img={imgcardmsg}
    //     />
    //   </CardModalAround>
    //   <CardModalTextoColumn>
    //     <h3>{titTxt}</h3>
    //     {children}
    //   </CardModalTextoColumn>
    // </CardModalCenter>
