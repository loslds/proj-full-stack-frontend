import React from "react";

import * as Pg from "../stylePages";

import { ThemeProvider } from "styled-components";
import light from "../../themes/light";
import dark from "../../themes/dark";
import { useNavigate } from "react-router-dom";

import LayoutRecepcao from "../layouts/LayoutRecepcao";

import CadOServicosInc from "./cados/CadOServicosInc";
import CadOServicosAlt from "./cados/CadOServicosAlt";
import CadOServicosExc from "./cados/CadOServicosExc";
import CadOServicosPesq from "./cados/CadOServicosPesq";

import CadClientesInc from "./cadcliente/CadClientesInc";
import CadClientesAlt from "./cadcliente/CadClientesAlt";
import CadClientesExc from "./cadcliente/CadClientesExc";
import CadClientesPesq from "./cadcliente/CadClientesPesq";

import CadConsumidoresInc from "./cadcon/CadConsumidoresInc";
import CadConsumidoresAlt from "./cadcon/CadConsumidoresAlt";
import CadConsumidoresExc from "./cadcon/CadConsumidoresExc";
import CadConsumidoresPesq from "./cadcon/CadConsumidoresPesq";

import CadTabCoresList  from "./cadcor/CadTabCoresList";
import CadTabCoresPesq  from "./cadcor/CadTabCoresPesq";

import CadTabPrecosList  from "./cadprc/CadTabPrecosList";
import CadTabPrecosPesq from "./cadprc/CadTabPrecosPesq";





import { ContentCardPage } from "../ContentCardPage";

import { PageModal } from './PageModal';


import lg_recepcao from "../../assets/svgs/lg_recepcao.svg";
import bt_helppg from "../../assets/svgs/bt_helppg.svg";
import bt_abortar from "../../assets/svgs/bt_abortar.svg";

import { CardHlpRecepcaoPage } from "../../cards/CardHlpRecepcaoPage";
import  BarMenuRecepcao  from "../sidebar/BarMenuRecepcao"; 

import bt_close from "../../assets/svgs/bt_close.svg";

//import bt_voltar from "../../assets/pngs/bt_voltar.png";
//import bt_setadir from "../../assets/svgs/bt_setadir.svg";

const Recepcao : React.FC = () => {
  const [theme, setTheme] = React.useState(light);
  const [ischeck, setIscheck] = React.useState(false);

  //const [activepage, setActivePge] = React.useState('');



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
        <ContentCardPage pwidth={'100%'}>
          <BarMenuRecepcao setActiveComponent />
        </ContentCardPage>
        <Pg.DivisionPgHztal />

        {/* chama Página para trabalho */}

        {activeComponent === "IncOsDB" && <CadOServicosInc />}
        {activeComponent === "AltOsDB" && <CadOServicosAlt />}
        {activeComponent === "ExcOsDB" && <CadOServicosExc />}

        {activeComponent === "TabCorDB" && <CadTabCores />}
        {activeComponent === "TabPrcDB" && <CadTabPrecos />}
        {activeComponent === "PesqOsDB" && <CadOServicosPesq />}
        {activeComponent === "PesqCliDB" && <CadClientesPesq />}
        {activeComponent === "PesqConsDB" && <CadConsumPesq />}


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