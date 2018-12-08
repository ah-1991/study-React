'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
  function Person() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'non';

    _classCallCheck(this, Person);

    this._name = name;
  }

  _createClass(Person, [{
    key: 'name',
    get: function get() {
      return this._name;
    },
    set: function set(name) {
      this._name = name;
    }
  }]);

  return Person;
}();

var yamada = new Person('yamada');
console.log(yamada.name);

var nonName = new Person();
console.log(nonName.name);

nonName.name = 'tanaka';
console.log(nonName.name);