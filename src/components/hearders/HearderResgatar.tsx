import * as H from './styledHeader';

import Switch from 'react-switch';
import { ContentHearderMain } from './ContentHearderMain';
import { ContentHearderItens } from './ContentHearderItens';
import { ContentHeaderButtonSys } from './ContentHeaderButtonSys';
import { ContentHeaderTitle } from './ContentHeaderTitle';
import { ContentHearderRight } from './ContentHearderRight';
import { ContentHearderItensBar } from './ContentHearderItensBar';
import { ContentPagesButtonHelp } from '../ContentPagesButtonHelp';
import { ContentPagesButton } from '../ContentPagesButton';
interface PropsHearderResgatar {
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
}
const HearderResgatar = ({
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
}: PropsHearderResgatar) => {
  return (
    <ContentHearderMain>
      {/** imagem botão do logo da pagina */}
      <ContentHearderItens>
        <ContentHeaderButtonSys
          imgsys={imgsys}
          titlesys={titbtnsys}
          onClicksys={onclicksys}
        />
      </ContentHearderItens>
      {/** Titulo da pagina */}
      <ContentHearderItens>
        <ContentHeaderTitle title={titlepg} />
      </ContentHearderItens>

      <ContentHearderRight>
        <ContentHearderItensBar>
          {/** imagem botão do help da pagina */}
          <ContentPagesButtonHelp
            imgbtnhlp={imgbtnhlppg}
            titbtnhlp={titbtnhlppg}
            onClickhlp={onclickhlppg}
          />

          {/** imagem botão do Acão Abortar da pagina */}
          <ContentPagesButton
            imgbtn={imgbtnaborta}
            titbtn={titbtnaborta}
            onClick={onclickaborta}
          />

          {/** imagem botão do Restate da pagina 
          <ContentPagesButton
            imgbtn={imgbtnreg}
            titbtn={titbtnreg}
            onClick={onclickreg}
          />
          */}

          {/** botão switch do Padrão fundo Preto ou Branco */}
          <H.ContainerHeaderButton>
            <Switch
              onChange={onchange}
              checked={ischeck === true ? false : true}
              checkedIcon={false}
              uncheckedIcon={false}
              height={15}
              width={50}
              handleDiameter={25}
              onHandleColor="#21ba02"
              offHandleColor="#fa140c"
              onColor="#b4b5b4"
              offColor="#b0b0b0"
              borderRadius={10}
            />
          </H.ContainerHeaderButton>
        </ContentHearderItensBar>
      </ContentHearderRight>
    </ContentHearderMain>
  );
};

export default HearderResgatar;
