import * as MD from '../modal/stylesModal';

import { CardModalTexto } from '../modal/CardModalTexto';
//import negado from '../../assets/svgs/negado.svg';

interface PropsCardImgNeg {
  pminheight?: string;
  pwidth?: string;
  imgcard?: string;
  onclickimg?: () => void;
};
export const CardImgNeg = ({ 
  imgcard, 
  pminheight,
  pwidth,
  onclickimg

}: PropsCardImgNeg) => {
  return (
    <CardModalTexto>
      <MD.ContainerHeardModalMain>
        <MD.ContainerModalImg
          pminheight={pminheight}
          pwidth={pwidth}
          img={imgcard}
          onClick={onclickimg}
        />
      </MD.ContainerHeardModalMain>
      <label>Acesso NEGADO.</label>
      <p>No momento seus requisitos não estão habilitados.</p>
      <br />
    </CardModalTexto>
  );
};
