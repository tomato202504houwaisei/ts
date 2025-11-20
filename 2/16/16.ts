export {};

const person: {
  name: string;
  age: number;
} = {
  name: "Jack",
  age: 21,
};

console.log(person.age);

//中間的型註釋也可以刪掉 給他自己型推論
//但如果有型註釋 就醫定要全宣告 不能遺漏
//const person = {
//     name: 'Jack';
//     age: 21
// }
