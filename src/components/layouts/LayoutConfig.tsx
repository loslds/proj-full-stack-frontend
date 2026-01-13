import * as Pg from '../stylePages';
import { ContentPages } from '../ContentPages';
//import {ContentCardPage} from '../ContentCardPage';
import HeaderConfig from '../hearders/headers/HearderConfig';
//import { BarSideMenuConfig } from '../sidebar/BarSideMenuConfig';
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
  
  imgbtnchk?: string;
  titbtnchk?: string;
  onclickchk?: () => void;

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

  imgbtnhlppg,
  titbtnhlppg,
  onclickhlppg,

  imgbtnaborta,
  titbtnaborta,
  onclickaborta,

  imgbtnchk,
  titbtnchk,
  onclickchk,

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
        imgbtnchk={imgbtnchk}
        titbtnchk={titbtnchk}
        onclickchk={onclickchk}

        onchange={onchange}
        ischeck={ischeck}
      />
      <Pg.DivisionPgHztal />
      <Pg.ContainerBody>
        <Pg.ContainerPage>
          <Pg.ContainerPage>
            {/* <BarSideMenuPage /> */}
            {/* <BarSideMenuDados open={open} />  
            <Pg.DivisionPgHztal />*/}
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
