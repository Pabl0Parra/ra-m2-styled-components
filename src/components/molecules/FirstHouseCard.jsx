import React from 'react'
import styled from 'styled-components'
import { colors, dimensions } from '../../styles/index'
import { Text, Card } from '../atoms/index'
import houseImage from '../../assets/images/poolHouse.jpg'

const ContainerImg = styled.div`
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${Text} {
    width: 10em;
    padding: 5px 8px;
    font-size: ${dimensions.xl};
    color: ${colors.font.white};
    position: absolute;
  }
`

export default function CardCover() {
  return (
    <Card>
      <ContainerImg>
        <Text as="span">Piso en Barcelona, Grac... 939.000€</Text>
        <img src={houseImage} alt="pool house" />
      </ContainerImg>
    </Card>
  )
}
