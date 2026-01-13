
// C:\repository\proj-full-stack-frontend\src\components\AutoCloseTimer.tsx
import React from "react";

type AutoCloseTimerProps = {
  seconds: number;
  onClose: () => void;
};

export const AutoCloseTimer: React.FC<AutoCloseTimerProps> = ({ seconds, onClose }) => {
  const [secondsLeft, setSecondsLeft] = React.useState<number>(() => Math.max(0, seconds));

  // mantém a versão mais recente do callback sem recriar intervalos
  const onCloseRef = React.useRef(onClose);
  React.useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  // reinicia contagem quando "seconds" mudar
  React.useEffect(() => {
    setSecondsLeft(Math.max(0, seconds));
  }, [seconds]);

  // cria o timer (interval) e reduz a cada 1s
  React.useEffect(() => {
    if (secondsLeft <= 0) return;

    const id = window.setInterval(() => {
      setSecondsLeft((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => window.clearInterval(id);
  }, [secondsLeft]);

  // quando chegar em 0, chama onClose (fora do render)
  React.useEffect(() => {
    if (secondsLeft === 0) {
      onCloseRef.current();
    }
  }, [secondsLeft]);

  return (
    <div>
      <small>Fechando em {secondsLeft}s...</small>
    </div>
  );
};

export default AutoCloseTimer;








// // C:\repository\proj-full-stack-frontend\src\components\AutoCloseTimer
// import React from "react";

// export const AutoCloseTimer: React.FC<{ onClose: () => void; seconds?: number }> = ({ onClose, seconds = 10 }) => {
//   const [timer, setTimer] = React.useState(seconds);

//   React.useEffect(() => {
//     const interval = setInterval(() => {
//       setTimer(prev => {
//         if (prev <= 1) {
//           clearInterval(interval);
//           onClose();
//           return 0;
//         }
//         return prev - 1;
//       });
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [onClose]);

//   return <p>Fechando automaticamente em {timer}s...</p>;
// };


