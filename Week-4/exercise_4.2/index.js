const { log, } = require('console')

const Person  = function(){}

Person.prototype.initialize = function (name,age) {
  this.name = name
  this.age = age
}

const Teacher = function () {

}
Teacher.prototype = new Person()

Teacher.prototype.teach = function (subject) {
  log(this.name + ' is now teaching ' + subject)
}

const him = new Teacher()

him.initialize('Adam', 45)
him.teach('inheritance') // Adam is now teaching inheritance