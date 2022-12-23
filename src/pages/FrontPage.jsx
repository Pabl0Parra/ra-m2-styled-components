/* eslint-disable import/named */
import React from 'react'
import styled from 'styled-components'
import { Body } from '../components/layout'
import { colors, dimensions, FlexBox } from '../styles/index'
import { Houses } from '../components/organisms/Houses'

const StyledFrontPageContainer = styled(FlexBox)`
    justify-content: center
    margin: 2rem
    column-gap: 2.5rem
`

const StyledMap = styled(FlexBox)`
    height: 80vh
    width: 45%
    justify-content: center
    align-items: center
    background-color: ${colors.gray}
    border-radius: ${dimensions.xs}   
`

function FrontPage() {
  return (
    <Body>
      <StyledFrontPageContainer direction="row">
        <Houses />
        <StyledMap>THIS WILL BE THE CITY MAP</StyledMap>
      </StyledFrontPageContainer>
    </Body>
  )
}

export default FrontPage
