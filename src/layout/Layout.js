import React from "react";
import Menu from "./Menu";
import Routes from "./Routes";

function Layout() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div>
          <Menu />
        </div>
        <div className="col">
          <Routes />
        </div>
      </div>
    </div>
  );
}

export default Layout;
