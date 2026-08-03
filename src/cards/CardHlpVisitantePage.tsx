
import * as M from '../modal/stylesModal';

import { CardModalCenter } from '../modal/CardModalCenter';
import { CardModalAround } from '../modal/CardModalAround';
import { CardModalTextoColumn } from '../modal/CardModalTextoColumn';

import { useAcessoContext } from '../components/contexts/ContextAcesso';

import { CardHlpFooterCall } from './CardHlpFooterCall';
import { FormHelpLogoHome } from './forms/FormHelpLogoHome';
import { FormHlpDefautText } from './forms/FormHelpDefautText';
import { formHlpEmpDefault } from './forms/FormHelpDefText';

interface PropsCardHlpVisitanteLogo {
  imghlplogo?: string;
  onclosesair?: () => void;
}

export const CardHlpVisitanteLogo = ({
  imghlplogo,
  onclosesair,
}: PropsCardHlpVisitanteLogo) => {
  const { state } = useAcessoContext();

  const possuiIdUserSelecionada = state.id_user > 0;

  const possuiIdUser =
    possuiIdUserSelecionada &&
    Boolean(state.id_user);

  return (
    <CardModalCenter>
      <CardModalAround>
        <M.ContainerModalImg
          pminheight="80px"
          pwidth="220px"
          img={imghlplogo}
        />

        <CardModalTextoColumn>
          
          <h2>Sintese Visitantes</h2>
          <form>
            {!possuiIdUser ? (
              <p>
                &emsp;&emsp;&emsp; - Vejo que você, não é um usuário de nosso Sistema, Gostaria de conhecer?
                &emsp;&emsp; Basta acessar abaixo o botão "Visitar", e poderá conhecer as rotinas de Acesso para Visitantes.
                &emsp;&emsp;&emsp; - Como Visitante você poderá à partir desta página, obter informações sobre o sistema neste Setor, em conhecer as rotinas de Acesso.
              </p> 
            ) : (
              <p>
                &emsp;&emsp;&emsp; - Vejo que você, já é um usuário de nosso Sistema.
                &emsp;&emsp;&emsp; - Se deseja continuar... Basta acessar abaixo o botão "Continuar". logo estará ao seu dispor tudo que o sistema pode te fornecer sobre seus pedidos.
              </p>
            )}
          </form>          

          <CardHlpFooterCall
            label={
              !possuiIdUser
                ? 'HELP PÁGINA -> VISITANTE.'
                : 'HELP PÁGINA -> HOME.'
            }
            texto={
              possuiIdUser
                ? 'Apresentação e informações visitante.'
                : 'Informações gerais sobre o visitante em sistema.'
            }
            onclosesair={onclosesair}
          />

          <br />
        </CardModalTextoColumn>
      </CardModalAround>
    </CardModalCenter>
  );
};









// ///////////////////////////////////////////////////////////////////
// import * as M from '../modal/stylesModal';

// import { CardModalCenter } from '../modal/CardModalCenter';
// import { CardModalAround } from '../modal/CardModalAround';
// import { CardModalTextoColumn } from '../modal/CardModalTextoColumn';
// import { CardHlpFooter } from "./CardHlpFooter";

// interface PropsCardHlpVisitantePage {
//   imgcardpage?: string;
//   pminheight?: string;
//   pwidth?: string;
//   onclosesair?: () => void;
// }

// export const CardHlpVisitantePage = ({
//   imgcardpage,
//   pminheight = '110px',
//   pwidth = '220px',
//   onclosesair,
// }: PropsCardHlpVisitantePage) => {
  
//   return (
//     <CardModalCenter>
//       <CardModalAround>
//         <M.ContainerModalImg
//           pminheight={pminheight}
//           pwidth={pwidth}
//           img={imgcardpage}
//         />
//       </CardModalAround>

//       <CardModalTextoColumn>
//         <h2>Sintese Visitantes</h2>
        
//         <p>
//           &emsp;&emsp; - Você, como visitante poderá à partir destesta página, obter informações sobre o 
//           sistema neste Setor, em conhecer as rotinas de Acesso.
//           &emsp;&emsp;&emsp; Basta seleiconar abaixo o botão "Visitar".Para que possa logar e obter acesso.
//         </p>

//         <p>  
//           &emsp;&emsp;&emsp; Você, como visitante, e Cliente de nossos serviços, se for a primeira vez, 
//           e deseja saber sobre seus pedidos e serviços, entre na Pagina HOME, encontrará um botão para logar, 
//           e abaixo do mesmo solicite a Criação de Novo Acesso, e crie a sua Conta.
//           &emsp;&emsp; - Caso já seja cadastrado, basta fazer o Login na pagina "HOME", e logo após, 
//           direcionaremos você, para tudo sobre as suas atividades diante dos nossos préstimos em servi-lo. 
//         </p>

//         <p>  
//           &emsp;&emsp; - Caso tenha DIFICULDADE, entre em contato com a Administração. 
//           Iremos ter o Prazer de poder te ajudar.
//         </p>
//         <br />
//         <CardHlpFooter
//           label=" HELP PÁGINA -> HOME."
//           texto="Assim que Logado for, Sistema retorna a Pagina HOME onde poderá clicar
//           na imagem de sua atividade e usufluir do Sistema."
//           onclosesair={onclosesair}
//         />
//         <br />
//       </CardModalTextoColumn>
//     </CardModalCenter>
//   );
// };
