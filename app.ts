const person = {
  name: 'Alexander',
  age: 27,
  hobbies: ['Sports', 'Cooking', 'Sleeping']
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby)
}