import React from "react";
import * as Pg from "../../stylePages";
import { ThemeProvider } from "styled-components";
import light from "../../../themes/light";
import dark from "../../../themes/dark";
import { useNavigate } from "react-router-dom";
//import { useAcessoContext } from "../../contexts/ContextAcesso";
import LayoutVisitante from "../../layouts/LayoutVisitante";
import { ContentCardPage } from "../../ContentCardPage";
import { PageModal } from '../PageModal';
import { CardDesenvolver } from "@/cards/CardDesenvolver";

//import { CardHlpVisitantePage } from "@/cards/CardHlpVisitantePage";
//import  BarMenuVisitante  from "../../sidebar/BarMenuVisitante"; 

import bt_helppg from "../../../assets/defaults/btn/btn_def_q_help.svg";
import bt_abortar from "../../../assets/defaults/btn/btn_def_q_sair.svg";
import bt_close from "../../../assets/defaults/btn/btn_def_q_close.svg";
import lg_def_mod_visitante from "../../../assets/defaults/lg/lg_def_mod_visitante.svg";
import lg_def_mod_default from "../../../assets/defaults/lg/lg_def_mod_default.svg";
import btn_def_q_logo_off from "../../../assets/defaults/btn/btn_def_q_logo_off.svg";
import btn_def_q_logo_on from "../../../assets/defaults/btn/btn_def_q_logo_on.svg";
//import bt_voltar from "../../assets/pngs/bt_voltar.png";
//import bt_setadir from "../../assets/svgs/bt_setadir.svg";

const Visitante : React.FC = () => {
  //const { state } = useAcessoContext();
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

  const [calllogonoff, setCallLogOnOff] = React.useState(false);
  const handleLogonOff = React.useCallback(() => {
    setCallLogOnOff((oldState) => !oldState);
  }, []);

//  const [activepage,setActivePage] = React.useState('');

  return (
    <ThemeProvider theme={theme}>
      <LayoutVisitante
        imgsys={lg_def_mod_visitante}
        titbtnsys="Modulo Visitante..."
        onclicksys={ () => {} }
        titlepg="Visitante"
        imgbtnhlppg={bt_helppg}
        titbtnhlppg="Help Page..."
        onclickhlppg={ handlerCardHlpPage }

        $imglgon={btn_def_q_logo_on}
        $imglgoff={btn_def_q_logo_off}
        $logonoff={calllogonoff}
        titbtnlgonoff={calllogonoff ? "Usuário logado" : "Usuário não logado"}
        onclicklgooff={handleLogonOff}

        imgbtnaborta={bt_abortar}
        titbtnaborta="Abortar..."
        onclickaborta={ goto('/') }
        onchange={ToggleTheme}
        ischeck={ischeck}
      >
        <ContentCardPage pwidth={'100%'}>
{/* 
          <BarMenuVisitante setActiveComponent={setActivePage} />
 */}
        </ContentCardPage>
        <Pg.DivisionPgHztal />

        {/* chama Página para trabalho */}

        <h1>Modulo Visitante</h1>

        {cardhplpage ? (
          <PageModal
            ptop={'1%'}
            pwidth={'80%'}
            pheight={'95%'}
            imgbm={bt_close}
            titbm="Fechar..."
            titulo={'Help Conteúdo Visitante.'}
            onclose={() => setCardHlpPage(false)}
          >
{/* 
            <CardHlpVisitantePage
              imgcardpage={lg_Visitante}
              onclosesair={() => setCardHlpPage(false)}

*/}
            <CardDesenvolver
              imgcarddes={lg_def_mod_default}
              onclosesair={() => setCardHlpPage(false)}
            />
          </PageModal>
        ) : null}
      </LayoutVisitante>
    </ThemeProvider>
  );
};

export default Visitante;