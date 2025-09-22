
//C:\repository\proj-full-stack-frontend\src\components\InstallSys.tsx
import React, { useEffect, useState } from "react";

interface Props {
  onFinish: () => void;
}

const InstallSys: React.FC<Props> = ({ onFinish }) => {
  const [status, setStatus] = useState<string>("⏳ Inicializando...");

  useEffect(() => {
    async function setup() {
      try {
        setStatus("⏳ Verificando conexão com MySQL...");
        await fetch("http://localhost:3000/install/connection");

        setStatus("📦 Checando/criando tabelas...");
        await fetch("http://localhost:3000/install/check-tables", { method: "POST" });

        setStatus("🔄 Sincronizando dados...");
        await fetch("http://localhost:3000/install/sync", { method: "POST" });

        setStatus("✅ Instalação concluída.");
        await new Promise((res) => setTimeout(res, 1000));

        onFinish();
      } catch (err) {
        if (err instanceof Error) {
          //Se for um erro padrão do JS (Error), mostra a mensagem certinha.
          setStatus(`❌ Erro durante instalação: ${err.message}`); 
        } else {
          // Se for outra coisa (ex: string, objeto inesperado), mostra "Erro inesperado".
          setStatus("❌ Erro inesperado durante instalação.");
        }
      }   
    }

    setup();
  
  }, [onFinish]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      <p className="mt-4 text-lg font-semibold">{status}</p>
    </div>
  );
};

export default InstallSys;
