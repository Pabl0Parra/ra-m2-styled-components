/* eslint-disable import/named */
import React from 'react'
import styled from 'styled-components'
import { Body } from '../components/layout/index'
import { FlexBox } from '../styles/index'
import { Houses } from '../components/organisms/index'

const StyledHomeContainer = styled(FlexBox)`
  justify-content: center;
  margin-left: 0.5rem;
  column-gap: 2rem;
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
            margin: '1.75rem 2rem 3.3rem 0rem',
            alignItems: 'center',
            border: '1px solid black',
            borderRadius: '0.5rem',
            boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.19)',
          }}
        >
          THIS WILL BE THE CITY MAP
        </StyledMap>
      </StyledHomeContainer>
    </Body>
  )
}

export default Home
