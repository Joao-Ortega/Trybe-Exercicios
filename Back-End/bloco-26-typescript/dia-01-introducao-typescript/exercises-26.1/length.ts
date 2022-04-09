export function convert(v: number, uB: string, uC: string): number {
  const arr = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
  const indexBase: number = arr.indexOf(uB);  
  const indexForConvert: number = arr.indexOf(uC);
  const differenceToPow: number = indexBase < indexForConvert ? Math.abs(indexBase - indexForConvert) : indexForConvert - indexBase;
  return v * Math.pow(10, differenceToPow);
}