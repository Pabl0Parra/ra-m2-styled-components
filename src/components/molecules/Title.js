import styled from 'styled-components'
import { colors } from '../../styles'

const Title = styled(Text)`
  color: ${({ color }) => color || colors.black};
  padding: ${({ padding }) => padding};
`
export default styled(Title)``
