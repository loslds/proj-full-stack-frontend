import React from "react";

//import * as Pg from "../stylePages";

import { ThemeProvider } from "styled-components";
import light from "../../themes/light";
import dark from "../../themes/dark";
import { useNavigate } from "react-router-dom";

import LayoutRecepcao from "../layouts/LayoutRecepcao";

import { PageModal } from './PageModal';


import lg_recepcao from "../../assets/svgs/lg_recepcao.svg";
import bt_helppg from "../../assets/svgs/bt_helppg.svg";
import bt_abortar from "../../assets/svgs/bt_abortar.svg";

import { CardHlpRecepcaoPage } from "@/cards/CardHlpRecepcaoPage";

import bt_close from "../../assets/svgs/bt_close.svg";
//import { BarSideMenuRecep } from '../../components/sidebar/BarSideMenuRecep';


//import bt_voltar from "../../assets/pngs/bt_voltar.png";
//import bt_setadir from "../../assets/svgs/bt_setadir.svg";

const Recepcao : React.FC = () => {
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
  
  return (
    <ThemeProvider theme={theme}>
      <LayoutRecepcao
        imgsys={lg_recepcao}
        titbtnsys="Modulo Recepção..."
        onclicksys={ () => {} }

        titlepg="Recepção"

        imgbtnhlppg={bt_helppg}
        titbtnhlppg="Help Page..."
        onclickhlppg={ handlerCardHlpPage }

        imgbtnaborta={bt_abortar}
        titbtnaborta="Abortar..."
        onclickaborta={ goto('/') }

        onchange={ToggleTheme}
        ischeck={ischeck}

      >
        
        <h1>Página Recepção</h1>
  

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
            <CardHlpRecepcaoPage
              imgcardpage={lg_recepcao}
              onclosesair={() => setCardHlpPage(false)}
            />
          </PageModal>
        ) : null}
      </LayoutRecepcao>
    </ThemeProvider>
  );
};

export default Recepcao;