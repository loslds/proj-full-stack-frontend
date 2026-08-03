import * as M from '../modal/stylesModal';

import { CardModalCenter } from '../modal/CardModalCenter';
import { CardModalAround } from '../modal/CardModalAround';
import { CardModalTextoColumn } from '../modal/CardModalTextoColumn';

import { useAcessoContext } from '../components/contexts/ContextAcesso';

import { CardHlpFooter } from './CardHlpFooter';
import { FormHelpLogoHome } from './forms/FormHelpLogoHome';
import { FormHlpDefautText } from './forms/FormHelpDefautText';
import { formHlpEmpDefault } from './forms/FormHelpDefText';

interface PropsCardHlpHomeLogo {
  imghlplogo?: string;
  onclosesair?: () => void;
}

export const CardHlpHomeLogo = ({
  imghlplogo,
  onclosesair,
}: PropsCardHlpHomeLogo) => {
  const { state } = useAcessoContext();

  const possuiEmpresaSelecionada = state.id_logo_emp > 0;

  const possuiFormularioEmpresa =
    possuiEmpresaSelecionada &&
    Boolean(state.formhlpemp?.trim());

  return (
    <CardModalCenter>
      <CardModalAround>
        <M.ContainerModalImg
          pminheight="80px"
          pwidth="220px"
          img={imghlplogo}
        />

        <CardModalTextoColumn>
          {!possuiEmpresaSelecionada ? (
            <FormHelpLogoHome />
          ) : possuiFormularioEmpresa ? (
            // criado pelo usuário, então apresenta o formulário da empresa
            <FormHlpDefautText titulo="Sobre a Empresa">
              <p style={{ whiteSpace: 'pre-line' }}>
                {state.formhlpemp}
              </p>
            </FormHlpDefautText>
          ) : (
            <FormHlpDefautText titulo="Sobre a Empresa">
              {formHlpEmpDefault.map((texto, index) => (
                <p key={`${index}-${texto}`}>
                  &emsp;&emsp;{texto}
                </p>
              ))}
            </FormHlpDefautText>
          )}

          <CardHlpFooter
            label={
              possuiEmpresaSelecionada
                ? 'HELP PÁGINA -> EMPRESA.'
                : 'HELP PÁGINA -> HOME.'
            }
            texto={
              possuiEmpresaSelecionada
                ? 'Apresentação e informações da empresa selecionada.'
                : 'Informações gerais sobre o sistema.'
            }
            onclosesair={onclosesair}
          />

          <br />
        </CardModalTextoColumn>
      </CardModalAround>
    </CardModalCenter>
  );
};