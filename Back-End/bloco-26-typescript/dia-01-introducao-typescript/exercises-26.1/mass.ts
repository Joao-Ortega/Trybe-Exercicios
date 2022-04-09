export function convertMass(v: number, uB: string, uC: string): number {
  const arr = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];
  const indexBase: number = arr.indexOf(uB);  
  const indexForConvert: number = arr.indexOf(uC);
  const differenceToPow: number = indexBase < indexForConvert ? Math.abs(indexBase - indexForConvert) : indexForConvert - indexBase;
  return v * Math.pow(10, differenceToPow);
}