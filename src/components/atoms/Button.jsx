import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colors } from '../../styles/index'

const StyledButton = styled.button`
  background-color: ${(props) => props.backgroundColor};
  border-radius: 8px;
  border: none;
  padding: 5px 14px;
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.backgroundColor};
  }
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
