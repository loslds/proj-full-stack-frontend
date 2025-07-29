import React from 'react';
import { ThemeProvider } from 'styled-components';
import light from "../../../themes/light.ts";
import dark from "../../../themes/dark.ts";
import { useNavigate } from 'react-router-dom';
import { useAcessoContext } from '../../contexts/useAcessoContext.ts';

import LayoutConfig from '../../layouts/LayoutConfig.tsx';

import { PageModal } from '../PageModal.tsx';
import { CardHlpConfigPage } from '@/cards/CardHlpConfigPage.tsx';
import { ContentCardPage } from '../../ContentCardPage.tsx';
import { BarMenuConfig } from '../../sidebar/BarMenuConfig.tsx'

//import { BarSideMenuConfig } from '../sidebar/BarSideMenuConfig.tsx';
import { DivisionPgHztal } from '../../stylePages.ts';
import lg_config from '@/assets/svgs/lg_config.svg';
import bt_helppg from '@/assets/svgs/bt_helppg.svg';
import bt_abortar from '@/assets/svgs/bt_abortar.svg';
import bt_close from '@/assets/svgs/bt_close.svg';

//import MysqlConfig from './MysqlConfig'; // Importando MysqlConfig
// import CheckDB from './CheckDB.tsx';
// import BackupDB from './BackupDB.tsx';
// import RestoreDB from './RestoreDB.tsx';
// import ExplorerDB from './ExplorerDB.tsx';

const Config: React.FC = () => {
  const [theme, setTheme] = React.useState(light);
  const [ischeck, setIscheck] = React.useState(false);
  const ToggleTheme = () => {
    setTheme(theme.name === "dark" ? light : dark);
    setIscheck(theme.name === "dark");
  };

  const navigate = useNavigate();
  const goto = (path: string) => () => navigate(path);

  const { state } = useAcessoContext();

  const [ischkdb, setIsChkDb] = React.useState(false);


  const [cardhplpage, setCardHlpPage] = React.useState(false);
  const handlerCardHlpPage = React.useCallback(() => {
    setCardHlpPage((oldState) => !oldState);
  }, []);


  // const TitlePage = 'Config.';
  
  // const AcaoPage = 'Acesso Database';
  // React.useEffect(() => {
  //   dispatch({ type: MysqlUseActions.RESET_STATE });
  //   dispatch({ type: MysqlUseActions.SET_PAGE, payload: TitlePage });
  //   dispatch({ type: MysqlUseActions.SET_APLICACAO, payload: AcaoPage });
  //   console.log('Valores iniciais do contexto:', state);
  // }, []); // O array vazio garante que o efeito só roda uma vez na montagem


  const [checagemsyspage, setChecagemSysPage] = React.useState(false);
  
  const handlerChecagemSysPage = React.useCallback(() => {
    setChecagemSysPage((oldState) => !oldState);
  }, []);

  React.useEffect(() => {
    if (state.chvkey) {
      if (!ischkdb){ 
        setIsChkDb(true);
      }
    } else {
      setIsChkDb(false);
    }
    if (ischkdb){
      handlerChecagemSysPage();
    }
  },[]);


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
        onchange={ToggleTheme}
        ischeck={ischeck}
      >

        <ContentCardPage pwidth={'100%'}>

        {ischkdb ? (
          <PageModal
            ptop={'1%'}
            pwidth={'80%'}
            pheight={'95%'}
            imgbm={bt_close}
            titbm="Fechar..."
            titulo={'Checagem do Sistema.'}
            onclose={() => setChecagemSysPage(false)}
          >
            <CardHlpHomePage
              imgcardpage={lg_chksys}
              onclosesair={() => setChecagemSysPage(false)}
            />
          </PageModal>
        ) : null}



          <BarMenuConfig />
        </ContentCardPage>  

        <DivisionPgHztal />


{/* 
        <ContentCardPage pwidth={'100%'}>
          <BarMenuConfig />
            <BarSideMenuConfig setActiveComponent={setActiveComponent} /> 
        </ContentCardPage>
         
        <DivisionPgHztal />

         <h1>Page Config</h1> 
         Exibição dinâmica do componente selecionado 
        
         {activeComponent === "CheckDB" && <CheckDB />}
        {activeComponent === "BackupDB" && <BackupDB />}
        {activeComponent === "RestoreDB" && <RestoreDB />}
        {activeComponent === "ExplorerDB" && <ExplorerDB />} 
*/}




        {cardhplpage && (
          <PageModal
            ptop={'1%'}
            pwidth={'80%'}
            pheight={'95%'}
            imgbm={bt_close}
            titbm="Fechar..."
            titulo="Help Conteúdo Home."
            onclose={() => setCardHlpPage(false)}
          >
            <CardHlpConfigPage
              imgcardpage={lg_config}
              onclosesair={() => setCardHlpPage(false)}
            />
          </PageModal>
        )}
      </LayoutConfig>
    </ThemeProvider>
  );
};

export default Config;
