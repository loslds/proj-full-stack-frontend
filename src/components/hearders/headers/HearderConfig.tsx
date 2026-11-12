import * as S from '../styledHeader';
import Switch from 'react-switch';
import { ContentHearderMain } from '../ContentHearderMain';
import { ContentHearderItens } from '../ContentHearderItens';
import { ContentHearderImgLogo } from '../ContentHearderImgLogo';
import { ContentHearderBtnImgHlpPg } from '../ContentHearderBtnImgHlpPg';
 
import { ContentHeaderTituloPg } from '../ContentHeaderTituloPg';

import { ContentHearderRight } from '../ContentHearderRight';
import { ContentHearderItensBar } from '../ContentHearderItensBar';

import { ContentHeaderBtnImgLoginOn } from '../ContentHeaderBtnImgLoginOn'
import { ContentHeaderBtnImgLoginOff } from '../ContentHeaderBtnImgLoginOff';
import { ContentHeaderBtnImgMasterOff } from '../ContentHeaderBtnImgMasterOff';
import { ContentHeaderButtonChk } from '../ContentHeaderButtonChk';

import { ContentHearderBtnImgHome } from '../ContentHearderBtnImgHome';


interface PropsHearderConfig {
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

  // botão para checar SSISTEMA
  imgbtnchk?: string;
  titbtnchk?: string;
  onClickbtnchk?: () => void;

  // BOTÂO para SAIR para HOME
  imgbtnhome?: string;
  titbtnhome?: string;
  onClickbtnhome?: () => void;

  // BOTÂO SWUIT 
  onchange: () => void;
  ischeck?: boolean;
  children?: React.ReactNode;

}
const HearderConfig = ({
  
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

  imgbtnchk,
  titbtnchk,
  onClickbtnchk,

  imgbtnhome,
  titbtnhome,
  onClickbtnhome,

  onchange,
  ischeck,


}: PropsHearderConfig) => {
  return (
    <ContentHearderMain>
      {/** Panel da ESquerda com Imagem LOGO ->Emp/SYS da pagina */}
      <ContentHearderItens>
        <ContentHearderImgLogo
          $imgbtnlogo={imgbtnlogo}
          titbtnlogo={titbtnlogo}
          onClickbtnlogo={onClickbtnlogo}
        />
      </ContentHearderItens>
      
      {/** Painel Central com o Titulo da pagina */}
      <ContentHearderItens>
        <ContentHeaderTituloPg titulo={titulopg} />
      </ContentHearderItens>


      {/** Panel da Direita com Botões de acesso e Switch da pagina */}
      <ContentHearderRight>
        <ContentHearderItensBar>
          
          {/* <ContentHeaderCardIsmaster mston= {mston} pxheigth={pxheigth} strcor= {strcor}  /> */}

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
  
          <ContentHeaderButtonChk
            imgbtnchk={imgbtnchk}
            titbtnchk={titbtnchk}
            onClickchk={onClickbtnchk}
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

export default HearderConfig;