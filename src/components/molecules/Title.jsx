import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Text } from '../atoms/index'
import { colors } from '../../styles/index'

const StyledTitle = styled(Text)`
  font-weight: ${(props) => props.fontWeight};
`

function Title({
  element = 'h1',
  text,
  color = colors.font.base,
  fontWeight = 400,
}) {
  return (
    <StyledTitle as={element} color={color} fontWeight={fontWeight}>
      {text}
    </StyledTitle>
  )
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
  element: PropTypes.string,
  color: PropTypes.string,
  fontWeight: PropTypes.number,
}
export default styled(Title)``
