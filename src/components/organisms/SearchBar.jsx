/* eslint-disable no-console */
import React from 'react'
import { Button, Icon } from '../atoms/index'
import SelectGroup from '../molecules/SelectGroup'

export default function SearchBar() {
  const rentalType = [
    { index: '0', property: 'Piso' },
    { index: '1', property: 'Chalet' },
    { index: '2', property: 'Garaje' },
  ]

  const city = [
    { index: '0', city: 'Madrid' },
    { index: '1', city: 'Barcelona' },
    { index: '2', city: 'Zaragoza' },
  ]
  return (
    <>
      <SelectGroup
        id="rentalType"
        rentalType={rentalType}
        placeholder="Piso, chalet o garaje..."
      />
      <SelectGroup
        id="city"
        city={city}
        placeholder="Madrid, Barcelona o Zaragoza..."
      />
      <Button>
        <Icon size={26} name="search" />
      </Button>
    </>
  )
}
