import styled from 'styled-components'
import PropTypes from 'prop-types'
import { FlexBox } from '../../styles'

const StyledCard = styled(FlexBox)`
    height: ${(height) => height || '220px'}
    width: ${(width) => width || '200px'}
    border-radius: ${(borderRadius) => borderRadius || '6px'}
    position: relative 
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.32)
`

function Card({ children }) {
  return <StyledCard>{children}</StyledCard>
}

Card.propTypes = {
  children: PropTypes.node,
}

export default styled(Card)``
