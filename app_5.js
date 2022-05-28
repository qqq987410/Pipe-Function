// Application of pipe function in daily life.

/* =====================================================
    objective was to display the received schools
    as an un-ordered list containing the name and address.
======================================================== */

const schools = [
  { name: 'St. Marcellinus Secondary School', address: '730 Courtneypark Drive West' },
  { name: 'Sir William Mulock S.S.', address: '705 Columbus Way' },
  { name: 'George Harvey Collegiate Institute', address: '1700 Keele St' },
  { name: 'Dr. G.W. Williams S.S.', address: '39 Dunning Ave.' },
  { name: 'Weston Collegiate Institute', address: '100 Pine St' },
];

const _pipe = (a, b) => (arg) => b(a(arg));
const pipe = (...ops) => ops.reduce(_pipe);

const makeLi = (schoolObj) => {
  const newLI = document.createElement('li');
  newLI.appendChild(document.createTextNode(`${schoolObj.name} - ${schoolObj.address}`));
  return newLI;
};
const appendLiToSchoolList = (li) => {
  let schoolList = document.querySelector('#school-list');
  return schoolList.appendChild(li);
};
const generateLi = pipe(makeLi, appendLiToSchoolList);

schools.forEach((school) => generateLi(school));
