import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: grid;
grid-template-columns: ${({ columns }) => columns.length > 0 ? 
  columns.join(' ') : new Array(columns).fill('1fr').join(' ')};
grid-template-rows: ${({ rows }) => rows.length > 0 ? 
  rows.join(' ') : new Array(rows).fill('1fr').join(' ')};
grid-gap: ${({ gap }) => gap};
${({ alignment }) => getAlignment(alignment)}
`

const getAlignment = alignment => {
  if(!alignment) {
    return `justify-content: center;
    align-items: center;`
  }
  const css = []
  const split = alignment.split('-')

  const verticalPosition = split[0]
  const horizontalPosition = split[1]

  if(verticalPosition === 'top') {
    css.push('justify-content: flex-start;')
  }
  else if(verticalPosition === 'bottom') {
    css.push('justify-content: flex-end;')
  }
  else {
    css.push('justify-content: center;')
  }

  if(horizontalPosition === 'left') {
    css.push('align-items: start;')
  }
  else if(horizontalPosition === 'bottom') {
    css.push('align-items: start;')
  }
  else {
    css.push('align-items: center;')
  }
  return css.join('\n')
}

const GridLayout = ({ children, rows, columns, gap, alignment }) => (
  <Container rows={rows} columns={columns} gap={gap} alignment={alignment}>
    {children}
  </Container>
)

export default GridLayout