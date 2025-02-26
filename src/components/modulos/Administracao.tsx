import React from "react";

import * as Pg from "../stylePages";

import { ThemeProvider } from "styled-components";
import light from "../../themes/light";
import dark from "../../themes/dark";
import { useNavigate } from "react-router-dom";
import LayoutAdministracao from "../layouts/LayoutAdministracao";
import { ContentCardPage } from "../ContentCardPage";
import { PageModal } from '../pages/PageModal';
//import { CardHlpAdministracaoPage } from "../../../cards/CardHlpAdministracaoPage";
//import  BarMenuAdministracao  from "../../sidebar/BarMenuAdministracao"; 
//import lg_Administracao from "../../assets/svgs/lg_Administracao.svg";
import bt_helppg from "../../assets/svgs/bt_helppg.svg";
import bt_abortar from "../../assets/svgs/bt_abortar.svg";
import bt_close from "../../../assets/svgs/bt_close.svg";
import lg_sys from '../../../assets/svgs/lg_sys.svg';
import { CardDesenvolver } from "@/cards/CardDesenvolver";
//import bt_voltar from "../../assets/pngs/bt_voltar.png";
//import bt_setadir from "../../assets/svgs/bt_setadir.svg";

const Administracao : React.FC = () => {
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
      <LayoutAdministracao
        imgsys={lg_sys}
        titbtnsys="Modulo Administracao..."
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
          <BarMenuAdministracao setActiveComponent={setActivePage} />
 */}
        </ContentCardPage>
        <Pg.DivisionPgHztal />

        {/* chama Página para trabalho */}

        <h1>Modulo Administracao</h1>

        {cardhplpage ? (
          <PageModal
            ptop={'1%'}
            pwidth={'80%'}
            pheight={'95%'}
            imgbm={bt_close}
            titbm="Fechar..."
            titulo={'Help Conteúdo Administracao.'}
            onclose={() => setCardHlpPage(false)}
          >
{/* 
            <CardHlpAdministracaoPage
              imgcardpage={lg_Administracao}
              onclosesair={() => setCardHlpPage(false)}

*/}
            <CardDesenvolver
              imgcarddes={lg_sys}
              onclosesair={() => setCardHlpPage(false)}
            />
          </PageModal>
        ) : null}
      </LayoutAdministracao>
    </ThemeProvider>
  );
};

export default Administracao;