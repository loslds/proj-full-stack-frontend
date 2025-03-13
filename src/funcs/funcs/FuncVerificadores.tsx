

export function verifInputs(inputs: string | number, formato: 'string' | 'number'): boolean {
  if (formato === 'string') {
    return typeof inputs === 'string' || !isNaN(Number(inputs));
  } else if (formato === 'number') {
    return typeof inputs === 'number' || (!isNaN(Number(inputs)) && inputs !== '');
  }
  return false;
}
// // Exemplos de uso:
// console.log(verifInputs(123, 'number')); // true
// console.log(verifInputs('123', 'number')); // true
// console.log(verifInputs('abc', 'number')); // false
// console.log(verifInputs(123, 'string')); // true (pode ser convertido para string)
// console.log(verifInputs('hello', 'string')); // true
// console.log(verifInputs('', 'number')); // false
