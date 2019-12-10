import React from "react";

import List from "../../components/List";
import "./AppSideBar.css";

const listOfItems = [
  { name: "Home", href: "#" },
  { name: "Blogs", href: "#" },
  { name: "Contact", href: "#" }
];

function AppSideBar(props: any) {
  return (
    <ul className="side-bar">
      <List listItems={listOfItems} />
    </ul>
  );
}

export default AppSideBar;
