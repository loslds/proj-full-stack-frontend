import * as M from '../modal/stylesModal';
import { CardModalCenter } from '../modal/CardModalCenter';
import { CardModalAround } from '../modal/CardModalAround';
import { CardModalTextoColumn } from '../modal/CardModalTextoColumn';
import { CardHlpFooter } from './CardHlpFooter';

import { useAcessoContext } from "../components/contexts/ContextAcesso";

interface PropsCardHlpStateContextPage {
  imgcardpage?: string;
  pminheight?: string;
  pwidth?: string;
  onclosesair?: () => void;
}
export const CardHlpStateContextPage = ({
  imgcardpage,
  onclosesair,
}: PropsCardHlpStateContextPage) => {

  const { state } = useAcessoContext();

  return (
    
    <CardModalCenter>
      <CardModalAround>
        <M.ContainerModalImg
          pminheight={'110px'}
          pwidth={'110px'}
          img={imgcardpage}
        />
      </CardModalAround>
      <CardModalTextoColumn>
        <h2>States e Valores assumidos no Sistema.</h2>
        <h3>States Página Respectiva.</h3>
        
         <label>&emsp;&emsp;&emsp; page________: {state.page}</label>
        <label>&emsp;&emsp;&emsp; aplicacao ____: {state.aplicacao}</label>
        <label>&emsp;&emsp;&emsp; path_origem _: &emsp;&emsp;{state.path_origem}</label>
        <label>&emsp;&emsp;&emsp; path_destino_: &emsp;&emsp;{state.path_destino}</label>
    
        <h3>States DataTime User.</h3>

        <label>&emsp;&emsp;&emsp; qdd_acesso_: {state.qdd_acesso}</label>
        <label>&emsp;&emsp;&emsp; ult_acesso _: {state.ult_acesso}</label>
        <label>&emsp;&emsp;&emsp; tempo _____: {state.tempo}</label>
        <label>&emsp;&emsp;&emsp; dataini_____: {state.dataini}</label>
    
        <h3>States Modo e Format Processo.</h3>

        <label>&emsp;&emsp;&emsp; mdlogin___: {state.mdlogin}</label>
        <label>&emsp;&emsp;&emsp; nmlogin___: {state.nmlogin}</label>
        <label>&emsp;&emsp;&emsp; nrcont ____: {state.nrcont}</label>
        <label>&emsp;&emsp;&emsp; nmcont____: {state.nmcont}</label>
    
        <h3>States Backup User Acesso.</h3>

        <label>&emsp;&emsp;&emsp; modulo _____: {state.modulo}</label>
        <label>&emsp;&emsp;&emsp; cor_________: {state.cor}</label>
        <label>&emsp;&emsp;&emsp; acao _______: {state.acao}</label>
        <label>&emsp;&emsp;&emsp; nivel _______: {state.nivel}</label>
    
        <label>&emsp;&emsp;&emsp;systemMode _: {state.systemMode ? "true" : "false"}</label>
        <label>&emsp;&emsp;&emsp;initsys ______: {state.initsys ? "true" : "false"}</label>
        <label>&emsp;&emsp;&emsp;chkdb _______: {state.chkdb ? "true" : "false"}</label>

        <h3>States Acesso User.</h3>

        <label>&emsp;&emsp;&emsp; chvkey _____: {state.chvkey ? "true" : "false"}</label>
        <label>&emsp;&emsp;&emsp; ismaster ___: {state.ismaster ? "true" : "false"}</label>
        <label>&emsp;&emsp;&emsp; auth_admin_: {state.auth_admin}</label>
    
        <label>&emsp;&emsp;&emsp; logado._____: {state.logado ? "true" : "false"}</label>
        <label>&emsp;&emsp;&emsp; auth._______: {state.auth}</label>
        <label>&emsp;&emsp;&emsp; identificador_: {state.identificador}</label>
        <label>&emsp;&emsp;&emsp; senha.______: {state.senha}</label>
        <label>&emsp;&emsp;&emsp; pinnumber___: {state.pinnumber}</label>
        <label>&emsp;&emsp;&emsp; pinchar______: {state.pinchar}</label>
    
        <label>&emsp;&emsp;&emsp; id_acesso.___: {state.id_acesso}</label>
    
        <div>
          <strong>&emsp;&emsp;&emsp; permissoes:</strong>
          <pre>{JSON.stringify(state.permissoes, null, 2)}</pre>
        </div>

        <h3>States Grid CRUD.</h3>

        <label>&emsp;&emsp;&emsp; nametable_: {state.nametable}</label>
        <label>&emsp;&emsp;&emsp; regtable___: {state.regtable ? "true" : "false"}</label>
        <label>&emsp;&emsp;&emsp; vistable___: {state.vistable ? "true" : "false"}</label>
        <label>&emsp;&emsp;&emsp; listtable___: {state.listtable ? "true" : "false"}</label>
        <label>&emsp;&emsp;&emsp; inctable___: {state.inctable ? "true" : "false"}</label>
        <label>&emsp;&emsp;&emsp; alttable___: {state.alttable ? "true" : "false"}</label>
        <label>&emsp;&emsp;&emsp; exctable___: {state.exctable ? "true" : "false"}</label>
        <label>&emsp;&emsp;&emsp; filttable___: {state.filttable ? "true" : "false"}</label>
    
        <h3>States Flags Acesso Modulo Sistema.</h3>

        <label>&emsp;&emsp;&emsp; keyVisitante.____: {state.keyVisitante ? "true" : "false"}</label>
        <label>&emsp;&emsp;&emsp; keyRecepcao.____: {state.keyRecepcao ? "true" : "false"}</label>
        <label>&emsp;&emsp;&emsp; keyDesign.______: {state.keyDesign ? "true" : "false"}</label>
        <label>&emsp;&emsp;&emsp; keyAcabamento.._: {state.keyAcabamento ? "true" : "false"}</label>
        <label>&emsp;&emsp;&emsp; keyProducao_____: {state.keyProducao ? "true" : "false"}</label>
        <label>&emsp;&emsp;&emsp; keyAdministracao..: {state.keyAdministracao ? "true" : "false"}</label>
        <label>&emsp;&emsp;&emsp; keyConfig._______: {state.keyConfig ? "true" : "false"}</label>
    
        <h3>States Controle Conteúdo Pagina Acessada pelo User.</h3>
    
        <label>&emsp;&emsp;&emsp; id_emp___: {state.id_emp}</label>
        <label>&emsp;&emsp;&emsp; nomeemp_: {state.nomeemp}</label>
        <label>&emsp;&emsp;&emsp; fantemp__: {state.fantemp}</label>
    
        <label>&emsp;&emsp;&emsp; id_vis____: {state.id_vis}</label>
        <label>&emsp;&emsp;&emsp; nomevis__: {state.nomevis}</label>
        <label>&emsp;&emsp;&emsp; fantvis___: {state.fantvis}</label>
    
        <label>&emsp;&emsp;&emsp; id_con.___: {state.id_con}</label>
        <label>&emsp;&emsp;&emsp; nomecon._: {state.nomecon}</label>
        <label>&emsp;&emsp;&emsp; fantcom__: {state.fantcom}</label>
    
        <label>&emsp;&emsp;&emsp; id_cli.____: {state.id_cli}</label>
        <label>&emsp;&emsp;&emsp; nomecli.__: {state.nomecli}</label>
        <label>&emsp;&emsp;&emsp; fantcli.___: {state.fantcli}</label>
    
        <label>&emsp;&emsp;&emsp; id_for____: {state.id_for}</label>
        <label>&emsp;&emsp;&emsp; nomefor__: {state.nomefor}</label>
        <label>&emsp;&emsp;&emsp; fantfor___: {state.fantfor}</label>
    
        <label>&emsp;&emsp;&emsp; id_fun.___: {state.id_fun}</label>
        <label>&emsp;&emsp;&emsp; nomefun._: {state.nomefun}</label>
        <label>&emsp;&emsp;&emsp; fantfun___: {state.fantfun}</label>
    
        <label>&emsp;&emsp;&emsp; id_user___: {state.id_user}</label>
        <label>&emsp;&emsp;&emsp; nomeuser_: {state.nomeuser}</label>
        <label>&emsp;&emsp;&emsp; mailuser__: {state.mailuser}</label>
        <label>&emsp;&emsp;&emsp; docuser___: {state.docuser}</label>
        <label>&emsp;&emsp;&emsp; foneuser__: {state.foneuser}</label>
        
        <label>&emsp;&emsp;&emsp; id_logo_emp.____: {state.id_logo_emp}</label>
        <label>&emsp;&emsp;&emsp; logo_nmarq_emp_: {state.logo_nmarq_emp}</label>
        <label>&emsp;&emsp;&emsp; logo_svg_emp.___: {state.logo_svg_emp}</label>
    
        <label>&emsp;&emsp;&emsp; id_img_user_____: {state.id_img_user}</label>
        <label>&emsp;&emsp;&emsp; img_nmarq_user._: {state.img_nmarq_user}</label>
        <label>&emsp;&emsp;&emsp; img_svg_user____: {state.img_svg_user}</label>
        
        <p>.</p>
        <CardHlpFooter
          label="PÁGINA-> Help State Context."
          texto="Você pode abortar se desejar, é só clicar em : "
          onclosesair={onclosesair}
        />
        
      </CardModalTextoColumn>
    </CardModalCenter>
  );
};
