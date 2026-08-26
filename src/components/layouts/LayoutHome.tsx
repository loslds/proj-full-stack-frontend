 
import * as Pg from '../stylePages';
import { ContentPages } from '../ContentPages';
import HeaderHome from '../hearders/headers/HearderHome';
interface PropsLayoutHome {
  pminheight?: string;
  pwidth?: string;
  imgbtnlogo?: string;
  titbtnlogo?: string;
  onClickbtnlogo?: () => void;
  
  titulopg?: string;

  imgbtnhlppg?: string;
  titbtnhlppg?: string;
  onClickbtnhlppg?: () => void;
  
  imgbtnloginon?: string;
  titbtnloginon?: string;
  disabledloginon?: boolean;
  onClickbtnloginon?: () => void;
  
  loginoff?: boolean;
  imgbtnloginoff?: string;
  titbtnloginoff?: string;
  onClickbtnloginoff?: () => void;

  masteroff?: boolean;
  imgbtnmasteroff?: string;
  titbtnmasteroff?: string;
  onClickbtnmasteroff?: () => void;

  imgbtnresgate?: string;
  titbtnresgate?: string;
  onClickbtnresgate?: () => void;

  onchange: () => void;
  ischeck?: boolean;
  children?: React.ReactNode;
}
const LayoutHome = ({
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

  onchange,
  ischeck,

  children,
}: PropsLayoutHome) => {
  return (
    <ContentPages>
      <HeaderHome

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

        onchange={onchange}
        ischeck={ischeck}

      />
      <Pg.DivisionPgHztal />
      <Pg.ContainerBody>
        <Pg.ContainerPage>
          {children}
        </Pg.ContainerPage>
      </Pg.ContainerBody>
      <Pg.DivisionPgHztal />
      {/* <FooterPage /> */}
    </ContentPages>
  );
};

export default LayoutHome;
 