
import React, { useState } from "react";
import styled from "styled-components";

// styleds
const ToggleButton = styled.button`
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1001;
  padding: 10px 20px;
  background-color: #0077cc;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const MenuContainer = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: ${({ open }) => (open ? '0' : '-250px')};
  width: 250px;
  height: 100%;
  background-color: #222;
  transition: left 0.3s ease-in-out;
  z-index: 1000;
  box-shadow: 2px 0 10px rgba(0,0,0,0.5);
`;

const MenuContent = styled.div`
  padding: 60px 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const MenuItemButton = styled.button`
  padding: 12px;
  background-color: #444;
  color: white;
  border: none;
  text-align: left;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #666;
  }
`;

// principal
interface MenuItem {
  label: string;
  onClick: () => void;
}

interface PropsBarLeftMenuDropdown {
  items: MenuItem[];
}

export const BarLeftMenuDropdown: React.FC<PropsBarLeftMenuDropdown> = ({ items }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ToggleButton onClick={() => setOpen(!open)}>
        {open ? "Fechar" : "Abrir Menu"}
      </ToggleButton>

      <MenuContainer open={open}>
        <MenuContent>
          {items.map((item, index) => (
            <MenuItemButton key={index} onClick={item.onClick}>
              {item.label}
            </MenuItemButton>
          ))}
        </MenuContent>
      </MenuContainer>
    </>
  );
};
