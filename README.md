# Fluid Music Recipes

A small collection of content and non-essential helper methods for the fluid-music npm package.

## Quick Start Example

```shell
npm init # ...answer the questions...
npm i fluid-music @fluid-music/recipes # install fluid-music and recipes packages
```

`recipes` contains some example scores to get you started. `recipes.twentyFourKMagic` looks like this:

```javascript
{
  score: {
    // A technique library containing midi
    tLibrary: [
      MidiChord { notes: [ 70, 73, 77, 82 ] },
      MidiChord { notes: [ 68, 72, 75, 79 ] },
      MidiChord { notes: [ 73, 77, 80 ] },
      MidiChord { notes: [ 77, 80, 84 ] },
      MidiChord { notes: [ 78, 82, 85 ] },
      MidiChord { notes: [ 75, 78, 82 ] }
    ],
    // A 16th note rhythm string
    r:'1e+a2e+a3e+a4e+a',
    // The verse of Bruno Mars' song 24K Magic is transcribed on the 'chords'
    // track below. The numbers index the MidiChord techniques in the tLibrary.
    chords: [
      '0-..1-..2-......',
      '3-.3............',
      '0-.0............',
      '3-.3............',
      '0-.0............',
      '3-.3............',
      '0-.0....4-..5-..',
      '3-.3............'
    ]
  }
}
```

To create a `.RPP` ([Reaper](https://reaper.fm)) file from the score:

```javascript
// run.js
const fluid = require('fluid-music')
const recipes = require('@fluid-music/recipes')

const session = new fluid.FluidSession({ bpm: 128 })
const score = recipes.twentyFourKMagic.score

session.insertScore(score)
session.saveAsReaperFile('out.RPP')
  .then(() => { console.warn('ok') })
  .catch((e) => { console.error('error:', e) })
```

Then `$ node run.js`, and open `out.RPP` in reaper.


## Example with VST

**IMPORTANT:** To run the example below, you need to:
 - Install [U-He TyrellN6](https://u-he.com/products/tyrelln6/) (Free Download)
 - Run the [cybr server](https://github.com/CharlesHolbrow/cybr) (compiled with VST2 support). To do this, you need to acquire a the VST2 SDK from Steinberg.

To Create a `.RPP` file configured with with a VST synthesizer:

```javascript
// run.js
const fluid = require('fluid-music')
const recipes = require('@fluid-music/recipes')

const synth = new fluid.TyrellN6Vst2({
  tyrellCutoff: 120,
  env1Sustain: 10,
  // ...configure as desired...
})

const session = new fluid.FluidSession({ bpm: 128 }, [ 
  { name: 'chords',  plugins: [synth] } // create a synth track
])

const chords = recipes.twentyFourKMagic.score

session.insertScore(chords)
session.saveAsReaperFile('out.RPP')
  .then(() => { console.warn('ok') })
  .catch((e) => { console.error('error:', e) })
```
