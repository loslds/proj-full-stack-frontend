import * as M from '../modal/stylesModal';
import { CardModalCenter } from '../modal/CardModalCenter';
import { CardModalAround } from '../modal/CardModalAround';
import { CardModalTextoColumn } from '../modal/CardModalTextoColumn';
import { CardHlpFooter } from './CardHlpFooter';

interface PropsCardHlpHomePage {
  imghlplogo?: string;
  onclosesair?: () => void;
}
export const CardHlpHomeLogo = ({
  imghlplogo,
  onclosesair,
}: PropsCardHlpHomePage) => {
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
          <br />
          <h3>Systema de Gerenciamento .</h3>
          <p>
            &emsp;&emsp; - Este Sistema foi elaborado para suprimir e
            automatizar todos os serviços que se prestam dentro de uma empresa
            que tem como objetivo, facilitar, o acesso as informações que são de
            interesse crucial ao desenvolvimento do produto que ela elabora.
          </p>
          <p>
            &emsp;&emsp; - O Sistema tráz a eficiência para controlar a
            elaboração dos produtos, diante dos processos de execução.
          </p>
          <p>
            &emsp;&emsp; - O objetivo é ser correspondido de acôrdo com uma
            logistíca, a qual tem que ser alimentado pelas informações, durante
            o processo do fabrico.
          </p>
          <p>
            &emsp;&emsp; - A lógistica elaborada, necessita que as informações
            sejam determinadas durante o desenvolvimento e é apresentada pelo
            sistema on-line, trabalhando em Rede Intranet e podendo ser colocada
            tambem em Rede Internet, nestes modos, consulte o fabricante do
            Sistema para poder lhe ajudar, a saber o que será necessário para
            que isto ocorra.
          </p>
          <p>&emsp;&emsp; - Segue abaixo os conteúdos deste sistema.</p>
          <br />
          <label>Conteúdo.</label>
          <br />
          <p>
            &emsp;&emsp; - Foi dividido em setores a Execução para produzir.
            Para conseguir ter um controle geral, foi criado os seguintes
            "SETORES".
          </p>
          <br />
          <h3>RECEPÇÃO</h3>
          <p>
            &emsp;Ao receber o material, o atendente devera dar entrada na Ordem
            de Serviço, e informar com detalhes:
          </p>
          <p>
            &emsp;&emsp;&emsp; - Dados do Cliênte, no mínimo: Nome, Telefone
            e/ou WatsZap, mesmo que o Cliênte envie por: MOTOBOY OU UBER(s) o
            material a ser processado. Após o recebimento, deverá o mesmo ser
            identificado e conferido, e somente depois será encaminhado conforme
            a necessidade, se já tiver o Design e for aprovado pelo Cliênte, irá
            para Produção automaticamente, senão será enviado para o setor de
            Design.
          </p>
          <br />
          <h3>DESIGN</h3>
          <p>
            &emsp;&emsp; - O Sistema mostrará que a Ordem de Serviço para
            execução do mesmo, aparecerá em uma lista de Serviços a Executar, e
            só será enviado para Produção se for aprovado pelo Cliênte.Nesse
            caso o Desenvolvedor do Design remete para a Produção ou retorna
            para a Recepção devidos algo mais a satisfazer a conclusão do
            esperado Produto.
          </p>
          <br />
          <h3>PRODUÇÃO</h3>
          <p>
            &emsp;&emsp; - Na Produção, deverá ser informado ao Sistema o
            momento de Inicio do trabalho e no seu termino do mesmo.
            <label>OBS.Importante.</label>
            &emsp;&emsp;&emsp; Deverá ser informado ao Sistema, se durante a
            produção, sempre que o material produzido tenha sido retirado para o
            Setor de Acabamento, informar a quantidade enviada, ou o Total
            enviado.
          </p>
          <p>
            &emsp;&emsp; - No momento que o Sistema receber essas informações,
            automaticamente aparecera no Setor de Acabamento.
          </p>
          <br />
          <h3>ACABAMENTO</h3>
          &emsp;&emsp; - No Acabamento, deverá ser informado ao Sistema o
          momento de Inicio do trabalho e no seu termino comumente.
          <label>OBS.Importante.</label>
          &emsp;&emsp;&emsp; Deverá ser informado ao Sistema, se durante o
          processo de Acabamento, sempre que o material processado tenha sido
          retirado para o Setor de Expedição, informar a quantidade enviada, ou
          o Total enviado.
          <p>
            &emsp;&emsp; - No momento que o Sistema receber essas informações,
            automaticamente aparecera no Setor de Expedição.
          </p>
          <br />
          <h3>EXPEDIÇÃO</h3>
          <p>
            &emsp;&emsp; - Ao receber o Material, deverá tomar as devidas
            providências:
          </p>
          <p>
            &emsp;&emsp;&emsp; » Consultar a ordem de Serviço examinar: dados do
            Cliênte. Se o material se encontram no devido estado de entrega,
            quantidade, valor. Se possivel, entrar em contato com o cliente.
          </p>
          <label>OBS.Importante.</label>
          <p>
            &emsp; » Nos casos de recebimento do pagamento, informar no Sistema
            o valor idêntico ao valor da Ordem de Serviço, e a forma de
            pagamento para poder ser entregue ao Cliente o seu material.
          </p>
          <p>
            &emsp; » Para casos de entrega de material sem o recebimento do
            pagamento, verificar antes se o Cliente tem o Cadastro completo,
            caso não esteja completo, deverá entrar em contato com a direção da
            Empresa e solicitar autorização. Colocar na Obs:. da O.Serviço: quem
            recebeu o MAterial, data, e se possivel um nº de quem o recebeu.
          </p>
          <p>
            &emsp; » Nos casos de entrega de material com valores diferente da
            Ordem de Serviço, deverá entrar em contato com a direção da Empresa
            e solicitar autorização.
          </p>
          <h3>Obs.:</h3>
          <p>
            &emsp;» Pode o Cliente retirar o material sem pagar, desde que o seu
            cadastro esteja completo, para que futuramente a Administração possa
            cobrar, sendo assim deverá comunicar com o Proprietario do Material,
            e deixar ele ciênte da entrega, e anotar na Ordem de serviço o nome
            e documento do agente que veio buscar.
          </p>
          <p>
            &emsp;&emsp; - No momento que o Sistema receber essas informações,
            automaticamente aparecera no Setor de Administração.
          </p>
          <br />
          <h3>ADIMINISTRAÇÃO</h3>
          <p>
            &emsp;&emsp; - Setor responsável pelas faturas da Empresa. Acesso
            este que terá devido as informações coletadas pelo Sistema.
          </p>
          <br />
          <h3>CONFIGURAÇÃO</h3>
          <p>
            &emsp;&emsp; - Setor que tem acesso a todos os Bancos de Dados do
            Sistema. ESte tem a Finalidade do usuário que poderá: Criar e gerar
            novos processos no BAnco de Dados do Sistema.
          </p>
          <br />
          <h3>MASTER</h3>
          <p>
            &emsp;&emsp; - Setor que tem ACESSO GLOBAL no Sistema, da o direito
            a acessar todos os Setores.(ACESSO VIP). Mais será usado nos casos
            do Usuário em processo tiver qualquer problema em não "TER
            AUTORIZAÇÃO" para prosseguir com o processo do momento.
          </p>
          <CardHlpFooter
            label="ENCONTRARÁ UM HELP EM TODAS AS PAGINAS DESTE SISTEMA."
            texto="Cada Pagina o Help lhe dará explicação adequada de como                 utilisar o Sistema."
            onclosesair={onclosesair}
          />
        </CardModalTextoColumn>
      </CardModalAround>
    </CardModalCenter>
  );
};
