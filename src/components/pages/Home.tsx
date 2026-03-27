 
// C:\repository\proj-full-stack-frontend\src\components\pages\Home.tsx
import React from 'react';
import * as Pg from '../stylePages';
import { useNavigate } from 'react-router-dom';
// theme
import { ThemeProvider } from 'styled-components';
import light from '../../themes/light';
import dark from '../../themes/dark';
// layout page
import LayoutHome from '../layouts/LayoutHome';
// uso do context
import { useAcessoContext } from "../contexts/ContextAcesso";
// main page
import { ContentItensBody } from '../ContentItensBody';
import { ContentCustonImgPage } from '../ContentCustonImgPage';
// bottom page
import { PageModal } from './PageModal';
import { AutoCloseTimer } from '../AutoCloseTimer';
import { ContentSidePagePanelBotton } from '../sidebar/ContentSidePagePanelBotton';
import { ContentSidePageBottonLabel } from '../sidebar/ContentSidePageBottonLabel';
import { ContentSidePageBottonButton } from '../sidebar/ContentSidePageBottonButton';
import { ContentSideMsgPagePanelBotton } from '../sidebar/ContentSideMsgPagePanelBotton';
// component ação botão help 
import { CardHlpHomeLogo } from '../../cards/CardHlpHomeLogo';
import { CardHlpHomePage } from '../../cards/CardHlpHomePage';
import { CardCheckingSystema } from '../../cards/CardCheckingSystema';
import { CardImgNeg } from '../../cards/CardImgNeg';
import { CardLogoffMaster } from '../../cards/CardLogoffMaster';
// component ação botão Fechar Master 
import { logoutMaster } from '../contexts/helpers/logoutMaster';
// imgs do header
import lg_default from '../../assets/defaut/logo/lg_def_ope_default.svg';
import btn_chelp from '../../assets/defaut/botao/btn_def_c_help.svg';
import btn_avatar from '../../assets/defaut/avatar/avt_def_default.svg';
import btn_resgatar from '../../assets/defaut/botao/btn_def_c_resgatar.svg';
import btn_master from '../../assets/defaut/botao/bnt_def_q_master.svg';
import pnl_master from '../../assets/defaut/painel/pnl_def_ope_esclamacao.svg'
// img do main painel
import pnl_mvisitante from '../../assets/defaut/painel/pnl_def_mod_visitantes.svg';
import pnl_mrecepcao from '../../assets/defaut/painel/pnl_def_mod_recepcao.svg';
import pnl_mdesign from '../../assets/defaut/painel/pnl_def_mod_design.svg';
import pnl_mproducao from '../../assets/defaut/painel/pnl_def_mod_producao.svg';
import pnl_macabamento from '../../assets/defaut/painel/pnl_def_mod_acabamento.svg';
import pnl_mexpedicao from '../../assets/defaut/painel/pnl_def_mod_expedicao.svg';
import pnl_madministracao from '../../assets/defaut/painel/pnl_def_mod_administracao.svg';
import pnl_mconfig from '../../assets/defaut/painel/pnl_def_mod_config.svg';
// img do painel Bottom
import btn_qrefrescar from '../../assets/defaut/botao/btn_def_q_refrescar.svg';
// img do modal
import btn_qclose from '../../assets/defaut/botao/btn_def_q_close.svg';
import pnl_negado from '../../assets/defaut/painel/pnl_def_ope_negacao.svg';
////////////////////////////////////////////
import { SystemHealthResult } from '../../types/SystemHealth';


const Home: React.FC = () => {
  const { state, dispatch } = useAcessoContext();

  const [theme, setTheme] = React.useState(light);
  // mudança em THEME
  const [ischeck, setIscheck] = React.useState(false);
  // menssagem em heard do Panel Booton
  const [msgpanelbottom, setMsgPanelBottom] = React.useState('');
  // menssagem em Panel Booton
  const [messagebottom, setMessageBottom] = React.useState('');

  const [cardlogo, setCardLogo] = React.useState(false);
  const [cardhplpage, setCardHlpPage] = React.useState(false);
  const [cardnegadopage, setCardNegadoPage] = React.useState(false);
  
  
  
  const [ismsgchvkey, setIsMsgChvkey] = React.useState(false);
  
  const [chavemst, setChaveMst ] = React.useState(false);

  // Mantidos (você usa para sinalizar alguns fluxos), mas agora SEM travar Home
  const [showInitSystem, setInitShowSystem] = React.useState(false);

  // Modal de verificação do sistema (fechável)
  const [showsystemcheckmodal, setShowSystemCheckModal] = React.useState(false);

  const [systemMessages, setSystemMessages] = React.useState<string[]>(['Iniciando verificação do sistema...']);
  const [systemOk, setSystemOk] = React.useState<boolean | null>(null);

  const [notOperation, setNotOperation] = React.useState(false);
  
  // navegação
  const navigate = useNavigate();
  const goto = React.useCallback((path: string) => navigate(path), [navigate]);

  // tema
  const ToggleTheme = () => {
    setTheme(theme.name === 'dark' ? light : dark);
    setIscheck((prev) => !prev);
  };

  React.useEffect(() => {
    if (state.chvkey) {
      setMsgPanelBottom('Acesso "Master" ativo.');
      setMessageBottom("Aguardando Seleção...");
      return;
    }
    if (state.initsys) return;
    let cancelled = false;

    async function runSystemCheck() {
      try {
        // abre modal informativo de verificação (fechável)
        setShowSystemCheckModal(true);
        setSystemOk(null);
        setSystemMessages(['🔍 Iniciando verificação do sistema...', '🔌 Consultando estado do backend...']);
        const res = await fetch('http://localhost:3000/api/system/health');
        const data: SystemHealthResult = await res.json();
        if (cancelled) return;
        const ok = data.success && data.missingTables.length === 0;
        const chkdb = data.initialized;

        const messages: string[] = [
          `🧭 Modo do sistema: ${data.mode}`,
          `🗄️ Database: ${data.database}`,
          `📦 Tabelas encontradas: ${data.existingTables.length}`,
        ];

        // mantém o resumo de ausentes
        if (data.missingTables.length > 0) {
          messages.push(`⚠️ Tabelas ausentes: ${data.missingTables.join(', ')}`);
        } else {
          messages.push('✅ Todas as tabelas necessárias estão presentes.');
        }

        // adiciona o detalhamento tabela a tabela
        if (Array.isArray(data.steps)) {
          messages.push('— Detalhes das tabelas —');
          data.steps.forEach(step => {
          messages.push(step.message);
          });
        }

        setSystemMessages(messages);
        
        setSystemOk(ok);
        dispatch({ type: "initsys", payload: ok });
        dispatch({ type: "chkdb", payload: chkdb });
      } catch {
        setSystemMessages(['❌ Backend não respondeu.', '⛔ Não foi possível verificar o sistema.']);
        setSystemOk(false);
        dispatch({ type: "initsys", payload: false });
        dispatch({ type: "chkdb", payload: false });
      }
    }
    runSystemCheck();
    return () => {
      cancelled = true;
    };
  }, [state.initsys, state.chvkey,dispatch]);

  React.useEffect(() => {
  setMessageBottom("");
  dispatch({ type: "page", payload: "Home" });
  dispatch({ type: "aplicacao", payload: "OPÇÃO" });
  // ✅ 1) Se CHVKEY estiver ativo, NÃO pode zerar nem bloquear.
  if (state.chvkey) {
    setMsgPanelBottom('Acesso "Master" ativo.');
    setMessageBottom("Aguardando Seleção...");
    return;
  }
  // ✅ 2) Se sistema não iniciou, mostra status, mas sem travar Home
  if (!state.initsys) {
    dispatch({ type: "initsys", payload: false });
    dispatch({ type: "chkdb", payload: false });
    dispatch({ type: "modulo", payload: "Checagem Database" });
    dispatch({ type: "cor",payload: "" });
    dispatch({ type: "nivel", payload: 0 });
    dispatch({ type: "acao", payload: "" });
        
    setMsgPanelBottom("Check DataBase...");
    setMessageBottom("Sistema com DataBase Inconsistente...");
    setInitShowSystem(true);
    return;
  }
  // ✅ 3) Sistema iniciou, mas DB não pronto
  if (!state.chkdb) {
    setShowSystemCheckModal(true);
    setMsgPanelBottom("Sistema Inoperante. Conexão ou tabelas não estão prontas.");
    return;
  }
  // ✅ 4) Usuário logado (login normal)
  if (state.logado) {
    setMsgPanelBottom(`Acesso MODULO ["${state.modulo}"] ao Sistema...`);
    setMessageBottom("Aguardando Seleção...");
    return;
  }
  // ✅ 5) Sem login e sem master
  dispatch({ type: "chvkey", payload: false });
  dispatch({ type: "modulo", payload: "Inicial" });
  dispatch({ type: "cor",payload: "" });
  dispatch({ type: "nivel", payload: 0 });
  dispatch({ type: "acao", payload: "" });
  
  setMsgPanelBottom("Aguardando Login Sistema...");
  setMessageBottom('Acessos Modulos "NEGADOS", faça o Login...');
}, [state.initsys, state.chkdb, state.logado, state.chvkey, state.modulo, dispatch]);

React.useEffect(() => {
  setChaveMst(Boolean(state.chvkey));
}, [state.chvkey]);

  const handlerCardLogo = React.useCallback(() => setCardLogo((old) => !old), []);
  const handlerCardHlpPage = React.useCallback(() => setCardHlpPage((old) => !old), []);
  const handlerClicEventNegadoPage = React.useCallback(
    (num: number) => {
      if (num === undefined) return;
      const routes: Record<number, string> = {
        1: '/modulos/visitante',
        2: '/modulos/recepcao',
        3: '/modulos/design',
        4: '/modulos/producao',
        5: '/modulos/acabamento',
        6: '/modulos/expedicao',
        7: '/modulos/administracao',
        8: '/modulos/config',
      };
      const targetRoute = routes[num];
      if (!state.logado && !state.chvkey) {
        setCardNegadoPage(true);
      } else if (targetRoute) {
        goto(targetRoute);
      }
    },
    [goto, state.logado, state.chvkey]
  );
  
  return (
    <ThemeProvider theme={theme}>
      <LayoutHome
        imgsys={lg_default}
        titbtnsys="Quen Somos..."
        onclicksys={handlerCardLogo}

        titlepg="Home"

        imgbtnhlppg={btn_chelp}
        titbtnhlppg="Help Page..."
        onclickhlppg={handlerCardHlpPage}

        imgbtnlogin={btn_avatar}
        titbtnlogin="Login..."
        onclicklogin={() => {
          if (state.chkdb) {
            goto('/login');
          } else {
            setNotOperation(true);
            setMsgPanelBottom('Sistema Inoperante!');
          }
        }}
        
        imgbtnresg={btn_resgatar}
        titbtnresg="Resgatar Acesso..."
        onclickresg={() => {
          if (state.chkdb) {
            goto('/resgate');
          } else {
            setNotOperation(true);
            setMsgPanelBottom('Sistema Inoperante!');
          }
        }}

        mstonoff={chavemst}
        imgbtnmst={btn_master}
        titbtnmst="Segurança..."
        onclickmst={() => {
          if (state.chvkey) {
            setIsMsgChvkey(true);
          } else {
            setNotOperation(true);
            setMsgPanelBottom('Sistema Inoperante!');
          }
        }}
        
        onchange={ToggleTheme}
        ischeck={ischeck}
      >
        <ContentItensBody>
          <ContentCustonImgPage
            num={1}
            open={true}
            pxheight={'100px'}
            pheight={'100px'}
            pwidth={'100px'}
            imgbtn={pnl_mvisitante}
            titlebtn={'Modulo Visitantes..'}
            onclick={() => {
              if ( (state.chvkey && state.auth_admin !== '') || 
                (state.modulo === 'Visitante' && state.logado && state.auth !== '') ) {
                goto('/modulos/visitante');
              } else {
                handlerClicEventNegadoPage(1);
              }
            }}
            onMouseEnter={() => setMsgPanelBottom('Abre Modulo Visitante.')}
            onMouseLeave={() => {
              if (!state.logado && !state.chvkey) setMsgPanelBottom('❌ Aguardando Login Sistema...');
            }}
          />

          <ContentCustonImgPage
            num={2}
            open={true}
            pxheight={'100px'}
            pheight={'100px'}
            pwidth={'100px'}
            imgbtn={pnl_mrecepcao}
            titlebtn={'Modulo Recepção...'}
            onclick={() => {
              if ( (state.chvkey && state.auth_admin !== '') || 
                (state.modulo === 'Recepção' && state.logado && state.auth !== '') ) {
                goto('/modulos/recepcao');
              } else {
                handlerClicEventNegadoPage(2);
              }
            }}
            onMouseEnter={() => setMsgPanelBottom('Abre Modulo Recepção.')}
            onMouseLeave={() => {
              if (!state.logado && !state.chvkey) setMsgPanelBottom('❌ Aguardando Acesso ao Sistema...');
            }}
          />

          <ContentCustonImgPage
            num={3}
            open={true}
            pxheight={'100px'}
            pheight={'100px'}
            pwidth={'100px'}
            imgbtn={pnl_mdesign}
            titlebtn={'Modulo Design...'}
            onclick={() => {
              if ( (state.chvkey && state.auth_admin !== '') || 
                (state.modulo === 'Design' && state.logado && state.auth !== '') ) {
                goto('/modulos/design');
              } else {
                handlerClicEventNegadoPage(3);
              }
            }}
            onMouseEnter={() => setMsgPanelBottom('Abre Modulo Design.')}
            onMouseLeave={() => {
              if (!state.logado && !state.chvkey) setMsgPanelBottom('Aguardando Acesso ao Sistema...');
            }}
          />

          <ContentCustonImgPage
            num={4}
            open={true}
            pxheight={'100px'}
            pheight={'100px'}
            pwidth={'100px'}
            imgbtn={pnl_mproducao}
            titlebtn={'Modulo Produção...'}
            onclick={() => {
              if ( (state.chvkey && state.auth_admin !== '') || 
                (state.modulo === 'Produção' && state.logado && state.auth !== '') ) {
                goto('/modulos/producao');
              } else {
                handlerClicEventNegadoPage(4);
              }
            }}
            onMouseLeave={() => {
              if (!state.logado && !state.chvkey) setMsgPanelBottom('❌ Aguardando Acesso ao Sistema...');
            }}
          />

          <ContentCustonImgPage
            num={5}
            open={true}
            pxheight={'100px'}
            pheight={'100px'}
            pwidth={'100px'}
            imgbtn={pnl_macabamento}
            titlebtn={'Modulo Acabamento...'}
            onclick={() => {
              if ( (state.chvkey && state.auth_admin !== '') || 
                (state.modulo === 'Acabamento' && state.logado && state.auth !== '') ) {
                goto('/modulos/acabamento');
              } else {
                handlerClicEventNegadoPage(5);
              }
            }}
            onMouseEnter={() => setMsgPanelBottom('Abre Modulo Acabamento.')}
            onMouseLeave={() => {
              if (!state.logado && !state.chvkey) setMsgPanelBottom('Aguardando Acesso ao Sistema...');
            }}
          />

          <ContentCustonImgPage
            num={6}
            open={true}
            pxheight={'100px'}
            pheight={'100px'}
            pwidth={'100px'}
            imgbtn={pnl_mexpedicao}
            titlebtn={'Modulo Expedição...'}
            onclick={() => {
              if ( (state.chvkey && state.auth_admin !== '') || 
                (state.modulo === 'Expedição' && state.logado && state.auth !== '') ) {
                goto('/modulos/expedicao');
              } else {
                handlerClicEventNegadoPage(6);
              }
            }}
            onMouseLeave={() => {
              if (!state.logado && !state.chvkey) setMsgPanelBottom('❌ Aguardando Acesso ao Sistema...');
            }}
          />

          <ContentCustonImgPage
            num={7}
            open={true}
            pxheight={'100px'}
            pheight={'100px'}
            pwidth={'100px'}
            imgbtn={pnl_madministracao}
            titlebtn={'Modulo Administração...'}
            onclick={() => {
              if ( (state.chvkey && state.auth_admin !== '') || 
                (state.modulo === 'Administração' && state.logado && state.auth !== '') ) {
                goto('/modulos/administracao');
              } else {
                handlerClicEventNegadoPage(7);
              }
            }}
            onMouseEnter={() => setMsgPanelBottom('Abre Modulo Administração.')}
            onMouseLeave={() => {
              if (!state.logado && !state.chvkey) setMsgPanelBottom('❌ Aguardando Acesso ao Sistema...');
            }}
          />

          <ContentCustonImgPage
            num={8}
            open={true}
            pxheight={'100px'}
            pheight={'100px'}
            pwidth={'100px'}
            imgbtn={pnl_mconfig}
            titlebtn={'Cadastros Config...'}
            onclick={() => {
              if ( (state.chvkey && state.auth_admin !== '') || 
                (state.modulo === 'Config' && state.logado && state.auth !== '') ) {
                goto('/modulos/config');
              } else {
                handlerClicEventNegadoPage(8);
              }
            }}
            onMouseEnter={ () => {
                if ( (!state.logado && !state.chvkey && state.modulo !== 'Config' && state.modulo !== 'Master' ) )
                setMsgPanelBottom('❌ Aguardando Acesso ao Sistema...');
                else setMsgPanelBottom('✅ Abre Modulo Config.');  
                }
              }
            onMouseLeave={ () => {
                if (!state.logado && !state.chvkey ) setMsgPanelBottom('❌ Aguardando Acesso ao Sistema...');
                else setMsgPanelBottom('✅ Acesso Permitido...');  
                }
              }
          />
        </ContentItensBody>

        <Pg.DivisionPgHztal />
        {/* Monta o painel bootom */}
        <ContentSidePagePanelBotton 
          bordas="3px" 
          open={true} 
          pwidth="100%"
        >
          {/* Mostra mensagem painel bootom */}
          <ContentSideMsgPagePanelBotton 
            bordas="3px"
            label={'Menssagens : '} 
            msg={msgpanelbottom} 
          />
          {/* Refaz a pagina atual */}
          <ContentSidePageBottonLabel 
            open={true} 
            istitl={true} 
            title={'Refrescar.: '}
          >
            {/* Mostra, ação botão a esquerda do Panel */}
            <ContentSidePageBottonButton
              pxheight={'40px'}
              img={btn_qrefrescar}
              titbtn={'Refrescar...'}
              // onClick={() => window.location.reload()}
              onClick={() => goto('/')}
              onMouseEnter={() => setMsgPanelBottom('Refrescar a Page...') }
              onMouseLeave={() => setMsgPanelBottom('Restaurar Page...') }
            />
          </ContentSidePageBottonLabel>
          <div><label>ATENÇÃO...{messagebottom}</label></div>
        </ContentSidePagePanelBotton>
        {/** Abre Modal para Acesso Negado na pagina atual */ }
        {cardnegadopage ? (
          <PageModal
            ptop={'1%'}
            pwidth={'30%'}
            pheight={'35%'}
            imgbm={btn_qclose}
            titbm={"Fechar..."}
            titulo={'Acesso Negado.'}
            onclose={() => setCardNegadoPage(false)}
          >
            <CardImgNeg
              imgcard={pnl_negado}
              pminheight={'100px'}
              pwidth={'100px'}
              onclickimg={() => setCardNegadoPage(false)}
            />
          </PageModal>
        ) : null}
        {/** Abre Modal help ao clicar na imagem LOGO da Pagina */ }
        {cardlogo ? (
          <PageModal
            ptop={'1%'}
            pwidth={'80%'}
            pheight={'95%'}
            imgbm={btn_qclose}
            titbm="Fechar..."
            titulo={'Home Sistema.'}
            onclose={() => setCardLogo(false)}
          >
            <CardHlpHomeLogo imghlplogo={lg_default} onclosesair={() => setCardLogo(false)} /> 
          </PageModal>
        ) : null}
        {/* Abre Modal help ao clicar no Botão Help da Pagina */ }
        {cardhplpage ? (
          <PageModal
            ptop={'1%'}
            pwidth={'80%'}
            pheight={'95%'}
            imgbm={btn_qclose}
            titbm="Fechar..."
            titulo={'Help Conteúdo Home.'}
            onclose={() => setCardHlpPage(false)}
          >
            <CardHlpHomePage 
              imgcardpage={lg_default} 
              onclosesair={() => setCardHlpPage(false)} 
            />
          </PageModal>
        ) : null}
        {/* Abre Modal da Verificação do Sistema (fechável) */ }
        {showsystemcheckmodal ? (
          <PageModal
            ptop={'45%'}
            pwidth={'70%'}
            pheight={'50%'}
            imgbm={btn_qclose}
            titbm="Fechar..."
            titulo={'Verificação do Sistema'}
            onclose={() => setShowSystemCheckModal(false)}
          >
            <CardCheckingSystema
              messages={systemMessages}
              systemOk={systemOk}
              onClose={() => setShowSystemCheckModal(false)}
              onAutoCloseCountdown={(secondsLeft: number) => {
                if (secondsLeft <= 0) setShowSystemCheckModal(false);
              }}
            />
          </PageModal>
        ) : null}
        {/* Abre Modal da anunciando a Verificação "negado / não pode iniciar" do Sistema (fechável) */ }
        {!showsystemcheckmodal && showInitSystem ? (
          <PageModal
            ptop={'10%'}
            pwidth={'70%'}
            pheight={'50%'}
            imgbm={btn_qclose}
            titbm="Fechar..."
            titulo={'Verificação do Sistema'}
            onclose={() => setInitShowSystem(false)}
          >
            <CardImgNeg
              imgcard={pnl_negado}
              pminheight={'120px'}
              pwidth={'120px'}
              onclickimg={() => setInitShowSystem(false)}
            />
            <form>
              <p>O sistema não pode ser iniciado.</p>
              <br />
              <p>Entre em contato com suporte.</p>
            </form>
            <AutoCloseTimer onClose={() => setInitShowSystem(false)} seconds={10} />
          </PageModal>
        ) : null}
        {/* Abre Modal da anunciando "negado / não pode operar" o Sistema (fechável) */ }
        {notOperation ? (
          <PageModal
            ptop={'10%'}
            pwidth={'70%'}
            pheight={'50%'}
            imgbm={btn_qclose}
            titbm="Fechar..."
            titulo={'Acesso Negado'}
            onclose={() => setNotOperation(false)}
          >
            <CardImgNeg
              imgcard={pnl_negado}
              pminheight={'120px'}
              pwidth={'120px'}
              onclickimg={() => setNotOperation(false)}
            />
            <form>
              <p> '⛔ ACESSO SISTEMA INOPERANTE.'</p>
              <br />
              <p> Entre em contato com suporte. </p>
            </form>
            <AutoCloseTimer onClose={() => setNotOperation(false)} seconds={5} />
          </PageModal>
        ) : null}
        {/* Abre Modal da fazer o logo-off do anunciando "negado / não pode operar" o Sistema (fechável) */ }
        { ismsgchvkey ? (
          <PageModal
            ptop='330px'
            pwidth={'400px'}
            pheight={'40%'}
            imgbm={btn_qclose}
            titbm="Fechar..."
            titulo={'Abortar Master.'}
            onclose={() => setIsMsgChvkey(false)}
          >
            <CardLogoffMaster
              pptop="300px"
              bordas="4px"
              pxheight="57px"
              pxwidth="65px"
              imgpnl={pnl_master}
              onclickpnl={() => {}}
              open={true}
              titulo={"Acesso Logo-off."}
              msg={"Confirme opção de Logoff."}
              labelConfirm={"SIM para Logoff."}
              labelCancel={"NÃO para Abortar."}
              seconds={30}
              resetKey={cardlogo ? 1 : 0} // reinicia ao abrir/fechar
              onConfirm={() => {
                logoutMaster(dispatch);
                setIsMsgChvkey(false);
              }}
              onCancel={() => setIsMsgChvkey(false)}
              onClose={() => setIsMsgChvkey(false)}
            />
          </PageModal>
        ) : null}
      {/* <div>{ state.chvkey ? (<p>ChvKey : true </p>) : (<p>ChvKey : false </p>)}</div> */}
      </LayoutHome>
    </ThemeProvider>
  );
};

export default Home;
