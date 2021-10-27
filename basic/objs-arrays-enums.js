"use strict";
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
var Role;
(function (Role) {
    Role["ADMIN"] = "Admin-one";
    Role["READ_ONLY"] = "Read-only";
    Role["AUTHOR"] = "Author-only";
})(Role || (Role = {}));
;
console.log(Role);
var person = {
    name: 'Alexander',
    age: 27,
    hobbies: ['Sports', 'Cooking', 'Sleeping'],
    role: Role.ADMIN
};
var favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map())
}
