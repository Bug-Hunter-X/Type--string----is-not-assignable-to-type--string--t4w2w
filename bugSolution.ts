function greeter(person: string | string[]) {
  if (Array.isArray(person)) {
    return "Hello, " + person.join(', ');
  } else {
    return "Hello, " + person;
  }
}

let user = ["Jane Doe", "John Smith"];

console.log(greeter(user));

let singleUser = "Jane Doe";
console.log(greeter(singleUser));