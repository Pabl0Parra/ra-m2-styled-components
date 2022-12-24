import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colors } from '../../styles/colors'

const StyledButton = styled.button`
  background-color: ${(props) => props.backgroundColor};
  border-radius: 6px;
  border: none;
  padding: 2px 10px;
`
const TextButton = styled(Text).attrs({
  as: 'span',
})`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize}px;
  padding: ${(props) => props.padding}px;
`

export default function Button({
  children,
  color = colors.font.white,
  fontSize = 14,
  backgroundColor,
  onClick = () => {},
}) {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      backgroundColor={backgroundColor}
    >
      <TextButton fontSize={fontSize} color={color}>
        {children}
      </TextButton>
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  fontSize: PropTypes.number,
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func,
}
