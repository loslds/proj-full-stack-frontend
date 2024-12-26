import React from 'react';
import { ThemeProvider } from 'styled-components';
import light from '../../themes/light';
import dark from '../../themes/dark';
import { useNavigate } from 'react-router-dom';
import LayoutHome from '../layouts/LayoutHome';
import lg_sys from '../../assets/svgs/lg_sys.svg';
import bt_help from '../../assets/svgs/bt_help.svg';
import bt_avatar from '../../assets/svgs/bt_avatar.svg';
import bt_resgate from '../../assets/svgs/bt_resgate.svg';

import bt_close from '../../assets/svgs/bt_close.svg';
//import jr_circ from '../../assets/svgs/jr_circ.svg';

import { CardHlpHomeLogo } from '../../cards/CardHlpHomeLogo';
import { CardHlpHomePage } from '@/cards/CardHlpHomePage';

import { ContentItensBody } from '../ContentItensBody';
import { ContentCustonImgPage } from '../ContentCustonImgPage';
import bt_visitante from '../../assets/svgs/bt_visitante.svg';

import { PageModal } from './PageModal';

const Home: React.FC = () => {
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

  const [cardlogo, setCardLogo] = React.useState(false);
  const handlerCardLogo = React.useCallback(() => {
    setCardLogo((oldState) => !oldState);
  }, []);

  const [cardpage, setCardPage] = React.useState(false);
  const handlerCardPage = React.useCallback(() => {
    setCardPage((oldState) => !oldState);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <LayoutHome
        imgsys={lg_sys}
        titbtnsys="Home Sistema..."
        onclicksys={handlerCardLogo}
        titlepg="Home"
        imgbtnhlppg={bt_help}
        titbtnhlppg="Help Page..."
        onclickhlppg={handlerCardPage}
        imgbtnlogin={bt_avatar}
        titbtnlogin="Login..."
        onclicklogin={() => {}}
        imgbtnresg={bt_resgate}
        titbtnresg="Resgatar Acesso..."
        onclickresg={goto('/resgatar')}
        onchange={ToggleTheme}
        ischeck={ischeck}
      >
        <ContentItensBody>
          <ContentCustonImgPage
            open={true}
            pxheight={'165px'}
            pheight={'165px'}
            pwidth={'165px'}
            imgbtn={bt_visitante}
            titlebtn={'Visitante...'}
            onclick={() => {}}
            //onclick={ logado ? (goto('/visitante')) : (() => setMainHelp(true))}
          />
        </ContentItensBody>

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
        {cardpage ? (
          <PageModal
            ptop={'1%'}
            pwidth={'80%'}
            pheight={'95%'}
            imgbm={bt_close}
            titbm="Fechar..."
            titulo={'Help Conteúdo Home.'}
            onclose={() => setCardPage(false)}
          >
            <CardHlpHomePage
              imgcardpage={lg_sys}
              onclosesair={() => setCardPage(false)}
            />
          </PageModal>
        ) : null}
      </LayoutHome>
    </ThemeProvider>
  );
};

export default Home;

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
