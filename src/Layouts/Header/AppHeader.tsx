import React from "react";

import "./AppHeader.css";

function AppHeader(props: any) {
  return (
    <header className="containerHeader">
        <img className="imgHeader" 
        alt={props.imageAlt} 
        src={props.imageSrc} />
        <h1 className="titleHeader">ASD Int</h1>
    </header>
  );
}

export default AppHeader;