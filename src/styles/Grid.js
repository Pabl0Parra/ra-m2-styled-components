import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
  margin-top: 1.75rem;
  margin-left: 1.5rem;
  gap: 1.5rem;
`

export default Grid
