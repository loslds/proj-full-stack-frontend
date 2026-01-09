 
// C:\repository\proj-full-stack-frontend\src\components\pages\Home.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import light from '../../themes/light';
import dark from '../../themes/dark';
import LayoutHome from '../layouts/LayoutHome';
import { useAcessoContext, UseAcessoActions } from '../contexts/ContextAcesso';
import { ContentItensBody } from '../ContentItensBody';
import { ContentCustonImgPage } from '../ContentCustonImgPage';
import { PageModal } from './PageModal';
import { AutoCloseTimer } from '../AutoCloseTimer';
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
import { CardHlpHomePage } from '../../cards/CardHlpHomePage'
import { CardCheckingSystema }from '../../cards/CardCheckingSystema';
import { CardImgNeg } from '../../cards/CardImgNeg';
// imgs do header
import lg_default from '../../assets/defaut/logo/lg_def_ope_default.svg'
import btn_chelp from '../../assets/defaut/botao/btn_def_c_help.svg';
import btn_avatar from '../../assets/defaut/avatar/avt_default.svg';
import btn_resgatar from '../../assets/defaut/botao/btn_def_c_resgatar.svg';
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
import btn_cenviar from '../../assets/defaut/botao/btn_def_q_enviar.svg';
// img do modal
import btn_qclose from '../../assets/defaut/botao/btn_def_q_close.svg';
import pnl_negado from '../../assets/defaut/painel/pnl_def_ope_negacao.svg';
////////////////////////////////////////////
import { SystemHealthResult } from '../../types/SystemHealth';

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

  // state pa menssagem no Painel em Botton da pagina
  const [messagebottom, setMessageBottom] = React.useState('');
  const [showInitSystem, setInitShowSystem] = React.useState(false);
  const [showsystemcheckmodal, setShowSystemCheckModal] = React.useState(false);
  
  const [systemMessages, setSystemMessages] = React.useState<string[]>(['Iniciando verificação do sistema...']);
  const [systemOk, setSystemOk] = React.useState<boolean | null>(null);

  const [notOperation, setNotOperation] = React.useState(false);
  
  // procedimentos para chamadas de Paginas
  const navigate = useNavigate();
  const goto = React.useCallback((path: string) => { navigate(path);} , [navigate]);
 
  // procedimentos para troca de THEME
  const ToggleTheme = () => {
    setTheme(theme.name === 'dark' ? light : dark);
    setIscheck((prev) => !prev);
  };
//////////////////////////////////////////////////////////////
// iniciando Serviços do Backend
//////////////////////////////////////////////////////////////

React.useEffect(() => {
  if (state.initsys) return;

  let cancelled = false;

  async function runSystemCheck() {
    try {
      setShowSystemCheckModal(true);
      setSystemOk(null);

      setSystemMessages([
        '🔍 Iniciando verificação do sistema...',
        '🔌 Consultando estado do backend...'
      ]);

      const res = await fetch('http://localhost:3000/api/system/health');
      const data: SystemHealthResult = await res.json();

      if (cancelled) return;

      // 🔁 ADAPTAÇÃO PARA O FORMATO ANTIGO DO HOME
      const ok = data.success && data.missingTables.length === 0;
      const chkdb = data.initialized;

      const messages: string[] = [
        `🧭 Modo do sistema: ${data.mode}`,
        `📦 Tabelas encontradas: ${data.existingTables.length}`,
      ];

      if (data.missingTables.length > 0) {
        messages.push(
          `⚠️ Tabelas ausentes: ${data.missingTables.join(', ')}`
        );
      } else {
        messages.push('✅ Todas as tabelas necessárias estão presentes.');
      }

      setSystemMessages(messages);
      setSystemOk(ok);

      dispatch({ type: UseAcessoActions.set_INITSYS, payload: ok });
      dispatch({ type: UseAcessoActions.set_CHKDB, payload: chkdb });

    } catch {
      setSystemMessages([
        '❌ Backend não respondeu.',
        '⛔ Não foi possível verificar o sistema.'
      ]);

      setSystemOk(false);
      dispatch({ type: UseAcessoActions.set_INITSYS, payload: false });
      dispatch({ type: UseAcessoActions.set_CHKDB, payload: false });
    }
  }

  runSystemCheck();

  return () => {
    cancelled = true;
  };
}, [state.initsys, dispatch]);

////////////////////////////////////////
////////////////////////////////////////

  // inicia payloads do AcessoContext
  React.useEffect(() => {
    setMessageBottom('');
    dispatch({ type: UseAcessoActions.set_PAGE, payload: 'Home' });
    dispatch({ type: UseAcessoActions.set_APLICACAO, payload: 'OPÇÃO' });
    
    if (state.initsys){
      if (state.chkdb) {
        if ( (state.logado || state.chvkey ) ) {
          if (state.logado){
            dispatch({ type: UseAcessoActions.set_CHVKEY, payload: false });
            setMsgPanelBottom('Acesso  MODULO ["' + state.modulo + '" ao Sistema...');        
            setMessageBottom( 'Aguardando Seleção...');
          } else { // acesso com a Chave Master oara entrar no Systema. 
            dispatch({ type: UseAcessoActions.set_ID_NIVEL, payload: 4 });
            dispatch({ type: UseAcessoActions.set_ACAO, payload: 'VIS/EDI/ALT/EXC' });
            dispatch({ type: UseAcessoActions.set_ID_MODULO, payload: 8 });
            dispatch({ type: UseAcessoActions.set_MODULO, payload: 'CONFIG' });
            setMsgPanelBottom('Acesso "Config" do Sistema...');
            setMessageBottom( 'Aguardando Seleção...');
          }
        } else {
          dispatch({ type: UseAcessoActions.set_CHVKEY, payload: false });
          dispatch({ type: UseAcessoActions.set_ID_NIVEL, payload: 0 });
          dispatch({ type: UseAcessoActions.set_ACAO, payload: '' });
          dispatch({ type: UseAcessoActions.set_ID_MODULO, payload: 0 });
          dispatch({ type: UseAcessoActions.set_MODULO, payload: 'Inicial'});
          setMsgPanelBottom('Aguardando Login Sistema...')
          setMessageBottom( 'Acessos Modulos "NEGADOS", faça o Login...');
        }
      } else {
         setShowSystemCheckModal(true); // aqui habilita o modal
         setMsgPanelBottom('Sistema Inoperante. Conexão ou tabelas não estão prontas.');
         return; // não continua com o restante da lógica de acesso
      }  
    } else {
      dispatch({ type: UseAcessoActions.set_INITSYS, payload: false });
      dispatch({ type: UseAcessoActions.set_CHVKEY, payload: false });
      dispatch({ type: UseAcessoActions.set_ID_NIVEL, payload: 0 });
      dispatch({ type: UseAcessoActions.set_ACAO, payload: '' });
      dispatch({ type: UseAcessoActions.set_ID_MODULO, payload: 0 });
      dispatch({ type: UseAcessoActions.set_MODULO, payload: 'Checagem Database'});
      setInitShowSystem(true); // aqui habilita o modal para verificação
      setMsgPanelBottom('Checando Sistema para operações...');
    }
  }, [state.initsys, state.chkdb, state.logado, state.chvkey, state.modulo, dispatch]); 
  
  
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Verifica se a tecla pressionada é "Shift + Delete "
      if (event.shiftKey && event.key === 'Delete') setBuscaChave((prev) => !prev); 
      if (event.key === 'Escape') setBuscaChave(false);
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);

  },[]);

  
  const handleChangeKey = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (state.chkdb) {
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
    }
  };

  React.useEffect(() => {
    if (state.chkdb) {
      if (chavedigitada.length === 8) {
        setMsgPanelBottom('Clique para Cofirmar.');
        setStartBtnChave(true);
        setIsDesable(false);
      }
    }
  },[state.chkdb, chavedigitada]);

  const handlerCheckBtnContinua = () => {
    if (state.chkdb) {
      if (chavedigitada.length === 8) {
        const rtn = CheckDateToCecular(chavedigitada);
        if (rtn) {
          dispatch({ type: UseAcessoActions.set_LOGADO, payload: false });
          dispatch({ type: UseAcessoActions.set_CHVKEY, payload: true});
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
    }
  };
  
  const handlerCardLogo = React.useCallback(() => { setCardLogo((oldState) => !oldState); }, []);
  const handlerCardHlpPage = React.useCallback(() => { setCardHlpPage((oldState) => !oldState); }, []);
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
      goto(targetRoute); // importante: execute a função retornada por `goto`
    }
  }, [goto, state.logado, state.chvkey]);


  return (
    <ThemeProvider theme={theme}>
      <LayoutHome
        imgsys={lg_default}
        titbtnsys="Home Sistema..."
        onclicksys={handlerCardLogo}
        titlepg="Home"
        imgbtnhlppg={btn_chelp}
        titbtnhlppg="Help Page..."
        onclickhlppg={handlerCardHlpPage}
        imgbtnlogin={btn_avatar}
        titbtnlogin="Login..."
        onclicklogin={() => {
          if (state.chkdb) {
            goto('/login'); // sistema ok → vai para login
          } else {
            setNotOperation(true); // sistema inoperante → abre modal
            setMsgPanelBottom('Sistema Inoperante!');
          }
        }}
        imgbtnresg={btn_resgatar}
        titbtnresg="Resgatar Acesso..."
        onclickresg={() =>  {
          if (state.chkdb) {
            goto('/resgate'); // sistema ok → vai para resgate
          } else {
            setNotOperation(true); // sistema inoperante → abre modal
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
            imgbtn={pnl_mrecepcao}
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
            imgbtn={pnl_mdesign}
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
            imgbtn={pnl_mproducao}
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
            imgbtn={pnl_macabamento}
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
            imgbtn={pnl_mexpedicao}
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
            imgbtn={pnl_madministracao}
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
            imgbtn={pnl_mconfig}
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

        
        
        { buscachave ? ( // busca pela chave Master
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
              img={btn_qrefrescar}
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
                img={btn_cenviar}
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
            <CardHlpHomeLogo
              imghlplogo={lg_default}
              onclosesair={() => setCardLogo(false)}
            />
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
            <CardHlpHomePage
              imgcardpage={lg_default}
              onclosesair={() => setCardHlpPage(false)}
            />
          </PageModal>
        ) : null}
        
        {!state.initsys ? (
          <PageModal
            ptop={'45%'}
            pwidth={'70%'}
            pheight={'50%'}
            imgbm={btn_qclose}
            titbm="Fechar..."
            titulo={'Verificação do Sistema'}
            onclose={() => { setInitShowSystem(false)}}
          >
            < CardCheckingSystema
              messages={systemMessages}
              systemOk={systemOk}
               
              onClose={() => setInitShowSystem(false)}
              onAutoCloseCountdown={(secondsLeft: number) => {
                if (secondsLeft <= 0) setInitShowSystem(false);
              }}
            />
          </PageModal>
        ): null }
        
        
        {!showsystemcheckmodal && showInitSystem ? (
          <PageModal
            ptop={'10%'}
            pwidth={'70%'}
            pheight={'50%'}
            imgbm={btn_qclose}
            titbm="Fechar..."
            titulo={'Verificação do Sistema'}
            onclose={() => {setShowSystemCheckModal(false)}}
          >
            <CardImgNeg 
              imgcard={pnl_negado} 
              pminheight={'120px'} 
              pwidth={'120px'} 
              onclickimg={() => {setShowSystemCheckModal(false)}}
            />
            <form>
              <p>
                O sistema não pode ser iniciado.  
              </p>
              <br />
              <p>
                Entre em contato com suporte.
              </p>
            </form>
            {/* Contagem regressiva dentro do modal, Timer dentro do modal */}
            <AutoCloseTimer onClose={() => setShowSystemCheckModal(false)} seconds={10} />
          </PageModal>
        ) : null}


        { notOperation ? (
          <PageModal
            ptop={'10%'}
            pwidth={'70%'}
            pheight={'50%'}
            imgbm={btn_qclose}
            titbm="Fechar..."
            titulo={'Acesso Negado'}
            onclose={() => {setNotOperation(false)}}
          >
            <CardImgNeg 
              imgcard={pnl_negado} 
              pminheight={'120px'} 
              pwidth={'120px'} 
              onclickimg={() => {setNotOperation(false)}}
            />
            <form>
              <p> '⛔ ACESSO SISTEMA INOPERANTE.'</p>
              <br />
              <p> Entre em contato com suporte. </p>
            </form>
            {/* Contagem regressiva dentro do modal, Timer dentro do modal */}
            <AutoCloseTimer onClose={() => setNotOperation(false)} seconds={5} />
          </PageModal>
        ) : null}

        <div>{messagebottom}</div>
      </LayoutHome>
    </ThemeProvider>
  );
};

export default Home;



// React.useEffect(() => {
//   if (state.initsys) return; // já inicializado, não verifica de novo

//   let cancelled = false;

//   async function runSystemCheck() {
//     try {
//       setShowSystemCheckModal(true);
//       setSystemOk(null);

//       setSystemMessages([
//         '🔍 Iniciando verificação do sistema...',
//         '🔌 Verificando conexão com o servidor...'
//       ]);

//       const res = await fetch('http://localhost:3000/install/status');
//       const data = await res.json();

//       if (cancelled) return;

//       setSystemMessages(data.messages);
//       setSystemOk(data.ok);

//       dispatch({ type: UseAcessoActions.set_INITSYS, payload: data.ok });
//       dispatch({ type: UseAcessoActions.set_CHKDB, payload: data.chkdb });

//     } catch {

//       setSystemMessages([
//         '❌ Servidor não encontrado.',
//         '⛔ Sistema não pode ser iniciado.'
//       ]);

//       setSystemOk(false);

//       dispatch({ type: UseAcessoActions.set_INITSYS, payload: false });
//       dispatch({ type: UseAcessoActions.set_CHKDB, payload: false });
//     }
//   }

//   runSystemCheck();

//   return () => {
//     cancelled = true;
//   };
// }, [state.initsys, dispatch]);


//   // 🔹 1) Verificação do sistema (backend / database / tabelas)
//   React.useEffect(() => {
//     async function runCheck() {
//       try {
//         setSystemMessages([
//           'Iniciando verificação do sistema...',
//           'Verificando conexão com o servidor...'
//         ]);
//         setSystemOk(null);

//         const res = await fetch('http://localhost:3000/install/status');
//         const data = await res.json();

//         setSystemMessages(data.messages);
//         setSystemOk(data.ok);

//         dispatch({ type: UseAcessoActions.set_INITSYS, payload: data.ok });
//         dispatch({ type: UseAcessoActions.set_CHKDB, payload: data.chkdb });
//       } catch (err) {
//           if (err instanceof Error) {
//             //Se for um erro padrão do JS (Error), mostra a mensagem certinha.
//             setSystemMessages([`❌ Erro durante instalação: ${err.message}`]); 
//           } else {
//             // Se for outra coisa (ex: string, objeto inesperado), mostra "Erro inesperado".
//             setSystemMessages(["❌ Erro inesperado durante instalação."]);
//           }
//         setSystemOk(false);

//         dispatch({ type: UseAcessoActions.set_INITSYS, payload: false });
//         dispatch({ type: UseAcessoActions.set_CHKDB, payload: false });
//       }
//     }

//   // só executa se ainda não inicializou
//   if (!state.initsys) {
//     runCheck();
//   }
// }, [state.initsys, dispatch]);

// ///////////////////////////////////////////////////////////

// React.useEffect(() => {
//   if (state.initsys) return;

//   async function runSystemCheck() {
//     try {
//       setShowSystemCheckModal(true);
//       setSystemOk(null);

//       setSystemMessages([
//         '🔍 Iniciando verificação do sistema...',
//         '🔌 Verificando conexão com o servidor...'
//       ]);

//       const res = await fetch('http://localhost:3000/install/status');
//       const data = await res.json();

//       setSystemMessages(data.messages);
//       setSystemOk(data.ok);

//       dispatch({ type: UseAcessoActions.set_INITSYS, payload: data.ok });
//       dispatch({ type: UseAcessoActions.set_CHKDB, payload: data.chkdb });

//     } catch {
//       setSystemMessages([
//         '❌ Servidor não encontrado.',
//         '⛔ Sistema não pode ser iniciado.'
//       ]);

//       setSystemOk(false);
      
//       dispatch({ type: UseAcessoActions.set_INITSYS, payload: false });
//       dispatch({ type: UseAcessoActions.set_CHKDB, payload: false });
//     }
//   }

//   runSystemCheck();
// }, [state.initsys, dispatch]);




          // {/* Modal do Sistema */}
          // {showSystemModal && (
          //   <CardModalCheckingSys
          //     ptop="15%" 
          //     pwidth="60%" 
          //     pheight="80%"
          //     titulo ={"Verificação de Sistema"}
          //     onClose={() => setShowSystemModal(false)}
          //     onAutoCloseCountdown={(secondsLeft: number) => {
          //       if (secondsLeft <= 0) setShowSystemModal(false);
          //     }}
          //   />
          // )}
  
