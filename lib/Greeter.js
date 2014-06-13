module.exports = Greeter;

/**
 * A greeter, who will say hello to anyone you like.
 * @constructor
 * @param {string} name - the name of the greeter (ex: 'Bob')
 */
function Greeter(name) {
  this.name = name;
}

/**
 * Greet a person, by name.
 * @param {string} personToGreet - name of person to greet
 * @return {string} a full greeting string
 */
Greeter.prototype.greet = function (personToGreet) {
  return [this.name, 'says: Hello there,', personToGreet, '!'].join();
};




