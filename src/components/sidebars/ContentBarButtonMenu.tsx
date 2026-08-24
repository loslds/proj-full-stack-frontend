//import React from "react";

import * as Sl from './stylesSidebar';

interface TypeContentBarButtonMenu {
  widthmenu?: string;
  imgmenu?: string;
  titbtnmenu?: string;
  onClickmenu?: React.MouseEventHandler<HTMLButtonElement>;
};

export const ContentBarButtonMenu = ({
  widthmenu,
  imgmenu,
  titbtnmenu,
  onClickmenu,
}: TypeContentBarButtonMenu) => {
  return (
    <Sl.ContainerButtonMenu $width={widthmenu}>
      <Sl.ButtonBarImg 
        $img={imgmenu} 
        title={titbtnmenu} 
        onClick={onClickmenu} 
      />
    </Sl.ContainerButtonMenu>
  );
};

export default ContentBarButtonMenu;