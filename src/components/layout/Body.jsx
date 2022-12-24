import PropTypes from 'prop-types'
import Header from './Header'
import SubHeader from './SubHeader'
import { FlexBox } from '../../styles/index'

function Body({ children }) {
  return (
    <FlexBox style={{ marginBottom: '2rem' }}>
      <Header />
      <SubHeader />
      {children}
    </FlexBox>
  )
}

Body.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Body
