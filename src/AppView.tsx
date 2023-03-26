import { Chord } from 'tonality-map'
import Circle from './GraphCircle'
import './App.less'

const degrees = ["","I", "II","III","IV","V","VI","VII"]

function AppView(props: { chord: Chord; table: any[] }) {
  const { chord, table } = props
  const majorTable = table.slice(0, 12)
  const minorTable = table.slice(12, 24)
  console.table(majorTable)
  console.table(minorTable)

  const tableRender = (table: any[]) => {
    return (
      <table>
        <tr>
          <th>Tonality</th>
          <th>Degree</th>
        </tr>
        {table.map((element: [number, string]) => {
          return (
            <tr>
              <td>{element[1]}</td>
              <td>{degrees[element[0]]}</td>
            </tr>
          )
        })}
      </table>
    )
  }

  return (
    <div className='app'>
      <Circle chord={chord} />
      <div className='tables'>
        <div className='title'>{chord.notes.length>0 ? chord.chordName():'_'}</div>
        <div className='tableSection'>
          {tableRender(minorTable)}
          {tableRender(majorTable)}
        </div>
      </div>
    </div>
  )
}

export default AppView
