
export function DateToCecular(date: Date | string): string {

  // Se o parâmetro for uma string, converte para Date
  const dateObj = typeof date === 'string' ? new Date(date) : date;

  // Verifica se a data é válida
  if (isNaN(dateObj.getTime())) {
    throw new Error('Data inválida');
  }

  const year = dateObj.getFullYear(); // Obtém o ano (ex: 2025)
  const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // Obtém o mês (ex: 07)
  const day = String(dateObj.getDate()).padStart(2, '0'); // Obtém o dia (ex: 02)

  return `${year}${month}${day}`; // Retorna a data formatada (ex: 20250702)
}


