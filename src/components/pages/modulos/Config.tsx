import React from 'react';

import { ThemeProvider } from 'styled-components';
import light from "../../../themes/light";
import dark from "../../../themes/dark";

import { useNavigate } from 'react-router-dom';
import LayoutConfig from '../../layouts/LayoutConfig';

//import { useAcessoContext,  } from '../../contexts/ContextAcesso';



import { PageModal } from '../PageModal';
import { CardHlpConfigPage } from '../../../cards/CardHlpConfigPage';
import { ContentCardPage } from '../../ContentCardPage';
import { BarMenuConfig } from '../../sidebar/BarMenuConfig'

//import { BarSideMenuConfig } from '../sidebar/BarSideMenuConfig.tsx';
import { DivisionPgHztal } from '../../stylePages';

import { CardDesenvolver } from '@/cards/CardDesenvolver';

import lg_config from '../../../assets/defaut/logo/lg_def_mod_config.svg';
import pnl_config from '@/assets/defaut/painel/pnl_def_mod_config.svg';
import bt_helppg from '@/assets/svgs/bt_helppg.svg';
import bt_abortar from '@/assets/svgs/bt_abortar.svg';
import btn_chksys from '@/assets/defaut/botao/btn_def_mod_c_config.svg'
import bt_close from '@/assets/svgs/bt_close.svg';

const Config: React.FC = () => {
  
  const [theme, setTheme] = React.useState(light);
  const [ischeck, setIscheck] = React.useState(false);

  


  const navigate = useNavigate();


  
    const ToggleTheme = () => {
    setTheme(theme.name === "dark" ? light : dark);
    setIscheck(theme.name === "dark");
  };



  
  const goto = (path: string) => () => navigate(path);

  //const { state } = useAcessoContext();

  const [chksistema, setChkSistema] = React.useState(false);
  
  const handlerCardChkSistema = React.useCallback(() => {
      setChkSistema((oldState) => !oldState);
  }, []);

  const [cardhplpage, setCardHlpPage] = React.useState(false);
  const handlerCardHlpPage = React.useCallback(() => {
    setCardHlpPage((oldState) => !oldState);
  }, []);


  // const [checagemsyspage, setChecagemSysPage] = React.useState(false);
  
  // const handlerChecagemSysPage = React.useCallback(() => {
  //   setChecagemSysPage((oldState) => !oldState);
  // }, []);

  // React.useEffect(() => {
  //   if (state.chvkey) {
  //     let checado = state.chkdb;
  //     setIsChkDb(checado);
      

  //     if (state.chkdb){

  //     }
  //     if (!ischkdb){ 
  //       setIsChkDb(true);
  //     }
  //   } else {
  //     setIsChkDb(false);
  //   }
  //   if (ischkdb){
  //     handlerChecagemSysPage();
  //   }
  // },[]);


  return (
    <ThemeProvider theme={theme}>
      <LayoutConfig
        imgsys={lg_config}
        titbtnsys="Modulo Config..."
        onclicksys={() => {}}
        titlepg="Databases."
        
        imgbtnhlppg={bt_helppg}
        titbtnhlppg="Help Page..."
        onclickhlppg={handlerCardHlpPage}
        
        imgbtnaborta={bt_abortar}
        titbtnaborta="Abortar..."
        onclickaborta={goto('/')}

        imgbtnchk={btn_chksys}
        titbtnchk="Checar Systema..."
        onclickchk={handlerCardChkSistema}

        onchange={ToggleTheme}
        ischeck={ischeck}
      >

        <ContentCardPage pwidth={'100%'}>

        {chksistema ? (
          <PageModal
            ptop={'1%'}
            pwidth={'80%'}
            pheight={'95%'}
            imgbm={bt_close}
            titbm="Fechar..."
            titulo={'Checagem do Sistema.'}
            onclose={() => setChkSistema(false)}
          >
            <CardDesenvolver
              imgcarddes={pnl_config}
              onclosesair={() => setChkSistema(false)}
            />
          </PageModal>
        ) : null}


          <BarMenuConfig />
        </ContentCardPage>  

        <DivisionPgHztal />

        {cardhplpage && (
          <PageModal
            ptop={'1%'}
            pwidth={'80%'}
            pheight={'95%'}
            imgbm={bt_close}
            titbm="Fechar..."
            titulo="Help Conteúdo Config."
            onclose={() => setCardHlpPage(false)}
          >
            <CardHlpConfigPage
              imgcardpage={pnl_config}
              onclosesair={() => setCardHlpPage(false)}
            />
          </PageModal>
        )}
      </LayoutConfig>
    </ThemeProvider>
  );
};

export default Config;
