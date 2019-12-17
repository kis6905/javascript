const withRef = PersonRef =>
  class extends PersonRef {
    constructor(...args) {
      console.log('constructor of PersonRef')
      super(...args)
      this.birth = (new Date()).toString()
    }

    setBirth(birth) {
      this.birth = birth
    }
  }

@withRef
class Person {
  constructor(firstName, lastName) {
    console.log('constructor of Person')
    this.firstName = firstName
    this.lastName = lastName
  }

  toString () {
    let result = Object.keys(this)
                        .map(key => `${key}=${this[key]}`)
                        .join(', ')
    console.log(result)
  }
}

const p = new Person('ilsu', 'kwon')
p.setBirth((new Date('1989-12-13')).toString())
p.toString()
