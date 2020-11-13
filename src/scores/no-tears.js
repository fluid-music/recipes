const fluid = require('fluid-music')
const { valueToMidiNoteNumber } = fluid.converters
const { MidiChord } = fluid.techniques

const verseChords = [
  new MidiChord({ notes: ['e4', 'a4', 'b4', 'c#5'].map(valueToMidiNoteNumber) }),
  new MidiChord({ notes: ['f4', 'g4', 'a4', 'c5' ].map(valueToMidiNoteNumber) }),
  new MidiChord({ notes: ['g4', 'a4', 'b4', 'd5' ].map(valueToMidiNoteNumber) }),
]

const score = {
  tLibrary: verseChords,
  r:        '1e+a2e+a3e+a4e+a',
  chords:   ['0-......1-....2.', ''],
}

module.exports = { score }
