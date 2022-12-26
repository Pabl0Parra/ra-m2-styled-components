import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colors } from '../../styles/index'

const StyledInput = styled.input`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius: 0.313rem;
  border: 1px solid ${colors.gray};
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.19);
  padding-left: 0.8rem;

  
}
`

function InputText({ text, width = '21rem', height = '2.5rem' }) {
  return (
    <StyledInput type="text" width={width} height={height} placeholder={text} />
  )
}

InputText.propTypes = {
  text: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
}
export default styled(InputText)``
