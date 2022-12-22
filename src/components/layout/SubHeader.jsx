import React from 'react'
import styled from 'styled-components'
import { FlexBox } from '../../styles'

const StyledSubHeader = styled(FlexBox)`
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 2em;
  padding-bottom: 2em;
  background-color: lightblue;

  &:hover {
    background-color: ${(props) =>
      props.hoverColor ? props.hoverColor : 'lightgreen'};
  }
`

function SubHeader({ ...props }) {
  return <StyledSubHeader {...props}>Subheader</StyledSubHeader>
}

export default styled(SubHeader)``
