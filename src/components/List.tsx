import React from "react";

import "./List.css";

function List({ listItems }: any) {
  return listItems.map((items: any) => (
    <li className="list-item">
      <a href={items.href}>{items.name}</a>
    </li>
  ));
}

export default List;
