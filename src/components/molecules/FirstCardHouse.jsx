/* eslint-disable no-undef */
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colors, dimensions, FlexBox } from '../../styles'
import { Text, Card } from '../atoms/index'
import { Title } from './index'

const HouseImage = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 5px;
  object-fit: cover;
`
const FirstCardHouseBody = styled(FlexBox)`
  width: 100%;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  position: absolute;

  ${Text} {
    color: ${colors.font.white};
    font-size: ${dimensions.font.base};
    font-weight: bold;
  }
`

function FirstCardHouse({ image, name, text }) {
  return (
    <Card>
      <HouseImage src={image} alt={name} />
      <FirstCardHouseBody>
        <Title text={name} />
        <Text>{text}</Text>
      </FirstCardHouseBody>
    </Card>
  )
}

FirstCardHouse.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default FirstCardHouse
