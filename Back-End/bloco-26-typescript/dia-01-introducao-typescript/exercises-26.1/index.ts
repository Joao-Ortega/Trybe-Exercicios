import { convert } from "./length";
import { convertMass } from "./mass";

const main = (): void => {
  console.log(convert(1, 'm', 'mm'));
  console.log(convertMass(1, 'g', 'mg'));
  
};

main();