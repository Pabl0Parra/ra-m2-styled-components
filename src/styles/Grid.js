import styled from 'styled-components'

const Grid = styled.div`
  display: ${({ inline }) => (inline ? 'inline-grid' : 'grid')};
  grid-template-rows: ${({ row }) => row || 'initial'};
  grid-template-columns: ${({ column }) => column || 'repeat(3, 1fr))'};
  row-gap: ${({ rowgap }) => rowgap || '1rem'};
  column-gap: ${({ columngap }) => columngap || '1rem'}
  justify-content: ${({ justifycontent }) => justifycontent || 'space-between'};
  justify-items: ${({ justifyitems }) => justifyitems || 'space-between'};
  align-content: ${({ aligncontent }) => aligncontent || 'center'};
  align-items: ${({ alignitems }) => alignitems || 'center'}
`

export default Grid
