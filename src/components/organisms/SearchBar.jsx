import React from 'react'
import { Button, Icon, Select } from '../atoms/index'

export default function SearchBar() {
  return (
    <>
      <Select text="Piso">
        <option value="" hidden>
          Piso, chalet o garaje...
        </option>
        <option value="">Piso</option>
        <option value="">Chalet</option>
        <option value="">Garaje</option>
      </Select>
      <Select text="Madrid">
        <option value="" hidden>
          Madrid, Barcelona o Zaragoza...
        </option>
        <option value="">Madrid</option>
        <option value="">Barcelona</option>
        <option value="">Zaragoza</option>
      </Select>
      <Button>
        <Icon size={26} name="search" />
      </Button>
    </>
  )
}
