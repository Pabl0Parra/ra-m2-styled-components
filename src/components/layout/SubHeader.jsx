import React from 'react'
import styled from 'styled-components'
import { colors, dimensions, FlexBox } from '../../styles'
import { SearchBar } from '../molecules/index'

const StyledSubHeader = styled(FlexBox)`
  background-color: ${colors.superLightBlue}}
  padding: ${dimensions.base} ${dimensions.xxl}
  border: 1px solid ${colors.turquoise}
  gap: ${dimensions.base}  
`

function SubHeader({ ...props }) {
  return (
    <StyledSubHeader {...props} direction="row">
      <SearchBar />
    </StyledSubHeader>
  )
}

export default styled(SubHeader)``
