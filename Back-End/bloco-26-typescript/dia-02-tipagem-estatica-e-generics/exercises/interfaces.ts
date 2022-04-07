enum Color {
  yellow = 1,
  blue,
  black,
  red,
  green,
}

interface IAuto {
  name: string,
  year: number,
  color: Color,
};

interface ISpacecraft {
  name: string,
  size: number,
  color: Color,
}