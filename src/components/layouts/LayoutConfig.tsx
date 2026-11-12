import * as Pg from '../styleComponents';
import { ContentPages } from '../ContentPages';
import HeaderConfig from '../hearders/headers/HearderConfig';

interface PropsLayoutConfig {
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

  // BOTÂO para mostrar LOGIN LOGADO ou NÂO
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

  // botão para checar SSISTEMA
  imgbtnchk?: string;
  titbtnchk?: string;
  onClickbtnchk?: () => void;

  // BOTÂO para SAIR para HOME
  imgbtnhome?: string;
  titbtnhome?: string;
  onClickbtnhome?: () => void;

  // BOTÂO SWUIT 
  onchange: () => void;
  ischeck?: boolean;
  children?: React.ReactNode;
 
  open?: boolean;

}
const LayoutConfig = ({
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

  imgbtnchk,
  titbtnchk,
  onClickbtnchk,

  imgbtnhome,
  titbtnhome,
  onClickbtnhome,

  onchange,
  ischeck,

  children,

  
}: PropsLayoutConfig) => {

  return (
  
    <ContentPages>
      <HeaderConfig

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

        imgbtnchk={imgbtnchk}
        titbtnchk={titbtnchk}
        onClickbtnchk={onClickbtnchk}

        imgbtnhome={imgbtnhome}
        titbtnhome={titbtnhome}
        onClickbtnhome={onClickbtnhome}

        onchange={onchange}
        ischeck={ischeck}
      />
      <Pg.DivisionPgHztal />
      <Pg.ContainerBody>
        <Pg.ContainerPage>
          <Pg.ContainerPage>
            {children}
          </Pg.ContainerPage>
        </Pg.ContainerPage>
      </Pg.ContainerBody>
      <Pg.DivisionPgHztal />
      {/* <FooterPage /> */}
    </ContentPages>
  
  );
};

export default LayoutConfig;
