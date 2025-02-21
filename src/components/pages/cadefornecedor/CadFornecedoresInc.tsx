import React from "react";

//import * as Pg from "../stylePages";

import { ThemeProvider } from "styled-components";
import light from "../../../themes/light";
import dark from "../../../themes/dark";
import { useNavigate } from "react-router-dom";

import LayoutFornecedores from "../../layouts/LayoutFornecedores";

import lg_sys from "../../assets/svgs/lg_sys.svg";
import bt_helppg from "../../assets/svgs/bt_helppg.svg";
import bt_abortar from "../../assets/svgs/bt_abortar.svg";
//import bt_close from "../../assets/svgs/bt_close.svg";
//import bt_voltar from "../../assets/pngs/bt_voltar.png";
//import bt_setadir from "../../assets/svgs/bt_setadir.svg";

const CadFornecedoresInc: React.FC = () => {
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
      <LayoutFornecedores
        imgsys={lg_sys}
        titbtnsys="Home Sistema..."
        onclicksys={ goto('/home') }

        titlepg="Fornecedores Inclusão."

        imgbtnhlppg={bt_helppg}
        titbtnhlppg="Help Page..."
        onclickhlppg={ () => {} }

        imgbtnaborta={bt_abortar}
        titbtnaborta="Abortar..."
        onclickaborta={ goto('/cadfornecedores') }

        onchange={ToggleTheme}
        ischeck={ischeck}
      >
        <h1>CadFornecedoresInc</h1>
  
      </LayoutFornecedores>
    </ThemeProvider>
  );
};

export default CadFornecedoresInc;