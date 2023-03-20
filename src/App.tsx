import { useState, useEffect } from 'react'
import { Chord, UniversoTonal } from 'tonality-map'
import reactLogo from './assets/react.svg'
import './App.css'
import { useMIDI, useMIDINote } from '@react-midi/hooks'

const options = ['Italy', 'Spain', 'Greece']
function App() {
  const [chord, setChord] = useState({ arr: [] })
  const [arr, setArr] = useState([])
  const { inputs, outputs, hasMIDI } = useMIDI() // Initially returns [[], []]
  const event = useMIDINote(inputs[0], { channel: 1 }) // Intially returns undefined
  const [options, setOptions] = useState([])
  const c = new Chord(chord.arr)
  const u = new UniversoTonal()
  const funs = u.calculateFunctions(c)

  const [selected, setSelected] = useState(options[0])
  const submit = () => {
  }
console.log(arr)
  if (event && event.on) {
    console.table(event)
    //@ts-ignore
    // setArr([...arr,event.note])
  }

  return (
    <div className='App'>
      <div>{JSON.stringify(chord)}</div>
      <div>
        {
          //@ts-ignore
          new Chord(chord.arr).chordName()
        }
      </div>
      <div>{JSON.stringify(funs.slice(0, 12))}</div>
      <div>{JSON.stringify(funs.slice(12, 24))}</div>

      <form>
        <select value={selected} onChange={(e) => setSelected(e.target.value)}>
          {options.map((value) => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
        </select>
        <button type='button' onClick={submit}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default App
