import React from "react";

import * as Pg from "../../stylePages";

import { ThemeProvider } from "styled-components";
import light from "../../../themes/light";
import dark from "../../../themes/dark";
import { useNavigate } from "react-router-dom";
import LayoutExpedicao from "../../layouts/LayoutExpedicao";
import { ContentCardPage } from "../../ContentCardPage";
import { PageModal } from '../PageModal';
import { CardDesenvolver } from "@/cards/CardDesenvolver";
//import { CardHlpExpedicaoPage } from "@/cards/CardHlpExpedicaoPage";
//import  BarMenuExpedicao  from "../../sidebar/BarMenuExpedicao"; 
//import lg_Expedicao from "@/assets/svgs/lg_Expedicao.svg";
import bt_helppg from "../../../assets/defaults/btn/btn_def_q_help.svg";
import bt_abortar from "../../../assets/defaults/btn/btn_def_q_sair.svg";
import bt_close from "../../../assets/defaults/btn/btn_def_q_close.svg";
import lg_def_mod_expedicao from "../../../assets/defaults/lg/lg_def_mod_expedicao.svg";
import lg_def_mod_default from "../../../assets/defaults/lg/lg_def_mod_default.svg";

//import bt_voltar from "../../assets/pngs/bt_voltar.png";
//import bt_setadir from "../../assets/svgs/bt_setadir.svg";

const Expedicao : React.FC = () => {
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
      <LayoutExpedicao
        imgsys={lg_def_mod_expedicao}
        titbtnsys="Modulo Expedicao..."
        onclicksys={ () => {} }
        titlepg="Expedição"
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
          <BarMenuExpedicao setActiveComponent={setActivePage} />
 */}
        </ContentCardPage>
        <Pg.DivisionPgHztal />

        {/* chama Página para trabalho */}

        <h1>Modulo Expedicao</h1>

        {cardhplpage ? (
          <PageModal
            ptop={'1%'}
            pwidth={'80%'}
            pheight={'95%'}
            imgbm={bt_close}
            titbm="Fechar..."
            titulo={'Help Conteúdo Expedicao.'}
            onclose={() => setCardHlpPage(false)}
          >
{/* 
            <CardHlpExpedicaoPage
              imgcardpage={lg_Expedicao}
              onclosesair={() => setCardHlpPage(false)}

*/}
            <CardDesenvolver
              imgcarddes={lg_def_mod_default}
              onclosesair={() => setCardHlpPage(false)}
            />
          </PageModal>
        ) : null}
      </LayoutExpedicao>
    </ThemeProvider>
  );
};

export default Expedicao;