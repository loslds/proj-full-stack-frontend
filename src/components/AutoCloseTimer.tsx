
// C:\repository\proj-full-stack-frontend\src\components\AutoCloseTimer
import React from "react";

export const AutoCloseTimer: React.FC<{ onClose: () => void; seconds?: number }> = ({ onClose, seconds = 10 }) => {
  const [timer, setTimer] = React.useState(seconds);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          onClose();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [onClose]);

  return <p>Fechando automaticamente em {timer}s...</p>;
};
