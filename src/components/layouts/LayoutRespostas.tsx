import * as Pg from '../stylePages';

///
import { ContentPages } from '../ContentPages';
import HeaderRespostas from '../hearders/headers/HearderRespostas';
//import { FooterPage } from '../../footers/FooterPage';
//import { BarSideMenuPage } from '../../sidebar/BarSideMenuPage';
//import { BarSideMenuDados } from '../../sidebar/BarSideMenuDados';

interface PropsLayoutRespostas {
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

//  imgbtnreg?: string;
//  titbtnreg?: string;
//  onclickreg?: () => void;

  onchange: () => void;
  ischeck?: boolean;
  children?: React.ReactNode | JSX.Element;
  open?: boolean;
}
const LayoutRespostas = ({
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

//  imgbtnreg,
//  titbtnreg,
//  onclickreg,

  onchange,
  ischeck,

  children,
}: PropsLayoutRespostas) => {
  return (
    <ContentPages>
      <HeaderRespostas
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

//        imgbtnreg={imgbtnreg}
//        titbtnreg={titbtnreg}
//        onclickreg={onclickreg}

        onchange={onchange}
        ischeck={ischeck}
      />
      <Pg.DivisionPgHztal />
      <Pg.ContainerBody>
        <Pg.ContainerPage>
          {/* <BarSideMenuPage /> */}
          {/* <BarSideMenuDados open={open} />  */}
          {/* <Pg.DivisionPgHztal /> */}
          {children}
        </Pg.ContainerPage>
      </Pg.ContainerBody>
      <Pg.DivisionPgHztal />
      {/* <FooterPage /> */}
    </ContentPages>
  );
};

export default LayoutRespostas;
