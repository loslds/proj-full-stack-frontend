import * as M from '../modal/stylesModal';
import { CardModalCenter } from '../modal/CardModalCenter';
import { CardModalAround } from '../modal/CardModalAround';
import { CardModalTextoColumn } from '../modal/CardModalTextoColumn';

import { useAcessoContext } from '../components/contexts/ContextAcesso';

import { CardHlpFooter } from './CardHlpFooter';
import { FormHelpLogoHome } from './forms/FormHelpLogoHome';


interface PropsCardHlpHomeLogo {
  imghlplogo?: string;
  onclosesair?: () => void;
}
export const CardHlpHomeLogo = ({
  imghlplogo,
  onclosesair,
}: PropsCardHlpHomeLogo) => {

  const { state } = useAcessoContext();

  const possuiFormLogoEmpresa =
    state.id_logo_emp > 0 &&
    Boolean(state.formhlpemp?.trim());  

  
  return (
    <CardModalCenter>
      <CardModalAround>
        <CardModalAround>
          <M.ContainerModalImg
            pminheight={'80px'}
            pwidth={'220px'}
            img={imghlplogo}
          />
        </CardModalAround>
        <CardModalTextoColumn>
          { possuiFormLogoEmpresa ? (
            <>
              <h2>Informações da Empresa</h2>

              <p>
              &emsp;&emsp;O formulário de apresentação desta empresa ainda está
              aguardando o procedimento de inclusão.
              </p>

              <p>
                &emsp;&emsp;Assim que o cadastro do formulário for disponibilizado,
                as informações da empresa serão apresentadas neste espaço.
              </p>
            </>
            ):(
              <FormHelpLogoHome />
            )
          }
          <CardHlpFooter
            label="HELP PÁGINA -> VISITANTE."
            texto="Assim que estiver logado, o sistema retornará à página de acesso do visitante, onde poderá clicar nas imagens das atividades da empresa."
            onclosesair={onclosesair}
          />
          <br />
        </CardModalTextoColumn>
      </CardModalAround>
    </CardModalCenter>
  );
};

