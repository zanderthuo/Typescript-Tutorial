// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'Alexander',
//   age: 27,
//   hobbies: ['Sports', 'Cooking', 'Sleeping'],
//   role: [2, 'author']
// };

// person.role.push('name');
// person.role[1] = 10;
// console.log(person.role)

enum Role {
  ADMIN = "Admin-one",
  READ_ONLY = 'Read-only',
  AUTHOR = "Author-only"
};

console.log(Role)

const person = {
  name: 'Alexander',
  age: 27,
  hobbies: ['Sports', 'Cooking', 'Sleeping'],
  role: Role.ADMIN
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
  // console.log(hobby.map())
}