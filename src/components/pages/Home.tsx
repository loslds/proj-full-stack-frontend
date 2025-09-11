 
// C:\repository\proj-full-stack-frontend\src\components\pages\Home.tsx
import React from 'react';

import { useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import light from '../../themes/light';
import dark from '../../themes/dark';

import LayoutHome from '../layouts/LayoutHome';
import { useAcessoContext } from '../contexts/useAcessoContext';
import { UseAcessoActions } from '../contexts/ContextAcesso';

import { initSystemApi, InitResponse } from '../../api/db/init';

import { ContentItensBody } from '../ContentItensBody';
import { ContentCustonImgPage } from '../ContentCustonImgPage';
import { PageModal } from './PageModal';
import { CardCheckingSystema } from '../../cards/CardCheckingSystema';

import * as Pg from '../stylePages';

import { ContentCardPage } from '../ContentCardPage';
import { CheckDateToCecular } from '../../funcs/funcs/CheckDateToCecular';
import { ContentCardBoxChaveKey } from '../ContentCardBoxChaveKey';
import { ContentCardBoxInput } from '../ContentCardBoxInput';  
import { ContentPageButtonDefImgEnabled } from '../ContentPageButtonDefImgEnabled';
import { ContentSidePagePanelBotton } from '../ContentSidePagePanelBotton';
import { ContentSidePageBottonLabel } from '../ContentSidePageBottonLabel';
import { ContentSidePageBottonButton } from '../ContentSidePageBottonButton';
import { ContentSideMsgPagePanelBotton } from '../ContentSideMsgPagePanelBotton';

import { CardHlpHomeLogo } from '../../cards/CardHlpHomeLogo';
import { CardHlpHomePage } from '../../cards/CardHlpHomePage';
import { CardImgNeg } from '../../cards/CardImgNeg';

import lg_sys from '../../assets/svgs/lg_sys.svg';
import bt_helppg from '../../assets/svgs/bt_helppg.svg';
import bt_avatar from '../../assets/pngs/bt_avatar.png';
import bt_resgate from '../../assets/svgs/bt_resgate.svg';
import lg_negado from '../../assets/svgs/lg_negado.svg';
import bt_close from '../../assets/svgs/bt_close.svg';
import pn_visitante from '../../assets/svgs/pn_visitante.svg';
import pn_recepcao from '../../assets/svgs/pn_recepcao.svg';
import pn_design from '../../assets/svgs/pn_design.svg';
import pn_producao from '../../assets/svgs/pn_producao.svg';
import pn_acabamento from '../../assets/svgs/pn_acabamento.svg';
import pn_expedicao from '../../assets/svgs/pn_expedicao.svg';
import pn_administracao from '../../assets/svgs/pn_administracao.svg';
import pn_config from '../../assets/svgs/pn_config.svg';
import bt_enviar from '../../assets/svgs/bt_enviar.svg';
import bt_refresca1 from '../../assets/pngs/bt_refresca1.png';

const Home: React.FC = () => {
 
  const { state, dispatch } = useAcessoContext();// procedimento para usar o context
  const [startbtnchave, setStartBtnChave] = React.useState(false);// state para liberar a edição da chave master
  const [buscachave, setBuscaChave] = React.useState(false);//state para abrir procedimento de avaliação da chave master
  const [chavedigitada, setChaveDigitada] = React.useState('');// state para guardar chave master digitada
  const [isdesable, setIsDesable] = React.useState(true); // state para ativar/desativar acesso botão
  const [msgpanelbottom, setMsgPanelBottom] = React.useState('');// state guardar menssagem em passar o mouse sobre o botão 
  const [cardlogo, setCardLogo] = React.useState(false);// state para chamada do Modal Explicativo do Sistema 
  const [cardhplpage, setCardHlpPage] = React.useState(false);// state para chamada do Modal HELP da PAGINA 
  const [cardnegadopage, setCardNegadoPage] = React.useState(false);// state para abrir e fechar modal negado acesso Pagina
  const [theme, setTheme] = React.useState(light);// state para tema THEME pagina 
  const [ischeck, setIscheck] = React.useState(false);// state para checar se existe edição  

  //  const [ischkdb, setIisChkDb] = React.useState(false);// state para gardar o valor do retorno para ser guardado no context
  // procedimentos para troca de THEME
  const ToggleTheme = () => {
    if (theme.name === 'dark') {
      setTheme(light);
      setIscheck(true);
    } else {
      setTheme(dark);
      setIscheck(false);
    }
  };
  // procedimentos para chamadas de Paginas
  const navigate = useNavigate();
  const goto = React.useCallback((path: string) => {
    navigate(path);
  }, [navigate]);
  // state pa menssagem no Painel em Botton da pagina
  const [messagebottom, setMessageBottom] = React.useState('');
////////////////////////////////////////////////////
// === sistema de checagem inicial simplificado ===
////////////////////////////////////////////////////  
  const [showSystemModal, setShowSystemModal] = React.useState(false);
  const [systemMessages, setSystemMessages] = React.useState<string[]>([]);
  const [systemOk, setSystemOk] = React.useState<boolean | null>(null);

  
  const appendMessage = (msg: string) =>
    setSystemMessages((prev) => [...prev, msg]);

  // Função que chama a API de inicialização do backend
  const performSystemCheck = React.useCallback(async () => {
    setSystemMessages([]);
    setSystemOk(null);
    setShowSystemModal(true);

    try {
      const data: InitResponse = await initSystemApi();

      // Itera pelos passos recebidos do backend e adiciona ao modal
      for (const step of data.steps) {
        appendMessage(step.message);
        if (step.delay) await new Promise((r) => setTimeout(r, step.delay));
      }

      // Atualiza estado final
      setSystemOk(data.success);

      // if (!data.success) {
      //   appendMessage("❌ Inicialização incompleta. Contate o administrador.");
      // }
    } catch (error: unknown) {
      console.error(error);
      appendMessage("❌ Erro inesperado ao inicializar o sistema.");
      setSystemOk(false);
    }
  }, []);

  // Dispara a checagem ao montar a página
  const hasCheckedRef = React.useRef(false);

  React.useEffect(() => {
  if (!hasCheckedRef.current) {
    performSystemCheck();
    hasCheckedRef.current = true;
  }
  }, [performSystemCheck]);
  // Atualiza o context e fecha modal se tudo OK
  React.useEffect(() => {
    dispatch({ type: UseAcessoActions.SET_CHKDB, payload: systemOk });
    if (systemOk === true) {
      const timer = setTimeout(() => setShowSystemModal(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [systemOk, dispatch]);
///////////////////////////////////////////////////
  //////////// fim da checagem inicial do sistema. 
///////////////////////////////////////////////////
  // resetes state necessarios para liberação do Login e ou Chave Master
  const resetAcesso = React.useCallback(() => {
    if (!state.logado && !state.chvkey) {
      goto('/');
    }
    dispatch({ type: UseAcessoActions.SET_CHVKEY, payload: false });
    dispatch({ type: UseAcessoActions.SET_NIVEL, payload: 0 });
    dispatch({ type: UseAcessoActions.SET_ACAO, payload: '' });
  }, [dispatch, goto, state.logado, state.chvkey,]);

  React.useEffect(() => {
    if (state.chkdb){
      setMessageBottom('');
      dispatch({ type: UseAcessoActions.SET_PAGE, payload: 'Home'  });
      if (!state.logado && !state.chvkey) {
        resetAcesso();
        dispatch({ type: UseAcessoActions.SET_MODULO, payload: 'Inicial'});
        dispatch({ type: UseAcessoActions.SET_APLICACAO, payload: 'Opções'});
        setMsgPanelBottom('Aguardando Login Sistema...')
        setMessageBottom( 'Acessos Modulos "NEGADOS", faça o Login...');
      }

      if (state.logado) {
        resetAcesso();
        setMsgPanelBottom('Acesso MODULO: "' + state.modulo +'"...');
        setMessageBottom( 'Aguardando Seleção...');
      }
      if (state.chvkey) {
        dispatch({ type: UseAcessoActions.SET_MODULO, payload: '' });
        dispatch({ type: UseAcessoActions.SET_APLICACAO, payload: 'MASTER' });
        setMsgPanelBottom('Acesso "MASTER" ao Sistema...');
        setMessageBottom('Aguardando Seleção...');
      }
    }
  }, [state.chkdb, state.logado, state.chvkey, state.modulo, dispatch, resetAcesso]); 

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Verifica se a tecla pressionada é "Shift + Delete "
      if (event.shiftKey && event.key === 'Delete') {
        setBuscaChave((prev) => !prev); // Alterna o estado para mostrar ou esconder o valor
      }
      // Fechar com tecla Escape
      if (event.key === 'Escape') {
        setBuscaChave(false);
      }
    };
    // Adiciona o listener para o evento de teclado
    window.addEventListener('keydown', handleKeyDown);
    // Remove o listener quando o componente é desmontado
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  },[]);  

  const handleChangeKey = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChaveDigitada(event.target.value);
    if (chavedigitada.length === 0 ) {
      setMsgPanelBottom('Aguardando...');
      setStartBtnChave(false);
      setIsDesable(true);
    } else {
      setMsgPanelBottom('Edite Chave...');  
      setStartBtnChave(true);
      setIsDesable(true);
    }
  };

  React.useEffect(() => {
    if (chavedigitada.length === 8) {
      setMsgPanelBottom('Clique para Cofirmar.');
      setStartBtnChave(true);
      setIsDesable(false);
    }
  },[chavedigitada]);

  const handlerCheckBtnContinua = () => {
    if (chavedigitada.length === 8) {
      const rtn = CheckDateToCecular(chavedigitada);
      if (rtn) {
        dispatch({ type: UseAcessoActions.SET_LOGADO, payload: false });
        dispatch({ type: UseAcessoActions.SET_CHVKEY, payload: true});
        // Exibe a mensagem temporária por 5 segundos
        setMsgPanelBottom('Sucesso...');
      } else {
        setChaveDigitada('');
        // Exibe a mensagem temporária por 5 segundos
        setMsgPanelBottom('Chave inválida!');
      }
      setTimeout(() => { setMsgPanelBottom(''); }, 5000); // 5 segundos
      setStartBtnChave(false);
      setIsDesable(true);
      setBuscaChave(false);
    }
  };
  
  const handlerCardLogo = React.useCallback(() => {
    setCardLogo((oldState) => !oldState);
  }, []);
  
  const handlerCardHlpPage = React.useCallback(() => {
    setCardHlpPage((oldState) => !oldState);
  }, []);

  const handlerClicEventNegadoPage = React.useCallback((num: number) => {
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

  if (!state.logado && !state.chvkey)  {
    setCardNegadoPage(true);
  } else if (targetRoute) {
    goto(targetRoute); // Importante: execute a função retornada por `goto`
  }
}, [goto, state.logado, state.chvkey]);

  return (
    <ThemeProvider theme={theme}>
      <LayoutHome
        imgsys={lg_sys}
        titbtnsys="Home Sistema..."
        onclicksys={handlerCardLogo}
        titlepg="Home"
        imgbtnhlppg={bt_helppg}
        titbtnhlppg="Help Page..."
        onclickhlppg={handlerCardHlpPage}
        imgbtnlogin={bt_avatar}
        titbtnlogin="Login..."
        onclicklogin={() => goto('/login')}
        imgbtnresg={bt_resgate}
        titbtnresg="Resgatar Acesso..."
        onclickresg={() => goto('/resgate')}
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
            imgbtn={pn_visitante}
            titlebtn={'Modulo Visitantes..'}
            onclick={() => {
              if ((state.modulo === 'Visitante' || state.modulo === 'Master') && (state.logado || state.chvkey)) {
                goto('/modulos/visitante');
              } else {
                handlerClicEventNegadoPage(1); // ou qualquer `num` válido
              }
            }}
            onMouseEnter={() => setMsgPanelBottom('Abre Modulo Visitante.') }
            onMouseLeave={() => {
              if (!state.logado && !state.chvkey) {
                setMsgPanelBottom('Aguardando Login Sistema...'); 
              }
            }}
          />

        <ContentCustonImgPage
            num={2}
            open={true}
            pxheight={'100px'}
            pheight={'100px'}
            pwidth={'100px'}
            imgbtn={pn_recepcao}
            titlebtn={'Modulo Recepção...'}
            onclick={() => {
              if ((state.modulo === 'Recepcao' || state.modulo === 'Master') && (state.logado || state.chvkey)) {
                goto('/modulos/recepcao');
              } else {
                handlerClicEventNegadoPage(2); // ou qualquer `num` válido
              }
            }}
            onMouseEnter={() => setMsgPanelBottom('Abre Modulo Recepção.') }
            onMouseLeave={() => {
              if (!state.logado && !state.chvkey) {
                setMsgPanelBottom('Aguardando Acesso ao Sistema...'); 
              }
            }}
          />
          
          <ContentCustonImgPage
            num={3}
            open={true}
            pxheight={'100px'}
            pheight={'100px'}
            pwidth={'100px'}
            imgbtn={pn_design}
            titlebtn={'Modulo Design...'}
            onclick={() => {
              if ((state.modulo === 'Design' || state.modulo === 'Master') && (state.logado || state.chvkey)) {
                goto('/modulos/design');
              } else {
                handlerClicEventNegadoPage(3); // ou qualquer `num` válido
              }
            }}
            onMouseEnter={() => setMsgPanelBottom('Abre Modulo Design.') }
            onMouseLeave={() => {
              if (!state.logado && !state.chvkey) {
                setMsgPanelBottom('Aguardando Acesso ao Sistema...'); 
              }
            }}
          />

          <ContentCustonImgPage
            num={4}
            open={true}
            pxheight={'100px'}
            pheight={'100px'}
            pwidth={'100px'}
            imgbtn={pn_producao}
            titlebtn={'Modulo Produção...'}
            onclick={() => {
              if ((state.modulo === 'Producao' || state.modulo === 'Master') && (state.logado || state.chvkey)) {
                goto('/modulos/producao');
              } else {
                handlerClicEventNegadoPage(4); // ou qualquer `num` válido
              }
            }}
            onMouseLeave={() => {
              if (!state.logado && !state.chvkey) {
                setMsgPanelBottom('Aguardando Acesso ao Sistema...'); 
              }
            }}
          />
          
          <ContentCustonImgPage
            num={5}
            open={true}
            pxheight={'100px'}
            pheight={'100px'}
            pwidth={'100px'}
            imgbtn={pn_acabamento}
            titlebtn={'Modulo Acabamento...'}
            onclick={() => {
              if ((state.modulo === 'Acabamento' || state.modulo === 'Master') && (state.logado || state.chvkey)) {
                goto('/modulos/acabamento');
              } else {
                handlerClicEventNegadoPage(5); // ou qualquer `num` válido
              }
            }}
            onMouseEnter={() => setMsgPanelBottom('Abre Modulo Acabamento.') }
            onMouseLeave={() => {
              if (!state.logado && !state.chvkey) {
                setMsgPanelBottom('Aguardando Acesso ao Sistema...'); 
              }
            }}
          />
          
          <ContentCustonImgPage
            num={6}
            open={true}
            pxheight={'100px'}
            pheight={'100px'}
            pwidth={'100px'}
            imgbtn={pn_expedicao}
            titlebtn={'Modulo Expedição...'}
            onclick={() => {
              if ((state.modulo === 'Expedicao' || state.modulo === 'Master') && (state.logado || state.chvkey)) {
                goto('/modulos/expedicao');
              } else {
                handlerClicEventNegadoPage(6); // ou qualquer `num` válido
              }
            }}
            onMouseLeave={() => {
              if (!state.logado && !state.chvkey) {
                setMsgPanelBottom('Aguardando Acesso ao Sistema...'); 
              }
            }}
          />

          <ContentCustonImgPage
            num={7}
            open={true}
            pxheight={'100px'}
            pheight={'100px'}
            pwidth={'100px'}
            imgbtn={pn_administracao}
            titlebtn={'Modulo Administração...'}
            onclick={() => {
              if ((state.modulo === 'Administracao' || state.modulo === 'Master') && (state.logado || state.chvkey)) {
                goto('/modulos/administracao');
              } else {
                handlerClicEventNegadoPage(7); // ou qualquer `num` válido
              }
            }}
            onMouseEnter={() => setMsgPanelBottom('Abre Modulo Administração.') }
            onMouseLeave={() => {
              if (!state.logado && !state.chvkey) {
                setMsgPanelBottom('Aguardando Acesso ao Sistema...'); 
              }
            }}
          />

          <ContentCustonImgPage
            num={8}
            open={true}
            pxheight={'100px'}
            pheight={'100px'}
            pwidth={'100px'}
            imgbtn={pn_config}
            titlebtn={'Cadastros Config...'}
            onclick={() => {
              if ((state.modulo === 'Config' || state.modulo === 'Master') && (state.logado || state.chvkey)) {
                goto('/modulos/config');
              } else {
                handlerClicEventNegadoPage(8); // ou qualquer `num` válido
              }
            }}
            onMouseEnter={() => setMsgPanelBottom('Abre Cadastros Config.') }
            onMouseLeave={() => {
              if (!state.logado && !state.chvkey) {
                setMsgPanelBottom('Aguardando Acesso ao Sistema...'); 
              }
            }}
          />
        </ContentItensBody>

        { buscachave ? (
          <ContentCardPage>
          <Pg.DivisionPgHztal />
          <ContentCardBoxChaveKey open={buscachave}>
            <ContentCardBoxInput>
              <form name="chave">
                <br />
                <label>Acesso Master.</label>
                <br />
                <input
                  name="chave"
                  type="password"
                  size={8}
                  autoFocus={true}
                  placeholder="Chave..."
                  value={chavedigitada}
                  onChange={handleChangeKey}
                  onClick={() => setMsgPanelBottom('Editição de Chave.') }
                  />
                  <br />
                  
                </form>
              </ContentCardBoxInput>
            </ContentCardBoxChaveKey>
            </ContentCardPage>
          ) : null 
        }

        <Pg.DivisionPgHztal />
        <ContentSidePagePanelBotton bordas="3px" open={true} pwidth="100%">
          
          <ContentSideMsgPagePanelBotton bordas="3px" label={'Menssagens : '} msg={ msgpanelbottom } />
          
          <ContentSidePageBottonLabel open={true} istitl={true} title={'Refrescar.: '}>
            <ContentSidePageBottonButton
              pxheight={'40px'}
              img={bt_refresca1}
              titbtn={'Refrescar...'}
              onClick={() => window.location.reload()}
              onMouseEnter={() => setMsgPanelBottom('Refrescar a Page...') }
              onMouseLeave={() => {
                if (!state.logado && !state.chvkey) {
                  setMsgPanelBottom('Aguardando Acesso ao Sistema...'); 
                }
              }}
            />
          </ContentSidePageBottonLabel>

          { startbtnchave ? (
            <ContentSidePageBottonLabel open={true} istitl={true} title={'Confirmar? : '}>
              <ContentPageButtonDefImgEnabled 
                pxheight={'40px'}
                img={bt_enviar}
                titbtn={'Checar...'}
                onclick={handlerCheckBtnContinua}
                disabled={isdesable}
              />
            </ContentSidePageBottonLabel>
          ): null} 
        </ContentSidePagePanelBotton> 

        { cardnegadopage ? (
          <PageModal
            ptop={'1%'}
            pwidth={'30%'}
            pheight={'35%'}
            imgbm={bt_close}
            titbm="Fechar..."
            titulo={'Acesso Negado.'}
            onclose={() => setCardNegadoPage(false)}
          >
            <CardImgNeg 
              imgcard={lg_negado} 
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
            imgbm={bt_close}
            titbm="Fechar..."
            titulo={'Home Sistema.'}
            onclose={() => setCardLogo(false)}
          >
            <CardHlpHomeLogo
              imghlplogo={lg_sys}
              onclosesair={() => setCardLogo(false)}
            />
          </PageModal>
        ) : null}
  
        {cardhplpage ? (
          <PageModal
            ptop={'1%'}
            pwidth={'80%'}
            pheight={'95%'}
            imgbm={bt_close}
            titbm="Fechar..."
            titulo={'Help Conteúdo Home.'}
            onclose={() => setCardHlpPage(false)}
          >
            <CardHlpHomePage
              imgcardpage={lg_sys}
              onclosesair={() => setCardHlpPage(false)}
            />
          </PageModal>
        ) : null}

        {showSystemModal && (
          <PageModal
            ptop="15%" pwidth="60%" pheight="80%"
            imgbm={bt_close}
            titbm="Fechar..."
            titulo="Verificação do Sistema"
            onclose={() => setShowSystemModal(false)}
          >
            <CardCheckingSystema
              messages={systemMessages}
              systemOk={systemOk}
              onAutoCloseCountdown={(secondsLeft) => {
                if (secondsLeft <= 0) setShowSystemModal(false);
              }}
              onClose={() => setShowSystemModal(false)} // 🔹 obrigatório
            />
          </PageModal>
          )
        }
        <div>{messagebottom}</div>
      </LayoutHome>
    </ThemeProvider>
  );
};

export default Home;

// =======================================================================
//   === sistema de checagem inicial === 
//   =======================================================================

//   const [showSystemModal, setShowSystemModal] = React.useState(false);
//   const [systemMessages, setSystemMessages] = React.useState<string[]>([]);
//   const [systemOk, setSystemOk] = React.useState<boolean | null>(null);

//   // Nosso hook de steps
//   const { runStep } = useLoadingStep();

//   const appendMessage = (msg: string) =>
//     setSystemMessages((prev) => [...prev, msg]);

//   const performSystemCheck = React.useCallback(async () => {
//     setSystemMessages([]); // limpa mensagens antigas
//     setSystemOk(null);     // reset status

//     // === Etapa 1: Conexão ===
//     const step1 = await runStep(
//       async () => {
//         const connRes = await checkConnection();
//         return connRes.success;
//       },
//       "⏳ Verificando conexão com o DATABASE...", // mensagem inicial (ampulheta)
//       "✅ Serviço de Rede Conectado com Sucesso.", // sucesso
//       "❌ Conexão falhou. Entre em contato com o Administrador.", // erro
//       "❌ Tempo excedido ao verificar conexão." // timeout
//     );

//     appendMessage(step1.message); // adiciona somente o resultado final

//     if (!step1.success) {
//       setSystemOk(false);
//       return; // interrompe se falhou
//     }

//     // === Etapa 2: Tabelas
//     appendMessage("⏳ Checando Banco de Dados...");

//     const tablesRes: CheckTablesResponse = await checkTables();

//     if (!tablesRes.success && tablesRes.missingTables?.length) {
//       const missingTable = tablesRes.missingTables[0];
//       appendMessage(`❌ ${missingTable} não foi possível constatar.`);
//       appendMessage("❌ Verificação falhou. Solicite contato com o Administrador.");
//       setSystemOk(false);
//       return;
//     }

//     // se sucesso, mostre só o que backend confirmou
//     tablesRes.checkedTables?.forEach((tbl: string) => {
//       appendMessage(`✅ ${tbl} Sucesso.`);
//     });

//     // === Etapa 3: Sincronismo
//     const step3 = await runStep(
//       async () => {
//         try {
//           await sincronizarTabelas(requiredTables);
//           return true;
//         } catch {
//           return false;
//         }
//       },
//       "⏳ Aguarde sincronismo do Sistema...",
//       "✅ Sincronismo concluído.",
//       "⚠️ Falha no sincronismo, mas sistema pode continuar.",
//       "❌ Tempo excedido no sincronismo."
//     );
//     appendMessage(step3.message);

//     // === Finalização
//     if (step3.success) {
//       appendMessage("✅ Sistema pronto. Liberado para serviço.");
//       setSystemOk(true);
//     } else {
//       appendMessage("⚠️ Sistema pronto com falhas, verificar sincronismo.");
//       setSystemOk(true); // mesmo com falha, continua
//     }
    
//   }, [runStep]);

//   // dispara checagem ao montar
//   React.useEffect(() => {
//     performSystemCheck();
//   }, [performSystemCheck]);

//   // fecha modal se tudo OK
//   React.useEffect(() => {
//     dispatch({ type: UseAcessoActions.SET_CHKDB, payload: systemOk });
//     if (systemOk === true) {
//       const timer = setTimeout(() => setShowSystemModal(false), 5000);
//       return () => clearTimeout(timer);
//     }
//   }, [systemOk, dispatch]);
  
//   //=============================================================
