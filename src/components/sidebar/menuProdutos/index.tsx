import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InventoryIcon from '@mui/icons-material/Inventory';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import SubMenuProdutos from './subMenuProdutos';
import { MenuItem } from './subMenuProdutos';

function MenuProdutos (prop: { open: any; handleDrawerOpen: () => void; }) {

    const [openSubMenu, setOpenSubMenu] = React.useState(false);

    const handleClick = () => {
        if(prop.open){
            setOpenSubMenu(!openSubMenu);
        }else{
            prop.handleDrawerOpen();
            setOpenSubMenu(!openSubMenu);
        }
    };

    React.useEffect(() => {
        if(!prop.open){
            setOpenSubMenu(false);
        }
    }, [prop.open]);

    const menuItems: MenuItem[] = [
        { text: 'Cadastro de Produtos', href: '/cadastroprodutos' },
        { text: 'Busca Produtos', href: '/buscaprodutos' },
        // Adicione mais itens conforme necessário
    ];

    return (
        <>
            {[
                { text: 'Produtos', icon: <InventoryIcon />, href: '/' },
            ].map((item) => (
                <>
                    <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton onClick={handleClick}
                            component="a"
                            sx={{
                                minHeight: 48,
                                display: 'flex',
                                alignItems: 'center',
                                // justifyContent: 'center',
                                px: 2.5,
                                '&:hover .expandIcon': {
                                    display: 'inline-flex',
                                    visibility: prop.open ? 'visible' : 'hidden' 
                                }
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: prop.open ? 5 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text}  sx={{flex: 1, opacity: prop.open ? 1 : 0, ml: -2}} />
                            {openSubMenu ? <ExpandLess /> : <ExpandMore className="expandIcon" sx={{ display: 'none' }} />}
                        </ListItemButton>
                    </ListItem>
                    <Collapse in={openSubMenu} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <SubMenuProdutos items={menuItems}/>
                        </List>
                    </Collapse>
                </>
            ))}
        </>
    )
}

export default MenuProdutos;