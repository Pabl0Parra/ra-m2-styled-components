import React from 'react'
import { Button, Icon, Select } from '../atoms/index'

// Este componente de SearchBar debería de estar en organisms
export default function SearchBar() {
  return (
    <>
      {/* Intenta generalizar el search, en lugar de tener que escribir las opciones manualmente como haces, pasa un array. Imagina que tienes 50 opciones... */}
      {/* Falta un label asociado */}
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
