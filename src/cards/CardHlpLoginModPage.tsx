

import * as M from '../modal/stylesModal';

import { CardModalCenter } from '../modal/CardModalCenter';
import { CardModalAround } from '../modal/CardModalAround';
import { CardModalTextoColumn } from '../modal/CardModalTextoColumn';

import { useAcessoContext } from '../components/contexts/ContextAcesso';

import { CardHlpFooter1 } from './CardHlpFooter1';

interface PropsCardHlpLoginModPage {
  imgcardpage?: string;
  pminheight?: string;
  pwidth?: string;
  // imghlplogo?: string;
  onclosesair?: () => void;
}

type StatusModulo = 'Permitido' | 'Negado';

interface ModuloUsuario {
  nome: string;
  status: StatusModulo;
}

/*
 * Acrescenta ao tipo do state os dados utilizados somente neste componente.
 *
 * Quando esses campos já estiverem declarados no ContextAcesso,
 * esta tipagem auxiliar poderá ser removida.
 */
interface DadosComplementaresUsuario {
  identificador?: string;
  qdd_acesso?: number;
  ult_acesso?: string;

  mod_vis?: boolean | number | string;
  mod_rec?: boolean | number | string;
  mod_des?: boolean | number | string;
  mod_pro?: boolean | number | string;
  mod_exp?: boolean | number | string;
  mod_adm?: boolean | number | string;
  mod_con?: boolean | number | string;
}

const obterStatusModulo = (
  valor: boolean | number | string | undefined,
): StatusModulo => {
  if (valor === true || valor === 1) {
    return 'Permitido';
  }

  if (typeof valor === 'string') {
    const valorNormalizado = valor.trim().toLowerCase();

    const valoresPermitidos = [
      'true',
      '1',
      'sim',
      'permitido',
      'liberado',
      'ativo',
    ];

    if (valoresPermitidos.includes(valorNormalizado)) {
      return 'Permitido';
    }
  }

  return 'Negado';
};

const formatarQuantidadeAcessos = (
  quantidade: number | undefined,
): string => {
  if (!quantidade || quantidade <= 0) {
    return 'Este é o seu primeiro acesso.';
  }

  if (quantidade === 1) {
    return 'Você já acessou o sistema 1 vez.';
  }

  return `Você já acessou o sistema ${quantidade} vezes.`;
};

const formatarUltimoAcesso = (
  ultimoAcesso: string | undefined,
): string => {
  if (!ultimoAcesso) {
    return 'Último acesso ainda não registrado.';
  }

  return `Seu último acesso foi em ${ultimoAcesso}.`;
};

export const CardHlpLoginModPage = ({
  imgcardpage,
  pminheight,
  pwidth,
  onclosesair,
}: PropsCardHlpLoginModPage) => {
  const { state } = useAcessoContext();

  const nomeModuloAtual =  String(state.modulo ?? '').trim() || 'Visitantes';

  const dadosUsuario = state as typeof state & DadosComplementaresUsuario;

  const possuiIdUser = Number(state.id_user) > 0;

  const nomeUsuario =
    dadosUsuario.identificador?.trim() || 'Usuário';

  
  const modulosUsuario: ModuloUsuario[] = [
    {
      nome: 'Visitantes',
      status: obterStatusModulo(dadosUsuario.mod_vis),
      
    },
    {
      nome: 'Recepção',
      status: obterStatusModulo(dadosUsuario.mod_rec),
    },
    {
      nome: 'Desenvolvimento',
      status: obterStatusModulo(dadosUsuario.mod_des),
    },
    {
      nome: 'Produção',
      status: obterStatusModulo(dadosUsuario.mod_pro),
    },
    {
      nome: 'Expedição',
      status: obterStatusModulo(dadosUsuario.mod_exp),
    },
    {
      nome: 'Administração',
      status: obterStatusModulo(dadosUsuario.mod_adm),
    },
    {
      nome: 'Configuração',
      status: obterStatusModulo(dadosUsuario.mod_con),
    },
  ];

  const modulosPermitidos = modulosUsuario.filter(
    modulo => modulo.status === 'Permitido',
  );

  return (
    <CardModalCenter>
      <CardModalAround>
        <M.ContainerModalImg
          $img={imgcardpage}
          pminheight={pminheight}
          pwidth={pwidth}
        />

        <CardModalTextoColumn>
          <h2>Síntese da Página Visitantes</h2>

          {!possuiIdUser ? (
            <>
              <label>Informações para Usuários "NÂO" cadastrados</label>

              <p>
                &emsp;&emsp;Identificamos que você ainda não está conectado
                como usuário do sistema. Mesmo sem realizar o login, você
                poderá utilizar esta página para conhecer os recursos,
                serviços e possibilidades oferecidos pelo sistema.
              </p>

              <p>
                &emsp;&emsp;Caso você se cadastre, seu acesso poderá ser
                configurado conforme o relacionamento que possuir com a
                empresa, como cliente, fornecedor, funcionário ou outro tipo
                de usuário autorizado.
              </p>

              <h3>Cabeçalho da página</h3>

              <p>
                &emsp;&emsp;No cabeçalho de todas as páginas você encontrará
                o botão de ajuda que acabou de selecionar. Esse botão abre as
                informações específicas da página atual e explica suas
                principais funções.
              </p>

              <h3>Menu de opções de navegação</h3>

              <p>
                &emsp;&emsp;O menu de navegação apresenta os módulos
                disponíveis no sistema. Sem login, somente os recursos
                públicos poderão ser visualizados.
              </p>

              <p>
                &emsp;&emsp;Depois da identificação do usuário, o sistema
                verificará seu cadastro, nível de acesso e permissões para
                determinar quais módulos poderão ser utilizados.
              </p>

              <h3>Painel de acesso</h3>

              <p>
                &emsp;&emsp;No painel de acesso, usuários cadastrados poderão
                informar seus dados de identificação e senha. Após a
                autenticação, o sistema mostrará somente as informações e
                operações autorizadas para aquele usuário.
              </p>

              <h3>Possibilidades de cadastro</h3>

              <p>
                &emsp;&emsp;Ao se tornar um usuário cadastrado, você poderá
                receber um acesso específico de acordo com seu perfil.
              </p>

              <p>
                <strong>Cliente:</strong> poderá consultar informações,
                solicitações, atendimentos e serviços disponibilizados pela
                empresa.
              </p>

              <p>
                <strong>Fornecedor:</strong> poderá acessar informações
                relacionadas aos produtos, serviços, solicitações e processos
                autorizados pela empresa.
              </p>

              <p>
                <strong>Funcionário:</strong> poderá utilizar os módulos,
                páginas e operações correspondentes ao seu cargo, função e
                nível de acesso.
              </p>

              <p>
                &emsp;&emsp;Todo usuário cadastrado possuirá uma identificação
                própria, representada pelo seu código de usuário, além de uma
                senha e das permissões definidas para seu acesso.
              </p>
            </>
          ) : (
            <>
              <label>Informações do usuário identificado</label>

              <p>
                &emsp;&emsp;Olá, <strong>{nomeUsuario}</strong>. Identificamos
                que você já possui um cadastro de usuário em nosso sistema.
              </p>

              <p>
                &emsp;&emsp;Seu código de usuário é{' '}
                <strong>{state.id_user}</strong>. A partir desta página você
                poderá consultar as informações do módulo Visitantes e acessar
                as opções disponibilizadas no menu de navegação.
              </p>

              <h3>Histórico de acesso</h3>

              <p>
                &emsp;&emsp;
                {formatarQuantidadeAcessos(dadosUsuario.qdd_acesso)}
              </p>

              <p>
                &emsp;&emsp;
                {formatarUltimoAcesso(dadosUsuario.ult_acesso)}
              </p>

              <h3>Módulos do usuário</h3>

              {modulosPermitidos.length > 0 ? (
                <>
                  <p>
                    &emsp;&emsp;De acordo com seu cadastro, você possui acesso
                    aos seguintes módulos:
                  </p>

                  {modulosUsuario.map(modulo => (
                    <p key={modulo.nome}>
                      <strong>{modulo.nome}:</strong> {modulo.status}
                    </p>
                  ))}
                </>
              ) : (
                <p>
                  &emsp;&emsp;Nenhum módulo adicional foi liberado para este
                  usuário. Caso considere que deveria possuir acesso, procure
                  o responsável pela administração do sistema.
                </p>
              )}

              <h3>Permissões de acesso</h3>

              <p>
                &emsp;&emsp;Dentro de cada módulo, suas permissões poderão
                incluir visualização, listagem, inclusão, alteração ou
                exclusão de registros.
              </p>

              <p>
                &emsp;&emsp;As opções apresentadas pelo sistema serão
                controladas conforme seu nível de acesso e as autorizações
                registradas para seu usuário.
              </p>

              <p>
                &emsp;&emsp;Informações como senha, chaves de autenticação e
                outros dados de segurança nunca serão apresentadas nesta
                página.
              </p>
            </>
          )}

          <CardHlpFooter1
            label={
              possuiIdUser
                ? `HELP PÁGINA → ${nomeModuloAtual.toUpperCase()}`
                : 'HELP PÁGINA → VISITANTES'
            }
            texto={
              possuiIdUser
                ? 'Apresentação das informações e permissões do usuário identificado.'
                : 'Informações gerais sobre a página Visitantes e os serviços do sistema.'
            }
            onclosesair={onclosesair}
          />

          <br />
        </CardModalTextoColumn>
      </CardModalAround>
    </CardModalCenter>
  );
};

