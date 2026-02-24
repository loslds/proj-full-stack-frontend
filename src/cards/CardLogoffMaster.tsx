
// C:\repository\proj-full-stack-frontend\src\cards\CardLogoffMaster.tsx
import React from "react";
import * as Sy from './stylesSystem';

import { ContentLogoffMaster } from "./ContentLogoffMaster";
import { ContentPanelImgBetween } from "./ContentPanelImgBetween";

import { ContentSBButton } from '../components/sidebar/ContentSBButton';

import btn_enviar from '../assets/defaut/botao/btn_def_q_enviar.svg';
import btn_voltar from '../assets/defaut/botao/btn_def_q_voltar.svg';

interface PropsCardLogoffMaster {
  pptop? : string;
  ppwidth?: string;
  bordas?: string;

  pxheight?: string;
  pxwidth?: string;
  imgpnl?: string;
  onclickpnl?: () => void;

  

  children?: React.ReactNode;
  txtH1?: string;
  txtlabel?: string;
  txtlabel1?: string;
  txtp?: string;

  // texto extra vindo de fora
  msg?: string;

  // tempo do auto-close (padrão 30s)
  seconds?: number;

  // força reset do contador quando mudar (ex: abrir modal)
  resetKey?: string | number;

  // eventos
  onConfirm?: () => void; // SIM
  onCancel?: () => void;  // NÃO
  onClose?: () => void;   // auto-close (ou fechar por X)

  onAutoCloseCountdown?: (secondsLeft: number) => void;
}

export const CardLogoffMaster: React.FC<PropsCardLogoffMaster> = ({
  pptop,
  ppwidth,
  bordas,
  imgpnl,
  pxheight,
  pxwidth,
  onclickpnl,

  

  children,
  txtH1,
  txtlabel,
  txtlabel1,
  txtp,
  msg,

  seconds = 30,
  resetKey,

  onConfirm,
  onCancel,
  onClose,
  onAutoCloseCountdown,
}) => {
  const [secondsLeft, setSecondsLeft] = React.useState<number>(seconds);

  // Reinicia contador quando:
  // - abre modal novamente (resetKey muda)
  // - seconds muda
  React.useEffect(() => {
    setSecondsLeft(seconds);
  }, [seconds, resetKey]);

  // Contagem regressiva
  React.useEffect(() => {
    if (secondsLeft <= 0) return;

    const id = window.setInterval(() => {
      setSecondsLeft((prev) => {
        const next = prev - 1;
        onAutoCloseCountdown?.(next);

        if (next <= 0) {
          // auto-close
          onClose?.();
          return 0;
        }
        return next;
      });
    }, 1000);

    return () => window.clearInterval(id);
  }, [secondsLeft, onClose, onAutoCloseCountdown]);

  const handleConfirm = React.useCallback(() => {
    onConfirm?.();
  }, [onConfirm]);

  const handleCancel = React.useCallback(() => {
    onCancel?.();
  }, [onCancel]);

  const msgCronometro = `Tempo ocioso: ${secondsLeft}s`;

  return (
    <ContentLogoffMaster pptop={pptop} ppwidth={ppwidth} bordas={bordas}>
      <ContentPanelImgBetween
        pxheight={pxheight}
        pxwidth={pxwidth}
        imgpnl={imgpnl}
        onclickpnl={onclickpnl}
      />

        {txtH1 ? <h1>{txtH1}</h1> : null}

        <Sy.ContainerPanelImgBetween>
          { txtlabel ? <label>{txtlabel}</label> : null }
        </Sy.ContainerPanelImgBetween>
        <ContentSBButton img={btn_enviar} onClick={handleConfirm}/>
        
        <Sy.ContainerPanelImgBetween>
          {txtlabel1 ? <label>{txtlabel1}</label> : null}
        </Sy.ContainerPanelImgBetween>
        <ContentSBButton img={btn_voltar} onClick={handleCancel}/>
        
        
        <Sy.ContainerPanelImgBetween>

        {txtp ? <p>{txtp}</p> : null}

        {/* mensagem vinda de fora */}
        {msg ? <p>{msg}</p> : null}

        {/* cronômetro */}
        <p>{msgCronometro}</p>
      

        {children}
      </Sy.ContainerPanelImgBetween>
    </ContentLogoffMaster>
  );
};