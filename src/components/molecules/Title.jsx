/* eslint-disable react/no-unused-prop-types */
import React from 'react'
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
  text: PropTypes.string,
  color: PropTypes.string,
  fontWeight: PropTypes.number,
  element: PropTypes.string,
}

export default styled(Title)``
