import React from 'react'
import styled from 'styled-components'
import Grid from '../../styles/Grid'
import { Button } from '../atoms'
import { FirstHouseCard, HouseCard } from '../molecules/index'
import { colors, FlexBox } from '../../styles/index'
import HOUSES_DATA from '../../../data/houses-data'

const ContainerButton = styled(FlexBox)`
  margin-top: 2rem;
`

function Houses() {
  return (
    <FlexBox>
      <Grid>
        <FirstHouseCard />
        {HOUSES_DATA.map((card) => (
          <HouseCard key={card.id} price={card.price} title={card.title} />
        ))}
      </Grid>
      <ContainerButton direction="row" justify="center">
        <Button backgroundColor={colors.secondary}>Cargar más</Button>
      </ContainerButton>
    </FlexBox>
  )
}

export default styled(Houses)``
