
//C:\repository\proj-full-stack-frontend\src\cards\CardImgNeg.tsx
import * as MD from '../modal/stylesModal';
import { CardModalTexto } from '../modal/CardModalTexto';
import { ContentSysMainItens } from './ContentSysMainItens';

//import negado from '../../assets/svgs/negado.svg';

interface PropsCardImgNeg {
  pminheight?: string;
  pwidth?: string;
  imgcard?: string;
  texto?: string;
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
      <ContentSysMainItens>
        <form>
          <p> ⛔ ACESSO NEGADO..</p>
          <p>'No momento seus requisitos não estão habilitados.'</p>
        </form>
      </ContentSysMainItens>
    </CardModalTexto>
  );
};

