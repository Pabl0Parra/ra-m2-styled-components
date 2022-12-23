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
const FirstHouseCardBody = styled(FlexBox)`
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

function FirstHouseCard({ img, name, text }) {
  return (
    <Card>
      <HouseImage src={img} alt={name} />
      <FirstHouseCardBody>
        <Title text={name} />
        <Text>{text}</Text>
      </FirstHouseCardBody>
    </Card>
  )
}

FirstHouseCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string,
}

export default FirstHouseCard
