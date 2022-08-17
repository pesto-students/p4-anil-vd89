const { log } = require('console')

const pokemon = {
  firstName: 'Pika',
  lastName: 'Chu',
  getPokeName: function () {
    return  this.firstName + " " + this.lastName;
  }
}

// make sure to use the old function method else will give an error 
const pokemonName = function(snack = '', hobby = '') {
  log(this.getPokeName() + ' I choose You!...........!!!')
  log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby)
}

// The example of bind Method in the function Domain

const logPokemon = pokemonName.bind(pokemon) 

// logPokemon() // Pika Chu I choose You!...........!!!
// logPokemon('sushi' , 'algorithms') // Pika Chu loves sushi and algorithms


// The example of call() and apply()

pokemonName.call(pokemon, 'sushi', 'algorithms')
pokemonName.apply(pokemon, ['sushi', 'algorithms'])

/* 
Pika Chu I choose You!...........!!!
Pika Chu loves sushi and algorithms 
*/
