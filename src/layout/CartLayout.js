import classes from './CartLayout.module.css';

function CartLayout(props) {
  return <div className={classes.cart_layout}>{props.children}</div>;
}

export default CartLayout;
