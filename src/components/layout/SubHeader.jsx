import React from 'react'
import styled from 'styled-components'
import { colors, dimensions, FlexBox } from '../../styles'
import { SearchBar } from '../molecules/index'

const StyledSubHeader = styled(FlexBox)`
  background-color: ${colors.superLightBlue}}
  padding-top: ${dimensions.padding.base}
  padding-bottom: ${dimensions.padding.base}
  padding-left: ${dimensions.padding.xxl}
  padding-right: ${dimensions.padding.xxl}  
  border: 1px solid ${colors.turquoise}
  gap: ${dimensions.gap.base}  
`

function SubHeader({ ...props }) {
  return (
    <StyledSubHeader {...props} direction="row">
      <SearchBar />
    </StyledSubHeader>
  )
}

export default styled(SubHeader)``
