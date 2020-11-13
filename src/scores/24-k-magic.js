const fluid = require('fluid-music')
const { valueToMidiNoteNumber } = fluid.converters
const { MidiChord } = fluid.techniques

const Bbm = new MidiChord({ notes: ['Bb4', 'Db5', 'F5', 'Bb5'].map(valueToMidiNoteNumber) })
const Cm  = new MidiChord({ notes: ['Ab4', 'C5', 'Eb5', 'G5'].map(valueToMidiNoteNumber) })
const Db  = new MidiChord({ notes: ['Db5', 'F5', 'Ab5'].map(valueToMidiNoteNumber) })
const Fm  = new MidiChord({ notes: ['F5', 'Ab5', 'C6'].map(valueToMidiNoteNumber) })
const Gb  = new MidiChord({ notes: ['Gb5', 'Bb5', 'Db6'].map(valueToMidiNoteNumber) })
const Ebm = new MidiChord({ notes: ['Eb5', 'Gb5', 'Bb5'].map(valueToMidiNoteNumber) })

const rhythm     = '1e+a2e+a3e+a4e+a';
const ramp       = '0-..1-..2-......';
const BbChord    = '0-.0............';
const FmChord    = '3-.3............';
const BbExtChord = '0-.0....4-..5-..';

const score = {
  tLibrary: [ Bbm, Cm, Db, Fm, Gb, Ebm ],
  r: rhythm,
  chords: [
    ramp,       FmChord,
    BbChord,    FmChord,
    BbChord,    FmChord, 
    BbExtChord, FmChord
  ]
}

module.exports = {
  score
}

