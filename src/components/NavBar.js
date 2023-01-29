import classes from "./NavBar.module.css"
import {Link} from "react-router-dom"
import { useContext, useState } from 'react';
import {CartQtyContext } from "../App"

function NavBar() {
  const [qtyCart, setQtyCart] = useContext(CartQtyContext);
  

  return (
    <div className={classes.nav_bar}>
      <div className={classes.logo}>
        <Link to="/">
          <header>cool outfit</header>
        </Link>
      </div>
      <div className={classes.menu}>
        <ul>
          <li>
            <Link to="/">men</Link>
          </li>
          <li>
            <Link to="/women">women</Link>
          </li>
          <li>
            <Link to="/kids">kids</Link>
          </li>
        </ul>
      </div>
      <div className={classes.cart_class}>
        <div className={classes.qty_cart}>{qtyCart}</div>
        <Link to="/cart">
          <img
            src="https://img.icons8.com/ios/50/000000/shopping-cart--v1.png"
            alt="pic"
          />
        </Link>

        {/* </a> */}
      </div>
    </div>
  );
}

export default NavBar;
