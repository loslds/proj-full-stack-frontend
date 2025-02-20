import * as Pg from '../stylePages';

///
import { ContentPages } from '../ContentPages';
//import { ContentCardPage } from '../ContentCardPage';
import HeaderRecepcao from '../hearders/headers/HearderRecepcao';
//import { BarSideMenuRecep } from '../sidebar/BarSideMenuRecep';

//import { FooterPage } from '../../footers/FooterPage';

interface PropsLayoutRecepcao {
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

  //open?: boolean;
}
const LayoutRecepcao = ({
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

  children

  //open
}: PropsLayoutRecepcao) => {
  return (
    <ContentPages>
      <HeaderRecepcao
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
          {/* <ContentCardPage pwidth={'100%'}>
            <BarSideMenuRecep />
          </ContentCardPage>
          <Pg.DivisionPgHztal /> */}
          
          {children}
        </Pg.ContainerPage>
      </Pg.ContainerBody>
      <Pg.DivisionPgHztal />
      {/* <FooterPage /> */}
    </ContentPages>
  );
};

export default LayoutRecepcao;
