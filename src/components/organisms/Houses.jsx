import React from 'react'
import styled from 'styled-components'
import { colors, FlexBox, Grid } from '../../styles'
import { Button } from '../atoms'
import { FirstHouseCard, HouseCard } from '../molecules'
import HOUSES from '../../../houses-data'

const ButtonContainer = styled(FlexBox)`
  margin-top: 1.5rem;
`
function Houses() {
  return (
    <FlexBox>
      <Grid>
        <FirstHouseCard />
        {HOUSES.map((card) => (
          <HouseCard key={card.id} title={card.title} price={card.price} />
        ))}
      </Grid>
      <ButtonContainer direction="row" justify="center">
        <Button backgroundColor={colors.secondary}>Cargar más</Button>
      </ButtonContainer>
    </FlexBox>
  )
}

export default styled(Houses)``
