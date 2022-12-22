import styled from 'styled-components'

const Card = styled.div`
    height: ${(height) => height || '220px'}
    width: ${(width) => width || '200px'}
    overflow: hidden
    border-radius: ${(borderRadius) => borderRadius || '6px'}
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.32)
`

export default styled(Card)``
