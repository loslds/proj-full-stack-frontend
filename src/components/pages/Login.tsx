
import * as Pg from '../stylePages';
import React from "react";
import axios from "axios";

interface Empresa {
  id: number;
  fantasy: string;
}

interface Setor {
  id: number;
  nome: string;
}


import { useNavigate } from "react-router-dom";

//import * as Pg from "../stylePages";

import { ThemeProvider } from "styled-components";
import light from "../../themes/light";
import dark from "../../themes/dark";

import LayoutLogin from "../layouts/LayoutLogin";

import { PageModal } from './PageModal';
import { CardHlpLoginLogo } from '../../cards/CardHlpLoginLogo';
import { CardHlpLoginPage } from '../../cards/CardHlpLoginPage';

//import { ContentItensBody } from '../ContentItensBody';

import { ContentCardPageMain } from '../ContentCardPageMain';
import { ContentBoxPageSelect } from '../ContentBoxPageSelect';
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
import { ContentCardBoxInput } from '../ContentCardBoxInput';

//import bt_voltar from "../../assets/pngs/bt_voltar.png";
//import bt_setadir from "../../assets/svgs/bt_setadir.svg";

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
  const [empresas, setEmpresas] = React.useState([]);
  const [setores, setSetores] = React.useState([]);

  const [empresaSelecionada, setEmpresaSelecionada] = React.useState("");

  
  const [isempresa, setIsEmpresa] = React.useState(false);
  const [idempresa, setIdEmpresa] = React.useState(0);
  const [setorSelecionado, setSetorSelecionado] = React.useState("");
  const [issetor, setIsSetor] = React.useState(false);
  const [idsetor, setIdSetor] = React.useState(0);

  const [isinput, setIsInput] = React.useState(false);
  const [tipoAcesso, setTipoAcesso] = React.useState("");
  const [idtipoacesso, setIdTipoAcesso] = React.useState(0);
  const [isdesable, setIsDesable] = React.useState(true);
  
  const [isbtnchk, setBtnChk] = React.useState(false);
  

  
  // Estados para os inputs de login
  const [input1, setInput1] = React.useState("");
  const [input2, setInput2] = React.useState("");

  const [msgpanelbottom, setMsgPanelBottom] = React.useState('');

  // Buscar empresas no servidor
  React.useEffect(() => {
    axios.get("http://localhost:3001/empresas")
      .then((res) => setEmpresas(res.data))
      .catch((err) => console.error("Erro ao buscar empresas:", err));
  }, []);
  
  // Buscar setores ao selecionar empresa
  React.useEffect(() => {
    if (empresaSelecionada) {
      axios.get(`http://localhost:3001/setores`)
        .then((res) => setSetores(res.data))
        .catch((err) => console.error("Erro ao buscar setores:", err));
    }
  }, [empresaSelecionada]);

  // Manipular login

  const handleEmpresaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = parseInt(e.target.value);
    setIdEmpresa(selectedId);
  };
  const handleSetorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = parseInt(e.target.value);
    setIdSetor(selectedId);
  };


  React.useEffect(() => {
    setIsEmpresa(true);

    if (idempresa <= 0 || idsetor <= 0 || idtipoacesso <= 0 ){
      setIsSetor(false);
      setIsInput(false);
      setBtnChk(true);
      setIsDesable(true);
      setMsgPanelBottom('Selecione uma Empresa...');
    } else {
      if (idempresa > 0){
        setIsSetor(true);
        setMsgPanelBottom('Selecione um Setor...');
      }
      if (idtipoacesso > 0){
        setIsInput(true);        
        setMsgPanelBottom('Selecione Modo de Acesso...');
      }
    }
    if (idempresa > 0 && idsetor > 0 && idtipoacesso > 0 ) {
      setIsDesable(false);
      setBtnChk(true);
    }
    
  },[issetor, isinput, isbtnchk]);

  const handleCheckInfo = () => {
    if (isbtnchk) {
      alert('Checar Existencia das Informações de usuário...');
      // busca em servidor ´:
      // se encontrar  
    }
  };

  const [cardhplloginlogo, setCardHlpLoginLogo] = React.useState(false);
  const handlerCardHlpLoginLogo = React.useCallback(() => {
    setCardHlpLoginLogo((oldState) => !oldState);
  }, []);

  const [cardhplloginpage, setCardHlpLoginPage] = React.useState(false);
  const handlerCardHlpLoginPage = React.useCallback(() => {
    setCardHlpLoginPage((oldState) => !oldState);
  }, []);

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
        {/* <ContentItensBody> */}
          <ContentCardPageMain open={true}>
            <ContentBoxPageSelect istitl={true} title='Empresa : '>
              <ContentCardBoxInput>
                <Pg.StyledSelect
                    id="empresa-select"
                    name="empresa"
                    defaultValue={idempresa}
                    onChange={handleEmpresaChange}
                  >
                  <Pg.StyledOption value={0}>Selecione:</Pg.StyledOption>
                    {empresas.map((empresa : Empresa) => (
                      <Pg.StyledOption key={empresa.id} value={empresa.id}>
                        {empresa.fantasy}
                      </Pg.StyledOption>
                    ))}
                  </Pg.StyledSelect>
                
                </ContentCardBoxInput>  
            </ContentBoxPageSelect>

            <ContentBoxPageSelect istitl={issetor} title='Setore :'>
              <ContentCardBoxInput>
                <Pg.StyledSelect
                    id="setor-select"
                    name="setor"
                    defaultValue={idsetor}
                    onChange={handleSetorChange}
                  >
                  <Pg.StyledOption value={0}>Selecione:</Pg.StyledOption>
                    {setores.map((setor : Setor) => (
                      <Pg.StyledOption key={setor.id} value={setor.id}>
                        {setor.nome}
                      </Pg.StyledOption>
                    ))}
                  </Pg.StyledSelect>
                
                </ContentCardBoxInput>  
            </ContentBoxPageSelect>

            <ContentBoxPageSelect istitl={true} title='Passaporte :'>
              select Input
            </ContentBoxPageSelect>
          </ContentCardPageMain>

        {/* <Pg.DivisionPgHztal /> */}
        <ContentSidePagePanelBotton bordas="3px" open={true} pwidth="100%">
         
          <ContentSideMsgPagePanelBotton bordas="3px" label={'Menssagens : '} msg={msgpanelbottom} />
                    
          <ContentSidePageBottonLabel istitl={true} title={'Voltar.: '}>
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
            <ContentSidePageBottonLabel istitl={true} title={'Confirma? : '}>
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


