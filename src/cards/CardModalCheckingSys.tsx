
// C:\repository\proj-full-stack-frontend\src\cards\CardCheckingSystema.tsx
import React from "react";
import * as Sy from './stylesSystem';
import { ContentModal } from '../modal/ContentModal';

//import { ContentSysMainItens } from "./ContentSysMainItens"
//import { CardHlpFooter1 } from "./CardHlpFooter1";

import * as M from '../modal/stylesModal';
import { CardModal } from '../modal/CardModal';
import { TitleModal } from '../modal/TitleModal';
import { CardButtonModal } from '../modal/CardButtonModal';
import bt_close from '../../assets/svgs/bt_close.svg';

interface PropsModalCardCheckingSys {
  ptop?: string;
  pwidth?: string;
  pheight?: string;
  titulo?: string;
  isbtn?: boolean;
  imgbm?: string;
  titbm?: string;
  onClose?: () => void;
  onAutoCloseCountdown?: (secondsLeft: number) => void; // callback mantido
}
export const CardModalCheckingSys: React.FC<PropsModalCardCheckingSys> = ({
  ptop,
  pwidth,
  pheight,
  titulo,
  onClose,
  onAutoCloseCountdown
  }) => {
    const [systemOk, setSystemOk] = React.useState<boolean | null>(null);

    React.useEffect(() => {
      if (systemOk === true) {
        let counter = 15; // contador interno
        const interval = setInterval(() => {
          counter -= 1;
          onAutoCloseCountdown?.(counter); // callback para Home ou outro lugar
          if (counter <= 0) {
            clearInterval(interval);
            onClose?.(); // fecha modal automaticamente
          }
        }, 1000);
        return () => clearInterval(interval);
      }
    }, [systemOk, onClose, onAutoCloseCountdown]);
    
    return (
      <M.Content>
        <ContentModal ptop={ptop} pwidth={pwidth} pheight={pheight}>
          <CardModal>
            <TitleModal  titulo={titulo} />
            <CardButtonModal imgbm={bt_close} titbm={"Fechar..."} onClick={onClose} />
          </CardModal>

          <h1>aqui</h1>

        </ContentModal>
      </M.Content>
    )
  };





  // ptop="15%" pwidth="60%" pheight="80%"
  // imgbm={bt_close}
  // titbm="Fechar..."
  // titulo="Verificação do Sistema"

  // Temporizador interno para auto fechamento do modal
//   React.useEffect(() => {
//     if (systemOk === true) {
//       let counter = 15; // contador interno
//       const interval = setInterval(() => {
//         counter -= 1;
//         onAutoCloseCountdown?.(counter); // callback para Home ou outro lugar
//         if (counter <= 0) {
//           clearInterval(interval);
//           onClose?.(); // fecha modal automaticamente
//         }
//       }, 1000);

//       return () => clearInterval(interval);
//     }
//   }, [onClose, onAutoCloseCountdown]);

//   // return (
//   //   M.Content>
//   //         <ContentModal ptop={ptop} pwidth={pwidth} pheight={pheight}>
//   //           <CardModal>
//   //             <TitleModal titulo={titulo} />
// //              <CardButtonModal imgbm={imgbm} titbm={titbm} onClick={onclose} />
//             </CardModal>
//             {children}
//           </ContentModal>
//         </M.Content>
      
    
    
    
    
    
  //   <ContentSysMainItens>
  //     {messages.map((m: string, i: number) => (
  //       <Sy.DivMessageLine key={i}>{m}</Sy.DivMessageLine>
  //     ))}
      
  //     {systemOk === true && (
        

  //       <Sy.DivStatus success>
  //         ✅ Sistema pronto, checado...
  //       </Sy.DivStatus>
  //     )}
    
  //     {systemOk === false && (
  //       <Sy.DivStatus>
  //         ❌ Verificação falhou. Entre em contato com o administrador.
  //       </Sy.DivStatus>
  //     )}
    
  //     {systemOk === null && (
  //       <Sy.DivStatus>
  //         ⏳ Em progresso...
  //       </Sy.DivStatus>
  //     )}
    
  //     <CardHlpFooter1 
  //       onclosesair={onClose}
  //       label="ROTINA → INICIAL → HOME"
  //       texto={
  //         systemOk === false
  //           ? "A verificação falhou. click na imagem abaixo ou aqui >"
  //           : "Para sair, aguarde a conclusão da verificação..."
  //       }  
  //     />
  //     <Sy.DivStatus>
  //         ⚠️ Para sair, aguarde a conclusão da verificação..
  //     </Sy.DivStatus>
  //   </ContentSysMainItens>
  // );
// };

