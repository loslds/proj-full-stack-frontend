
// C:\repository\proj-full-stack-frontend\src\cards\CardLogoffMaster.tsx
import React from "react";
import * as S from './stylesSystem';
import { ContentLogoff } from "./ContentLogoff";
import { ContentPanelImgBetween } from "./ContentPanelImgBetween";
import { ContentLogoffMainCollum } from "./ContentLogoffMainCollum";
import { ContentLogoffTitle } from "./ContentLogoffTitle";
import { ContentLogoffMainButtons } from "./ContentLogoffMainButtons";
import { ContentLogoffLabelButtom } from "./ContentLogoffLabelButtom";
import { ContentLogoffButtons } from "./ContentLogoffButtons";

import btn_def_q_voltar from "../../assets/defaults/btn/btn_def_q_voltar.svg"
import btn_def_q_continuar from "../../assets/defaults/btn/btn_def_q_continuar.svg"

interface PropsCardLogoff {
  // ContentLogoffMaster
  pptop?: string;
  ppwidth?: string;
  bordas?: string;

  // ContentPanelImgBetween (imagem)
  pxheight?: string;
  pxwidth?: string;
  imgpnl?: string;
  onclickpnl?: () => void;

  // ContentMainCollumMaster
  open?: boolean;
  width?: string;
  height?: string;
  titulo?: string;

  // labels dos botões
  labelConfirm?: string;
  labelCancel?: string;

  // botoes
  widthbtn?: string;
  heightbtn?: string;

  // texto extra vindo de fora
  msg?: string;

  // auto-close
  seconds?: number; // default 30
  resetKey?: string | number;

  // eventos
  onConfirm?: () => void; // SIM
  onCancel?: () => void;  // NÃO
  onClose?: () => void;   // auto-close

  onAutoCloseCountdown?: (secondsLeft: number) => void;

  children?: React.ReactNode;
}

export const CardLogoffMaster: React.FC<PropsCardLogoff> = ({
  pptop,
  ppwidth,
  bordas,

  imgpnl,
  pxheight,
  pxwidth,
  onclickpnl,

  open,
  width,
  height,

  titulo,
  
  widthbtn,
  heightbtn,

  labelConfirm = "Confirmar",
  labelCancel = "Cancelar",

  msg,

  seconds = 30,
  resetKey,

  onConfirm,
  onCancel,
  onClose,
  onAutoCloseCountdown,

  children,
}) => {
  const [secondsLeft, setSecondsLeft] = React.useState<number>(seconds);
  const intervalRef = React.useRef<number | null>(null);

  // reset (quando abrir modal / resetKey muda / seconds muda)
  React.useEffect(() => {
    setSecondsLeft(seconds);
  }, [seconds, resetKey]);

  // timer robusto (não cria múltiplos intervals)
  React.useEffect(() => {
    // se já tem interval rodando, não cria outro
    if (intervalRef.current != null) return;

    // se já acabou, não inicia
    if (secondsLeft <= 0) return;

    intervalRef.current = window.setInterval(() => {
      setSecondsLeft((prev) => {
        const next = prev - 1;

        onAutoCloseCountdown?.(next);

        if (next <= 0) {
          if (intervalRef.current != null) {
            window.clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
          onClose?.();
          return 0;
        }

        return next;
      });
    }, 1000);

    return () => {
      if (intervalRef.current != null) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
    // IMPORTANTE: não depende de secondsLeft para não recriar interval a cada tick
  }, [secondsLeft, onClose, onAutoCloseCountdown]);

  // se secondsLeft for resetado para >0 e interval tiver sido limpo, o effect acima reinicia
  React.useEffect(() => {
    if (secondsLeft > 0 && intervalRef.current == null) {
      // força re-execução do effect que cria interval
      // (o próprio secondsLeft já dispara o effect)
    }
  }, [secondsLeft]);

  const handleConfirm = React.useCallback(() => {
    console.log("[LOGOFF MASTER] Confirm clicado");
    onConfirm?.();
  }, [onConfirm]);

  const handleCancel = React.useCallback(() => {
    console.log("[LOGOFF MASTER] Cancel clicado");
    onCancel?.();
  }, [onCancel]);

  return (
    <ContentLogoff pptop={pptop} ppwidth={ppwidth} bordas={bordas}>
      
      <ContentPanelImgBetween
        pxheight={pxheight}
        pxwidth={pxwidth}
        imgpnl={imgpnl}
        onclickpnl={onclickpnl}
      />

      <ContentLogoffMainCollum open={open} width={width} height={height}>
        
        <ContentLogoffTitle titulo={titulo} />

        {msg ? <p>{msg}</p> : null}
        <p>{`Tempo ocioso: ${secondsLeft}s`}</p>

        <ContentLogoffMainButtons>
          
          <ContentLogoffLabelButtom>
            <label>{labelConfirm}</label>
            <span>...</span>
            
            <ContentLogoffButtons>
              <S.ButtonLogoffImg
                $width={widthbtn}
                $height={heightbtn}
                $img={btn_def_q_continuar}
                title="Confirmar..."
                onClick={handleConfirm}
              />
            </ContentLogoffButtons>
          
            <span>......</span>
          </ContentLogoffLabelButtom>

          <ContentLogoffLabelButtom>
            <label>{labelCancel}</label>
            <span>...</span>
          
            <ContentLogoffButtons>
              <S.ButtonLogoffImg
                $width={heightbtn}
                $height={heightbtn}
                $img={btn_def_q_voltar}
                title="Cancelar..."
                onClick={handleCancel}
              />
            </ContentLogoffButtons>
          
            <p>...</p>
          </ContentLogoffLabelButtom>
        </ContentLogoffMainButtons>

        {children}
      </ContentLogoffMainCollum>
    </ContentLogoff>
  );
};
