import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button, Text, Card } from '../atoms/index'
import { colors, FlexBox } from '../../styles/index'
import houseImage from '../../assets/images/poolHouse.jpg'

const StyledHouseCard = styled(Card)`
  img {
    width: 12.5rem;
    height: 61%;
    border-radius: 8px;
  }
`
const Price = styled(Text).attrs({
  as: 'span',
})`
  font-weight: bold;
  font-size: 16px;
`
const Title = styled(Text).attrs({
  as: 'span',
})`
  padding: 0px 8px;
  font-size: 0.8rem;
  color: ${colors.gray};
`
const Wrapper = styled(FlexBox)`
  align-items: center;
  justify-content: space-around;
  margin-top: 1rem;
`

function HouseCard({ title, price }) {
  return (
    <StyledHouseCard>
      <img src={houseImage} alt="pool house" />
      <div style={{ marginTop: '0.625rem' }}>
        <Title>{title}</Title>
        <Wrapper direction="row">
          <Price>{price}</Price>
          <Button backgroundColor={colors.purple}>Localizar</Button>
        </Wrapper>
      </div>
    </StyledHouseCard>
  )
}

HouseCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
}
export default styled(HouseCard)``
