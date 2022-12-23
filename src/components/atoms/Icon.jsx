import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colors } from '../../styles'

const StyledIcon = styled.span`
    font-variation-settings: "FILL" ${(props) => props.fill}, "wght" ${(
  props,
) => props.wght}, "GRAD" ${(props) => props.grad}, "opsz" ${(props) =>
  props.opsz};
    color: ${(props) => props.color} 
    font-size: ${(props) => props.size}px
    border-radius: ${(props) => props.borderRadius}px
    background: ${(props) => props.background}
    width: ${({ width }) => width || '1.5rem'};
    height: ${({ height }) => height || '1.5rem'};
    padding: ${({ padding }) => padding || '5px'};
    text-align: ${({ textAlign }) => textAlign || 'center'};
    box-shadow: 0px 3px 6px rgba(0,0,0,0.16);
`
function Icon({
  name,
  size = 24,
  fill = 0,
  wght = 400,
  grad = 0,
  opsz = 48,
  color = colors.font.white,
  borderRadius = 6,
  background = 'rgb(70,193,247)',
  className = '',
}) {
  return (
    <StyledIcon
      size={size}
      fill={fill}
      wght={wght}
      grad={grad}
      opsz={opsz}
      color={color}
      borderRadius={borderRadius}
      background={background}
      className={`material-symbols-outlined ${className}`}
    >
      {name}
    </StyledIcon>
  )
}

Icon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  fill: PropTypes.number,
  wght: PropTypes.number,
  grad: PropTypes.number,
  opsz: PropTypes.number,
  color: PropTypes.string,
  background: PropTypes.string,
  borderRadius: PropTypes.number,
  className: PropTypes.string,
}

export default styled(Icon)``
