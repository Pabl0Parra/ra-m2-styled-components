import React from 'react'
import PropTypes from 'prop-types'
import { Label, Select } from '../atoms/index'

export default function SelectGroup({ id, name, options, onChange }) {
  return (
    <>
      <Label htmlFor={id} />
      <Select id={id} name={name} onChange={onChange} options={options} />
    </>
  )
}
SelectGroup.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.string]),
  ),
  onChange: PropTypes.func,
}
