// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];
const employeeTeste = professionalBoard.filter((emp) => emp.id === '8579-6');
const idd = professionalBoard.map((i) => i.id);
const first = professionalBoard.map((i) => i.firstName);
const last = professionalBoard.map((i) => i.lastName);
const espec = professionalBoard.map((i) => i.specialities);
// console.log(...employeeTeste.map((obj) => Object.keys(obj).includes()));
// Pesquisa
const searchEmployee = (id, detail) => {
  if (!idd.includes(id)) {
    throw new Error('ID não identificada');
  }
  const employee = professionalBoard.filter((emp) => emp.id === id);
  if (!Object.keys(employee).includes(detail)) {
    throw new Error('Informação indisponível');
  }
  return employee;
};
console.log(searchEmployee('8579-6', 'firstName'));
module.exports = searchEmployee;

if (!first.includes(detail) || !last.includes(detail) || !professionalBoard.some((spci) => spci.specialities.includes(detail))) {
  throw new Error('Informação indisponível');
}