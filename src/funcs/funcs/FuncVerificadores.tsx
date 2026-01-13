

export function verifInputs(inputs: string | number, formato: 'string' | 'number'): boolean {
  if (formato === 'string') {
    return typeof inputs === 'string' || !isNaN(Number(inputs));
  } else if (formato === 'number') {
    return typeof inputs === 'number' || (!isNaN(Number(inputs)) && inputs !== '');
  }
  return false;
}
