import * as Pg from '../stylePages';

///
import { ContentPages } from '../ContentPages';
import HeaderHome from '../hearders/HearderHome';
//import { FooterPage } from '../../footers/FooterPage';
//import { BarSideMenuPage } from '../../sidebar/BarSideMenuPage';
//import { BarSideMenuDados } from '../../sidebar/BarSideMenuDados';

interface PropsLayoutHome {
  imgsys?: string;
  titbtnsys?: string;
  onclicksys?: () => void;
  titlepg?: string;
  imgbtnhlppg?: string;
  titbtnhlppg?: string;
  onclickhlppg?: () => void;
  imgbtnlogin?: string;
  titbtnlogin?: string;
  onclicklogin?: () => void;
  imgbtnresg?: string;
  titbtnresg?: string;
  onclickresg?: () => void;
  onchange: () => void;
  ischeck?: boolean;
  children?: React.ReactNode | JSX.Element;
  open?: boolean;
}
const LayoutHome = ({
  imgsys,
  titbtnsys,
  onclicksys,
  titlepg,
  imgbtnhlppg,
  titbtnhlppg,
  onclickhlppg,
  imgbtnlogin,
  titbtnlogin,
  onclicklogin,
  imgbtnresg,
  titbtnresg,
  onclickresg,
  onchange,
  ischeck,
  children,
}: PropsLayoutHome) => {
  return (
    <ContentPages>
      <HeaderHome
        imgsys={imgsys}
        titbtnsys={titbtnsys}
        onclicksys={onclicksys}
        titlepg={titlepg}
        imgbtnhlppg={imgbtnhlppg}
        titbtnhlppg={titbtnhlppg}
        onclickhlppg={onclickhlppg}
        imgbtnlogin={imgbtnlogin}
        titbtnlogin={titbtnlogin}
        onclicklogin={onclicklogin}
        imgbtnresg={imgbtnresg}
        titbtnresg={titbtnresg}
        onclickresg={onclickresg}
        onchange={onchange}
        ischeck={ischeck}
      />
      <Pg.DivisionPgHztal />
      <Pg.ContainerBody>
        <Pg.ContainerPage>
          {/* <BarSideMenuPage /> */}
          {/* <BarSideMenuDados open={open} />  */}
          <Pg.DivisionPgHztal />
          {children}
        </Pg.ContainerPage>
      </Pg.ContainerBody>
      <Pg.DivisionPgHztal />
      {/* <FooterPage /> */}
    </ContentPages>
  );
};

export default LayoutHome;
