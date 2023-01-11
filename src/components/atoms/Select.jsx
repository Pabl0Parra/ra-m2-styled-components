import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colors } from '../../styles/index'

const StyledSelect = styled.select`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius: 0.313rem;
  border: 1px solid ${colors.gray};
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.19);
  padding-left: 0.8rem;
  appearance: none;

  &:focus {
    outline: none;
  }

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`

function Select({ text, width = '21rem', height = '2.5rem', id, children }) {
  return (
    <StyledSelect
      type="text"
      width={width}
      height={height}
      name={id}
      placeholder={text}
    >
      {children}
    </StyledSelect>
  )
}

Select.propTypes = {
  text: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  id: PropTypes.string,
  children: PropTypes.node,
}
export default styled(Select)``
