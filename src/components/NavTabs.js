import React from "react";
import { Menu } from "semantic-ui-react";

// Props are passed through our functional component.
function NavTabs(props) {
  const tabs = ["About Me", "Portfolio", "Contact", "Resume"];

  return (
    <Menu>
      {tabs.map((tab) => (
        <Menu.Item
          name={tab}
          key={tab}
          active={props.currentPage === tab}
          onClick={() => props.handlePageChange(tab)}
        ></Menu.Item>
      ))}
    </Menu>
  );
}

export default NavTabs;
