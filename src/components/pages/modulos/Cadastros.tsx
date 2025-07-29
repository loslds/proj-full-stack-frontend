import React from "react";

import { ThemeProvider } from "styled-components";
import light from "../../../themes/light";
import dark from "../../../themes/dark";
import { useNavigate } from "react-router-dom";
import LayoutAdministracao from "../../layouts/LayoutAdministracao";
import { ContentCardPage } from "../../ContentCardPage";
import { PageModal } from '../PageModal';
//import { CardHlpAdministracaoPage } from "@/cards/CardHlpAdministracaoPage";
//import  { BarMenuConfig } from "../../sidebar/BarMenuConfig"; 
//import lg_Administracao from "@/assets/svgs/lg_Administracao.svg";
import bt_helppg from "@/assets/svgs/bt_helppg.svg";
import bt_abortar from "@/assets/svgs/bt_abortar.svg";
import bt_close from "@/assets/svgs/bt_close.svg";
import lg_sys from '@/assets/svgs/lg_sys.svg';
import { CardDesenvolver } from "@/cards/CardDesenvolver";
//import bt_voltar from "@/assets/pngs/bt_voltar.png";
//import bt_setadir from "@/assets/svgs/bt_setadir.svg";

//import * as Pg from "../../stylePages";
 
import { BarLeftMenuDropdown } from "../../sidebar/BarLeftMenuDropdown";

const Cadastros : React.FC = () => {
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

  // Dropdonw
  const items = [
    { label: "Home", onClick: () => alert("Home") },
    { label: "Sobre", onClick: () => alert("Sobre") },
    { label: "Contato", onClick: () => alert("Contato") },
  ];

  return (
    <ThemeProvider theme={theme}>
      <LayoutAdministracao
        imgsys={lg_sys}
        titbtnsys="Modulo Cadastros..."
        onclicksys={ () => {} }
        titlepg="DB - Cadastros"
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
          <BarLeftMenuDropdown items={items} />
          <h1>Conteúdo Principal config</h1>

          <h3>Apresenta conteudo do item selecionado no menu.</h3>

            {/* <BarMenuConfig /> */}
        </ContentCardPage>
        

        {/* chama Página para trabalho */}

        <h1>Modulo Cadastros</h1>

        {cardhplpage ? (
          <PageModal
            ptop={'1%'}
            pwidth={'80%'}
            pheight={'95%'}
            imgbm={bt_close}
            titbm="Fechar..."
            titulo={'Help Conteúdo Cadastros.'}
            onclose={() => setCardHlpPage(false)}
          >
{/* 
            <CardHlpCadastros
              imgcardpage={lg_cadastros}
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

export default Cadastros;