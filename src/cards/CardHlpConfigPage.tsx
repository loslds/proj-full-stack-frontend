import * as M from '../modal/stylesModal';
import { CardModalCenter } from '../modal/CardModalCenter';
import { CardModalAround } from '../modal/CardModalAround';
import { CardModalTextoColumn } from '../modal/CardModalTextoColumn';
import { CardHlpFooter } from './CardHlpFooter';

interface PropsCardHlpConfigPage {
  imgcardpage?: string;
  pminheight?: string;
  pwidth?: string;
  onclosesair?: () => void;
}
export const CardHlpConfigPage = ({
  imgcardpage,
  onclosesair,
}: PropsCardHlpConfigPage) => {
  return (
    <CardModalCenter>
      <CardModalAround>
        <M.ContainerModalImg
          pminheight={'110px'}
          pwidth={'220px'}
          img={imgcardpage}
        />
      </CardModalAround>
      <CardModalTextoColumn>
        <h2>Sintase do Sistema.</h2>
        <p>
          &emsp;&emsp;&emsp; Estamos dentro do Acesso aos Cadastros das Tabela do BAnco 
          de Dados que servem o Sistema.
        </p>
        <p>
          &emsp;&emsp;&emsp; - Aqui poderemos usufluir do acesso em todas as tabelas que 
          o sistema tem a sua disposição.
        </p>
        <p>
          &emsp;&emsp;&emsp; - Somente os Usuários com atribuições validas poderão 
          acessar os Tabelas e seus registroa, como também poderão visualizar, Imprimir, 
          incluir, alterar, escluir Registros com sua Identidade válida para o trabalho.
        </p>
        <label>Obs.: Temos 3(treis) tipos de Tabelas:</label>
        
        <h3>Tabela Directiva </h3>
        <p>
          &emsp; São aquelas que serve para Direcionar apenas um Registro para cada 
          Tabela Receptiva.
        </p>
        <p>
          &emsp; Sendo assim um outro registro identico não podera utilizar uma mesma   
          Direção.
        </p>

        <h3>Tabela Receptiva </h3>
        <p>
          &emsp; São aquelas que utilizam um identificador Diretivo para poder se 
          associar seus dados direcionados da Tabela Directiva.</p>
        <p>
          &emsp; Exemplo: Ao Cadastrar uma Empresa em Tabela Empresa, precisará   
          selecionar um directivo da Tabela Pessoa, (Pessoa Juridica ou Física), e assim 
          se associa ao registro determinado com o registro Directivo selecionado.
        </p>
        <p>
          &emsp; ATENÇÃO: Não poderá cadastrar a mesma empresa com outro directivo.
        </p>

        <h3>Tabela Transceptiva </h3>
        <p>
          &emsp; São aquelas que utilizam um identificades Tabelas Diretivos, Tabelas 
          Receptivos para poder Transcepter, associando seus dados, direcionados das 
          Tabela Directiva, Tabelas Receptivos para si ou outra Tabela Transceptiva. 
        </p>
        <p>
          &emsp; Exemplo de Tabela Transceptiva: para concluir o cadastro da Empresa,    
          deverá cadastrar seu dados na Tabela Cadastro, esta Transceptiva, irá coletar 
          os dados da empresa, como: Enderêço,... documento... telefones... emails... 
          (etc.).
        </p>
        <p>
          Porem nesse caso ela cadastrará os dados de: documento... telefones...  
          emails... nas Tabelas Receptivas, sendo: Tabela Doc (informações de 
          Documentos), Tabela Emails (informações de Emails), Tabela Fones (informações 
          de Telefones). Essas tabelas são Receptivas. 
        </p>
        <p>
          &emsp; Isso significa que terão um registro unico de cada registro da Tabela 
          Transceptiva, não haverá outro para que possa ter informações em conflito.
        </p>
        <CardHlpFooter
          label="PÁGINA-> CONFIG."
          texto="Para entrar no Cadastro da Tabela desejada, ao sair poderá clicar na imagem de referida a Tabela para sua atividade e usufluir do Sistema."
          onclosesair={onclosesair}
        />
        <br />
      </CardModalTextoColumn>
    </CardModalCenter>
  );
};
