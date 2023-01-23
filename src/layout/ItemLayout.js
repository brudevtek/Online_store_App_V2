import classes from './ItemLayout.module.css';

function ItemLayout(props) {
  return <div className={classes.one_item_layout}>{props.children}</div>;
}

export default ItemLayout;
