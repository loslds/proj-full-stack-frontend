
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

import lg_sys from '../../assets/svgs/lg_sys.svg';
import bt_helppg from '../../assets/svgs/bt_helppg.svg';
import bt_avatar from '../../assets/pngs/bt_avatar.png';
import bt_resgate from '../../assets/svgs/bt_resgate.svg';
import lg_negado from '../../assets/svgs/lg_negado.svg';
import bt_close from '../../assets/svgs/bt_close.svg';
import pn_config from '../../assets/svgs/pn_config.svg';
import pn_recepcao from '../../assets/svgs/pn_recepcao.svg';
import bt_enviar from '../../assets/svgs/bt_enviar.svg';

const Home: React.FC = () => {
  
  const { state, dispatch } = useAcessoContext();

  const [startbtnchave, setStartBtnChave] = React.useState(false);
  const [buscachave, setBuscaChave] = React.useState(false);
  //const chaveDt = DateToCecular(new Date());
  const [ischavekey, setIsChaveKey] = React.useState(false);
  const [chaveDigitada, setChaveDigitada] = React.useState('');
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
  };

  React.useEffect(() => {
    let ll = chaveDigitada.length;
    let rtn = false;
  
    setIsChaveKey(false);

    if (ll === 0 ) {
      setMsgPanelBottom('Aguardando...');
      setbtnok(false);
      setIsDesable(true);
    } else if (ll > 0 && ll < 8) {
      setMsgPanelBottom('Edite Chave...');
      setbtnok(false);
      setIsDesable(true);
    } else if (chaveDigitada.length === 8) {
      rtn = CheckDateToCecular(chaveDigitada);
      if (rtn) {
        setIsChaveKey(true);
        setMsgPanelBottom('Clique para Cofirmar.');
        setbtnok(true);
        setStartBtnChave(true);
      } else {
        setMsgPanelBottom('Chave inválida!');
        setbtnok(false);
      }
      setIsDesable(false);
    }
  },[chaveDigitada]);
  
  const handlerCheckBtnOk = () => {
    dispatch({ type: UseAcessoActions.SET_ID_SETOR, payload: 0 });
    dispatch({ type: UseAcessoActions.SET_SETOR, payload: 'Home'});
    if (btnok) {
      // Exibe a mensagem temporária por 5 segundos
      if (ischavekey) {
        setMsgPanelBottom('Sucesso!...');
        dispatch({ type: UseAcessoActions.SET_CHVKEY, payload: chaveDigitada});
        dispatch({ type: UseAcessoActions.SET_LOGADO, payload: true });
      }
      setbtnok(false);
      setBuscaChave(false);
    } 
    setMsgPanelBottom('');
  };

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
      1: '/visitante',
      2: '/recepcao',
      3: '/design',
      4: '/producao',
      5: '/acabamento',
      6: '/expedicao',
      7: '/administracao',
      8: '/config',
      
    };
    
    const targetRoute = routes[num]; // Obtém a rota correspondente
    
    if (!ischavekey) {
      setCardNegadoPage(true);
    } else if (targetRoute) {
      goto(targetRoute);
    };
  }, [ischavekey]);


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
            titlebtn={'Setor Visitantes..'}
            onclick={ state.setor ==='Visitante' || ischavekey ? (goto('/visitante')) : ((num) => num !== undefined && handlerClicEventNegadoPage(num))} 
            onMouseEnter={() => setMsgPanelBottom('Abre Setor Visitante.') }
            onMouseLeave={() => setMsgPanelBottom('')}
          />

        <ContentCustonImgPage
            num={2}
            open={true}
            pxheight={'100px'}
            pheight={'100px'}
            pwidth={'100px'}
            imgbtn={pn_recepcao}
            titlebtn={'Setor Recepção...'}
            onclick={ state.setor ==='Recepção' || ischavekey ? (goto('/recepcao')) : ((num) => num !== undefined && handlerClicEventNegadoPage(num))} 
            onMouseEnter={() => setMsgPanelBottom('Abre Setor Recepção.') }
            onMouseLeave={() => setMsgPanelBottom('')}
          />
          
          <ContentCustonImgPage
            num={3}
            open={true}
            pxheight={'100px'}
            pheight={'100px'}
            pwidth={'100px'}
            imgbtn={''}
            titlebtn={'Setor Design...'}
            onclick={ state.setor ==='Design' || ischavekey ? (goto('/design')) : ((num) => num !== undefined && handlerClicEventNegadoPage(num))} 
            onMouseEnter={() => setMsgPanelBottom('Abre Setor Design.') }
            onMouseLeave={() => setMsgPanelBottom('')}
          />

          <ContentCustonImgPage
            num={4}
            open={true}
            pxheight={'100px'}
            pheight={'100px'}
            pwidth={'100px'}
            imgbtn={''}
            titlebtn={'Setor Produção...'}
            onclick={ state.setor ==='Produção' || ischavekey ? (goto('/producao')) : ((num) => num !== undefined && handlerClicEventNegadoPage(num))} 
            onMouseEnter={() => setMsgPanelBottom('Abre Setor Produção.') }
            onMouseLeave={() => setMsgPanelBottom('')}
          />
          
          <ContentCustonImgPage
            num={5}
            open={true}
            pxheight={'100px'}
            pheight={'100px'}
            pwidth={'100px'}
            imgbtn={''}
            titlebtn={'Setor Acabamento...'}
            onclick={ state.setor ==='Acabamento' || ischavekey ? (goto('/acabamento')) : ((num) => num !== undefined && handlerClicEventNegadoPage(num))} 
            onMouseEnter={() => setMsgPanelBottom('Abre Setor Acabamento.') }
            onMouseLeave={() => setMsgPanelBottom('')}
          />
          
          <ContentCustonImgPage
            num={6}
            open={true}
            pxheight={'100px'}
            pheight={'100px'}
            pwidth={'100px'}
            imgbtn={''}
            titlebtn={'Setor Expedição...'}
            onclick={ state.setor ==='Expedição' || ischavekey ? (goto('/expedicao')) : ((num) => num !== undefined && handlerClicEventNegadoPage(num))} 
            onMouseEnter={() => setMsgPanelBottom('Abre Setor Expedição.') }
            onMouseLeave={() => setMsgPanelBottom('')}
          />

          <ContentCustonImgPage
            num={7}
            open={true}
            pxheight={'100px'}
            pheight={'100px'}
            pwidth={'100px'}
            imgbtn={''}
            titlebtn={'Setor Administração...'}
            onclick={ state.setor ==='Administração' || ischavekey ? (goto('/administracao')) : ((num) => num !== undefined && handlerClicEventNegadoPage(num))} 
            onMouseEnter={() => setMsgPanelBottom('Abre Setor Administração.') }
            onMouseLeave={() => setMsgPanelBottom('')}
          />

          <ContentCustonImgPage
            num={8}
            open={true}
            pxheight={'100px'}
            pheight={'100px'}
            pwidth={'100px'}
            imgbtn={pn_config}
            titlebtn={'Cadastros Config...'}
            onclick={ (state.setor ==='config') || ischavekey ? (goto('/config')) : ((num) => num !== undefined && handlerClicEventNegadoPage(num))} 
            onMouseEnter={() => setMsgPanelBottom('Abre Cadastros Config.') }
            onMouseLeave={() => setMsgPanelBottom('')}
          />

          {ischavekey ? <h1>Chave correta : {state.chvkey}</h1> : null}
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
          
          <ContentSideMsgPagePanelBotton bordas="3px" label={'Menssagens : '} msg={msgpanelbottom}></ContentSideMsgPagePanelBotton>
          
            <ContentSidePageBottonLabel istitl={true} title={'Voltar.: '}>
              <ContentSidePageBottonButton
                pxheight={'40px'}
                img={''}
                titbtn={'Voltar...'}
                onclick={goto('/')}
                onMouseEnter={() => setMsgPanelBottom('retorna a Home...') }
                onMouseLeave={() => setMsgPanelBottom('')}
              />
            </ContentSidePageBottonLabel>

            { startbtnchave ? (
              <ContentSidePageBottonLabel istitl={true} title={'Confirmar? : '}>
                <ContentPageButtonDefImgEnabled 
                  pxheight={'40px'}
                  img={bt_enviar}
                  titbtn={'Checar...'}
                  onclick={handlerCheckBtnOk}
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
      </LayoutHome>
    </ThemeProvider>
  );
};

export default Home;

{/* 

            {btncontinua ? (
              <ContentSidePageBottonLabel
                istitl={btncontinua}
                title={'Continuar.: '}
              >
                <ContentSidePageBottonButton
                  pxheight={'40px'}
                  img={setadir}
                  titbtn={'Continuar...'}
                  onclick={goto('/login1')}
                />
              </ContentSidePageBottonLabel>
            ) : null}

            {btnresgatar ? (
              <ContentSidePageBottonLabel
                istitl={btnresgatar}
                title={'Resgatar...: '}
              >
                <ContentSidePageBottonButton
                  pxheight={'40px'}
                  img={setadir}
                  titbtn={'Resgatar...'}
                  onclick={goto('/resgate1')}
                />
              </ContentSidePageBottonLabel>
            ) : null}

{ ischecar ? (
          <PageModal
            ptop={'1%'}
            pwidth={'80%'}
            pheight={'95%'}
            imgbm={bt_close}
            titbm="Fechar..."
            titulo={'Chechk DataBase.'}
            onclose={() => setIsChecar(false)}
          >
            <CardCheckingServices 
              imgcardpage={lg_sys}
              checando= {checked}
              onclosesair={() => setIsChecar(false)}
              //checked={checando}
            />
          </PageModal>
        ) : null}
 */}










//import { CardDesenvolver }  from '../../cards/CardDesenvolver';
//import { CardKeyMaster } from '../../cards/CardKeyMaster';
//import { CardCheckingServices } from '../../cards/CardCheckingServices';
//import { checkConnection, checkTables } from '../../api/dbApi'; // Importa as funções da API

// import React from 'react';
// import { ThemeProvider } from 'styled-components';
// import light from '../../themes/light';
// import dark from '../../themes/dark';
// import { useNavigate } from 'react-router-dom';

// import LayoutHome from '../layouts/LayoutHome';
// import { PageModal } from './PageModal';
// import { ContentItensBody } from '../ContentItensBody';
// import { ContentCustonImgPage } from '../ContentCustonImgPage';

// import logo_sys from '../../assets/svgs/logo_sys.svg';
// import jr_circ from '../../assets/svgs/jr_circ.svg';
// import bt_help from '../../assets/svgs/bt_help.svg';
// import bt_close from '../../assets/svgs/bt_close.svg';
// import bt_avatar from '../../assets/svgs/bt_avatar.svg';
// import bt_resgate from '../../assets/svgs/bt_resgate.svg';
// import lg_negado from '../../assets/svgs/lg_negado.svg';
// import lg_recepcao from '../../assets/svgs/lg_recepcao.svg';

// import { CardHomeSys } from '../../cards/CardHomeSys';
// import { CardHomePg } from '../../cards/CardHomePg';
// import { CardAcessoNeg } from '../../cards/CardAcessoNeg' ;

// const Home = () => {
//   const [theme, setTheme] = React.useState(light);
//   const [ischeck, setIscheck] = React.useState(false);
//   const ToggleTheme = () => {
//     if (theme.name === 'dark') {
//       setTheme(light);
//       setIscheck(true);
//     } else {
//       setTheme(dark);
//       setIscheck(false);
//     }
//   };
//   const navigate = useNavigate();

//   const [logado, setLogado] = React.useState(false);
//   const [callmodulo, setCallModulo] = React.useState('');

//   const goto = (path: string) => {
//     setCallModulo(path);

//     if (!logado && (callmodulo === '/login' || callmodulo === '/resgate')) {
//       return () => {
//         navigate(path);
//       };
//     } else {
//       if (logado) {
//         if ( callmodulo === 'Visitante' || callmodulo === 'Master') {
//           path = '/visitante';
//         } else if ( callmodulo === 'Recepção' || callmodulo === 'Master') {
//           path = '/recepcao';
//         } else if ( callmodulo === 'Design' || callmodulo === 'Master') {
//           path = '/design';
//         } else if ( callmodulo === 'Produção' || callmodulo === 'Master') {
//           path = '/producao';
//         } else if ( callmodulo === 'Acabamento' || callmodulo === 'Master') {
//           path = '/acabamento';
//         } else if ( callmodulo === 'Expedição' || callmodulo === 'Master') {
//           path = '/expedicao';
//         } else if ( callmodulo === 'Administração' || callmodulo === 'Master') {
//           path = '/administacao';
//         } else if ( callmodulo === 'Config' || callmodulo === 'Master') {
//           path = '/config';
//         };
//         return () => {
//           navigate(path);
//         };
//       };
//     };
//   };

//   const [logoSys, setLogoSys] = React.useState(false);
//     const handlerLogoSys = React.useCallback(() => {
//     setLogoSys((oldState) => !oldState);
//   }, []);

//   const [helppage, setHelpPage] = React.useState(false);
//   const handlerHelpPage = React.useCallback(() => {
//     setHelpPage((oldState) => !oldState);
//   }, []);

//   const [mainhelp, setMainHelp] = React.useState(false);

//   return (
//     <ThemeProvider theme={theme}>
//       <LayoutHome
//         imgsys={logo_sys}
//         titbtnsys="Home..."
//         onclicksys={handlerLogoSys}
//         titlepg="Home"
//         imgbtnhlppg={bt_help}
//         titbtnhlppg="Help Page."
//         onclickhlppg={handlerHelpPage}
//         imgbtnopen={bt_avatar}
//         titbtnopen="Login..."
//         onclickopen={() => {}}
//         imgbtnreg={bt_resgate}
//         titbtnreg="botaoResgate"
//         onclickreg={goto('/resgate')}
//         onchange={ToggleTheme}
//         ischeck={ischeck}
//       >
//         <ContentItensBody>
//           <ContentCustonImgPage
//             open={true}
//             pxheight={'165px'}
//             pheight={'165px'}
//             pwidth={'165px'}
//             imgbtn={''}
//             titlebtn={'Visitante...'}
//             onclick={ logado ? (goto('/visitante')) : (() => setMainHelp(true))}
//           />

//           {logoSys ? (
//             <PageModal
//               ptop={'1%'}
//               pwidth={'65%'}
//               pheight={'90%'}
//               imgbm={bt_close}
//               titbm="Fechar..."
//               titulo={'Help Home Sistema.'}
//               onclose={() => setLogoSys(false)}
//             >
//               <CardHomeSys imgcardsys={jr_circ} />
//             </PageModal>
//           ) : null}

//         <ContentCustonImgPage
//             open={true}
//             pxheight={'165px'}
//             pheight={'165px'}
//             pwidth={'165px'}
//             imgbtn={lg_recepcao}
//             titlebtn={'Recepção.'}
//             onclick={goto('/recepcao')}
//           />

//           {helppage ? (
//             <PageModal
//               ptop={'1%'}
//               pwidth={'65%'}
//               pheight={'90%'}
//               imgbm={bt_close}
//               titbm="Fechar..."
//               titulo={'Help Conteúdo Home.'}
//               onclose={() => setHelpPage(false)}
//             >
//               <CardHomePg imgcardpg={logo_sys} />
//             </PageModal>
//           ) : null}

//           {mainhelp ? (
//             <PageModal
//               ptop="111px"
//               pwidth="30%"
//               pheight="25%"
//               titulo='" A T E N Ç Ã O "'
//               imgbm={bt_close}
//               titbm="Fechar..."
//               onclose={() => {
//                 setMainHelp(false);
//               }}
//             >
//               <CardAcessoNeg imgcardneg={lg_negado} />
//             </PageModal>
//           ) : null}
//         </ContentItensBody>
//       </LayoutHome>
//     </ThemeProvider>
//   );
// };

// export default Home;
