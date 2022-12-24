import React from 'react'
import styled from 'styled-components'
import Grid from '../../styles/Grid'
import { Button } from '../atoms'
import { FirstHouseCard, HouseCard } from '../molecules/index'
import { colors, FlexBox } from '../../styles'
import HOUSES_DATA from '../../../houses-data'

const ContainerButton = styled(FlexBox)`
  margin-top: 2rem;
`

function Houses() {
  return (
    <FlexBox>
      <Grid>
        <FirstHouseCard />
        {HOUSES_DATA.map((card) => (
          <HouseCard key={card.id} price={card.price} address={card.address} />
        ))}
      </Grid>
      <ContainerButton direction="row" justify="center">
        <Button backgroundColor={colors.secondary}>Cargar más</Button>
      </ContainerButton>
    </FlexBox>
  )
}

export default styled(Houses)``
