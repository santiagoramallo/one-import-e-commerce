import React from "react";
import CartWidget from "./CartWidget";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Link,
  } from '@chakra-ui/react';

  const NavBar = () => {
    <div className="Menu">
        <Menu>
            <MenuButton>Categorias</MenuButton>
            <MenuList>
               <menuitem>Lentes Ray Ban</menuitem>
               <menuitem>Lentes Oakley</menuitem>
           </MenuList>
       </Menu>
        <box flex="1" bg="orange">
      <CartWidget/>
         </box>
    </div>
  }

  export default NavBar;