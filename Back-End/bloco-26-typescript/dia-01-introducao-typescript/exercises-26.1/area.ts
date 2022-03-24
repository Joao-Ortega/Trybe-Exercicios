export function convertArea(v: number, uB: string, uC: string): number {
  const arr = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'];
  const indexBase: number = arr.indexOf(uB);  
  const indexForConvert: number = arr.indexOf(uC);
  const differenceToPow: number = indexBase < indexForConvert ? Math.abs(indexBase - indexForConvert) : indexForConvert - indexBase;
  return v * Math.pow(10, differenceToPow);
}