import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colors, dimensions, FlexBox } from '../../styles'
import { Text, Button, Card } from '../atoms/index'
import { Title } from './index'

const HouseImage = styled.img`
  height: 56%;
  width: 100%;
  border-radius: 5px;
  object-fit: cover;
`

const HouseCardBody = styled(FlexBox)`
  padding: 0.4rem;

  ${Text} {
    opacity: 0.8;
  }
`
function HouseCard({ img, name, text, price }) {
  return (
    <Card>
      <HouseImage src={img} alt={name} />
      <HouseCardBody>
        <Title
          as="h1"
          fontSize={`${dimensions.sm}`}
          text={name}
          color={`${colors.font.base}`}
        >
          {text}
        </Title>
        <FlexBox direction="row" justify="space-between" align="center">
          <Text color={colors.black} fontSize={dimensions.sm} fontWeight="bold">
            <span>{price}€</span>
          </Text>
          <Button
            text="Localizar"
            fontSize={dimensions.sm}
            buttonStyles={{
              height: '50%',
              width: '45%',
              backgroundColor: `${colors.main}`,
            }}
          />
        </FlexBox>
      </HouseCardBody>
    </Card>
  )
}

HouseCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

export default styled(HouseCard)``
