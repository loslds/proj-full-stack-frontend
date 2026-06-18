

// src/components/heardes/headers/HeaderVisitante.tsx
import * as H from '../styledHeader';

import Switch from 'react-switch';
import { ContentHearderMain } from '../ContentHearderMain';
import { ContentHearderItens } from '../ContentHearderItens';
import { ContentHeaderButtonSys } from '../ContentHeaderButtonSys';
import { ContentHeaderTitle } from '../ContentHeaderTitle';
import { ContentHearderRight } from '../ContentHearderRight';
import { ContentHearderItensBar } from '../ContentHearderItensBar';
import { ContentPagesButtonHelp } from '../../ContentPagesButtonHelp';
import { ContentPagesButton } from '../../ContentPagesButton';
import { ContentHeaderButtonLgOnOff } from '../ContentHeaderButtonLgOnOff';

interface PropsHearderVisitante {
  imgsys?: string;
  titbtnsys?: string;
  onclicksys?: () => void;
  titlepg?: string;
  imgbtnhlppg?: string;
  titbtnhlppg?: string;
  onclickhlppg?: () => void;

  $imglgoff?: string;
  $imglgon?: string;
  $logonoff?: boolean;
  titbtnlgonoff?: string;
  onclicklgooff?: () => void;

  imgbtnaborta?: string;
  titbtnaborta?: string;
  onclickaborta?: () => void;

  onchange: () => void;
  ischeck?: boolean;
  children?: React.ReactNode ;
}
const HearderVisitante = ({
  //IMAGEM lOGO DA PAGINA
  imgsys,
  titbtnsys,
  onclicksys,
  // TITULO DA PAGINA
  titlepg,
  // BOTÃO DE HELP
  imgbtnhlppg,
  titbtnhlppg,
  onclickhlppg,
  // BOTÃO DE LOGAR
  $imglgoff,
  $imglgon,
  $logonoff,
  titbtnlgonoff,
  onclicklgooff,
  // BOTÃO DE SAIR
  imgbtnaborta,
  titbtnaborta,
  onclickaborta,
  onchange,
  ischeck,
}: PropsHearderVisitante) => {
  return (
    <ContentHearderMain>
      {/** imagem botão lado esquerdo : logo da pagina */}
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
      {/** imagem botão lado direito*/}
      <ContentHearderRight>
        <ContentHearderItensBar>
          {/** imagem botão do help da pagina */}
          <ContentPagesButtonHelp
            imgbtnhlp={imgbtnhlppg}
            titbtnhlp={titbtnhlppg}
            onClickhlp={onclickhlppg}
          />
          {/** imagem botão do Login da pagina */}
          <ContentHeaderButtonLgOnOff
            $imglgon={$imglgon}
            $imglgoff={$imglgoff}
            $logonoff={$logonoff}
            titbtnlgonoff={titbtnlgonoff}
            onClicklgooff={onclicklgooff}            
          />
          
          {/** imagem botão do Acão Abortar da pagina */}
          <ContentPagesButton
            imgbtn={imgbtnaborta}
            titbtn={titbtnaborta}
            onClick={onclickaborta}
          />
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

export default HearderVisitante;

