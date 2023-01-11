import React from 'react'
import styled from 'styled-components'
import { FlexBox, colors } from '../../styles/index'
import SearchBar from '../organisms/SearchBar'

const StyledSubHeader = styled(FlexBox)`
  padding-left: 1.5rem;
  padding-right: 2rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  background-color: ${colors.superLightBlue};
  border: 1px solid ${colors.turquoise};
  gap: 1rem;
`

function SubHeader({ ...props }) {
  return (
    <StyledSubHeader {...props} direction="row">
      <SearchBar />
    </StyledSubHeader>
  )
}

export default styled(SubHeader)``
