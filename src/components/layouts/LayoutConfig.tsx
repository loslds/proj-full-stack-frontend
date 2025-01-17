import * as Pg from '../stylePages';

///
import { ContentPages } from '../ContentPages';
import HeaderConfig from '../hearders/HearderConfig';
//import { FooterPage } from '../../footers/FooterPage';
//import { BarSideMenuPage } from '../../sidebar/BarSideMenuPage';
//import { BarSideMenuDados } from '../../sidebar/BarSideMenuDados';

interface PropsLayoutConfig {
  imgsys?: string;
  titbtnsys?: string;
  onclicksys?: () => void;

  titlepg?: string;

  imgbtnhlppg?: string;
  titbtnhlppg?: string;
  onclickhlppg?: () => void;

  imgbtnaborta?: string;
  titbtnaborta?: string;
  onclickaborta?: () => void;
  
  onchange: () => void;
  ischeck?: boolean;
  children?: React.ReactNode | JSX.Element;
  open?: boolean;
}
const LayoutConfig = ({
  imgsys,
  titbtnsys,
  onclicksys,

  titlepg,

  imgbtnhlppg,
  titbtnhlppg,
  onclickhlppg,

  imgbtnaborta,
  titbtnaborta,
  onclickaborta,

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
        imgbtnhlppg={imgbtnhlppg}
        titbtnhlppg={titbtnhlppg}
        onclickhlppg={onclickhlppg}
        imgbtnaborta={imgbtnaborta}
        titbtnaborta={titbtnaborta}
        onclickaborta={onclickaborta}
        onchange={onchange}
        ischeck={ischeck}
      />
      <Pg.DivisionPgHztal />
      <Pg.ContainerBody>
        <Pg.ContainerPage>
          {/*<BarSideMenuPage />
           <BarSideMenuDados open={open} />  */}
          <Pg.DivisionPgHztal />
          {children}
        </Pg.ContainerPage>
      </Pg.ContainerBody>
      <Pg.DivisionPgHztal />
      {/* <FooterPage /> */}
    </ContentPages>
  );
};

export default LayoutConfig;
