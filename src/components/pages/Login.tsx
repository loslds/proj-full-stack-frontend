
import React from "react";
import * as Pg from '../stylePages';
//import axios from "axios";
import { ThemeProvider } from 'styled-components';
import light from '../../themes/light';
import dark from '../../themes/dark';
import { useNavigate } from 'react-router-dom';

import LayoutLogin from "../layouts/LayoutLogin";
import { PageModal } from './PageModal';
import { CardHlpLoginLogo } from '../../cards/CardHlpLoginLogo';
import { CardHlpLoginPage } from '../../cards/CardHlpLoginPage';
//import { ContentItensBody } from '../ContentItensBody';
import { ContentCardPageMain } from '../ContentCardPageMain';
import { ContentBoxPageSelect } from '../ContentBoxPageSelect';
import { ContentCardBoxBorderPg } from "../ContentCardBoxBorderPg";
//import { ContentCardBoxDialogo } from '../ContentCardBoxDialogo';
import { ContentSidePagePanelBotton } from '../ContentSidePagePanelBotton';
import { ContentSideMsgPagePanelBotton } from '../ContentSideMsgPagePanelBotton';
import { ContentSidePageBottonLabel } from '../ContentSidePageBottonLabel';
import { ContentSidePageBottonButton } from '../ContentSidePageBottonButton';
import { ContentPageButtonDefImgEnabled } from '../ContentPageButtonDefImgEnabled';
import lg_login from "../../assets/svgs/lg_login.svg";
import bt_helppg from "../../assets/svgs/bt_helppg.svg";
import bt_abortar from "../../assets/svgs/bt_abortar.svg";
import bt_enviar from '../../assets/svgs/bt_enviar.svg';
import bt_close from "../../assets/svgs/bt_close.svg";
//import { ContentCardCollunsFormPage } from '../ContentCardCollunsFormPage';
//import { ContentCardBoxInput } from '../ContentCardBoxInput';
//import { ContentInputMainPage } from '../ContentInputMainPage'
//import bt_voltar from "../../assets/pngs/bt_voltar.png";
//import bt_setadir from "../../assets/svgs/bt_setadir.svg";

import { TypeListEmpresa, ListEmpresas } from "@/boockList/ListEmpresas";
import { TypeListSetor, ListSetores } from "@/boockList/ListSetores";
import { TypeListPassaporte, ListPassaportes } from "@/boockList/ListPassaportes";
import { verifInputs } from '../../funcs/funcs/FuncVerificadores';
import { isValidarEmail } from '../../funcs/ErroEdicao';
import { ContentCardPageTitle } from "../ContentCardPageTitle";
import { ContentCustonDivImg } from "../ContentCustonDivImg";


const Login: React.FC = () => {
  
  const [theme, setTheme] = React.useState(light);
  const [ischeck, setIscheck] = React.useState(false);

  const ToggleTheme = () => {
    if (theme.name === "dark") {
      setTheme(light);
      setIscheck(true);
    } else {
      setTheme(dark);
      setIscheck(false);
    }
  };

  const navigate = useNavigate();
  const goto = (path: string) => {
    return () => {
      navigate(path);
    };
  };

  // Estados para os selects



  const [isempresa, setIsEmpresa] = React.useState(true);
  const [empresaSelecionada, setEmpresaSelecionada ] = React.useState('0');
  const [idempresa, setIdEmpresa] = React.useState(0);
  const [fantempresa, setFantEmpresa] = React.useState('');
  //const [empresas, setEmpresas] = React.useState([]);

  const [issetor, setIsSetor] = React.useState(false);
  const [setorSelecionado, setSetorSelecionado ] = React.useState('0');
  const [idsetor, setIdSetor] = React.useState(0);
  const [nmsetor, setNmSetor] = React.useState('');
  //const [setores, setSetores] = React.useState([]);

  const [ispassaporte, setIsPassaporte] = React.useState(false);
  const [passaporteSelecionado, setPassaporteSelecionado ] = React.useState('0');
  const [idpassaporte, setIdPassaporte] = React.useState(0);
  const [nmpassaporte, setNmPassaporte] = React.useState('');
  //const [passaporte, setPassaporte] = React.useState([]);
  
  const [isinput, setIsInput] = React.useState(false);

  const [chkinput1, setChkInput1] = React.useState(false);
  const [chkinput2, setChkInput2] = React.useState(false);
  const [input1, setInput1] = React.useState("");
  const [input2, setInput2] = React.useState("");
  
  const [isdesable, setIsDesable] = React.useState(true);
  const [isbtnchk, setIsBtnChk] = React.useState(false);
  const [corstt, setCorStt]= React.useState(0);
  const [ischkacesso, setIsChkAcesso] = React.useState(false);

  const [msgpanelbottom, setMsgPanelBottom] = React.useState('');
  //const [rtnmsgpanelbottom, setRtnMsgPanelBottom] = React.useState('');

  const [cardhplloginlogo, setCardHlpLoginLogo] = React.useState(false);
  const handlerCardHlpLoginLogo = React.useCallback(() => {
    setCardHlpLoginLogo((oldState) => !oldState);
  }, []);

  const [cardhplloginpage, setCardHlpLoginPage] = React.useState(false);
  const handlerCardHlpLoginPage = React.useCallback(() => {
    setCardHlpLoginPage((oldState) => !oldState);
  }, []);
  
  React.useEffect(() => {
    if (isempresa){
      if (empresaSelecionada === '0'){
        setIsBtnChk(true);
        setIsDesable(true);

        setIsChkAcesso(false);

        setIsEmpresa(true);
        setIdEmpresa(0);
        setFantEmpresa('');

        setIsSetor(false);
        setSetorSelecionado('0');
        setIdSetor(0);
        setNmSetor('');

        setIsPassaporte(false);
        setPassaporteSelecionado('0');
        setIdPassaporte(0);
        setNmPassaporte('');

        setIsInput(false);
        setChkInput1(false);
        setChkInput2(false);
        setInput1('');
        setInput2('')

        setMsgPanelBottom('Selecione uma Opção para Empresa.');
      
      } else {
        const idemp = parseInt(empresaSelecionada);
        // Busca o fantasy da empresa correspondente
        const empresa = ListEmpresas.find((s) => s.id === idemp);
        if (empresa) {
          setIdEmpresa(empresa.id);
          setFantEmpresa(empresa.fantasy); // Define o fantasy da empresa
          
          setIsSetor(true);
          setSetorSelecionado('0');
          setIdSetor(0);
          setNmSetor('');
          
          setIsPassaporte(false);
          setPassaporteSelecionado('0');
          setIdPassaporte(0);
          setNmPassaporte('');
          
          setIsInput(false);
          setChkInput1(false);
          setChkInput2(false);
          setInput1('');
          setInput2('');

          setMsgPanelBottom('Selecione uma Opção para Setor.');

        }
      }
    }
  },[isempresa, empresaSelecionada]);

  React.useEffect(() => {
    if (issetor){
      if (setorSelecionado === '0') {
        setIsBtnChk(true);
        setIsDesable(true);

        setIsChkAcesso(false);

        setIdSetor(0);
        setNmSetor('');

        setIsPassaporte(false);
        setPassaporteSelecionado('');
        setIdPassaporte(0);
        setNmPassaporte('');

        setIsInput(false);
        setChkInput1(false);
        setChkInput2(false);
        setInput1('');
        setInput2('');

        setMsgPanelBottom('Selecione uma Opção para Setor.');

      } else {
        const idset = parseInt(setorSelecionado);
        // Busca o modulo do setor correspondente
        const setor = ListSetores.find((s) => s.id === idset);
        if (setor) {
          setIsBtnChk(true);
          setIsDesable(true);
          setIsChkAcesso(false);

          setIdSetor(setor.id);
          setNmSetor(setor.modulo);
          
          setIsPassaporte(true);
          setPassaporteSelecionado('0');
          setIdPassaporte(0);
          setNmPassaporte('');
          
          setIsInput(false);
          setChkInput1(false);
          setChkInput2(false);
          setInput1('');
          setInput2('')

          setMsgPanelBottom('Selecione uma Opção para Passaport.');

        }
      }
    }
  },[issetor, setorSelecionado]);
  
  React.useEffect(() => {
    if (ispassaporte){
      if (passaporteSelecionado === '0') {
        setIsBtnChk(true);
        setIsDesable(true);
        setIsChkAcesso(false);

        setIdPassaporte(0);
        setNmPassaporte('');

        setIsInput(false);
        setChkInput1(false);
        setChkInput2(false);
        setInput1('');
        setInput2('');

        setCorStt(0);
        setMsgPanelBottom('Selecione uma Opção para Passaport.');

      } else {
        const idpas = parseInt(passaporteSelecionado);
        // Busca o modolo do passaporte correspondente
        const passaporte = ListPassaportes.find((s) => s.id === idpas);
        if (passaporte) {
          setIsBtnChk(true);
          setIsDesable(true);

          setIsChkAcesso(false);

          setIdPassaporte(passaporte.id);
          setNmPassaporte(passaporte.modo); // Define o modo do passaporte
          
          setIsInput(true);
          setChkInput1(false);
          setChkInput2(false);
          setInput1('');
          setInput2('')

          setMsgPanelBottom('Edite o Acesso ao Sistema...');
        }
      }
    }
  },[ispassaporte, passaporteSelecionado, idpassaporte, isinput]);

  const handlerEdtInput1 = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
    const edtinput1 = e.target.value;  
    // verefico a edição do input1
    let msgedticao = '';
    if (edtinput1.length === 0 ){
      if ( (idpassaporte === 1 ) || (idpassaporte === 2 ) ) { msgedticao = 'Edite Email...'; } 
      else if ( (idpassaporte === 3 ) || (idpassaporte === 4 ) ) { msgedticao = 'Edite Pseudônimo...'; } 
      setInput1('');
      setMsgPanelBottom(msgedticao);
    } else {
      setChkInput1( verifInputs(edtinput1,"string") );
      setInput1(edtinput1);
    }

    if (chkinput1 && chkinput2) { setIsDesable(false)}
    else { 
      setIsDesable(true); 
      if (corstt !== 0){ setCorStt(0); }
    }
  }, [input1, chkinput1]);

  const handlerEdtInput2 = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
    const edtinput2 = e.target.value;  
    // verefico a edição dos input2
    let msgedticao = '';
    if (edtinput2.length === 0 ){
      if ( (idpassaporte === 1 ) || (idpassaporte === 2 ) ) { msgedticao = 'Edite Password...'; } 
      else if ( (idpassaporte === 3 ) || (idpassaporte === 4 ) ) { msgedticao = 'Edite  PIN...'; }
      setInput2('');
      setMsgPanelBottom(msgedticao);
    } else {
      setChkInput2( verifInputs(edtinput2,"string") );
      setInput2(edtinput2);
    }

    if (chkinput1 && chkinput2) { setIsDesable(false)}
    else { 
      setIsDesable(true);
      if (corstt !== 0){ setCorStt(0); }
    }
  }, [input2, chkinput2]);

  const handleCheckInfo = () => {
//    if (ischkacesso) {
      alert('Checar a validade IDs e Informações de usuário...');
      // verefica se a edição do email é valido
      // verefica os valores editado

      // busca em servidor ´:
      // se encontrar  
    //}
  };


  return (
    <ThemeProvider theme={theme}>
      <LayoutLogin
        imgsys={lg_login}
        titbtnsys="Acesso Sistema..."
        onclicksys={handlerCardHlpLoginLogo}
        titlepg="Login"
        imgbtnhlppg={bt_helppg}
        titbtnhlppg="Help Page..."
        onclickhlppg={ handlerCardHlpLoginPage }
        imgbtnaborta={bt_abortar}
        titbtnaborta="Abortar..."
        onclickaborta={ goto('/') }
        onchange={ToggleTheme}
        ischeck={ischeck}
      >
        <ContentCardPageMain open={true}>
          
          <ContentBoxPageSelect open={isempresa} istitl={false} title='Empresa : '>
            <Pg.SelectMainContainer>
              <Pg.SelectContainer>
                <label htmlFor="empresa-select">Empresas:</label>
                 {/* <Pg.StyledOption value={'0'}>Opções:</Pg.StyledOption>  */}
                <select
                  id="empresa-select"
                  value={empresaSelecionada || '0'}
                  onChange={(e) => setEmpresaSelecionada(e.target.value)}
                  >
                    {ListEmpresas.map((empresa: TypeListEmpresa) => (
                      <option key={empresa.id} value={empresa.id}>{empresa.fantasy}</option>
                    ))}
                </select>
              </Pg.SelectContainer>
            </Pg.SelectMainContainer>
          </ContentBoxPageSelect>

          <ContentBoxPageSelect open={ issetor} istitl={false} title='Setore :'>
            <Pg.SelectMainContainer>
              <Pg.SelectContainer>
                <label htmlFor="setor-select">Setores:</label>
                {/* <Pg.StyledOption value={'0'}>Opções:</Pg.StyledOption> */}
                <select
                  id="setor-select" 
                  value={setorSelecionado || '0'}
                  onChange={(e) => setSetorSelecionado(e.target.value)}
                  >
                    {ListSetores.map((setor: TypeListSetor) => (
                      <option key={setor.id} value={setor.id}>{setor.modulo}</option>
                    ))}
                </select>
              </Pg.SelectContainer>
            </Pg.SelectMainContainer>
          </ContentBoxPageSelect>

          <ContentBoxPageSelect open={ispassaporte} istitl={false} title='Passaport : '>
            <Pg.SelectMainContainer>
              <Pg.SelectContainer>
                <label htmlFor="passaport-select">Passaportes:</label>
                {/* <Pg.StyledOption value={'0'}>Opções:</Pg.StyledOption> */}
                <select
                  id="passaport-select" 
                  value={passaporteSelecionado || '0'}
                  onChange={(e) => setPassaporteSelecionado(e.target.value)}
                  >
                    {ListPassaportes.map((passaporte: TypeListPassaporte) => (
                      <option key={passaporte.id} value={passaporte.id}>{passaporte.modo}</option>
                    ))}
                </select>
              </Pg.SelectContainer>
            </Pg.SelectMainContainer>
          </ContentBoxPageSelect>

          <ContentBoxPageSelect open={isinput} istitl={false} title='Acesso : '>
            <Pg.SelectMainContainer>
              <Pg.SelectContainer>
                <label>Acesso :</label>
                  { idpassaporte === 1 ? (
                  <form name='idpass1'>
                    <Pg.EmailInput
                      name="email" 
                      maxLength={250}
                      value={input1}           
                      //onChange={(e) => setInput1(e.currentTarget.value)}
                      onChange={handlerEdtInput1}
                      onMouseEnter={() => setMsgPanelBottom('Edite Email...') }
                      onMouseLeave={() => setMsgPanelBottom('')}
                      >
                    </Pg.EmailInput>
                    <Pg.PasswordInput
                      name="passw" 
                      maxLength={10}
                      value={input2}
                      //onChange={(e) => setInput2(e.currentTarget.value)}
                      onChange={handlerEdtInput2}
                      onMouseEnter={() => setMsgPanelBottom('Edite sua Password...') }
                      onMouseLeave={() => setMsgPanelBottom('')}
                      >
                    </Pg.PasswordInput>
                  </form>
                  ) : null}
                  { idpassaporte === 2 ? (
                  <form name='idpass2'>
                    <Pg.EmailInput
                      name="email" 
                      maxLength={250}
                      value={input1}           
                      //onChange={(e) => setInput1(e.currentTarget.value)}
                      onChange={handlerEdtInput1}
                      onMouseEnter={() => setMsgPanelBottom('Edite Email...') }
                      onMouseLeave={() => setMsgPanelBottom('')}
                      >
                    </Pg.EmailInput>
                    <Pg.PinInput
                      name="pin" 
                      maxLength={8}
                      value={input2}
                      //onChange={(e) => setInput2(e.currentTarget.value)}
                      onChange={handlerEdtInput2}
                      onMouseEnter={() => setMsgPanelBottom('Edite PIN...') }
                      onMouseLeave={() => setMsgPanelBottom('')}
                      >
                    </Pg.PinInput>
                  </form>
                  ) : null}
                  { idpassaporte === 3 ? (
                  <form name='idpass3'>
                    <Pg.PseudonimoInput
                      name="pseudo" 
                      maxLength={20}
                      value={input1}
                      //onChange={(e) => setInput1(e.currentTarget.value)}
                      onChange={handlerEdtInput1}
                      onMouseEnter={() => setMsgPanelBottom('Edite Pseudônimo...') }
                      onMouseLeave={() => setMsgPanelBottom('')}
                      >
                    </Pg.PseudonimoInput>
                    <Pg.PasswordInput
                      name="passw" 
                      maxLength={10}
                      value={input2}
                      //onChange={(e) => setInput2(e.currentTarget.value)}
                      onChange={handlerEdtInput2}
                      onMouseEnter={() => setMsgPanelBottom('Edite sua Password...') }
                      onMouseLeave={() => setMsgPanelBottom('')}
                      >
                    </Pg.PasswordInput>
                    </form>
                  ) : null}
                  { idpassaporte === 4 ? (
                  <form name='idpass4'>
                    <Pg.PseudonimoInput
                      name="pseudo" 
                      maxLength={20}
                      value={input1}
                      //onChange={(e) => setInput1(e.currentTarget.value)}
                      onChange={handlerEdtInput1}
                      onMouseEnter={() => setMsgPanelBottom('Edite Pseudônimo...') }
                      onMouseLeave={() => setMsgPanelBottom('')}
                      >
                    </Pg.PseudonimoInput>
                    <Pg.PinInput
                      name="pin" 
                      maxLength={8}
                      value={input2}
                      //onChange={(e) => setInput2(e.currentTarget.value)}
                      onChange={handlerEdtInput2}
                      onMouseEnter={() => setMsgPanelBottom('Edite PIN...') }
                      onMouseLeave={() => setMsgPanelBottom('')}
                      >
                    </Pg.PinInput>
                  </form>
                ) : null }
              </Pg.SelectContainer>
            </Pg.SelectMainContainer>
          </ContentBoxPageSelect>
        </ContentCardPageMain>

        
        <Pg.DivisionPgHztal /> 

        <ContentCardPageMain open={isbtnchk}>
          <ContentCardBoxBorderPg pwidth="100%">
            <ContentCardPageTitle>
              <h2>Checkando Dados</h2>
            </ContentCardPageTitle>
            <Pg.ContainerCardPageFlex>
              <h3>Avaliando Dados</h3>
            <Pg.ContainerDivMainChecing>
              <form>
                <span><label>Empresa ...: </label> {fantempresa} </span>
              </form>
              <ContentCustonDivImg status={0} img={bt_enviar}/> 

            </Pg.ContainerDivMainChecing>

            <Pg.ContainerDivMainChecing>
              <form>
                <label>Setor ........:</label>
              </form>
            </Pg.ContainerDivMainChecing>
            <Pg.ContainerDivMainChecing>
              <form>
                <label>Passaport .:</label>
              </form>
            </Pg.ContainerDivMainChecing>
            <Pg.ContainerDivMainChecing>
              <form>
                <label>Acesso .....:</label>
              </form>
            </Pg.ContainerDivMainChecing>
            </Pg.ContainerCardPageFlex>
      
            <h3> Empresa : </h3>
            <form>
              <label>Empresa :</label>
              <p><span><label>ID :</label></span> {idempresa} <span><label>Fantasia :</label></span> {fantempresa}</p>
              <br/>
                
              <label>Setor :</label>
              <p><span><label>ID :</label></span> {idsetor} <span><label>Módulo :</label></span>{nmsetor}</p>
              <br/>

              <label>Passaporte :</label>
              <p><span><label>ID :</label></span> {idpassaporte} <span><label>Acesso :</label></span>{nmpassaporte}</p>    
              <br/>

              <label>Chaves :</label>
              { idpassaporte === 1 ? (
              <p><span><label> Email :</label></span> {input1} <span><label>Password :</label></span> {input2}</p>) : null } 

              { idpassaporte === 2 ? (
                <p><span><label>Email :</label></span> {input1} <span><label>Pin :</label></span>{input2}</p>): null }

              {idpassaporte === 3 ? (
                <p><span><label>Pseudônimo :</label></span> {input1} <span><label>Password :</label></span> {input2}</p>
              ): null }

              {idpassaporte === 4 ? (
                <p><span><label>Pseudônimo :</label></span> {input1} <span><label>Pin :</label></span> {input2}</p>
              ): null }
              <br/>

            </form>
          </ContentCardBoxBorderPg>
        </ContentCardPageMain>

        <Pg.DivisionPgHztal /> 
        <ContentSidePagePanelBotton bordas="3px" open={true} pwidth="100%">
         
          <ContentSideMsgPagePanelBotton bordas="3px" label={'Menssagens : '} msg={msgpanelbottom} />
                    
          <ContentSidePageBottonLabel open={isbtnchk} istitl={true} title={'Voltar.: '}>
            <ContentSidePageBottonButton
              pxheight={'40px'}
              img={''}
              titbtn={'Voltar...'}
              onclick={goto('/')}
              onMouseEnter={() => setMsgPanelBottom('retorna a Home...') }
              onMouseLeave={() => setMsgPanelBottom('')}
            />
          </ContentSidePageBottonLabel>

          { isbtnchk ? (
            <ContentSidePageBottonLabel open={isbtnchk} istitl={true} title={'Confirma? : '}>
              <ContentPageButtonDefImgEnabled 
                pxheight={'40px'}
                img={bt_enviar}
                titbtn={'Confirmar...'}
                onclick={handleCheckInfo}
                disabled={isdesable}
              />
            </ContentSidePageBottonLabel>
          ): null}

        </ContentSidePagePanelBotton>


        {cardhplloginpage ? (
          <PageModal
            ptop={'1%'}
            pwidth={'80%'}
            pheight={'95%'}
            imgbm={bt_close}
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
            imgbm={bt_close}
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





//const handleEmpresaSelected = (i: string) => {
//  const selectedNr = parseInt(i);
//  setIdEmpresa(selectedNr);
//  setEmpresaSelecionada(i);
//  setSetorSelecionado('');
//  setPassaporteSelecionado('');
//  setIdSetor(0); // Resetar setor quando mudar empresa
//};

//const handleSetorSelected = (i: string) => {
//  const selectedNr = parseInt(i);
//  setIdSetor(selectedNr);
//  setSetorSelecionado(i);
//  setPassaporteSelecionado('');
//};

// 🚀 Interface principal
//return (
//  <ContentCardPageMain open={true}>
//    {/* Select de Empresa */}
//    <ContentBoxPageSelect open={true} title="Empresa">
//</ContentBoxPageSelect>      <Pg.SelectMainContainer>
//</Pg.SelectMainContainer>        <Pg.SelectContainer>
//          <label>Empresa:</label>
//          <select
//            value={empresaSelecionada}
//            onChange={(e) => handleEmpresaSelected(e.target.value)}
//</Pg.SelectContainer>          >
//</select>            {ListEmpresas.map((empresa) => (
//              <option key={empresa.id} value={empresa.id}>
//                {empresa.fantasy}
//              </option>
//            ))}
//          </select>
//        </Pg.SelectContainer>
//      </Pg.SelectMainContainer>
//    </ContentBoxPageSelect>

//    {/* Select de Setor - aparece só se a empresa for válida */}
//    {idempresa > 0 && (
//      <ContentBoxPageSelect open={true} title="Setor">
//</ContentBoxPageSelect>        <Pg.SelectMainContainer>
//</Pg.SelectMainContainer>          <Pg.SelectContainer>
//            <label>Setor:</label>
//            <select
//              value={setorSelecionado}
//              onChange={(e) => handleSetorSelected(e.target.value)}
//</Pg.SelectContainer>            >
//</select>
//</Pg.SelectContainer> 
//              {ListSetores.map((setor) => (
//                <option key={setor.id} value={setor.id}>
//                  {setor.modulo}
//                </option>
//              ))}
//            </select>
//          </Pg.SelectContainer>
//        </Pg.SelectMainContainer>
//      </ContentBoxPageSelect>
//    )}

//    {/* Select de Passaporte - aparece só se o setor for válido */}
//    {idsetor > 0 && (
//      <ContentBoxPageSelect open={true} title="Passaporte">
//</ContentBoxPageSelect>        <Pg.SelectMainContainer>
//</Pg.SelectMainContainer>          <Pg.SelectContainer>
//            <label>Passaporte:</label>
//            <select
//              value={passaporteSelecionado}
//             onChange={(e) => setPassaporteSelecionado(e.target.value)}
//           >
//         </Pg.SelectContainer></select>
//               {ListPassaportes.map((passaporte) => (
//                <option key={passaporte.id} value={passaporte.id}>
//                  {passaporte.modo}
//                </option>
//              ))}
//            </select>
//          </Pg.SelectContainer>
//        </Pg.SelectMainContainer>
//      </ContentBoxPageSelect>
//    )}
//  </ContentCardPageMain>
//);




  // // Buscar empresas no servidor
  // React.useEffect(() => {
  //   axios.get("http://localhost:3001/empresas")
  //     .then((res) => setEmpresas(res.data))
  //     .catch((err) => console.error("Erro ao buscar empresas:", err));
  // }, []);
  
  // // Buscar setores ao selecionar empresa
  // React.useEffect(() => {
  //   if (empresaSelecionada) {
  //     axios.get(`http://localhost:3001/setores`)
  //       .then((res) => setSetores(res.data))
  //       .catch((err) => console.error("Erro ao buscar setores:", err));
  //   }
  // }, [empresaSelecionada]);

//                <Pg.StyledSelect
//                    id="setor-select"
//                    name="setor"
//                    defaultValue={idsetor}
//                    onChange={handleSetorChange}
//                  >
//                  <Pg.StyledOption value={0}>Selecione:</Pg.StyledOption>
//                </Pg.StyledSelect>

//                {setores.map((setor : Setor) => (
//                  <Pg.StyledOption key={setor.id} value={setor.id}>
//                  {setor.nome}
//                </Pg.StyledOption>
//                    ))}
//                  </Pg.StyledSelect>
//

//<Pg.StyledSelect
//id="setores-select"
//name="setores"
//defaultValue={idsetor}
//onChange={handleSetorChange}
//onChange={() => {}}
//onMouseEnter={() => setMsgPanelBottom('Selecione Setor...') }
//onMouseLeave={() => setMsgPanelBottom('')}  
//>
//<option value={'0'}>Opções : </option>
//<option value={'1'}>Visitante</option>
//<option value={'2'}>Recepção.</option>
//<option value={'3'}>Design.</option>
//<option value={'4'}>Acabamento.</option>
//<option value={'5'}>Expedição.</option>
//<option value={'6'}>Administração.</option>
//<option value={'7'}>Config.</option>
//</Pg.StyledSelect>

//<Pg.StyledSelect
//id="passaport-select"
//name="passaport"
//defaultValue={passaporte}
//onChange={handlePassaportChange}
//onMouseEnter={() => setMsgPanelBottom('Selecione Passaporte...') }
//onMouseLeave={() => setMsgPanelBottom('')}  
// onChange={() => {}}
//>
//<option value={'0'}>Opções : </option>
//<option value={'1'}>E-Mail / PassWord.</option>
//<option value={'2'}>E-Mail / PIN.</option>
//<option value={'3'}>Pseudônino / PassWord.</option>
//<option value={'4'}>Pseudônino / PIN.</option>
//</Pg.StyledSelect>

//                <Pg.StyledSelect
//                    id="empresa-select"
//                    name="empresa"
//                    defaultValue={idempresa}
//                    onChange={handleEmpresaChange}
                    //onChange={() => {}}
//                  > 

//                  <Pg.StyledOption value={0}>Selecione:</Pg.StyledOption>
// </Pg.StyledSelect>  
//                  {empresas.map((empresa : Empresa) => (
//                      <Pg.StyledOption key={empresa.id} value={empresa.id}>
//                        {empresa.fantasy}
//                      </Pg.StyledOption>
//                    ))}
//                  </Pg.StyledSelect> 
//                 </ContentCardBoxInput>  
