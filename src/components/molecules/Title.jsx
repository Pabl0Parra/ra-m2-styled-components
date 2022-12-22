/* eslint-disable react/no-unused-prop-types */
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Text } from '../atoms'
import { colors } from '../../styles'

const StyledTitle = styled(Text)`
  padding: ${({ padding }) => padding};
`
function Title(
  text,
  color = colors.font.base,
  fontWeight = 500,
  element = 'h1',
) {
  return (
    <StyledTitle as={element} color={color} fontWeight={fontWeight}>
      {text}
    </StyledTitle>
  )
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  fontWeight: PropTypes.number.isRequired,
  element: PropTypes.string.isRequired,
}

export default styled(Title)``
