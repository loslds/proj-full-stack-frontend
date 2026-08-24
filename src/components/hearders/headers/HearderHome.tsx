
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
import { ContentHeaderBtnImgResgate } from '../ContentHeaderBtnImgResgate';
import { ContentHeaderBtnImgMasterOff } from '../ContentHeaderBtnImgMasterOff';
import { ContentHeaderBtnImgLoginOff } from '../ContentHeaderBtnImgLoginOff';

interface PropsHearderHome {
  imgbtnlogo?: string;
  titbtnlogo?: string;
  onClickbtnlogo?: () => void;
  
  titulopg?: string;

  imgbtnhlppg?: string;
  titbtnhlppg?: string;
  onClickbtnhlppg?: () => void;
  
  imgbtnloginon?: string;
  titbtnloginon?: string;
  disabledloginon?: boolean;
  onClickbtnloginon?: () => void;
  
  loginoff?: boolean;
  imgbtnloginoff?: string;
  titbtnloginoff?: string;
  onClickbtnloginoff?: () => void;

  masteroff?: boolean;
  imgbtnmasteroff?: string;
  titbtnmasteroff?: string;
  onClickbtnmasteroff?: () => void;

  imgbtnresgate?: string;
  titbtnresgate?: string;
  onClickbtnresgate?: () => void;

  onchange: () => void;
  ischeck?: boolean;
  
  children?: React.ReactNode;
}
const HearderHome = ({
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

  onchange,
  ischeck,

  }: PropsHearderHome) => {

    return (
     <ContentHearderMain>
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
    )
};

export default HearderHome;
 