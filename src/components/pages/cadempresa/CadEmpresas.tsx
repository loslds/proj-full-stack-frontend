import React from "react";
import * as Pg from "../../stylePages";
import { ThemeProvider } from "styled-components";
import light from "@/themes/light";
import dark from "@/themes/dark";
import { useNavigate } from "react-router-dom";
import LayoutEmpresas from "../../layouts/LayoutEmpresas";
import lg_sys from "@/assets/svgs/lg_sys.svg";
import bt_helppg from "@/assets/svgs/bt_helppg.svg";
import bt_abortar from "@/assets/svgs/bt_abortar.svg";
//import bt_close from "../../assets/svgs/bt_close.svg";
//import bt_voltar from "../../assets/pngs/bt_voltar.png";
//import bt_setadir from "../../assets/svgs/bt_setadir.svg";

import { ContentCardPage } from "../../ContentCardPage";
import  BarMenuEmpresas  from "../../sidebar/BarMenuEmpresas";
import  FormIncEmpresas from './FormIncEmpresas';
import  FormAltEmpresas from './FormAltEmpresas';
import  FormExcEmpresas from './FormExcEmpresas';
import  FormListEmpresas from './FormListEmpresas';
import  FormPesqEmpresas from './FormPesqEmpresas';


const CadEmpresas: React.FC = () => {
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

  const [activepage, setActivePage] = React.useState<string | null>(null);

  React.useEffect(() => {
    console.log("Página ativa:", activepage);
  }, [activepage]);

  return (
    <ThemeProvider theme={theme}>
      <LayoutEmpresas
        imgsys={lg_sys}
        titbtnsys="Home Sistema..."
        onclicksys={ goto('/home') }
        titlepg="Empresas Cadastro."
        imgbtnhlppg={bt_helppg}
        titbtnhlppg="Help Page..."
        onclickhlppg={ () => {} }
        imgbtnaborta={bt_abortar}
        titbtnaborta="Abortar..."
        onclickaborta={ goto('/modulos/config') }
        onchange={ToggleTheme}
        ischeck={ischeck}
      >
        <ContentCardPage pwidth={'100%'}>
          <BarMenuEmpresas setActiveComponent={setActivePage}/>
        </ContentCardPage>
        <Pg.DivisionPgHztal />

        {activepage === "formINCEmpresas" && <FormIncEmpresas />}
        {activepage === "formALTEmpresas" && <FormAltEmpresas />}
        {activepage === "formEXCEmpresas" && <FormExcEmpresas />}
        {activepage === "formLISTEmpresas" && <FormListEmpresas />}
        {activepage === "formPESQEmpresas" && <FormPesqEmpresas />}

      </LayoutEmpresas>
    </ThemeProvider>
  );
};

export default CadEmpresas;




          {/* <BarSideMenuConfig setActiveComponent={setActiveComponent} /> */}
