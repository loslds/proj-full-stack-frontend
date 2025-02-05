import React from 'react';
import { ThemeProvider } from 'styled-components';
import light from "../../themes/light";
import dark from "../../themes/dark";
import { useNavigate } from 'react-router-dom';
// Use o hook do contexto
//import { useMySQLContext, MysqlUseActions } from '../contexts/MySQLContext'; 

import LayoutConfig from '../layouts/LayoutConfig';
import { PageModal } from './PageModal';
import { CardHlpConfigPage } from '../../cards/CardHlpConfigPage';
import { ContentCardPage } from '../ContentCardPage.tsx';
import { BarMenuConfig } from '../sidebar/BarMenuConfig.tsx'

//import { BarSideMenuConfig } from '../sidebar/BarSideMenuConfig.tsx';
import { DivisionPgHztal } from '../stylePages.ts';
import lg_config from '../../assets/svgs/lg_config.svg';
import bt_helppg from '../../assets/svgs/bt_helppg.svg';
import bt_abortar from '../../assets/svgs/bt_abortar.svg';
import bt_close from '../../assets/svgs/bt_close.svg';

//import MysqlConfig from './MysqlConfig'; // Importando MysqlConfig
// import CheckDB from './CheckDB.tsx';
// import BackupDB from './BackupDB.tsx';
// import RestoreDB from './RestoreDB.tsx';
// import ExplorerDB from './ExplorerDB.tsx';

const Config: React.FC = () => {
  const [theme, setTheme] = React.useState(light);
  const [ischeck, setIscheck] = React.useState(false);
  
  const navigate = useNavigate();
  const goto = (path: string) => () => navigate(path);

  const [cardhplpage, setCardHlpPage] = React.useState(false);
  const handlerCardHlpPage = React.useCallback(() => {
    setCardHlpPage((oldState) => !oldState);
  }, []);

  const ToggleTheme = () => {
    setTheme(theme.name === "dark" ? light : dark);
    setIscheck(theme.name === "dark");
  };


  return (
    <ThemeProvider theme={theme}>
      <LayoutConfig
        imgsys={lg_config}
        titbtnsys="Modulo Config..."
        onclicksys={() => {}}
        titlepg="Database."
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
          <BarMenuConfig />
          {/* <BarSideMenuConfig setActiveComponent={setActiveComponent} /> */}
        </ContentCardPage>
        <DivisionPgHztal />
        <h1>Page Config</h1>
        {/* Exibição dinâmica do componente selecionado */}
        
        {/* {activeComponent === "CheckDB" && <CheckDB />}
        {activeComponent === "BackupDB" && <BackupDB />}
        {activeComponent === "RestoreDB" && <RestoreDB />}
        {activeComponent === "ExplorerDB" && <ExplorerDB />} */}

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
