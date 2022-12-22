import styled from 'styled-components'

const Grid = styled.div`
  display: ${({ inline }) => (inline ? 'inline-grid' : 'grid')};
  grid-template-rows: ${({ row }) => row || 'initial'};
  grid-template-columns: ${({ column }) =>
    column || 'repeat(auto-fit, minmax(160px, 160px))'};
  row-gap: ${({ rowgap }) => rowgap || '5px'};
  column-gap: ${({ columngap }) => columngap || '5px'}
  justify-content: ${({ justifycontent }) => justifycontent || 'space-between'};
  justify-items: ${({ justifyitems }) => justifyitems || 'space-between'};
  align-content: ${({ aligncontent }) => aligncontent || 'center'};
  align-items: ${({ alignitems }) => alignitems || 'center'}
`

export default Grid
