import * as M from '../modal/stylesModal';
import { CardModalCenter } from '../modal/CardModalCenter';
import { CardModalAround } from '../modal/CardModalAround';
import { CardModalTextoColumn } from '../modal/CardModalTextoColumn';
import { CardHlpFooter } from './CardHlpFooter';

interface PropsCardHlpHomePage {
  imgcardpage?: string;
  pminheight?: string;
  pwidth?: string;
  onclosesair?: () => void;
}
export const CardHlpHomePage = ({
  imgcardpage,
  onclosesair,
}: PropsCardHlpHomePage) => {
  return (
    <CardModalCenter>
      <CardModalAround>
        <M.ContainerModalImg
          pminheight={'80px'}
          pwidth={'220px'}
          img={imgcardpage}
        />
      </CardModalAround>
      <CardModalTextoColumn>
        <h2>Sintase do Sistema.</h2>
        <p>
          &emsp;&emsp;&emsp; O Acesso somente permitira aos cadastrados conforme
          o Setor e a Herarquia de sua Área de Trabalho.
        </p>
        <p>
          &emsp;&emsp;&emsp; - Para que possa logar e obter acesso, entre em
          contato com a Administração.
        </p>
        <p>
          &emsp;&emsp;&emsp; - Receberá uma senha de acesso conforme sua
          Identidade, e o seu trabalho.
        </p>
        <h3>Processo Login:</h3>
        <p>&emsp; São os 3(treis) Passos para Logar no Sistema:</p>
        <p>&emsp;&emsp; 1º Passo</p>
        <p>&emsp;&emsp;&emsp; - Determinando: Uma Empresa para Trabalho.</p>
        <p>&emsp;&emsp; 2º Passo</p>
        <p>&emsp; - Poderá utilizar uma de 2(duas) formas para o Acesso:</p>
        <p>&emsp;&emsp; - ID(E-Mail), e Senha(password).</p>
        <p>&emsp;&emsp; - ID(E-Mail), e PIN.</p>
        <p>&emsp;&emsp; - ID(pseudônimo) e Senha(password).</p>
        <p>&emsp;&emsp; - ID(pseudônimo) e PIN.</p>
        <label>Atenção:</label>
        <p>&emsp;&emsp;Somente após isso feito poderá realizar o Login.</p>
        <h4>Obs.:</h4>
        <p>
          &emsp; - Ao tentar acessar por mais de (3)treis vezes, o Sistema
          hiberna (1)minuto para novas tentativas.
        </p>
        <p>
          &emsp; - Caso tenha esquecido seu acesso, não obtem o acesso, poderá
          solicitar o Resgate de seu acesso.
        </p>
        <p>
          &emsp; - O RESGATE só será obtido nas seguintes condições de cadastro
          do seu "ACESSO":
        </p>
        <p>
          &emsp; Em seu Cadastramento, foi solicitado que vc disponibilizasse as
          seguintes informações:
        </p>
        <h4>Informações para Cadastro.:</h4>
        <p>&emsp;&emsp; 1º - Empresa.</p>
        <p>&emsp;&emsp; 2º - Email.</p>
        <p>&emsp;&emsp; 3º - Email (diferente) para Resgate.</p>
        <p>&emsp;&emsp; 4º - Nº do seu C.P.F.</p>
        <p>&emsp;&emsp; 5º - Nº Telefone celular. (para SMS) </p>
        <p>&emsp;&emsp; 6º - Nº Telefone celular. (para Chat Whatsapp) </p>
        <p>
          &emsp;&emsp; - Respostas as (3)treis Respostas das (3)treis Peguntas
          Solicitadas.
        </p>
        <p>&emsp;</p>
        <label>Do processo ao ser requerido o Resgate.</label>
        <p>&emsp;</p>
        <br />
        <h4>1º Termo: Recuperação através do EMAIL.</h4>
        <p>&emsp;&emsp; - Será solicitado E-Mail. (cadastrado anteriormente)</p>
        <p>&emsp;&emsp; - Será enviado informações:</p>
        <p>
          O qual recebido, conterá as informações com as quais você poderá
          Recuperar seu Acesso.
        </p>
        <p>
          &emsp;&emsp; - Caso não consiga mais acesso ao seu E-Mail. (cadastrado
          anteriormente) principal, poderá utilizar o E-Mail. (cadastrado
          anteriormente) para resgate.
        </p>
        <br />
        <h4>2º Termo: Recuperar através do Cellular.</h4>
        <p>
          &emsp;&emsp; - Será solicitado o Nº do Celular. (cadastrado
          anteriormente)
        </p>
        <p>
          &emsp;&emsp; - Será solicitado a forma para envio: ( SMS ) o
          (Whatsapp).
        </p>
        <p>
          O qual recebido, conterá as informações com as quais você poderá
          Recuperar seu Acesso.
        </p>
        <br />
        <h4>3º Termo: Recuperação através de Perguntas.</h4>
        <p>
          &emsp;;&emsp;- Será solicitado o seu C.P.F. (cadastrado anteriormente)
        </p>
        <p>
          &emsp;&emsp; - Será apresentada as perguntas (cadastrado
          anteriormente)
        </p>
        <p>&emsp;&emsp; - Será solicitada as respostas para para as mesmas.</p>
        <br />
        <p>
          Assim que for Conferidas as Informações de seu Login ou Resgate, o
          Sistema irá redirecionar você para Atividades do Sistema.
        </p>
        <CardHlpFooter
          label="PÁGINA-> HOME."
          texto="Assim que Logado for, Sistema retorna a Pagina HOME onde poderá clicar
          na imagem de sua atividade e usufluir do Sistema."
          onclosesair={onclosesair}
        />
        <br />
      </CardModalTextoColumn>
    </CardModalCenter>
  );
};
