import React from 'react'
import { InputText, Icon, Button } from '../atoms/index'

function SearchBar() {
  return (
    <>
      <InputText placeholder="Piso, chalet o garaje..." />
      <InputText placeholder="Madrid, Barcelona o Zaragoza..." />
      <Button>
        <Icon name="search" size={27} />
      </Button>
    </>
  )
}

export default SearchBar
