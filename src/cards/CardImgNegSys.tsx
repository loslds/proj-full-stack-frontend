import * as MD from '../modal/stylesModal';

import { ContentModaErroSys } from '../modal/ContentModaErroSys';
import { ContentModalBetween } from '@/modal/ContentModalbetween';
//import negado from '../../assets/svgs/negado.svg';

interface PropsCardImgNegSys {
  ppwidth?: string;
  bordas?: string;
  pminheight?: string;
  pwidth?: string;
  imgcard?: string;
  onclick?: () => void;
  txtH1?: string;
  txtlabel?: string;
  txtp?: string;
};
export const CardImgNegSys = ({
  ppwidth,
  bordas, 
  imgcard, 
  pminheight,
  pwidth,
  onclick,
  txtH1,
  txtlabel,
  txtp
}: PropsCardImgNegSys) => {
  return (
    <ContentModaErroSys ppwidth={ppwidth} bordas={bordas}>
      <ContentModalBetween>
        <MD.ContainerModalImg
          pminheight={pminheight}
          pwidth={pwidth}
          img={imgcard}
          onClick={onclick}
        />
        <br />

        <h1>{txtH1}</h1>
        <label>{txtlabel}</label>
        <p>{txtp}</p>  
        
        <br />
      </ContentModalBetween>
    </ContentModaErroSys>
  );
};
