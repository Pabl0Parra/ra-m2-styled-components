import React from 'react'
import PropTypes from 'prop-types'
import { Label, Select } from '../atoms/index'

export default function SelectGroup({ id, options, placeholder }) {
  return (
    <>
      <Label htmlFor={id} />
      <Select id={id}>
        <option value="" hidden>
          {placeholder}
        </option>
        {options.map((item) => (
          <option key={item.id}>{item.value}</option>
        ))}
      </Select>
    </>
  )
}
SelectGroup.propTypes = {
  id: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.string]),
  ),
  placeholder: PropTypes.string,
}
