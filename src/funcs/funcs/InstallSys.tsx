
//C:\repository\proj-full-stack-frontend\src\components\InstallSys.tsx
// components/InstallSys.ts
export async function installSystem(
  onMessage: (msg: string) => void
): Promise<boolean> {
  try {
    onMessage("⏳ Verificando conexão com MySQL...");
    await fetch("http://localhost:5000/install/connection");

    onMessage("📦 Checando/criando tabelas...");
    await fetch("http://localhost:5000/install/check-tables", { method: "POST" });

    onMessage("🔄 Sincronizando dados...");
    await fetch("http://localhost:5000/install/sync", { method: "POST" });

    onMessage("✅ Sistema pronto.");
    return true;

  } catch (err) {
    if (err instanceof Error) {
      onMessage(`❌ Erro: ${err.message}`);
    } else {
      onMessage("❌ Erro inesperado durante verificação.");
    }
    return false;
  }
}

