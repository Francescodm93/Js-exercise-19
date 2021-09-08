const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1;

// console.log(person1); 
// Se io  dichiaro un console.log prima del di assegnare un nuovo valore per person2 il risultato sarà sempre quello contenuto dentro person1
person2.firstName = 'Simon';

console.log(person1);
console.log(person2);

