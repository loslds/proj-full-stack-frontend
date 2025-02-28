import React from "react";

import * as Pg from "../stylePages";

import { ThemeProvider } from "styled-components";
import light from "../../themes/light";
import dark from "../../themes/dark";
import { useNavigate } from "react-router-dom";

import LayoutRecepcao from "../layouts/LayoutRecepcao";

//import CadOServicos from "../pages/cadoservico/CadOServicos";
//import CadOServicosPesq from "../pages/cadoservico/CadOServicosPesq";
//import CadClientesPesq from "../pages/cadcliente/CadClientesPesq";
//import CadConsumidoresPesq from "../pages/cadconsumidor/CadConsumidoresPesq";
//import Linhas from "../pages/tabela/linha/Linhas";
//import Precos from "../pages/tabela/preco/Precos";

import { ContentCardPage } from "../ContentCardPage";
import { PageModal } from '../pages/PageModal';

import { CardHlpRecepcaoPage } from "../../cards/CardHlpRecepcaoPage";
//import  BarMenuRecepcao  from "../sidebar/BarMenuRecepcao"; 

import lg_recepcao from "@/assets/svgs/lg_recepcao.svg";
import bt_helppg from "@/assets/svgs/bt_helppg.svg";
import bt_abortar from "@/assets/svgs/bt_abortar.svg";
import bt_close from "@/assets/svgs/bt_close.svg";

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

//  const [activepage,setActivePage] = React.useState('');

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
{/* 
          <BarMenuRecepcao setActiveComponent={setActivePage} />
 */}
        </ContentCardPage>
        <Pg.DivisionPgHztal />
 
        {/* chama Página para trabalho */}




        {/* {activepage === "CadOs" && <CadOServicos />}
                
        {activepage === "LinhaTB" && <Linhas />}
        {activepage === "PrecoTB" && <Precos />}
        
        {activepage === "PesqOS" && <CadOServicosPesq />}
        {activepage === "PesqCLI" && <CadClientesPesq />}
        {activepage === "PesqCONS" && <CadConsumidoresPesq />}
 */}




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