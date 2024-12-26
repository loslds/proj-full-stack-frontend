import * as M from '../modal/stylesModal';
import { CardModalCenter } from '../modal/CardModalCenter';
import { CardModalAround } from '../modal/CardModalAround';
import { CardModalTextoColumn } from '../modal/CardModalTextoColumn';
import { CardHlpFooter } from './CardHlpFooter';

interface PropsCardHlpResgateLogo {
  imgcardlogo?: string;
  pminheight?: string;
  pwidth?: string;
  onclosesair?: () => void;
}
export const CardHlpResgateLogo = ({
  imgcardlogo,
  onclosesair,
}: PropsCardHlpResgateLogo) => {
  return (
    <CardModalCenter>
      <CardModalAround>
        <M.ContainerModalImg
          pminheight={'80px'}
          pwidth={'220px'}
          img={imgcardlogo}
        />
      </CardModalAround>
      <CardModalTextoColumn>
        <h2>Sintase do Resgate.</h2>
        <p>
          &emsp;&emsp;&emsp; O Acesso Resgate permite para os cadastrados,
          conforme o Setor e a Herarquia de sua Área de Trabalho.
        </p>
        <br />
        <h4>Obs.:</h4>
        <p>
          &emsp; - Saiba que antes de Solicitar o Resgate, Poderá entrar no
          Sistema com as devidas formas:
        </p>
        <p>&emsp;&emsp; - E-Mail, e Password.</p>
        <p>&emsp;&emsp; - E-Mail, e PIN.</p>
        <p>&emsp;&emsp; - Pseudônimo e Password.</p>
        <p>&emsp;&emsp; - Pseudônimo e PIN.</p>
        <p>
          &emsp;&emsp;&emsp; Caso tenha esquecido ou determinado a atualizar ou
          substituir o seu acesso, então poderá solicitar o RESGATE.
        </p>
        <p>
          &emsp; - Para que obtenha sucesso, o usuário deverá conter no seu
          perfil as informações necessárias:
        </p>
        <ol>
          <li> Ter informado E-mail</li>
          <li> Ter informado Nº do Celular</li>
          <li> Ter informado Nº do C.P.F</li>
          <li> Ter informado as (3)Treis Respostas das perguntas exigidas.</li>
        </ol>
        <p>
          &emsp;&emsp;&emsp; - Caso não obtenha mais seu email titular, poderá
          utilisar do email resgate.
        </p>
        <br />
        <h3>Processos de RESGATE:</h3>
        <p>&emsp;Será Solicitado:</p>
        <ol>
          <li> A Empresa de seu uso no Sistema.</li>
        </ol>
        <p>&emsp;&emsp;Se Selecionar "EMAIL":</p>
        <ol>
          <li> O Email que receberá informações de Acesso.</li>
        </ol>

        <p>&emsp;&emsp;Se Selecionar "CELULAR":</p>
        <p>
          &emsp;&emsp;&emsp;Poderá Selecionar "SMS" ou "Whatsapp":
          <ol>
            <li> Estes receberá informações de Acesso.</li>
          </ol>
        </p>
        <p>&emsp;&emsp;Se Selecionar "C.P.F":</p>
        <p>
          &emsp;&emsp;&emsp;Deverá Responder as (3)Treis Perguntas com as
          respostas Corretas conforme cada "PERGUNTA".
        </p>
        <ol>
          <li>
            Estes enviará as informações de Acesso através do Objeto
            selecionado.
          </li>
        </ol>
        <h4>Obs.:</h4>
        <p>&emsp; - Por fim... irá solicitar a sua Informação recebida.</p>
        <p>&emsp; - O Sistema irá retornar para Página HOMERESGATE.</p>
        <p>&emsp; - Ao presentada a HOMERESGATE.</p>
        <p>&emsp; - Terá que informar a Empresa (solicitada).</p>
        <p>&emsp; - O Código Enviado pelo RESGATE.</p>
        <p>
          &emsp;Apartir deste irá mostrar os seus Dados, onde fará as mudanças
          necessárias para poder ter o "Novo Acesso".
        </p>
        <CardHlpFooter
          label="PÁGINA-> RESGATE."
          texto="Concluido o Acesso Resgate, será redirecionado para a Pagina
          Principal(HOME)."
          onclosesair={onclosesair}
        />
        <br />
      </CardModalTextoColumn>
    </CardModalCenter>
  );
};
