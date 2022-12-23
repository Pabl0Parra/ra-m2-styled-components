import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colors, dimensions } from '../../styles/index'

const StyledInputText = styled.input`
    height: ${(props) => props.height || '2.5rem'}
    width: ${(props) => props.width || '22.5rem'}
    padding: ${dimensions.xss}
    border: 1px solid ${colors.gray}}
    border-radius: ${dimensions.xs}
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.32)

    &::placeholder {
        color: ${colors.font.base}
    }

    &:hover {
        border: 1px solid ${colors.main};
      }

    &:focus {
        outline: none;
        border: 1px solid ${colors.lightBlue};
    }
`

function InputText({ id, name, text, onChange }) {
  return (
    <StyledInputText
      type="text"
      id={id}
      name={name}
      placeholder={text}
      onChange={onChange}
    />
  )
}

InputText.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string,
  onChange: PropTypes.func,
}

export default styled(InputText)``
