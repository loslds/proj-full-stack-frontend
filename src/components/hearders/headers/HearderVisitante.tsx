

// src/components/heardes/headers/HeaderVisitante.tsx
import * as S from '../styledHeader';
import Switch from 'react-switch';
import { ContentHearderMain } from '../ContentHearderMain';
import { ContentHearderItens } from '../ContentHearderItens';
import { ContentHearderImgLogo } from '../ContentHearderImgLogo';
import { ContentHearderRight } from '../ContentHearderRight';
import { ContentHeaderTituloPg } from '../ContentHeaderTituloPg';
import { ContentHearderItensBar } from '../ContentHearderItensBar';
import { ContentHearderBtnImgHlpPg } from '../ContentHearderBtnImgHlpPg';
import { ContentHeaderBtnImgLoginOn } from '../ContentHeaderBtnImgLoginOn';
import { ContentHeaderBtnImgLoginOff } from '../ContentHeaderBtnImgLoginOff';
import { ContentHeaderBtnImgMasterOff } from '../ContentHeaderBtnImgMasterOff';
import { ContentHeaderBtnImgResgate } from '../ContentHeaderBtnImgResgate';
import { ContentHearderBtnImgHome } from '../ContentHearderBtnImgHome';

interface PropsHearderVisitante {
  //IMAGEM lOGO DA PAGINA
  imgbtnlogo?: string;
  titbtnlogo?: string;
  onClickbtnlogo?: () => void;
  // TITULO DA PAGINA
  titulopg?: string;
  // BOTÃO DE HELP PAGINA
  imgbtnhlppg?: string;
  titbtnhlppg?: string;
  onClickbtnhlppg?: () => void;
  // BOTÂO para mostrar LOGIN LOGADO ou NÂO
  imgbtnloginon?: string;
  titbtnloginon?: string;
  disabledloginon?: boolean;
  onClickbtnloginon?: () => void;
  // BOTÃO para SAIR LOGOFF LOGIN
  loginoff?: boolean;
  imgbtnloginoff?: string;
  titbtnloginoff?: string;
  onClickbtnloginoff?: () => void;
  // BOTÃO para SAIR LOGOFF MASTER
  masteroff?: boolean;
  imgbtnmasteroff?: string;
  titbtnmasteroff?: string;
  onClickbtnmasteroff?: () => void;
  // BOTÃO para RESGATAR ACESSO SITEMA
  imgbtnresgate?: string;
  titbtnresgate?: string;
  onClickbtnresgate?: () => void;
  // BOTÂO para SAIR para HOME
  imgbtnhome?: string;
  titbtnhome?: string;
  onClickbtnhome?: () => void;
  // BOTÂO SWUIT 
  onchange: () => void;
  ischeck?: boolean;
  children?: React.ReactNode;

}
const HearderVisitante = ({
  
  imgbtnlogo,
  titbtnlogo,
  onClickbtnlogo,

  titulopg,

  imgbtnhlppg,
  titbtnhlppg,
  onClickbtnhlppg,

  imgbtnloginon,
  titbtnloginon,
  disabledloginon,
  onClickbtnloginon,

  loginoff,
  imgbtnloginoff,
  titbtnloginoff,
  onClickbtnloginoff,

  masteroff,
  imgbtnmasteroff,
  titbtnmasteroff,
  onClickbtnmasteroff,

  imgbtnresgate,
  titbtnresgate,
  onClickbtnresgate,

  imgbtnhome,
  titbtnhome,
  onClickbtnhome,

  onchange,
  ischeck,

  // BOTÃO DE SAIR, HOME

}: PropsHearderVisitante) => {
  return (
    <ContentHearderMain>
      {/** imagem botão lado esquerdo : logo da pagina */}
      <ContentHearderItens>
          <ContentHearderImgLogo 
            imgbtnlogo={imgbtnlogo}
            titbtnlogo={titbtnlogo}
            onClickbtnlogo={onClickbtnlogo}
          />
        </ContentHearderItens>
        
        <ContentHearderItens>
          <ContentHeaderTituloPg titulo={titulopg} />
        </ContentHearderItens>
        
        <ContentHearderRight>
          <ContentHearderItensBar>

            <ContentHearderBtnImgHlpPg
              imgbtnhlppg={imgbtnhlppg}
              titbtnhlppg={titbtnhlppg}
              onClickbtnhlppg={onClickbtnhlppg}
            />

            <ContentHeaderBtnImgLoginOn
              imgbtnloginon={imgbtnloginon}
              titbtnloginon={titbtnloginon}
              disabledloginon={disabledloginon}
              onClickbtnloginon={onClickbtnloginon}
            />

            <ContentHeaderBtnImgLoginOff
              loginoff={loginoff}
              imgbtnloginoff={imgbtnloginoff}
              titbtnloginoff={titbtnloginoff}
              onClickbtnloginoff={onClickbtnloginoff}
            />

            <ContentHeaderBtnImgMasterOff 
              masteroff={masteroff}
              imgbtnmasteroff={imgbtnmasteroff}
              titbtnmasteroff={titbtnmasteroff}
              onClickbtnmasteroff={onClickbtnmasteroff}
            />

            <ContentHeaderBtnImgResgate
              imgbtnresgate={imgbtnresgate}
              titbtnresgate={titbtnresgate}
              onClickbtnresgate={onClickbtnresgate}
            />

            <ContentHearderBtnImgHome
              imgbtnhome={imgbtnhome}
              titbtnhome={titbtnhome}
              onClickbtnhome={onClickbtnhome}
            />
              
            <S.ContainerHeaderImgSwitch>
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
            </S.ContainerHeaderImgSwitch>

        </ContentHearderItensBar>
      </ContentHearderRight>
    </ContentHearderMain>
  );
};

export default HearderVisitante;

