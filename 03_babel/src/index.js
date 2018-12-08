class Person {
  constructor(name = 'non') {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }
}

const yamada = new Person('yamada');
console.log(yamada.name);

const nonName = new Person();
console.log(nonName.name);

nonName.name = 'tanaka';
console.log(nonName.name);