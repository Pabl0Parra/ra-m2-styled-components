import React from 'react'
import PropTypes from 'prop-types'

export default function Label({ id, children }) {
  return <label htmlFor={id}>{children}</label>
}

Label.propTypes = { id: PropTypes.string, children: PropTypes.node }
