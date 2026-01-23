 
// C:\repository\proj-full-stack-frontend\src\components\pages\Home.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import light from '../../themes/light';
import dark from '../../themes/dark';

import LayoutHome from '../layouts/LayoutHome';
import { useAcessoContext, UseAcessoActions } from '../contexts/ContextAcesso';
import * as Pg from '../stylePages';

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
// component para help butom 
import { CardHlpHomeLogo } from '../../cards/CardHlpHomeLogo';
import { CardHlpHomePage } from '../../cards/CardHlpHomePage';
import { CardCheckingSystema } from '../../cards/CardCheckingSystema';
import { CardImgNeg } from '../../cards/CardImgNeg';
// imgs do header
import lg_default from '../../assets/defaut/logo/lg_def_ope_default.svg';
import btn_chelp from '../../assets/defaut/botao/btn_def_c_help.svg';
import btn_avatar from '../../assets/defaut/avatar/avt_default.svg';
import btn_resgatar from '../../assets/defaut/botao/btn_def_c_resgatar.svg';
import btn_master from '../../assets/defaut/botao/bnt_def_q_master.svg';
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

  const [msgpanelbottom, setMsgPanelBottom] = React.useState('');
  const [cardlogo, setCardLogo] = React.useState(false);
  const [cardhplpage, setCardHlpPage] = React.useState(false);
  const [cardnegadopage, setCardNegadoPage] = React.useState(false);
  const [theme, setTheme] = React.useState(light);
  const [ischeck, setIscheck] = React.useState(false);
  const [ismsgchvkey, setIsMsgChvkey] = React.useState(false);
  const [isabortachvkey, setIsAbortaChvkey] = React.useState(false);
  const [messagebottom, setMessageBottom] = React.useState('');

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
    if (state.chvkey) {setIsAbortaChvkey(false); return;}
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
          `📦 Tabelas encontradas: ${data.existingTables.length}`,
        ];

        if (data.missingTables.length > 0) {
          messages.push(`⚠️ Tabelas ausentes: ${data.missingTables.join(', ')}`);
        } else {
          messages.push('✅ Todas as tabelas necessárias estão presentes.');
        }

        setSystemMessages(messages);
        setSystemOk(ok);

        dispatch({ type: UseAcessoActions.set_INITSYS, payload: ok });
        dispatch({ type: UseAcessoActions.set_CHKDB, payload: chkdb });
      } catch {
        setSystemMessages(['❌ Backend não respondeu.', '⛔ Não foi possível verificar o sistema.']);
        setSystemOk(false);

        dispatch({ type: UseAcessoActions.set_INITSYS, payload: false });
        dispatch({ type: UseAcessoActions.set_CHKDB, payload: false });
      }
    }

    runSystemCheck();
    return () => {
      cancelled = true;
    };
  }, [state.initsys, state.chvkey,dispatch]);

  React.useEffect(() => {
  setMessageBottom("");
  dispatch({ type: UseAcessoActions.set_PAGE, payload: "Home" });
  dispatch({ type: UseAcessoActions.set_APLICACAO, payload: "OPÇÃO" });

  // ✅ 1) Se CHVKEY estiver ativo, NÃO pode zerar nem bloquear.
  if (state.chvkey) {
    setMsgPanelBottom('Acesso "Master" ativo.');
    setMessageBottom("Aguardando Seleção...");
    return;
  }

  

  // ✅ 2) Se sistema não iniciou, mostra status, mas sem travar Home
  if (!state.initsys) {
    dispatch({ type: UseAcessoActions.set_INITSYS, payload: false });
    dispatch({ type: UseAcessoActions.set_CHVKEY, payload: false });
    dispatch({ type: UseAcessoActions.set_ID_NIVEL, payload: 0 });
    dispatch({ type: UseAcessoActions.set_ACAO, payload: "" });
    dispatch({ type: UseAcessoActions.set_ID_MODULO, payload: 0 });
    dispatch({ type: UseAcessoActions.set_MODULO, payload: "Checagem Database" });

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
  dispatch({ type: UseAcessoActions.set_CHVKEY, payload: false });
  dispatch({ type: UseAcessoActions.set_ID_NIVEL, payload: 0 });
  dispatch({ type: UseAcessoActions.set_ACAO, payload: "" });
  dispatch({ type: UseAcessoActions.set_ID_MODULO, payload: 0 });
  dispatch({ type: UseAcessoActions.set_MODULO, payload: "Inicial" });

  setMsgPanelBottom("Aguardando Login Sistema...");
  setMessageBottom('Acessos Modulos "NEGADOS", faça o Login...');
}, [state.initsys, state.chkdb, state.logado, state.chvkey, state.modulo, dispatch]);

  React.useEffect(() => {
    console.log("[HOME] chvkey mudou:", state.chvkey);
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
  
  React.useEffect(() => {
    console.log('[HOME/CONFIG] nametable mudou:', state.nametable);
  }, [state.nametable]);

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
        imgbtnmst={btn_master}
        titbtnmst="Segurança..."
        onclickmst={() => {
          if (state.chvkey && !isabortachvkey) {
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
              if (state.modulo === 'Visitante' || state.modulo === 'Master' || state.chvkey || state.logado) {
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
              if (state.modulo === 'Recepcao' || state.modulo === 'Master' || state.chvkey || state.logado) {
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
              if (state.modulo === 'Design' || state.modulo === 'Master' || state.chvkey || state.logado) {
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
              if (state.modulo === 'Producao' || state.modulo === 'Master' || state.chvkey || state.logado) {
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
              if (state.modulo === 'Acabamento' || state.modulo === 'Master' || state.chvkey || state.logado) {
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
              if (state.modulo === 'Expedicao' || state.modulo === 'Master' || state.chvkey || state.logado) {
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
              if (state.modulo === 'Administracao' || state.modulo === 'Master' || state.chvkey || state.logado) {
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
              if (state.modulo === 'Config' || state.modulo === 'Master' || state.chvkey || state.logado) {
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
              
              
              //() => setMsgPanelBottom('Abre Cadastros Config.')}
            onMouseLeave={ () => {
                if (!state.logado && !state.chvkey ) setMsgPanelBottom('❌ Aguardando Acesso ao Sistema...');
                else setMsgPanelBottom('✅ Acesso Permitido...');  
                }
              }
          />
        </ContentItensBody>

        <Pg.DivisionPgHztal />

        <ContentSidePagePanelBotton bordas="3px" open={true} pwidth="100%">
          <ContentSideMsgPagePanelBotton bordas="3px" label={'Menssagens : '} msg={msgpanelbottom} />

          <ContentSidePageBottonLabel open={true} istitl={true} title={'Refrescar.: '}>
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

        {cardnegadopage ? (
          <PageModal
            ptop={'1%'}
            pwidth={'30%'}
            pheight={'35%'}
            imgbm={btn_qclose}
            titbm="Fechar..."
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
            <CardHlpHomePage imgcardpage={lg_default} onclosesair={() => setCardHlpPage(false)} />
          </PageModal>
        ) : null}

        {/* ✅ Modal de verificação (fechável) */}
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

        {/* ✅ Modal "negado / não pode iniciar" (agora FECHA de verdade e não trava a Home) */}
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

        { ismsgchvkey ? (
          <PageModal
            ptop={'10%'}
            pwidth={'70%'}
            pheight={'70%'}
            imgbm={btn_qclose}
            titbm="Fechar..."
            titulo={'Acesso Negado'}
            onclose={() => setIsMsgChvkey(false)}
          >
            <CardImgNeg
              imgcard={pnl_negado}
              pminheight={'120px'}
              pwidth={'120px'}
              onclickimg={() => setIsMsgChvkey(false)}
            />
            <form>
              <h3> ⛔ ATENÇÂO SISTEMA EM APOIO.</h3>
              <br />
              <h2> Deseja Realmente descartar Chave de Apoio Gerencial ? </h2>
              <br />
              <p> Clique "SIM" para Descatar Recurso. :  </p>
                <button onClick={ () => window.location.reload()}>SIM.</button>
              <br />  
              <p> Clique "NÂO" para Continuar com Recurso. : </p> 
                <button onClick={ () => setIsMsgChvkey(false) }>NÂO.</button>
              <br />
              <br />
            </form>
            <AutoCloseTimer onClose={() => setNotOperation(false)} seconds={5} />
          </PageModal>
        ) : null}



{/* 
        {nottables ? (
          <PageModal
            ptop={'10%'}
            pwidth={'70%'}
            pheight={'50%'}
            imgbm={btn_qclose}
            titbm="Fechar..."
            titulo={'Acesso Negado'}
            onclose={() => setNotTables(false)}
          >
            <CardImgNeg
              imgcard={pnl_negado}
              pminheight={'120px'}
              pwidth={'120px'}
              onclickimg={() => setNotTables(false)}
            />
            <form>
              <p> ⛔ Tabela inacessível...</p>
              <br />
              <p> ACESSO SISTEMA INOPERANTE.</p>
            </form>
            <AutoCloseTimer onClose={() => setNotTables(false)} seconds={5} />
          </PageModal>
        ) : null}
 */}
        <div>{ state.chvkey ? (<p>ChvKey : true </p>) : (<p>ChvKey : false </p>)}</div>

      </LayoutHome>
    </ThemeProvider>
  );
};

export default Home;

////////////////////////////////////////////////////////



