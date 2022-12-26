/* eslint-disable import/named */
import React from 'react'
import styled from 'styled-components'
import { Body } from '../components/layout/index'
import { colors, FlexBox } from '../styles/index'
import { Houses } from '../components/organisms/index'

const StyledHomeContainer = styled(FlexBox)`
    justify-content: center
    margin: 2rem
    column-gap: 2.5rem
`

const StyledMap = styled(FlexBox)`
  width: 45%;
`

function Home() {
  return (
    <Body>
      <StyledHomeContainer direction="row">
        <Houses />
        <StyledMap
          style={{
            justifyContent: 'center',
            margin: '1.75rem 2rem 3.3rem 2rem',
            alignItems: 'center',
            border: '1px solid black',
          }}
        >
          THIS WILL BE THE CITY MAP
        </StyledMap>
      </StyledHomeContainer>
    </Body>
  )
}

export default Home
