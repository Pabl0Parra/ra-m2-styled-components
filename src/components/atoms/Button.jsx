import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colors } from '../../styles'

const StyledButton = styled.button`
  background-color: ${(props) => props.backgroundColor};
  border-radius: 5px;
  padding: 3px 12px;
  border: none;
`

const ButtonText = styled(Text).attrs({
  as: 'span',
})`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize}px;
`

function Button({
  children,
  color = colors.main,
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
      <ButtonText fontSize={fontSize} color={color}>
        {children}
      </ButtonText>
    </StyledButton>
  )
}

Button.propTypes = {
  fontSize: PropTypes.number,
  color: PropTypes.string,
  children: PropTypes.node,
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func,
}

export default styled(Button)``
