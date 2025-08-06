 // Gerador de chave para enviar ao email como conferência do acesso individual
interface PropsGeradorstraleatorio {
  modo? : number;
  tamanho? : number;
}
export function Geradorstraleatorio( {modo = 0, tamanho } : PropsGeradorstraleatorio ) {
  /**5 retornar chave de enviar para email */
  /**5 retornar chave de enviar para email */
  let strAleatoria = '';
  let strtmho: number;

  // Define o tamanho com base no modo
  switch (modo) {
    case 5:
      strtmho = 5;
      break;
    case 6:
      strtmho = 6;
      break;
    case 8:
      strtmho = 8;
      break;
    default:
      // Se `tamanho` for undefined, usa 30 como padrão
      strtmho = tamanho ?? 30; 
      break;
  }
  const caracteres =  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < strtmho; i++) {
    strAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }
  // retorna Chave para envio ao Email
  return strAleatoria;
}
 