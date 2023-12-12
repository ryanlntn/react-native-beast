const Beast = require('./NativeBeast').default;

export function multiply(a: number, b: number): number {
  return Beast.multiply(a, b);
}

export function start(): number {
  return Beast.start();
}
