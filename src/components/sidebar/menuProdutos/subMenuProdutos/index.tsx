import { ListItem, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'

export interface MenuItem {
    text: string;
    href: string;
}

const SubMenuProdutos = (props: { items: MenuItem[] }) => {
  return (
    <>
      {props.items.map((item) => (
        <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
            <ListItemButton sx={{ pl: 4 }} href={item.href}>
                <ListItemText primary={item.text} />
            </ListItemButton>
        </ListItem>
      ))}
    </>
  )
}

export default SubMenuProdutos;
