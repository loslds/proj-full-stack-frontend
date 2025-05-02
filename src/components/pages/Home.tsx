
import React from 'react';
import * as Pg from '../stylePages';

import { ThemeProvider } from 'styled-components';
import light from '../../themes/light';
import dark from '../../themes/dark';
import { useNavigate } from 'react-router-dom';

import {useAcessoContext, UseAcessoActions
} from '../contexts/ContextAcesso';

import LayoutHome from '../layouts/LayoutHome';
import { ContentItensBody } from '../ContentItensBody';
import { ContentCustonImgPage } from '../ContentCustonImgPage';
import { ContentCardPage } from '../ContentCardPage';

import { CheckDateToCecular } from '../../funcs/funcs/CheckDateToCecular';
import { ContentCardBoxChaveKey } from '../ContentCardBoxChaveKey';
import { ContentCardBoxInput } from '../ContentCardBoxInput';  

import { ContentPageButtonDefImgEnabled } from '../ContentPageButtonDefImgEnabled';
import { ContentSidePagePanelBotton } from '../ContentSidePagePanelBotton';
import { ContentSidePageBottonLabel } from '../ContentSidePageBottonLabel';
import { ContentSidePageBottonButton } from '../ContentSidePageBottonButton';
import { ContentSideMsgPagePanelBotton } from '../ContentSideMsgPagePanelBotton';

import { PageModal } from './PageModal';
import { CardHlpHomeLogo } from '../../cards/CardHlpHomeLogo';
import { CardHlpHomePage } from '../../cards/CardHlpHomePage';
import { CardImgNeg } from '../../cards/CardImgNeg';

/// import { MyPessoas } from 'src/MyPessoas';

import lg_sys from '../../assets/svgs/lg_sys.svg';
import bt_helppg from '../../assets/svgs/bt_helppg.svg';
import bt_avatar from '../../assets/pngs/bt_avatar.png';
import bt_resgate from '../../assets/svgs/bt_resgate.svg';
import lg_negado from '../../assets/svgs/lg_negado.svg';
import bt_close from '../../assets/svgs/bt_close.svg';
import pn_config from '../../assets/svgs/pn_config.svg';
import pn_recepcao from '../../assets/svgs/pn_recepcao.svg';
import bt_enviar from '../../assets/svgs/bt_enviar.svg';
import bt_setaleft from '../../assets/pngs/bt_setaleft.png';

const Home: React.FC = () => {
  
  const { state, dispatch } = useAcessoContext();
  const [startbtnchave, setStartBtnChave] = React.useState(false);
  const [buscachave, setBuscaChave] = React.useState(false);
  //const chaveDt = DateToCecular(new Date());
  const [ischavekey, setIsChaveKey] = React.useState(false);
  const [chaveDigitada, setChaveDigitada] = React.useState('');
  const [islogado,setIsLogado] = React.useState(false);
  const [btnok, setbtnok] = React.useState(false);
  
  const [isdesable, setIsDesable] = React.useState(true); 
  const [msgpanelbottom, setMsgPanelBottom] = React.useState('');
  
  const [cardlogo, setCardLogo] = React.useState(false);
  const [cardhplpage, setCardHlpPage] = React.useState(false);
  const [cardnegadopage, setCardNegadoPage] = React.useState(false);

  const [theme, setTheme] = React.useState(light);
  const [ischeck, setIscheck] = React.useState(false);
  const ToggleTheme = () => {
    if (theme.name === 'dark') {
      setTheme(light);
      setIscheck(true);
    } else {
      setTheme(dark);
      setIscheck(false);
    }
  };
  const navigate = useNavigate();
  const goto = (path: string) => {
    return () => {
      navigate(path);
    };
  };


  React.useEffect(() => {
    
    const handleKeyDown = (event: KeyboardEvent) => {
      // Verifica se a tecla pressionada é "Ctrl + F12 "
      if (event.shiftKey && event.key === 'Delete') {
        setBuscaChave((prev) => !prev); // Alterna o estado para mostrar ou esconder o valor
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
    if (chaveDigitada.length === 0 ) {
      setMsgPanelBottom('Aguardando...');
      setbtnok(false);
      setIsDesable(true);
    } else if (chaveDigitada.length > 0 && chaveDigitada.length < 8) {
      setMsgPanelBottom('Edite Chave...');
      setbtnok(false);
      setIsDesable(true);
    } else if (chaveDigitada.length >= 8) {
      setStartBtnChave(true);
      setMsgPanelBottom('Clique para Cofirmar.');
      setbtnok(true);
      setStartBtnChave(true);
    }
  };

  const handlerCheckBtnOk = () => {
    if (btnok) {
      // Exibe a mensagem temporária por 5 segundos
      if (ischavekey) {
        setMsgPanelBottom('Sucesso!...');
        setIsLogado(ischavekey);
      }
      setbtnok(false);
      setBuscaChave(false);
    } 
    setMsgPanelBottom('');
  };


  React.useEffect(() => {
    setIsChaveKey(false);
    if (chaveDigitada.length === 8) {
      const rtn = CheckDateToCecular(chaveDigitada);
      if (rtn) {
        setIsChaveKey(true);
        
      } else {
        setMsgPanelBottom('Chave inválida!');
        setbtnok(false);
      }
      setIsDesable(false);
    }
  },[chaveDigitada]);
  
  


  React.useEffect(() => {
    if (state.logado  || islogado) {
      if (state.logado) {
      dispatch({ type: UseAcessoActions.SET_PAGE, payload: 'Home'  });
      dispatch({ type: UseAcessoActions.SET_APLICACAO, payload: 'Logion'});
      dispatch({ type: UseAcessoActions.SET_CHVKEY, payload: ''});
      } else {
        dispatch({ type: UseAcessoActions.SET_CHVKEY, payload: chaveDigitada});
        dispatch({ type: UseAcessoActions.SET_LOGADO, payload: true});
        dispatch({ type: UseAcessoActions.SET_MODULO, payload: 'Master'});
        dispatch({ type: UseAcessoActions.SET_ACAO, payload: 'Visualizar, Listar, Incluir, Alterar, Escluir'});
        dispatch({ type: UseAcessoActions.SET_NIVEL, payload: 3 });
      }
    } else {
      setIsLogado(false);
      dispatch({ type: UseAcessoActions.SET_PAGE, payload: 'Home'  });
      dispatch({ type: UseAcessoActions.SET_APLICACAO, payload: 'Logioff'});
      dispatch({ type: UseAcessoActions.SET_CHVKEY, payload: ''});
      dispatch({ type: UseAcessoActions.SET_MODULO, payload: ''});
      setMsgPanelBottom('Aguardando Login Sistema...')
    }
  },[state.logado, islogado]);


  const handlerCardLogo = React.useCallback(() => {
    setCardLogo((oldState) => !oldState);
  }, []);
  
  const handlerCardHlpPage = React.useCallback(() => {
    setCardHlpPage((oldState) => !oldState);
  }, []);

//  const handlerCardNegadoPage = React.useCallback(() => {
//    setCardNegadoPage((oldState) => !oldState);
//  }, []);
  
  const handlerClicEventNegadoPage = React.useCallback((num: number) => {
    if (num === undefined) return; // Se `num` for `undefined`, não faz nada
   
    const routes: Record<number, string> = {
      1: '/modulo/visitante',
      2: '/modulo/recepcao',
      3: '/modulo/design',
      4: '/modulo/producao',
      5: '/modulo/acabamento',
      6: '/modulo/expedicao',
      7: '/modulo/administracao',
      8: '/modulo/config',
      
    };
    
    const targetRoute = routes[num]; // Obtém a rota correspondente
    
    if (!state.logado) {
      setCardNegadoPage(true);
    } else if (targetRoute) {
      goto(targetRoute);
    };
  }, []);


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
        onclicklogin={goto('/login')}
        imgbtnresg={bt_resgate}
        titbtnresg="Resgatar Acesso..."
        onclickresg={goto('/resgate')}
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
            imgbtn={''}
            titlebtn={'Modulo Visitantes..'}
            onclick={ state.modulo ==='Visitante' && ( state.logado || islogado ) ? (goto('/modulo/visitante')) : ((num) => num !== undefined && handlerClicEventNegadoPage(num))} 
            onMouseEnter={() => setMsgPanelBottom('Abre Modulo Visitante.') }
            onMouseLeave={() => { ( !state.logado || !islogado ) ? setMsgPanelBottom('Aguardando Login Sistema...'): null }}
          />

        <ContentCustonImgPage
            num={2}
            open={true}
            pxheight={'100px'}
            pheight={'100px'}
            pwidth={'100px'}
            imgbtn={pn_recepcao}
            titlebtn={'Modulo Recepção...'}
            onclick={ state.modulo ==='Recepção' && ( state.logado || islogado ) ? (goto('/modulos/recepcao')) : ((num) => num !== undefined && handlerClicEventNegadoPage(num))} 
            onMouseEnter={() => setMsgPanelBottom('Abre Modulo Recepção.') }
            onMouseLeave={() => { ( !state.logado || !islogado ) ? setMsgPanelBottom('Aguardando Login Sistema...'): null }}
          />
          
          <ContentCustonImgPage
            num={3}
            open={true}
            pxheight={'100px'}
            pheight={'100px'}
            pwidth={'100px'}
            imgbtn={''}
            titlebtn={'Modulo Design...'}
            onclick={ state.modulo ==='Design' && ( state.logado || islogado ) ? (goto('/modulos/design')) : ((num) => num !== undefined && handlerClicEventNegadoPage(num))} 
            onMouseEnter={() => setMsgPanelBottom('Abre Modulo Design.') }
            onMouseLeave={() => { ( !state.logado || !islogado ) ? setMsgPanelBottom('Aguardando Login Sistema...'): null }}
          />

          <ContentCustonImgPage
            num={4}
            open={true}
            pxheight={'100px'}
            pheight={'100px'}
            pwidth={'100px'}
            imgbtn={''}
            titlebtn={'Modulo Produção...'}
            onclick={ state.modulo ==='Produção' && ( state.logado || islogado ) ? (goto('/modulos/producao')) : ((num) => num !== undefined && handlerClicEventNegadoPage(num))} 
            onMouseEnter={() => setMsgPanelBottom('Abre Modulo Produção.') }
            onMouseLeave={() => { ( !state.logado || !islogado ) ? setMsgPanelBottom('Aguardando Login Sistema...'): null }}
          />
          
          <ContentCustonImgPage
            num={5}
            open={true}
            pxheight={'100px'}
            pheight={'100px'}
            pwidth={'100px'}
            imgbtn={''}
            titlebtn={'Modulo Acabamento...'}
            onclick={ state.modulo ==='Acabamento' && ( state.logado || islogado ) ? (goto('/modulos/acabamento')) : ((num) => num !== undefined && handlerClicEventNegadoPage(num))} 
            onMouseEnter={() => setMsgPanelBottom('Abre Modulo Acabamento.') }
            onMouseLeave={() => { ( !state.logado || !islogado ) ? setMsgPanelBottom('Aguardando Login Sistema...'): null }}
          />
          
          <ContentCustonImgPage
            num={6}
            open={true}
            pxheight={'100px'}
            pheight={'100px'}
            pwidth={'100px'}
            imgbtn={''}
            titlebtn={'Modulo Expedição...'}
            onclick={ state.modulo ==='Expedição' && ( state.logado || islogado ) ? (goto('/modulos/expedicao')) : ((num) => num !== undefined && handlerClicEventNegadoPage(num))} 
            onMouseEnter={() => setMsgPanelBottom('Abre Modulo Expedição.') }
            onMouseLeave={() => { ( !state.logado || !islogado ) ? setMsgPanelBottom('Aguardando Login Sistema...'): null }}
          />

          <ContentCustonImgPage
            num={7}
            open={true}
            pxheight={'100px'}
            pheight={'100px'}
            pwidth={'100px'}
            imgbtn={''}
            titlebtn={'Modulo Administração...'}
            onclick={ state.modulo ==='Administração' && ( state.logado || islogado ) ? (goto('/modulos/administracao')) : ((num) => num !== undefined && handlerClicEventNegadoPage(num))} 
            onMouseEnter={() => setMsgPanelBottom('Abre Modulo Administração.') }
            onMouseLeave={() => { ( !state.logado || !islogado ) ? setMsgPanelBottom('Aguardando Login Sistema...'): null }}
          />

          <ContentCustonImgPage
            num={8}
            open={true}
            pxheight={'100px'}
            pheight={'100px'}
            pwidth={'100px'}
            imgbtn={pn_config}
            titlebtn={'Cadastros Config...'}
            onclick={ (state.modulo ==='config') && ( state.logado || islogado ) ? (goto('/modulos/config')) : ((num) => num !== undefined && handlerClicEventNegadoPage(num))} 
            onMouseEnter={() => setMsgPanelBottom('Abre Cadastros Config.') }
            onMouseLeave={() => { ( !state.logado || !islogado ) ? setMsgPanelBottom('Aguardando Login Sistema...'): null }}
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
                  value={chaveDigitada}
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
          
          <ContentSideMsgPagePanelBotton bordas="3px" label={'Menssagens : '} msg={msgpanelbottom} />
          
          <ContentSidePageBottonLabel open={true} istitl={true} title={'Voltar.: '}>
            <ContentSidePageBottonButton
              pxheight={'40px'}
              img={bt_setaleft}
              titbtn={'Voltar...'}
              onclick={goto('/')}
              onMouseEnter={() => setMsgPanelBottom('retorna a Home...') }
              onMouseLeave={() => { ( !state.logado || !islogado ) ? setMsgPanelBottom('Aguardando Login Sistema...'): null }}
            />
          </ContentSidePageBottonLabel>

          { startbtnchave ? (
            <ContentSidePageBottonLabel open={true} istitl={true} title={'Confirmar? : '}>
              <ContentPageButtonDefImgEnabled 
                pxheight={'40px'}
                img={bt_enviar}
                titbtn={'Checar...'}
                onclick={handlerCheckBtnOk}
                disabled={isdesable}
              />
            </ContentSidePageBottonLabel>
          ): null}  


{/* SO para Teste */}
            <ContentSidePageBottonLabel istitl={true} title={'Pageteste? : '}>
              <ContentPageButtonDefImgEnabled 
                pxheight={'40px'}
                img={bt_enviar}
                titbtn={'Pessoas...'}
                onclick={goto('/modulos/recepcao')}
                disabled={false}
              />
            </ContentSidePageBottonLabel>

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

      </LayoutHome>
    </ThemeProvider>
  );
};

export default Home;

