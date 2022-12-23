import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { colors, FlexBox } from '../../styles/index'
import { Title } from '../molecules/index'

const HeaderStyled = styled(FlexBox)`
  padding-left: 2rem;
  padding-right: 2rem;

  ul {
    list-style: none;
    column-gap: 0.6rem;
  }
`

const StyledList = styled(FlexBox)`
  list-style: none;
  column-gap: 0.6rem;
  a {
    color: ${colors.font.base};
    text-decoration: none;
  }
`
const StyledLink = styled(NavLink)`
  &.active {
    font-weight: bold;
  }
`

function Header() {
  return (
    <HeaderStyled direction="row" justify="space-between">
      <Title text="MIPISO.com.es" color={colors.font.headings} />
      <StyledList as="ul" direction="row">
        <StyledLink to="/">Buscador</StyledLink>
        <StyledLink to="/data">Datos</StyledLink>
        <StyledLink to="/profile">Mi Perfil</StyledLink>
      </StyledList>
    </HeaderStyled>
  )
}

export default Header
