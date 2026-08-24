
import * as Pg from '../stylePages';

import { ContentPages } from '../ContentPages';
import HearderVisitante from '../hearders/headers/HearderVisitante';
//import { FooterPage } from '../../footers/FooterPage';
//import { BarSideMenuPage } from '../../sidebar/BarSideMenuPage';
//import { BarSideMenuDados } from '../../sidebar/BarSideMenuDados';

interface PropsLayoutVisitante {
  //IMAGEM lOGO DA PAGINA
  imgbtnlogo?: string;
  titbtnlogo?: string;
  onClickbtnlogo?: () => void;
  // TITULO DA PAGINA
  titulopg?: string;
  // BOTÃO DE HELP PAGINA
  imgbtnhlppg?: string;
  titbtnhlppg?: string;
  onClickbtnhlppg?: () => void;
  // BOTÂO de LOGIN Logado ou não Logado
  imgbtnloginon?: string;
  titbtnloginon?: string;
  disabledloginon?: boolean;
  onClickbtnloginon?: () => void;
  // BOTÃO para SAIR LOGOFF LOGIN
  loginoff?: boolean;
  imgbtnloginoff?: string;
  titbtnloginoff?: string;
  onClickbtnloginoff?: () => void;
  // BOTÃO para SAIR LOGOFF MASTER
  masteroff?: boolean;
  imgbtnmasteroff?: string;
  titbtnmasteroff?: string;
  onClickbtnmasteroff?: () => void;
  // BOTÃO para RESGATAR ACESSO SITEMA
  imgbtnresgate?: string;
  titbtnresgate?: string;
  onClickbtnresgate?: () => void;
  // BOTÂO para SAIR para HOME
  imgbtnhome?: string;
  titbtnhome?: string;
  onClickbtnhome?: () => void;
  // BOTÂO SWUIT 
  onchange: () => void;
  ischeck?: boolean;
  children?: React.ReactNode;
}
const LayoutVisitante = ({
  imgbtnlogo,
  titbtnlogo,
  onClickbtnlogo,

  titulopg,

  imgbtnhlppg,
  titbtnhlppg,
  onClickbtnhlppg,

  imgbtnloginon,
  titbtnloginon,
  disabledloginon,
  onClickbtnloginon,

  loginoff,
  imgbtnloginoff,
  titbtnloginoff,
  onClickbtnloginoff,

  masteroff,
  imgbtnmasteroff,
  titbtnmasteroff,
  onClickbtnmasteroff,

  imgbtnresgate,
  titbtnresgate,
  onClickbtnresgate,

  imgbtnhome,
  titbtnhome,
  onClickbtnhome,

  onchange,
  ischeck,

  children,
}: PropsLayoutVisitante) => {
  return (
    <ContentPages>
      <HearderVisitante

        imgbtnlogo={imgbtnlogo}
        titbtnlogo={titbtnlogo}
        onClickbtnlogo={onClickbtnlogo}
        
        titulopg={titulopg} 

        imgbtnhlppg={imgbtnhlppg}
        titbtnhlppg={titbtnhlppg}
        onClickbtnhlppg={onClickbtnhlppg}

        imgbtnloginon={imgbtnloginon}
        titbtnloginon={titbtnloginon}
        disabledloginon={disabledloginon}
        onClickbtnloginon={onClickbtnloginon}

        loginoff={loginoff}
        imgbtnloginoff={imgbtnloginoff}
        titbtnloginoff={titbtnloginoff}
        onClickbtnloginoff={onClickbtnloginoff}

        masteroff={masteroff}
        imgbtnmasteroff={imgbtnmasteroff}
        titbtnmasteroff={titbtnmasteroff}
        onClickbtnmasteroff={onClickbtnmasteroff}

        imgbtnresgate={imgbtnresgate}
        titbtnresgate={titbtnresgate}
        onClickbtnresgate={onClickbtnresgate}

        imgbtnhome={imgbtnhome}
        titbtnhome={titbtnhome}
        onClickbtnhome={onClickbtnhome}

        onchange={onchange}
        ischeck={ischeck}

      />
      <Pg.DivisionPgHztal />
      <Pg.ContainerBody>
        <Pg.ContainerPage>
          {/* um BAR com Menu de Serviços prestados pela Empresa  OU   Banner rotativo */}
          {children}
        </Pg.ContainerPage>
      </Pg.ContainerBody>
      <Pg.DivisionPgHztal />
      {/* <FooterPage /> */}
    </ContentPages>
  );
};

export default LayoutVisitante;
