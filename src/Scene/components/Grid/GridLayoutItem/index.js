import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: grid;
grid-column-start: ${props => props.column};
grid-row-start: ${props => props.row};
justify-content: center;
align-items: center;
`

const GridLayoutItem = ({ children }) => (
  <Container>
    {children}
  </Container>
)

export default GridLayoutItem