import React from 'react'
import PropTypes from 'prop-types'
import { Label, Select } from '../atoms/index'

export default function SelectGroup({ id, rentalType, city, placeholder }) {
  return (
    <>
      <Label id={id}>{rentalType}</Label>
      <Select id={id}>
        <option value="" hidden>
          {placeholder}
        </option>
        {rentalType !== undefined && rentalType.length > 0
          ? rentalType.map((item) => (
              <option key={item.index} value={item.property}>
                {item.property}
              </option>
            ))
          : city.map((item) => (
              <option key={item.index} value={item.city}>
                {item.city}
              </option>
            ))}
      </Select>
    </>
  )
}
SelectGroup.propTypes = {
  id: PropTypes.string,
  rentalType: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.string]),
  ),
  city: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.string]),
  ),
  placeholder: PropTypes.string,
}
