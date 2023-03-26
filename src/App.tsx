import { useState, useEffect } from 'react'
import { Chord, UniversoTonal } from 'tonality-map'
import { useMIDI, useMIDINote } from '@react-midi/hooks'
import AppView from './AppView'

function App() {
  const [notes, setNotes] = useState([])
  const { inputs } = useMIDI() // Initially returns [[], []]
  const event = useMIDINote(inputs[0], { channel: 1 }) // Intially returns undefined
  const chord = new Chord(notes)
  const u = new UniversoTonal()
  const funs = u.calculateFunctions(chord)
  useEffect(() => {
    if (event && event.on) {
      //@ts-ignore
      setNotes((notes) => [...notes, event.note])
    }
    if (event && !event.on) {
      //@ts-ignore
      setNotes([])
    }
    return () => {}
  }, [event])

  return <AppView chord={chord} table={funs} />
}

export default App
