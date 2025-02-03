

import React from "react";
import { ThemeProvider } from "styled-components";
import light from "../../themes/light";
import dark from "../../themes/dark";
import { useNavigate } from "react-router-dom";
import { useMySQL } from "../contexts/MySQLContext";
import LayoutConfig from "../layouts/LayoutConfig";
import { PageModal } from './PageModal';
import { CardHlpConfigPage } from '../../cards/CardHlpConfigPage';
import lg_config from "../../assets/svgs/lg_config.svg";
import bt_helppg from "../../assets/svgs/bt_helppg.svg";
import bt_abortar from "../../assets/svgs/bt_abortar.svg";
import bt_close from "../../assets/svgs/bt_close.svg";

const Config : React.FC = () => {
  const [theme, setTheme] = React.useState(light);
  const [ischeck, setIscheck] = React.useState(false);
  const [ischeckdb, setIscheckdb] = React.useState(false);
  const { isConnected } = useMySQL();

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
  
  React.useEffect(() => {
    if (isConnected) {
      setIscheckdb(isConnected);
    }
  }, [isConnected]);


  return (
    <ThemeProvider theme={theme}>
        <LayoutConfig
          imgsys={lg_config}
          titbtnsys="Modulo Config..."
          onclicksys={ () => {} }

          titlepg="Data-Baser."

          imgbtnhlppg={bt_helppg}
          titbtnhlppg="Help Page..."
          onclickhlppg={ handlerCardHlpPage }

          imgbtnaborta={bt_abortar}
          titbtnaborta="Abortar..."
          onclickaborta={ goto('/') }

          onchange={ToggleTheme}
          ischeck={ischeck}
        >
          
          <h1>Página Config</h1>
          
          
          
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
              <CardHlpConfigPage
                imgcardpage={lg_config}
                onclosesair={() => setCardHlpPage(false)}
              />
            </PageModal>
          ) : null}
        </LayoutConfig>
    </ThemeProvider>
  );
};

export default Config;