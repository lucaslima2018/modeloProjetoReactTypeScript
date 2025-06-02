import React from 'react'
import MenuSimples from '../menuSimples';
import MenuProdutos from '../menuProdutos';

const ListSubMenu = (prop: { open: any; handleDrawerOpen: () => void; }) => {
  return (
    <>
      <MenuSimples open={prop.open}/>
      <MenuProdutos open={prop.open} handleDrawerOpen={prop.handleDrawerOpen}/>
    </>
  )
}

export default ListSubMenu;
