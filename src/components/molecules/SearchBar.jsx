import React from 'react'
import { Button, Icon, Select } from '../atoms/index'

export default function SearchBar() {
  return (
    <>
      <Select text="Piso">
        <option value="" hidden>
          Piso
        </option>
        <option value="">Chalet</option>
        <option value="">Garaje</option>
      </Select>
      <Select text="Madrid">
        <option value="" hidden>
          Madrid
        </option>
        <option value="">Barcelona</option>
        <option value="">Zaragoza</option>
      </Select>
      <Button>
        <Icon size={26} name="search" />
      </Button>
    </>
  )
}
