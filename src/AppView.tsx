import { Chord } from 'tonality-map'
import Circle from './GraphCircle'

function AppView(props:{chord:Chord, table: any[]} ) {
  const { chord, table } = props
  return (
    <div className='App'>
      <div>{JSON.stringify(chord)}</div>
      <div>
        { chord.chordName() }
      </div>
      <div>{JSON.stringify(table.slice(0, 12))}</div>
      <div>{JSON.stringify(table.slice(12, 24))}</div>
      <Circle chord={chord} />
    </div>
  )
}

export default AppView
