import { useState } from 'react';
import { parsePhoneNumberFromString } from 'libphonenumber-js';

export function ErroEdicao(nrerro: number) {
  const [isrtn, setIsRtn] = useState(true);
  //let rtn = true;
  if (nrerro == 1) {
    alert('Determine edição do Email...');
    setIsRtn(false);
  }
  if (nrerro == 2) {
    return alert('Determine edição do PassWord...');
    setIsRtn(false);
  }
  return isrtn;
}
///////////////////////////////////////////////////////
// Função para validar email
export function isValidarEmail(email: string): boolean {
  // normaliza email para caracteres caixa baixa
  const normalizedEmail = email.toLowerCase();
  // Expressão regular para email no seu formato xxxx?xxxx@xxxx.xxx???
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Verifica se o email tem os caracteres desejados
  return emailRegex.test(normalizedEmail);
}
// Funçao para Validar celular
export function isValidarCell(cell: string): boolean {
  // normaliza nr cell dos espaços em branco
  const cleaned = cell.replace(/\D/g, '');
  // Expressão regular verificar se são somente numeros
  const cellRegex = /^\d{11}$/;
  // Verifica se o número tem exatamente 11 dígitos
  return cellRegex.test(cleaned);
}
// validar Documento CPF
export function isValidarCpf(cpf: string): boolean {
  // normaliza nr cell dos espaços em branco
  const cleaned = cpf.replace(/\D/g, '');
  // Expressão regular verificar se são somente numeros
  const cpfRegex = /^\d{11}$/;
  // Verifica se o número tem exatamente 11 dígitos
  return cpfRegex.test(cleaned);
}

export function VerPergResp(str1: string, str2: string): boolean {
  // Verifica se as strings têm o mesmo comprimento
  if (str1.length !== str2.length) {
    return false;
  }
  // Compara cada caractere das strings
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      return false; // Retorna falso ao encontrar caracteres diferentes
    }
  }
  return true; // Retorna verdadeiro se todos os caracteres forem iguais
}

// Função para normalizar (mascarar) email
export function MasckedEmail(email: string): string {
  const normalizedEmail = email.toLowerCase();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(normalizedEmail)) {
    return normalizedEmail;
  }

  return '';
}
///////////////////////////////////////////////////////////////////////////////
// Validar telefone 0800
export function isFone0800Valid(fone0800: string): boolean {
  // Remove todos os caracteres não numéricos
  const cleaned = fone0800.replace(/\D/g, '');
  // Expressão regular para telefone 0800 no formato 0800-XXXXXXX
  const fone0800Regex = /^0800\d{7}$/;

  // Verifica se o número segue o formato 0800XXXXXXXX
  return fone0800Regex.test(cleaned);
}

// Mascarar telefone 0800
export function MasckedFone0800(fone0800: string): string {
  const cleaned = fone0800.replace(/\D/g, '');
  const fone0800Regex = /^(0800)(\d{3})(\d{4})$/;

  if (!fone0800Regex.test(cleaned)) {
    return 'Número 0800 incompatível.';
  }

  // Aplica a máscara 0800-XXX-XXXX
  return cleaned.replace(fone0800Regex, '$1-$2-$3');
}

// Validar telefone fixo
export function isFoneFxValid(fonefx: string): boolean {
  // Remove todos os caracteres não numéricos
  const cleaned = fonefx.replace(/\D/g, '');
  // Expressão regular para telefone fixo no formato (XX) XXXX-XXXX
  const fonefxRegex = /^\d{10}$/;

  // Verifica se o número tem exatamente 10 dígitos
  return fonefxRegex.test(cleaned);
}

// Mascarar telefone fixo
export function MasckedFoneFx(fonefx: string): string {
  const cleaned = fonefx.replace(/\D/g, '');
  const fonefxRegex = /^(\d{2})(\d{4})(\d{4})$/;

  if (!fonefxRegex.test(cleaned)) {
    return 'Número de Telefone incompatível.';
  }

  // Aplica a máscara (XX) XXXX-XXXX
  return cleaned.replace(fonefxRegex, '($1) $2-$3');
}

// Validar telefone celular
export function isFoneCValid(fonec: string): boolean {
  const cleaned = fonec.replace(/\D/g, '');
  // Expressão regular para telefone celular no formato (XX) XXXXX-XXXX
  const fonecRegex = /^\d{11}$/;

  // Verifica se o número tem exatamente 11 dígitos
  return fonecRegex.test(cleaned);
}

// Mascarar telefone celular
export function MasckedFoneC(fonec: string): string {
  const cleaned = fonec.replace(/\D/g, '');
  const fonecRegex = /^(\d{2})(\d{5})(\d{4})$/;

  if (!fonecRegex.test(cleaned)) {
    return '';
  }

  // Aplica a máscara (XX) XXXXX-XXXX
  return cleaned.replace(fonecRegex, '($1) $2-$3');
}

// Validar telefone WhatsApp
export function isFoneZValid(fonez: string): boolean {
  const cleaned = fonez.replace(/\D/g, '');
  // Expressão regular para WhatsApp no formato DDI + DDD + Número (XX) XXXXX-XXXX
  const fonezRegex = /^\d{13}$/;

  // Verifica se o número tem exatamente 13 dígitos
  return fonezRegex.test(cleaned);
}

// Mascarar telefone WhatsApp
export function MasckedFoneZ(fonez: string): string {
  const cleaned = fonez.replace(/\D/g, '');
  const fonezRegex = /^(\d{2})(\d{2})(\d{5})(\d{4})$/;

  if (!fonezRegex.test(cleaned)) {
    return 'Número de WhatsApp incompatível.';
  }

  // Aplica a máscara +XX (XX) XXXXX-XXXX
  return cleaned.replace(fonezRegex, '+$1 ($2) $3-$4');
}

// Reconhece através do Google a validação de telefones
// (usando a biblioteca "libphonenumber-js")
// A função isTelefoneValid usa a biblioteca libphonenumber-js para validar
// qualquer número de telefone no formato internacional.
export function isTelefoneValid(fone: string): boolean {
  const phoneNumber = parsePhoneNumberFromString(fone);
  return phoneNumber?.isValid() ?? false;
}

////////////////////////////////////////////////////////////
// testa se foi editado somente numeros
export function isNumber(str: string): boolean {
  const strRegex = /^[0-9]+$/; // Apenas números
  return strRegex.test(str);
}

/////////////////////////////////////////////////////////////
// validar Documento CPF
export function isCpfValid(cpf: string): boolean {
  const cleaned = cpf.replace(/\D/g, '');
  const cpfRegex = /^(\d{3})(\d{3})(\d{3})(\d{2})$/;
  return cpfRegex.test(cleaned);
}

// se Numero cpf existe conforme verificador
export function isExistsCPF(cpf: string): boolean {
  const cleaned = cpf.replace(/\D/g, '');
  if (cleaned.length !== 11 || /^(\d)\1{10}$/.test(cleaned)) return false; // Evita repetidos
  let sum = 0;
  let remainder;
  for (let i = 1; i <= 9; i++) {
    sum += parseInt(cleaned.substring(i - 1, i)) * (11 - i);
  }
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cleaned.substring(9, 10))) return false;
  sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += parseInt(cleaned.substring(i - 1, i)) * (12 - i);
  }
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cleaned.substring(10, 11))) return false;
  return true;
}

// Mascarar Documento CPF
export function MasckedCpf(cpf: string): string {
  const cleaned = cpf.replace(/\D/g, '');
  return cleaned.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
}

/////////////////////////////////////////////////////////////////

/**
 * Função para validar e mascarar um número de celular.
 * @param phone - O número de celular como string.
 * @returns A string mascarada se válida, caso contrário uma mensagem de erro.
 */
export function maskFoneCNumber(phone: string): string {
  // Remove todos os caracteres não numéricos
  const cleaned = phone.replace(/\D/g, '');
  // Expressão regular para verificar se o número tem 11 dígitos
  const phoneRegex = /^(\d{2})(\d{5})(\d{4})$/;
  if (!phoneRegex.test(cleaned)) {
    return 'Número de celular inválido';
  }

  // Aplica a máscara
  const masked = cleaned.replace(phoneRegex, '($1) $2-$3');
  return masked;
}

/**
 * Função para validar e mascarar um número de CPF.
 * @param cpf - O número de CPF como string.
 * @returns A string mascarada se válida, caso contrário uma mensagem de erro.
 */
export function maskCPF(cpf: string): string {
  // Remove todos os caracteres não numéricos
  const cleaned = cpf.replace(/\D/g, '');

  // Expressão regular para verificar se o CPF tem 11 dígitos
  const cpfRegex = /^(\d{3})(\d{3})(\d{3})(\d{2})$/;

  if (!cpfRegex.test(cleaned)) {
    return 'Número de CPF inválido.';
  }

  // Aplica a máscara
  const masked = cleaned.replace(cpfRegex, '$1.$2.$3-$4');
  return masked;
}
///////////////////////////////////////////////////////////////////////////////
/**
 * Função para USAR MASCARA PARA NÃO APARECER CONTEUDO TOTAL
 * @param email - O número de CPF como string.
 * @returns A string mascarada se válida, caso contrário uma mensagem de erro.
 * Exemplo de uso
 * const email = "joaodasilva@hotmail.com";
 * const emailMascarado = mascararEmail(email);
 * console.log(emailMascarado);  // Saída: "****da**lva@****mail.com"
 */
export function MaskSEmail(email: string): string {
  const [localPart, domain] = email.split('@');
  const domainParts = domain.split('.');

  // Mascarar tudo menos os dois últimos caracteres da parte local antes do "@"
  const localMasked =
    localPart.slice(0, -2).replace(/./g, '*') + localPart.slice(-2);

  // Mascarar o domínio, mantendo o provedor oculto
  const domainMasked =
    domainParts[0].slice(0, -4).replace(/./g, '*') +
    domainParts[0].slice(-4) +
    '.' +
    domainParts.slice(1).join('.');
  const emailmascarado = `${localMasked}@${domainMasked}`;

  return emailmascarado;
}
// Exemplo de uso
// console.log(maskEmail("los.sbrissa@hotmail.com")); // "*********sa@***mail.com"
// console.log(maskEmail("loslds7@gmail.com"));       // "******s7@**mail.com"
///////////////////////////////////////////////////////////////////////////////
/*
 * Função para USAR MASCARA PARA NÃO APARECER CONTEUDO TOTAL
 * @param fonec - O número de CPF como string.
 * @returns A string mascarada com asterísticos .

//  EXEMPLO
// const telefoneOriginal = '(11) 98765-4321';
// const telefoneMascarado = MaskSFonec(telefoneOriginal);
// console.log(telefoneMascarado); // Output: (11) *****-4321
// Se preferir uma máscara diferente, como manter visíveis apenas os últimos 
// 4 dígitos e ocultar o resto, você pode ajustar a função:
*/

export function MaskSFoneC(fonec: string): string {
  const apenasnumeros = fonec.replace(/\D/g, '');

  const ddd = apenasnumeros.slice(0, 2); // (DDD)
  const primeirosdigitos = apenasnumeros.slice(2, 7); // 5 primeiros numeros
  const ultimosDigitos = apenasnumeros.slice(-4); // 4 ultimos digitos

  // Formata o número com a máscara
  //const numeroMascarado = `(${ddd}) ${'*'.repeat(5)}-${ultimosDigitos}`;

  const numeroMascarado = `(${ddd}) ${primeirosdigitos}****-${ultimosDigitos}`;

  return numeroMascarado;
}

export function MaskSFoneZ(fonez: string): string {
  // Remove todos os caracteres não numéricos
  const apenasNumeros = fonez.replace(/\D/g, '');

  // Extrai o código do país, DDD, e os números
  const codigoPais = apenasNumeros.slice(0, 2); // Código do país (ex.: 55)
  const ddd = apenasNumeros.slice(2, 4); // DDD (ex.: 11)
  const primeirosDigitos = apenasNumeros.slice(4, 7); // Os primeiros três dígitos visíveis
  const ultimosDigitos = apenasNumeros.slice(-4); // Os últimos quatro dígitos

  // Formata o número com a máscara
  const numeroMascarado = `(+${codigoPais}) (${ddd}) ${primeirosDigitos}****-${ultimosDigitos}`;

  return numeroMascarado;
}
///////////////////////////////////////////////////////////////////////////////
/* Função para USAR MASCARA PARA NÃO APARECER CONTEUDO TOTAL
 * @param cpf - O número de CPF como string mascarada normal.
 * @returns a string mascarada com 1 numero para cada cadeia e asterísticos nos .
/* restantes
//  EXEMPLO
// const telefoneOriginal = '(11) 98765-4321';
// const telefoneMascarado = MaskSFonec(telefoneOriginal);
// console.log(telefoneMascarado); // Output: (11) *****-4321
// Se preferir uma máscara diferente, como manter visíveis apenas os últimos 
// 4 dígitos e ocultar o resto, você pode ajustar a função:
*/

export function MaskSCPF(cpf: string): string {
  // Remove todos os caracteres não numéricos
  const apenasNumeros = cpf.replace(/\D/g, '');

  // Extrai os partes do CPF
  const primeiroDigito = apenasNumeros.charAt(0); // Primeiro dígito
  //const segundoDigito = apenasNumeros.charAt(1); // Segundo dígito
  //const terceiroDigito = apenasNumeros.charAt(2); // Terceiro dígito
  //const quartoDigito = apenasNumeros.charAt(3); // Quarto dígito
  const quintoDigito = apenasNumeros.charAt(4); // Quinto dígito
  //const sextoDigito = apenasNumeros.charAt(5); // Sexto dígito
  const setimoDigito = apenasNumeros.charAt(6); // Sétimo dígito
  //const oitavoDigito = apenasNumeros.charAt(7); // Oitavo dígito
  const penultimoDigito = apenasNumeros.charAt(8); // Penúltimo dígito
  const ultimoDigito = apenasNumeros.charAt(9); // Último dígito

  // Formata o número com a máscara
  const cpfMascarado = `${primeiroDigito}**.**${quintoDigito}.${setimoDigito}**-${penultimoDigito}${ultimoDigito}`;

  return cpfMascarado;
}
///////////////////////////////////////////////////////////////////////////////

/* Função para USAR MASCARA Numero contido na mascar com zero na frente
 * @param numero - O valor adquirido como parametro da função type number.
 * @returns a string mascarada com a quantidade necessário para exibir o numero com zero na frente.
//  EXEMPLO
// const zeronumber = "0011" => numero 11;
*/
export function MaskNumberZero(qddz: number, num: number): string {
  const numStr = num.toString();

  const mascarazero =
    numStr.length >= qddz ? numStr.padStart(qddz, '0') : numStr;

  return mascarazero;
}

///////////////////////////////////////////////////////////////////////////
/* Função para USAR MASCARAR com Asteriscos no conteudo Numero indicado
 * @param numero - O valor adquirido como parametro da função type number.
 * @returns a string mascarada com a quantidade necessário para exibir o numero com asteristico na conteudo.
 * Números com menos de 2 dígitos: A função retorna o número como está.
 * Números com 3 dígitos: O primeiro e o último dígito são mantidos, e um asterisco é inserido no meio.
 * Números com 4 dígitos: O primeiro e o último dígito são mantidos, e dois asteriscos são inseridos no meio.
 * Números com 5 dígitos: O primeiro e o último dígito são mantidos, e três asteriscos são inseridos no meio.
 * Números com mais de 5 dígitos: Os primeiros 4 dígitos são mantidos, e a quantidade apropriada de asteriscos é
 * inserida antes do último dígito.
 * Exemplos:
 * maskNumber(99999) retorna "9***9"
 * maskNumber(9999) retorna "9**9"
 * maskNumber(999) retorna "9*9"
 * maskNumber(9) retorna "9"
 * maskNumber(999999) retorna "9999**9"
 * maskNumber(99999999) retorna "9999****9"
 */

export function MaskSNumber(num: number): string {
  const numStr = num.toString();
  const length = numStr.length;

  if (length === 1) {
    return numStr; // Retorna o próprio número para '9' ele mesmo
  } else if (length === 2) {
    return `*${numStr[length - 1]}`; // Retorna '9*' para 2 dígitos
  } else if (length === 3) {
    return `${numStr[0]}*${numStr[length - 1]}`; // Retorna '9*9' para 3 dígitos
  } else if (length === 4) {
    return `${numStr[0]}**${numStr[length - 1]}`; // Retorna '9**9' para 4 dígitos
  } else if (length === 5) {
    return `${numStr[0]}***${numStr[length - 1]}`; // Retorna '9***9' para 5 dígitos
  } else if (length > 5) {
    const middle = '*'.repeat(length - 5);
    return `${numStr.slice(0, 4)}${middle}${numStr[length - 1]}`; // Retorna '9999****9' para números maiores que 5 dígitos
  }

  return numStr; // Caso algum cenário não previsto ocorra
}
///////////////////////////////////////////////////////////////////////////////
/* Função para USAR MASCARAR com Asteriscos no conteudo String indicado
 * @param str - O valor adquirido como parametro da função type string.
 * @returns a string mascarada com a quantidade necessário para exibir a string com asteristico no conteudo.
 * inserida antes do último caractere.
 * inserida apos os dois primeiros caracteres.
 */
export function MaskSString(str: string): string {
  const length = str.length;

  if (length < 3) {
    return str; // Se a string tiver menos de 3 caracteres, retorna ela mesma
  } else if (length === 4) {
    return `${str[0]}${str[1]}*${str[3]}`; // Se a string tiver 4 caracteres, substitui o 3º caractere por '*'
  } else if (length > 4) {
    const middle = '*'.repeat(length - 3);
    return `${str[0]}${str[1]}${middle}${str[length - 1]}`; // Para strings maiores que 4, mascara os caracteres do eio
  }
  return str; // Caso algum cenário não previsto ocorra
}
///////////////////////////////////////////////////////////////////////////////
