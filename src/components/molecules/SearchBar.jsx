import React from 'react'
import { Button, Icon, InputText } from '../atoms/index'

export default function SearchBar() {
  return (
    <>
      <InputText text="Piso, chalet o garaje..." />
      <InputText text="Madrid, Barcelona o Zaragoza..." />
      <Button>
        <Icon size={26} name="search" />
      </Button>
    </>
  )
}
