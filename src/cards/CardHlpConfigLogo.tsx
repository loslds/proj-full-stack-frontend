import * as M from '../modal/stylesModal';

import { CardModalCenter } from '../modal/CardModalCenter';
import { CardModalAround } from '../modal/CardModalAround';

import { CardModalTextoColumn } from '../modal/CardModalTextoColumn';
import { CardHlpFooter } from './CardHlpFooter';

interface PropsCardHlpConfigLogo {
  pminheight?: string;
  pwidth?: string;
  imghlplogo?: string;
  onclosesair?: () => void;
}

export const CardHlpConfigLogo = ({
  pminheight,
  pwidth,
  imghlplogo,
  onclosesair,
}: PropsCardHlpConfigLogo) => {

  return (
    <CardModalCenter>
      <CardModalAround>

        <M.ContainerModalImg
          $pminheight={pminheight}
          $pwidth={pwidth}
          $img={imghlplogo}
        />

        <CardModalTextoColumn>
          <>
            <h3>Modulo Config.</h3>
            <p>
              &emsp;&emsp; - Este Modulo foi elaborado para suprimir e
              automatizar todos os serviços que se prestam, usando todas as Informações guardadas
              nos Bancos de Dados do Sistema, com o objetivo de facilitar, o acesso as informações que estiverem 
              sido informadas durante a evolução do Acesso ao Sistema, facilitando o desenvolvimento do produto que foi elabodo.
            </p>
            <p>
              &emsp;&emsp; - Sua execução, tráz a eficiência para controlar a
              elaboração do Sistema, diante dos processos de execução.
            </p>
    
            <p>
              &emsp;&emsp; - O objetivo foi criado para ser correspondido de acôrdo com uma
              logistíca, a qual tem que ser alimentado pelas informações, durante
              o processo de sua execução.
            </p>
    
            <p>
              &emsp;&emsp; - A lógistica elaborada, necessita que as informações
              sejam determinadas durante o desenvolvimento e é apresentada pelo
              sistema on-line, trabalhando em Rede Intranet e podendo ser colocada
              tambem em Rede "Intranet", nestes modos, consulte o fabricante do
              Sistema para poder lhe ajudar, a saber o que é necessário para
              que isto ocorra.
            </p>
    
            <p>&emsp;&emsp; - Segue abaixo os conteúdos deste Modulo "CONFIG".</p>

            <h3>Conteúdo.</h3>

            <p>
              &emsp;&emsp; - Foi desenvolvido de maneira a mostrar o conteudo de cada 
              Tabela criada dentro do Database, com efeito em produzir sua visibilidade.
              Para conseguir ter um controle geral e com facilidade de acesso, foi criado 
              maneiras que deverão serem selecionada a Tabela em evidência dentro de um 
              dropdown.
            </p>
            
            <label> 1 - PASSO</label>

            <p>
              &emsp;&emsp;&emsp;Abaixo encontra-se um "Menu" que ao clicar sobre ele, logo abrirá 
              a sua direita um Dropdown com uma lista de Nomes de Tabelas que o Sistema 
              necessita para guardar as informações conforme sua finalidade.
            </p>

            <label> 2 - PASSO</label>

            <p>
              &emsp;&emsp;&emsp; - Após selecionado ao seu lado direito irá aparecer um Botão com 
              o nome da tabela selecionada, para que o Sistema evolua com sua seleção, você deverá 
              clicar sobre ele para aceitar que seja colocado em evidência seus dados para o serviço. 
            </p>

            <label> 3 - PASSO</label>

            <p>
              &emsp;&emsp;&emsp; - Assim que você aceitar a Tabela para ter o serviço do Sistema, 
              abrirá na sua direita os botões de Execução Operacional e de utilidades.
            </p>
           

            <h3>Qualificação de ADMINISTRADOR ou MASTER</h3>

            <p>
              &emsp;&emsp; - O ADMINISTRADOR ou aquele que tiver Acesso a Senha MASTER, 
              deverá ser um usuário que tenha conhecimento de todos os Setores, 
              e que tenha a confiança da Empresa, para poder ter acesso a todos os Modulos do Sistema.
            </p>

            <label>Observação:</label>

            <p>
              &emsp;&emsp;&emsp; - AQUELE QUE PODERÁ RECEBER O ACESSO A SENHA DE ACESSO MASTER.
              &emsp;&emsp;&emsp; - Terá acesso a todos os Módulos, todos procedimentos.
              &emsp;&emsp;&emsp; - Terá ACESSO GLOBAL no Sistema, o qual da o direito de 
              acessar todos os Setores.(ACESSO VIP). Mais será usado nos casos em que o Usuário 
              em processo tiver qualquer problema em não "TER AUTORIZAÇÃO" para prosseguir com o 
              processo do momento.
            </p>

            <br />
          </>
          <CardHlpFooter
            label={" HELP LOGO PÁGINA -> CONFIG."}
            texto={'Informações gerais sobre o sistema.'}
            onclosesair={onclosesair}
          />
          <br />
        </CardModalTextoColumn>
      </CardModalAround>
    </CardModalCenter>
  );
};