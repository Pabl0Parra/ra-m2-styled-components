import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colors } from '../../styles'

const StyledSelect = styled.select`
  color: ${colors.black};
  width: 21rem;
  border-radius: 0.313rem;
  border: 1px solid ${colors.gray};
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.19);
  padding-left: 0.8rem;
  line-height: 2rem;
  appearance: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  option {
    display: flex;
    white-space: pre;
  }
`

function Select({ id, name, placeholder, onChange, options }) {
  return (
    <StyledSelect
      id={id}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    >
      {options.map((item) => (
        <option key={item.id}>{item.value}</option>
      ))}
    </StyledSelect>
  )
}

Select.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.string]),
  ),
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
}
export default styled(Select)``
