
import * as M from '../modal/stylesModal';

import { CardModalCenter } from '../modal/CardModalCenter';
import { CardModalAround } from '../modal/CardModalAround';
import { CardModalTextoColumn } from '../modal/CardModalTextoColumn';
import { CardHlpFooter } from "./CardHlpFooter";

import { useAcessoContext } from '../components/contexts/ContextAcesso';
import { FormHelpLogoHome } from './forms/FormHelpLogoHome';

interface PropsCardHlpHomePage {
  imgcardpage?: string;
  pminheight?: string;
  pwidth?: string;
  onclosesair?: () => void;
}

export const CardHlpHomePage = ({
  imgcardpage,
  pminheight = '110px',
  pwidth = '220px',
  onclosesair,
}: PropsCardHlpHomePage) => {
  const { state } = useAcessoContext();

  const possuiEmpresaSelecionada =
    state.id_logo_emp > 0 &&
    Boolean(state.logo_svg_emp?.trim());

  return (
    <CardModalCenter>
      <CardModalAround>
        <M.ContainerModalImg
          pminheight={pminheight}
          pwidth={pwidth}
          img={imgcardpage}
        />
      </CardModalAround>

      <CardModalTextoColumn>
        {possuiEmpresaSelecionada ? (
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
        ) : (
          <FormHelpLogoHome />
        )}

        <CardHlpFooter
          label="HELP PÁGINA -> HOME."
          texto="Assim que estiver logado, o sistema retornará à página HOME, onde poderá clicar na imagem de sua atividade e utilizar o sistema."
          onclosesair={onclosesair}
        />

        <br />
      </CardModalTextoColumn>
    </CardModalCenter>
  );
};


// import * as M from '../modal/stylesModal';
// import { CardModalCenter } from '../modal/CardModalCenter';
// import { CardModalAround } from '../modal/CardModalAround';
// import { CardModalTextoColumn } from '../modal/CardModalTextoColumn';
// import { CardHlpFooter } from './CardHlpFooter';

// interface PropsCardHlpVisitantePage {
//   imgcardpage?: string;
//   pminheight?: string;
//   pwidth?: string;
//   onclosesair?: () => void;
// }
// export const CardHlpVisitantePage = ({
//   imgcardpage,
//   onclosesair,
// }: PropsCardHlpVisitantePage) => {
//   return (
//     <CardModalCenter>
//       <CardModalAround>
//         <M.ContainerModalImg
//           pminheight={'110px'}
//           pwidth={'220px'}
//           img={imgcardpage}
//         />
//       </CardModalAround>
//       <CardModalTextoColumn>
//         <h2>Sintase do Visitante.</h2>
//         <p>
//           &emsp;&emsp;&emsp; Este acesso permiti aos visirantes conhecer o Setor e do Sistema e suas Rotinas de Trabalho.
//         </p>
//         <p>
//           &emsp;&emsp;&emsp; - Para que possa conhecer, deverá estar logado com a sua visita para obter acesso.
//         </p>
//         <p>
//           &emsp;&emsp;&emsp; - Ao lado deste botão que acabou de clicar, à direita, tem um um botão para logar.
//         </p>
//         <p>
//           &emsp;&emsp;&emsp; - Ao Clicar sobre ele , irá aparecer: local para colocar o seu nome e um local para ser colocado uma senha e um telefone.
//         </p>
//         <p>
//           &emsp;&emsp;&emsp; - Obs.: O Telefone, é para apenas ter a certeza de não haver duplicidade de acesso para com os demais
//           demais visitantes, não iremos usar-lo pelo princípio de isonomia da integridade individual de sua pessoa.
//         </p>
//         <p>
//           &emsp;&emsp;&emsp; - Caso queira receber nossas menssagens, basta dar um numero com Whatsapp, e clicar logo abaixo,
//           na caixinha onde voce autorizará. antes de enviar seus dados de acesso.
//         </p>
//         <p>
//           &emsp;&emsp;&emsp; - Voltando para a vista em nosso sistema.
//         </p>
//         <h3>Processo Login:</h3>
//         <p>&emsp; São os 3(treis) Passos para Logar no Sistema:</p>
//         <p>&emsp;&emsp; 1º Passo</p>
//         <p>&emsp;&emsp;&emsp; - Determinando: Uma Empresa para Trabalho.</p>
//         <p>&emsp;&emsp; 2º Passo</p>
//         <p>&emsp; - Poderá utilizar uma de 2(quatro) formas para o Acesso:</p>
//         <p>&emsp;&emsp; - ID(Nome), Senha(password) e (telefone).</p>
//         <p>&emsp;&emsp; - ID(Nome), PIN(password) e (telefone).</p>
//         <label>Atenção:</label>
//         <p>&emsp;&emsp; - Somente após isso feito poderá realizar o Login.</p>
//         <h4>Obs.:</h4>
//         <p>
//           &emsp; - Não esqueça de marcar se quer ou não receber nossas inovações e préstimos. 
//           &emsp; - Ao tentar acessar por mais de (3)treis vezes, o Sistema
//           hiberna (1)minuto para novas tentativas.
//         </p>
//         <p>
//           &emsp; - Caso tenha esquecido seu acesso, não obtem o acesso, se quiser resgatar, 
//           somente no caso de ao se cadastrar, com linha que tenha (Whatsapp) seria possível. 
//           O Resgate de seu acesso seria através do mesmo. 
//         </p>
//         <p>
//           &emsp;&emsp; - Será solicitado a forma para envio: ( SMS ) o
//           (Whatsapp).
//         </p>
//         <p>
//           O qual recebido, conterá as informações com as quais você poderá
//           Recuperar seu Acesso.
//         </p>
//         <br />
//         <p>
//           Assim que for Conferidas as Informações de seu Login ou Resgate, o
//           Sistema irá redirecionar você para Atividades do conhecer nossos Sesviços.
//         </p>

//         <CardHlpFooter
//           label=" HELP PÁGINA -> VISITANTE."
//           texto="Assim que Logado for, Sistema retorna a Pagina do seu acesso, onde poderá clicar
//           na imagem das atividade da empresa."
//           onclosesair={onclosesair}
//         />
//         <br />
//       </CardModalTextoColumn>
//     </CardModalCenter>
//   );
// };

