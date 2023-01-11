import React from 'react'
import PropTypes from 'prop-types'

export default function Label({ id, title }) {
  return <label htmlFor={id}>{title}</label>
}

Label.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
}
