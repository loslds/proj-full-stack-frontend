import * as Pg from '../stylePages';
import { ContentPages } from '../ContentPages';
import HeaderConfig from '../hearders/headers/HearderConfig';

interface PropsLayoutConfig {

  imgsys?: string;
  titbtnsys?: string;
  onclicksys?: () => void;

  titlepg?: string;

  mston?: boolean;
  pxheigth?: string;
  strcor?: string;

  imgbtnhlppg?: string;
  titbtnhlppg?: string;
  onclickhlppg?: () => void;

  imgbtnaborta?: string;
  titbtnaborta?: string;
  onclickaborta?: () => void;
  
  imgbtnchk?: string;
  titbtnchk?: string;
  onclickchk?: () => void;

  mstonoff?: boolean;
  imgbtnmst?: string;
  titbtnmst?: string;
  onclickmst?: () => void;

  onchange: () => void;
  ischeck?: boolean;
  children?: React.ReactNode ;
  open?: boolean;

}
const LayoutConfig = ({
  imgsys,
  titbtnsys,
  onclicksys,

  titlepg,

  mston,
  pxheigth,
  strcor,

  imgbtnhlppg,
  titbtnhlppg,
  onclickhlppg,

  imgbtnaborta,
  titbtnaborta,
  onclickaborta,

  imgbtnchk,
  titbtnchk,
  onclickchk,

  
  mstonoff,
  imgbtnmst,
  titbtnmst,
  onclickmst,


  onchange,
  ischeck,
  children,

  
}: PropsLayoutConfig) => {

  return (
  
    <ContentPages>
      <HeaderConfig
        imgsys={imgsys}
        titbtnsys={titbtnsys}
        onclicksys={onclicksys}
        titlepg={titlepg}

        mston={mston}
        pxheigth={pxheigth}
        strcor={strcor}

        imgbtnhlppg={imgbtnhlppg}
        titbtnhlppg={titbtnhlppg}
        onclickhlppg={onclickhlppg}
        imgbtnaborta={imgbtnaborta}
        titbtnaborta={titbtnaborta}
        onclickaborta={onclickaborta}
        imgbtnchk={imgbtnchk}
        titbtnchk={titbtnchk}
        onclickchk={onclickchk}
        mstonoff={mstonoff}
        imgbtnmst={imgbtnmst}
        titbtnmst={titbtnmst}
        onclickmst={onclickmst}
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
