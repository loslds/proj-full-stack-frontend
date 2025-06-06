import * as H from '../styledHeader';
import Switch from 'react-switch';
import { ContentHearderMain } from '../ContentHearderMain';
import { ContentHearderItens } from '../ContentHearderItens';
import { ContentHeaderButtonSys } from '../ContentHeaderButtonSys';
import { ContentHeaderTitle } from '../ContentHeaderTitle';
import { ContentHearderRight } from '../ContentHearderRight';
import { ContentHearderItensBar } from '../ContentHearderItensBar';
import { ContentHeaderButtonHelp } from '../ContentHeaderButtonHelp';
import { ContentHeaderButtonAbortar } from '../ContentHeaderButtonAbortar';

interface PropsHearderConfig {
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
const HearderConfig = ({
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
}: PropsHearderConfig) => {
  return (
    <ContentHearderMain>
      {/** Panel da ESquerda com Imagem LOGO ->Emp/SYS da pagina */}
      <ContentHearderItens>
        <ContentHeaderButtonSys
          imgsys={imgsys}
          titlesys={titbtnsys}
          onClicksys={onclicksys}
        />
      </ContentHearderItens>
      {/** Painel Central com o Titulo da pagina */}
      <ContentHearderItens>
        <ContentHeaderTitle title={titlepg} />
      </ContentHearderItens>
      {/** Panel da Direita com Botões de acesso e Switch da pagina */}
      <ContentHearderRight>
        <ContentHearderItensBar>
          <ContentHeaderButtonHelp
            imgbtnhlp={imgbtnhlppg}
            titbtnhlp={titbtnhlppg}
            onClickhlp={onclickhlppg}
          />
          <ContentHeaderButtonAbortar
            imgbtnaborta={imgbtnaborta}
            titbtnaborta={titbtnaborta}
            onClickaborta={onclickaborta}
          />
          
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

export default HearderConfig;