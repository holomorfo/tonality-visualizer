import React, { useState } from 'react'
import { Chord } from 'tonality-map'

const calcCoordinates =
  (px: number, py: number, rad: number) => (i: number) => {
    let ANG = (-2 * Math.PI) / 12
    return {
      x: px + rad * Math.cos(i * ANG + Math.PI / 2),
      y: py - rad * Math.sin(i * ANG + Math.PI / 2)
    }
  }

const mainCirclePoints = (px = 0, py = 0, radius = 5) => {
  let circulos = []
  for (let i = 0; i < 12; i++) {
    let { x, y } = calcCoordinates(px, py, radius)(i)
    let { x: xtext, y: ytext } = calcCoordinates(px, py, radius + 5)(i)
    circulos.push({ x, y, xtext, ytext })
  }
  return circulos
}

const colorDisStroke = [
  'blue',
  'red',
  'red',
  'green',
  'green',
  'blue',
  'red',
  'blue',
  'green',
  'green',
  'violet',
  'red'
]
// Declaring type of props - see "Typing Component Props" for more examples
type AppProps = {
  chord: Chord
  px?: number
  py?: number
  radius?: number
} /* use `interface` if exporting so that consumers can extend */

const Circle = ({ chord, px = 100, py = 100, radius = 50 }: AppProps) => {
  // const { px = 100, py = 100, radius = 50 } = props
  const [dataset] = useState(mainCirclePoints(px, py, radius))
  let chordNotes = chord.notes
  let chordStr = chord.chordName()

  let notesCircle = chordNotes.map((note) => {
    let { x, y } = calcCoordinates(px, py, radius)(note)
    return { x, y, note }
  })

  let lines: {
    x1: number
    y1: number
    x2: number
    y2: number
    color: string
  }[] = []
  notesCircle.forEach(({ x: x1, y: y1, note: note1 }, _idx, notesList) => {
    notesList.forEach(({ x: x2, y: y2, note: note2 }) => {
      lines.push({
        x1,
        y1,
        x2,
        y2,
        color: colorDisStroke[Math.abs(note2 - note1) % 12]
      })
    })
  })

  return (
    <svg viewBox='0 0 500 500'>
      <circle
        key={'circle_main'}
        cx={px}
        cy={py}
        r={radius}
        fill='none'
        stroke='black'
        strokeWidth='1'
      />
      {lines.map(({ x1, y1, x2, y2, color }, i) => (
        <line
          key={'lines' + i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke={color}
          strokeWidth={0.8}
        />
      ))}
      {dataset.map(({ x, y }, i) => (
        <circle key={'circle' + i} cx={x} cy={y} r='3' />
      ))}
      {notesCircle.map(({ x, y }, i) => (
        <circle key={'circle_notes' + i} cx={x} cy={y} r={4} stroke='blue' />
      ))}

      <text x={px} y={py + radius * 1.4} textAnchor='middle'>
        {chordStr}
      </text>
    </svg>
  )
}
export default Circle
