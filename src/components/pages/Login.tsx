
import React from "react";
import * as Pg from '../stylePages';

import { useAcessoContext } from '../contexts/ContextAcesso';
//import { UseAcessoActions } from '../contexts/ContextAcesso';

//import axios from "axios";
import { ThemeProvider } from 'styled-components';
import light from '../../themes/light';
import dark from '../../themes/dark';
import { useNavigate } from 'react-router-dom';

import LayoutLogin from "../layouts/LayoutLogin";

import { ContentCardPageMain } from '../ContentCardPageMain';

import { ContentSidePagePanelBotton } from '../ContentSidePagePanelBotton';
import { ContentSideMsgPagePanelBotton } from '../ContentSideMsgPagePanelBotton';

import { PageModal } from './PageModal';
import { CardHlpLoginLogo } from '../../cards/CardHlpLoginLogo';
import { CardHlpLoginPage } from '../../cards/CardHlpLoginPage';

//import { ContentItensBody } from '../ContentItensBody';

//import { ContentBoxPageSelect } from '../ContentBoxPageSelect';
import { ContentCardBoxBorderPg } from "../ContentCardBoxBorderPg";
//import { ContentCardBoxDialogo } from '../ContentCardBoxDialogo';

//
import { ContentSidePageBottonLabel } from '../ContentSidePageBottonLabel';
import { ContentSidePageBottonButton } from '../ContentSidePageBottonButton';
//import { ContentPageButtonDefImgEnabled } from '../ContentPageButtonDefImgEnabled';

// imgs do header
import lg_login from '../../assets/defaut/tabelas/lg_login.svg';
import btn_chelp from '../../assets/defaut/button/btn_300/btn_chelp.svg';
import btn_csair from '../../assets/defaut/button/btn_300/btn_csair.svg';
// img do painel Bottom
import btn_refrescar from '../../assets/defaut/button/btn_300/btn_crefrescar.svg';
//import btn_qenviar from '../../assets/default/button/btn_qenviar.svg';

// img do painel Modal
import btn_qclose_modal from '../../assets/defaut/button/btn_300/btn_qclose_modal.svg';



//import { ContentCardCollunsFormPage } from '../ContentCardCollunsFormPage';
//import { ContentCardBoxInput } from '../ContentCardBoxInput';
//import { ContentInputMainPage } from '../ContentInputMainPage'
//import bt_voltar from "../../assets/pngs/bt_voltar.png";
//import bt_setadir from "../../assets/svgs/bt_setadir.svg";

//import { TypeListEmpresa, ListEmpresas } from "@/boockList/ListEmpresas";
//import { TypeListSetor, ListSetores } from "@/boockList/ListSetores";
//import { TypeListPassaporte, ListPassaportes } from "@/boockList/ListPassaportes";
//import { verifInputs } from '../../funcs/funcs/FuncVerificadores';
//import { isValidarEmail } from '../../funcs/ErroEdicao';
import { ContentCardPageTitle } from "../ContentCardPageTitle";
//import { ContentCardCollunsCenterPage } from "../ContentCardCollunsCenterPage";
//import { ContentCustonDivImg } from "../ContentCustonDivImg";
import { ContentPanelMain } from "../ContentPanelMain";


const Login: React.FC = () => {
  const { state,  } = useAcessoContext();

  const [theme, setTheme] = React.useState(light);
  const [ischeck, setIscheck] = React.useState(false);

  const [msgpanelbottom, setMsgPanelBottom] = React.useState('');

  // procedimentos para chamadas de Paginas
  const navigate = useNavigate();
  const goto = React.useCallback((path: string) => { navigate(path);} , [navigate]);
 
  // procedimentos para troca de THEME
  const ToggleTheme = () => {
    setTheme(theme.name === 'dark' ? light : dark);
    setIscheck((prev) => !prev);
  };

  // // Estados para os selects
  // const [isempresa, setIsEmpresa] = React.useState(true);
  // const [empresaSelecionada, setEmpresaSelecionada ] = React.useState('0');
  // const [idempresa, setIdEmpresa] = React.useState(0);
  // const [fantempresa, setFantEmpresa] = React.useState('');
  // //const [empresas, setEmpresas] = React.useState([]);

  // const [issetor, setIsSetor] = React.useState(false);
  // const [setorSelecionado, setSetorSelecionado ] = React.useState('0');
  // const [idsetor, setIdSetor] = React.useState(0);
  // const [nmsetor, setNmSetor] = React.useState('');
  // //const [setores, setSetores] = React.useState([]);

  // const [ispassaporte, setIsPassaporte] = React.useState(false);
  // const [passaporteSelecionado, setPassaporteSelecionado ] = React.useState('0');
  // const [idpassaporte, setIdPassaporte] = React.useState(0);
  // const [nmpassaporte, setNmPassaporte] = React.useState('');
  // //const [passaporte, setPassaporte] = React.useState([]);
  
  // const [isinput, setIsInput] = React.useState(false);

  // const [chkinput1, setChkInput1] = React.useState(false);
  // const [chkinput2, setChkInput2] = React.useState(false);
  
  // const [input1, setInput1] = React.useState("");
  // const [input2, setInput2] = React.useState("");
 
  // const [ischked, setIsChked] = React.useState(false);
  // const [mskinput1, setMskInput1] = React.useState("");
  // const [mskinput2, setMskInput2] = React.useState("");


  
  // const [isdesable, setIsDesable] = React.useState(true);
  // const [isbtnchk, setIsBtnChk] = React.useState(false);
  // const [corstt, setCorStt]= React.useState(0);
  // const [ischkacesso, setIsChkAcesso] = React.useState(false);

  //const [rtnmsgpanelbottom, setRtnMsgPanelBottom] = React.useState('');




  const [cardhplloginlogo, setCardHlpLoginLogo] = React.useState(false);
  const handlerCardHlpLoginLogo = React.useCallback(() => {
    setCardHlpLoginLogo((oldState) => !oldState);
  }, []);

  const [cardhplloginpage, setCardHlpLoginPage] = React.useState(false);
  const handlerCardHlpLoginPage = React.useCallback(() => {
    setCardHlpLoginPage((oldState) => !oldState);
  }, []);
  
  // const handleContinuar = () => {
  //     alert('Logando Acesso ao Sistema...');
  // };

  return (
    <ThemeProvider theme={theme}>
      <LayoutLogin
        imgsys={lg_login}
        titbtnsys="Acesso Sistema..."
        onclicksys={handlerCardHlpLoginLogo}
        titlepg="Login"
        imgbtnhlppg={btn_chelp}
        titbtnhlppg="Help Page..."
        onclickhlppg={ handlerCardHlpLoginPage }
        imgbtnaborta={btn_csair}
        titbtnaborta="Abortar..."
        onclickaborta={() => goto('/') }
        onchange={ToggleTheme}
        ischeck={ischeck}
        >
        <ContentCardPageMain open={true}>


        </ContentCardPageMain>
          
        <ContentCardPageMain open={true}>
          <ContentCardBoxBorderPg pwidth="100%">
            <ContentCardPageTitle>
              <h2>Checkando Dados</h2>
              <p>Mostra os dados selecionados e editado</p>
            </ContentCardPageTitle>
            <ContentPanelMain>
              <h2>Checkando Dados</h2>
              <p>Mostra pados checados ou não</p>
            </ContentPanelMain>
          </ContentCardBoxBorderPg>
        </ContentCardPageMain>
        

        <Pg.DivisionPgHztal /> 

        <ContentSidePagePanelBotton bordas="3px" open={true} pwidth="100%">
          <ContentSideMsgPagePanelBotton bordas="3px" label={'Menssagens : '} msg={ msgpanelbottom } />

          <ContentSidePageBottonLabel open={true} istitl={true} title={'Refrescar.: '}>
            <ContentSidePageBottonButton
              pxheight={'40px'}
              img={btn_refrescar}
              titbtn={'Refrescar...'}
              onClick={() => window.location.reload()}
              onMouseEnter={() => setMsgPanelBottom('Refrescar a Page...') }
              onMouseLeave={() => {
                if (!state.logado) {
                  setMsgPanelBottom('Aguardando Acesso ao Sistema...'); 
                }
              }}
            />
          </ContentSidePageBottonLabel>
         
        </ContentSidePagePanelBotton>

        {cardhplloginpage ? (
          <PageModal
            ptop={'1%'}
            pwidth={'80%'}
            pheight={'95%'}
            imgbm={btn_qclose_modal}
            titbm="Fechar..."
            titulo={'Help Conteúdo Login.'}
            onclose={() => setCardHlpLoginPage(false)}
          >
            <CardHlpLoginPage
              imgcardpage={lg_login}
              onclosesair={() => setCardHlpLoginPage(false)}
            />
          </PageModal>
        ) : null}
        {cardhplloginlogo ? (
          <PageModal
            ptop={'1%'}
            pwidth={'80%'}
            pheight={'95%'}
            imgbm={btn_qclose_modal}
            titbm="Fechar..."
            titulo={'Sintese Login...'}
            onclose={() => setCardHlpLoginLogo(false)}
          >
            <CardHlpLoginLogo
              imgcardlogin={lg_login}
              onclosesair={() => setCardHlpLoginLogo(false)}
            />
          </PageModal>
        ) : null}
      </LayoutLogin>
    </ThemeProvider>
  );
};

export default Login;





  // React.useEffect(() => {
  //   if (isempresa ){
  //     if (empresaSelecionada === '0'){
  //       setIsBtnChk(true);
  //       setIsDesable(true);

  //       setIsChkAcesso(false);

  //       setIsEmpresa(true);
  //       setIdEmpresa(0);
  //       setFantEmpresa('');

  //       setIsSetor(false);
  //       setSetorSelecionado('0');
  //       setIdSetor(0);
  //       setNmSetor('');

  //       setIsPassaporte(false);
  //       setPassaporteSelecionado('0');
  //       setIdPassaporte(0);
  //       setNmPassaporte('');

  //       setIsInput(false);
  //       setChkInput1(false);
  //       setChkInput2(false);
        
  //       setInput1('');
  //       setInput2('');

  //       setIsChked(false);
  //       setMskInput1('');
  //       setMskInput2('');

  //       setMsgPanelBottom('Selecione uma Opção para Empresa.');
      
  //     } else {
  //       const idemp = parseInt(empresaSelecionada);
  //       // Busca o fantasy da empresa correspondente
  //       const empresa = ListEmpresas.find((s) => s.id === idemp);
  //       if (empresa) {
  //         setIdEmpresa(empresa.id);
  //         setFantEmpresa(empresa.fantasy); // Define o fantasy da empresa
          
  //         setIsSetor(true);
  //         setSetorSelecionado('0');
  //         setIdSetor(0);
  //         setNmSetor('');
          
  //         setIsPassaporte(false);
  //         setPassaporteSelecionado('0');
  //         setIdPassaporte(0);
  //         setNmPassaporte('');
          
  //         setIsInput(false);
  //         setChkInput1(false);
  //         setChkInput2(false);
  //         setInput1('');
  //         setInput2('');
          
  //         setIsChked(false);
  //         setMskInput1('');
  //         setMskInput2('');

  //         setMsgPanelBottom('Selecione uma Opção para Setor.');

  //       }
  //     }
  //   }
  // },[isempresa, empresaSelecionada]);

  // React.useEffect(() => {
  //   if (issetor){
  //     if (setorSelecionado === '0') {
  //       setIsBtnChk(true);
  //       setIsDesable(true);

  //       setIsChkAcesso(false);

  //       setIdSetor(0);
  //       setNmSetor('');

  //       setIsPassaporte(false);
  //       setPassaporteSelecionado('');
  //       setIdPassaporte(0);
  //       setNmPassaporte('');

  //       setIsInput(false);
  //       setChkInput1(false);
  //       setChkInput2(false);
  //       setInput1('');
  //       setInput2('');

  //       setIsChked(false);
  //       setMskInput1('');
  //       setMskInput2('');

  //       setMsgPanelBottom('Selecione uma Opção para Setor.');

  //     } else {
  //       const idset = parseInt(setorSelecionado);
  //       // Busca o modulo do setor correspondente
  //       const setor = ListSetores.find((s) => s.id === idset);
  //       if (setor) {
  //         setIsBtnChk(true);
  //         setIsDesable(true);
  //         setIsChkAcesso(false);

  //         setIdSetor(setor.id);
  //         setNmSetor(setor.modulo);
          
  //         setIsPassaporte(true);
  //         setPassaporteSelecionado('0');
  //         setIdPassaporte(0);
  //         setNmPassaporte('');
          
  //         setIsInput(false);
  //         setChkInput1(false);
  //         setChkInput2(false);
  //         setInput1('');
  //         setInput2('')

  //         setIsChked(false);
  //         setMskInput1('');
  //         setMskInput2('');

  //         setMsgPanelBottom('Selecione uma Opção para Passaport.');

  //       }
  //     }
  //   }
  // },[issetor, setorSelecionado]);
  
  // React.useEffect(() => {
  //   if (ispassaporte){
  //     if (passaporteSelecionado === '0') {
  //       setIsBtnChk(true);
  //       setIsDesable(true);
  //       setIsChkAcesso(false);

  //       setIdPassaporte(0);
  //       setNmPassaporte('');

  //       setIsInput(false);
  //       setChkInput1(false);
  //       setChkInput2(false);
  //       setInput1('');
  //       setInput2('');

  //       setIsChked(false);
  //       setMskInput1('');
  //       setMskInput2('');

  //       setCorStt(0);
  //       setMsgPanelBottom('Selecione uma Opção para Passaport.');

  //     } else {
  //       const idpas = parseInt(passaporteSelecionado);
  //       // Busca o modolo do passaporte correspondente
  //       const passaporte = ListPassaportes.find((s) => s.id === idpas);
  //       if (passaporte) {
  //         setIsBtnChk(true);
  //         setIsDesable(true);

  //         setIsChkAcesso(false);

  //         setIdPassaporte(passaporte.id);
  //         setNmPassaporte(passaporte.modo); // Define o modo do passaporte
          
  //         setIsInput(true);
  //         setChkInput1(false);
  //         setChkInput2(false);
  //         setInput1('');
  //         setInput2('')

  //         setIsChked(false);
  //         setMskInput1('');
  //         setMskInput2('');

  //         setMsgPanelBottom('Edite o Acesso ao Sistema...');
  //       }
  //     }
  //   }
  // },[ispassaporte, passaporteSelecionado, idpassaporte, isinput]);

  // const handlerEdtInput1 = React.useCallback(
  //   (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const edtinput1 = e.target.value;  
  //   // verefico a edição do input1
  //   let msgedticao = '';
  //   if (edtinput1.length === 0 ){
  //     if ( (idpassaporte === 1 ) || (idpassaporte === 2 ) ) { msgedticao = 'Edite Email...'; } 
  //     else if ( (idpassaporte === 3 ) || (idpassaporte === 4 ) ) { msgedticao = 'Edite Pseudônimo...'; } 
  //     setInput1('');
  //     setMsgPanelBottom(msgedticao);
  //   } else {
  //     setChkInput1( verifInputs(edtinput1,"string") );

  //     setInput1(edtinput1);
  //   }

  //   if (chkinput1 && chkinput2) { 
  //     setIsDesable(false)}
  //   else { 
  //     setIsDesable(true); 
  //     if (corstt !== 0){ setCorStt(0); }
  //   }
  // }, [input1, chkinput1]);

  // const handlerEdtInput2 = React.useCallback(
  //   (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const edtinput2 = e.target.value;
  //   // verefico a edição dos input2
  //   let msgedticao = '';
  //   if (edtinput2.length === 0 ){
  //     if ( (idpassaporte === 1 ) || (idpassaporte === 2 ) ) { msgedticao = 'Edite Password...'; } 
  //     else if ( (idpassaporte === 3 ) || (idpassaporte === 4 ) ) { msgedticao = 'Edite  PIN...'; }
  //     setInput2('');
  //     setMsgPanelBottom(msgedticao);
  //   } else {
  //     setChkInput2( verifInputs(edtinput2,"string") );
  //     setInput2(edtinput2);
  //   }
  //   if (chkinput1 && chkinput2) { setIsDesable(false)}
  //   else { 
  //     setIsDesable(true);
  //     if (corstt !== 0){ setCorStt(0); }
  //   }
  // }, [input2, chkinput2]);

  // const handleCheckDados = () => {
  //   if (isbtnchk) {
  //     setIsBtnChk(false);
  //     setIsDesable(true)
  //     setMsgPanelBottom('AGUARDE...');
  //     alert('Checar a validade IDs e Informações de usuário...');
  //     // verefica os valores editado 
  //     setIsChked(false);
  //     // verefica se existe "idempresa" existe em db_jrbordados -> empresas 


      

     
  //     setIsChkAcesso(true);

  //     // qualquer falha na edição para o progress tornando vermelho o painel com erro
  //     // busca em servidor ´:
  //     // Se encontrar dados referentes as informações 
  //     //   Abre botão continuar  
  //     //   Busca dados filtrado no servidor ´:
  //     //   Se encontrar :
  //     //     Preenche o context criando o logon
  //     //     Abre o botão continuar.
  //     //     Se clicar em continuar, retorna a page Home logon
  //     //     Caso clique em voltar, retorna a page Home logoff 
  //     //   Senão retorna para inserir novamente novos dados para Acesso 
  //     // Caso não encontrar dados referentes as informações
  //     //   retorna para inserir novamente novos dados para Acesso
  //   }  
    
  // };

          // <ContentSidePageBottonLabel open={true} istitl={true} title={'Voltar.: '}>
          //   <ContentSidePageBottonButton
          //     pxheight={'40px'}
          //     img={''}
          //     titbtn={'Voltar...'}
          //     onclick={() => { goto('/') }}
          //     onMouseEnter={() => setMsgPanelBottom('retorna a Home...') }
          //     onMouseLeave={() => setMsgPanelBottom('')}
          //   />
          // </ContentSidePageBottonLabel>

          // { isbtnchk && !ischkacesso ? (
          //   <ContentSidePageBottonLabel open={isbtnchk} istitl={true} title={'Confirma? : '}>
          //     <ContentPageButtonDefImgEnabled 
          //       pxheight={'40px'}
          //       img={bt_enviar}
          //       titbtn={'Confirmar...'}
          //       onclick={handleCheckDados}
          //       disabled={isdesable}
          //     />
          //   </ContentSidePageBottonLabel>
          // ): null}

          // { ischkacesso ? (
          //   <ContentSidePageBottonLabel open={ischkacesso} istitl={true} title={'Continuar? : '}>
          //     <ContentPageButtonDefImgEnabled 
          //       pxheight={'40px'}
          //       img={bt_enviar}
          //       titbtn={'Continuar...'}
          //       onclick={handleContinuar}
          //       disabled={isdesable}
          //     />
          //   </ContentSidePageBottonLabel>
          // ): null}

          
          // <ContentCardPageMain open={isbtnchk}>
          //   {/* <ContentBoxPageSelect open={isempresa} istitl={false} title='Empresa : '>
          //     <Pg.SelectMainContainer>
          //       <Pg.SelectContainer>
          //         <label htmlFor="empresa-select">Empresas:</label>
          //          {/* <Pg.StyledOption value={'0'}>Opções:</Pg.StyledOption>  
          //         <select
          //           id="empresa-select"
          //           value={empresaSelecionada || '0'}
          //           onChange={(e) => setEmpresaSelecionada(e.target.value)}
          //           >
          //             {ListEmpresas.map((empresa: TypeListEmpresa) => (
          //               <option key={empresa.id} value={empresa.id}>{empresa.fantasy}</option>
          //             ))}
          //         </select>
          //       </Pg.SelectContainer>
          //     </Pg.SelectMainContainer>
          //   </ContentBoxPageSelect>
  
          //   <ContentBoxPageSelect open={ issetor} istitl={false} title='Setore :'>
          //     <Pg.SelectMainContainer>
          //       <Pg.SelectContainer>
          //         <label htmlFor="setor-select">Setores:</label>
          //         {/* <Pg.StyledOption value={'0'}>Opções:</Pg.StyledOption> 
          //         <select
          //           id="setor-select" 
          //           value={setorSelecionado || '0'}
          //           onChange={(e) => setSetorSelecionado(e.target.value)}
          //           >
          //             {ListSetores.map((setor: TypeListSetor) => (
          //               <option key={setor.id} value={setor.id}>{setor.modulo}</option>
          //             ))}
          //         </select>
          //       </Pg.SelectContainer>
          //     </Pg.SelectMainContainer>
          //   </ContentBoxPageSelect>

          //   <ContentBoxPageSelect open={ispassaporte} istitl={false} title='Passaport : '>
          //     <Pg.SelectMainContainer>
          //       <Pg.SelectContainer>
          //         <label htmlFor="passaport-select">Passaportes:</label>
          //         {/* <Pg.StyledOption value={'0'}>Opções:</Pg.StyledOption> 
          //         <select
          //           id="passaport-select" 
          //           value={passaporteSelecionado || '0'}
          //           onChange={(e) => setPassaporteSelecionado(e.target.value)}
          //           >
          //             {ListPassaportes.map((passaporte: TypeListPassaporte) => (
          //               <option key={passaporte.id} value={passaporte.id}>{passaporte.modo}</option>
          //             ))}
          //         </select>
          //       </Pg.SelectContainer>
          //     </Pg.SelectMainContainer>
          //   </ContentBoxPageSelect>

          //   <ContentBoxPageSelect open={isinput} istitl={false} title='Acesso : '>
          //     <Pg.SelectMainContainer>
          //       <Pg.SelectContainer>
          //         <label>Acesso :</label>
          //           { idpassaporte === 1 ? (
          //           <form name='idpass1'>
          //             <Pg.EmailInput
          //               name="email" 
          //               maxLength={250}
          //               value={input1}           
          //               //onChange={(e) => setInput1(e.currentTarget.value)}
          //               onChange={handlerEdtInput1}
          //               onMouseEnter={() => setMsgPanelBottom('Edite Email...') }
          //               onMouseLeave={() => setMsgPanelBottom('')}
          //               >
          //             </Pg.EmailInput>
          //             <Pg.PasswordInput
          //               name="passw" 
          //               maxLength={10}
          //               value={input2}
          //               //onChange={(e) => setInput2(e.currentTarget.value)}
          //               onChange={handlerEdtInput2}
          //               onMouseEnter={() => setMsgPanelBottom('Edite sua Password...') }
          //               onMouseLeave={() => setMsgPanelBottom('')}
          //               >
          //             </Pg.PasswordInput>
          //           </form>
          //           ) : null}
          //           { idpassaporte === 2 ? (
          //           <form name='idpass2'>
          //             <Pg.EmailInput
          //               name="email" 
          //               maxLength={250}
          //               value={input1}           
          //               //onChange={(e) => setInput1(e.currentTarget.value)}
          //               onChange={handlerEdtInput1}
          //               onMouseEnter={() => setMsgPanelBottom('Edite Email...') }
          //               onMouseLeave={() => setMsgPanelBottom('')}
          //               >
          //             </Pg.EmailInput>
          //             <Pg.PinInput
          //               name="pin" 
          //               maxLength={8}
          //               value={input2}
          //               //onChange={(e) => setInput2(e.currentTarget.value)}
          //               onChange={handlerEdtInput2}
          //               onMouseEnter={() => setMsgPanelBottom('Edite PIN...') }
          //               onMouseLeave={() => setMsgPanelBottom('')}
          //               >
          //             </Pg.PinInput>
          //           </form>
          //           ) : null}
          //           { idpassaporte === 3 ? (
          //           <form name='idpass3'>
          //             <Pg.PseudonimoInput
          //               name="pseudo" 
          //               maxLength={20}
          //               value={input1}
          //               //onChange={(e) => setInput1(e.currentTarget.value)}
          //               onChange={handlerEdtInput1}
          //               onMouseEnter={() => setMsgPanelBottom('Edite Pseudônimo...') }
          //               onMouseLeave={() => setMsgPanelBottom('')}
          //               >
          //             </Pg.PseudonimoInput>
          //             <Pg.PasswordInput
          //               name="passw" 
          //               maxLength={10}
          //               value={input2}
          //               //onChange={(e) => setInput2(e.currentTarget.value)}
          //               onChange={handlerEdtInput2}
          //               onMouseEnter={() => setMsgPanelBottom('Edite sua Password...') }
          //               onMouseLeave={() => setMsgPanelBottom('')}
          //               >
          //             </Pg.PasswordInput>
          //             </form>
          //           ) : null}
          //           { idpassaporte === 4 ? (
          //           <form name='idpass4'>
          //             <Pg.PseudonimoInput
          //               name="pseudo" 
          //               maxLength={20}
          //               value={input1}
          //               //onChange={(e) => setInput1(e.currentTarget.value)}
          //               onChange={handlerEdtInput1}
          //               onMouseEnter={() => setMsgPanelBottom('Edite Pseudônimo...') }
          //               onMouseLeave={() => setMsgPanelBottom('')}
          //               >
          //             </Pg.PseudonimoInput>
          //             <Pg.PinInput
          //               name="pin" 
          //               maxLength={8}
          //               value={input2}
          //               //onChange={(e) => setInput2(e.currentTarget.value)}
          //               onChange={handlerEdtInput2}
          //               onMouseEnter={() => setMsgPanelBottom('Edite PIN...') }
          //               onMouseLeave={() => setMsgPanelBottom('')}
          //               >
          //             </Pg.PinInput>
          //           </form>
          //         ) : null }
          //       </Pg.SelectContainer>
          //     </Pg.SelectMainContainer>
          //   </ContentBoxPageSelect>

          //     <ContentPanelMain open={true} pwidth="33%">
          //      <Pg.ContainerDivMainChecing pxwidth="97%">
          //         <form>
          //           <h3>Empresa ...: </h3>
          //           <span>{fantempresa} </span>
          //         </form>
          //       </Pg.ContainerDivMainChecing>  
          //       <Pg.ContainerDivMainChecing pxwidth="97%">
          //         <form>
          //           <h3>Setor ........:</h3>
          //           <span>{nmsetor}</span>
          //         </form>
          //       </Pg.ContainerDivMainChecing>
          //       <Pg.ContainerDivMainChecing pxwidth="97%">
          //         <form>
          //           <h3>Passaport .:</h3>
          //           <span>{nmpassaporte}</span>
          //         </form>
          //       </Pg.ContainerDivMainChecing>
          //       <Pg.ContainerDivMainChecing pxwidth="97%">
          //         <form>
          //           <h3>Acesso .....:</h3>
          //             <p><span>ID: {input1}</span></p>
          //             <p><span>PW: {input2}</span></p>
          //         </form>
          //       </Pg.ContainerDivMainChecing>
                
          //     </ContentPanelMain>
          //     <ContentPanelMain open={ischkacesso}>
          //       oi

          //     </ContentPanelMain>
          //   </ContentCardBoxBorderPg> 
          


            
