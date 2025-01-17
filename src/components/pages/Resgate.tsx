import React from "react";

//import * as Pg from "../stylePages";

import { ThemeProvider } from "styled-components";
import light from "../../themes/light";
import dark from "../../themes/dark";
import { useNavigate } from "react-router-dom";

import LayoutResgatar from "../layouts/LayoutResgatar";

import lg_resgate from "../../assets/svgs/lg_resgate.svg";
import bt_helppg from "../../assets/svgs/bt_helppg.svg";
import bt_abortar from "../../assets/svgs/bt_abortar.svg";
//import bt_close from "../../assets/svgs/bt_close.svg";
//import bt_voltar from "../../assets/pngs/bt_voltar.png";
//import bt_setadir from "../../assets/svgs/bt_setadir.svg";

const Resgate: React.FC = () => {
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
      <LayoutResgatar
        imgsys={lg_resgate}
        titbtnsys="Home Sistema..."
        onclicksys={ () => {} }

        titlepg="Resgatar"

        imgbtnhlppg={bt_helppg}
        titbtnhlppg="Help Page..."
        onclickhlppg={ () => {} }

        imgbtnaborta={bt_abortar}
        titbtnaborta="Abortar..."
        onclickaborta={ goto('/') }

        onchange={ToggleTheme}
        ischeck={ischeck}
      >
        <h1>Página resgate</h1>
  
      </LayoutResgatar>
    </ThemeProvider>
  );
};

export default Resgate;