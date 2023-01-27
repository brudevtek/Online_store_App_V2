import classes from './OneCartItem.module.css';

function OneCartItem(props) {
  // console.log(props.image)
  return (
    <>
      <div className={classes.item}>
        <div className={classes.itemcard_img}>
          <img src={props.image} alt="item" />
          <div>
            <h1>{props.name}</h1>
            <h2>Size: {props.size}</h2>
            <h2>Color: {props.color}</h2>
            <h2>${props.price}</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default OneCartItem;
