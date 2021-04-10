const nameList = [
  'Javascript',
  'Golang',
  'Python',
  'Rust',
  'Elexir',
  'Clojure',
  'Java',
  'C++',
  'Haskel',
  'Typescript',
];

export const sameFuncAsDefault = () => {
  return nameList[Math.floor(Math.random() * 10)];
};

export default function () {
  return nameList[Math.floor(Math.random() * 10)];
}
