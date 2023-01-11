import React from 'react'
import { Button, Icon } from '../atoms/index'
import SelectGroup from '../molecules/SelectGroup'
import rentalType from '../../../data/typeRentalsOptions-data'
import city from '../../../data/citiesOptions-data'

export default function SearchBar() {
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
        <Icon size={28} name="search" />
      </Button>
    </>
  )
}
