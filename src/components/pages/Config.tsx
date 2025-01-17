import React from "react";

//import * as Pg from "../stylePages";

import { ThemeProvider } from "styled-components";
import light from "../../themes/light";
import dark from "../../themes/dark";
import { useNavigate } from "react-router-dom";

import LayoutConfig from "../layouts/LayoutConfig";

import { PageModal } from './PageModal';
import { CardHlpConfigPage } from '../../cards/CardHlpConfigPage';

import lg_config from "../../assets/svgs/lg_config.svg";
import bt_helppg from "../../assets/svgs/bt_helppg.svg";
import bt_abortar from "../../assets/svgs/bt_abortar.svg";

import bt_close from "../../assets/svgs/bt_close.svg";

//import bt_voltar from "../../assets/pngs/bt_voltar.png";
//import bt_setadir from "../../assets/svgs/bt_setadir.svg";

const Config : React.FC = () => {
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

  const [cardhplpage, setCardHlpPage] = React.useState(false);
  const handlerCardHlpPage = React.useCallback(() => {
    setCardHlpPage((oldState) => !oldState);
  }, []);
  

  // const DescrOpc = [
  //   "Opções:",
  //   "E-mail.",
  //   "E-mail Resgate",
  //   "Celular via SMS.",
  //   "Celular via Whatsapp.",
  //   "Peguntas.",
  // ];
 



  return (
    <ThemeProvider theme={theme}>
      <LayoutConfig
        imgsys={lg_config}
        titbtnsys="Modulo Config..."
        onclicksys={ () => {} }

        titlepg="Cadastros"

        imgbtnhlppg={bt_helppg}
        titbtnhlppg="Help Page..."
        onclickhlppg={ handlerCardHlpPage }

        imgbtnaborta={bt_abortar}
        titbtnaborta="Abortar..."
        onclickaborta={ goto('/') }

        onchange={ToggleTheme}
        ischeck={ischeck}
      >
        <h1>Página Config</h1>
  

        {cardhplpage ? (
          <PageModal
            ptop={'1%'}
            pwidth={'80%'}
            pheight={'95%'}
            imgbm={bt_close}
            titbm="Fechar..."
            titulo={'Help Conteúdo Home.'}
            onclose={() => setCardHlpPage(false)}
          >
            <CardHlpConfigPage
              imgcardpage={lg_config}
              onclosesair={() => setCardHlpPage(false)}
            />
          </PageModal>
        ) : null}
      </LayoutConfig>
    </ThemeProvider>
  );
};

export default Config;