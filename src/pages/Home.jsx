/* eslint-disable import/named */
import React from 'react'
import styled from 'styled-components'
import { Body } from '../components/layout/index'
import { colors, dimensions, FlexBox } from '../styles/index'
import { Houses } from '../components/organisms/index'

const StyledHomeContainer = styled(FlexBox)`
    justify-content: center
    margin: 2rem
    column-gap: 2.5rem
`

const StyledMap = styled(FlexBox)`
    width: 45%;
    background-color: ${colors.gray}
    border-radius: ${dimensions.xs}      
`

function Home() {
  return (
    <Body>
      <StyledHomeContainer direction="row">
        <Houses />
        <StyledMap
          style={{
            justifyContent: 'center',
            marginLeft: '20%',
          }}
        >
          THIS WILL BE THE CITY MAP
        </StyledMap>
      </StyledHomeContainer>
    </Body>
  )
}

export default Home
