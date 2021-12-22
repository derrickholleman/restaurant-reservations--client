import React, { useState } from "react";
import { Drawer, Button } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { Link } from "react-router-dom";
import "./Menu.css";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const useStyles = makeStyles({
    paper: {
      width: 250,
    },
  });

  const classes = useStyles()

  return (
    <nav>
      <Button
        className="primary-btn"
        onClick={toggleDrawer}
        variant="contained"
        sx={{ mt: 1, minWidth: "100%" }}
      >
        Navigation
      </Button>
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={toggleDrawer}
        classes={{ paper: classes.paper }}
      >
        <Link className="nav-link" to="/" onClick={toggleDrawer}>
          <div className="nav-title">Periodic Tables</div>
        </Link>
        <Link className="nav-link" to="/dashboard" onClick={toggleDrawer}>
          <span className="oi oi-dashboard" />
          &nbsp;Dashboard
        </Link>
        <Link className="nav-link" to="/search" onClick={toggleDrawer}>
          <span className="oi oi-magnifying-glass" />
          &nbsp;Search
        </Link>
        <Link
          className="nav-link"
          to="/reservations/new"
          onClick={toggleDrawer}
        >
          <span className="oi oi-plus" />
          &nbsp;New Reservation
        </Link>
        <Link className="nav-link" to="/tables/new" onClick={toggleDrawer}>
          <span className="oi oi-layers" />
          &nbsp;New Table
        </Link>
      </Drawer>
    </nav>
  );
}

export default Menu;
