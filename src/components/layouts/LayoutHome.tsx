 
import * as Pg from '../stylePages';
import { ContentPages } from '../ContentPages';
import HeaderHome from '../hearders/headers/HearderHome';
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
  disabled?: boolean;
  onclicklogin?: () => void;
  imgbtnresg?: string;
  titbtnresg?: string;
  onclickresg?: () => void;
  onchange: () => void;
  ischeck?: boolean;
  children?: React.ReactNode;
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
  disabled,
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
        disabled={disabled}
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
          {/* <BarSideMenuDados open={open} />  
          <Pg.DivisionPgHztal />*/}
          {children}
        </Pg.ContainerPage>
      </Pg.ContainerBody>
      <Pg.DivisionPgHztal />
      {/* <FooterPage /> */}
    </ContentPages>
  );
};

export default LayoutHome;
 