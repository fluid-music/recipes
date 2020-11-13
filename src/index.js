const cloud = require('./cloud')
const libraryRecipes = require('./library-recipes')
const patternHelpers = require('./pattern-helpers')
const patternMutators = require('./pattern-mutators')

const noTears = require('./scores/no-tears')
const twentyFourKMagic = require('./scores/24-k-magic')

module.exports = {
  cloud,
  libraryRecipes,
  patternHelpers,
  patternMutators,
  noTears,
  twentyFourKMagic,
}
