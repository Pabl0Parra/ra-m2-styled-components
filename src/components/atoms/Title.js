import styled from 'styled-components'
import { colors } from '../../styles'

const Title = styled.h1`
  color: ${({ color }) => color || colors.black};
  padding: ${({ padding }) => padding};
`
export default Title
