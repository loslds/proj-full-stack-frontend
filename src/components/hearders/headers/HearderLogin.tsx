import * as H from '../styledHeader';
import Switch from 'react-switch';
import { ContentHearderMain } from '../ContentHearderMain';
import { ContentHearderItens } from '../ContentHearderItens';
import { ContentHearderImgLogo } from '../ContentHearderImgLogo';
import { ContentHeaderTituloPg } from '../ContentHeaderTituloPg';
import { ContentHearderRight } from '../ContentHearderRight';
import { ContentHearderItensBar } from '../ContentHearderItensBar';
import { ContentHearderBtnImgHlpPg } from '../ContentHearderBtnImgHlpPg';
import { ContentHeaderBtnImgSair } from '../ContentHeaderBtnImgSair';

interface PropsHearderLogin {
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
  children?: React.ReactNode;
}
const HearderLogin = ({
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
}: PropsHearderLogin) => {
  return (
    <ContentHearderMain>
      {/** Panel da ESquerda com Imagem LOGO ->Emp/SYS da pagina */}
      <ContentHearderItens>
        <ContentHearderImgLogo
          $imgbtnlogo={imgsys}
          titbtnlogo={titbtnsys}
          onClickbtnlogo={onclicksys}
        />
      </ContentHearderItens>
      {/** Painel Central com o Titulo da pagina */}
      <ContentHearderItens>
        <ContentHeaderTituloPg titulo={titlepg} />
      </ContentHearderItens>
      {/** Panel da Direita com Botões de acesso e Switch da pagina */}
      <ContentHearderRight>
        <ContentHearderItensBar>
          <ContentHearderBtnImgHlpPg
            imgbtnhlppg={imgbtnhlppg}
            titbtnhlppg={titbtnhlppg}
            onClickbtnhlppg={onclickhlppg}
          />
          <ContentHeaderBtnImgSair
            imgbtnaborta={imgbtnaborta}
            titbtnaborta={titbtnaborta}
            onClickaborta={onclickaborta}
          />
          
          <H.ContainerHeaderImgSwitch>
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
          </H.ContainerHeaderImgSwitch>
        </ContentHearderItensBar>
      </ContentHearderRight>
    </ContentHearderMain>
  );
};

export default HearderLogin;