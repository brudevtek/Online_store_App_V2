import classes from './OneDetailedItem.module.css';

function OneDetailedItem(props) {
  return (
    <>
      <div className={classes.detailed_item_page}>
        <div className={classes.item_imag_div}>
          <img src={props.image_url} alt="item_pic"></img>
        </div>
        <div className={classes.detailed_item_right_side}>
          <div className={classes.item_name}>
            <h1>{props.name}</h1>
          </div>
          <div className={classes.item_price}>
            <h1>$ {props.price}</h1>
          </div>
          <div className={classes.color_name}>
            <h1>Color: Orange</h1>
          </div>

          <div className={classes.available_colors}>
            <div className={`${classes.color} ${classes.color_1}`}></div>
            <div className={`${classes.color} ${classes.color_2}`}></div>
            <div className={`${classes.color} ${classes.color_3}`}></div>
            <div className={`${classes.color} ${classes.color_4}`}></div>
          </div>
          <div className={classes.size_name}>
            <h1>Color: XL</h1>
          </div>
          <div className={classes.available_size_box}>
            <div>{props.size1}</div>
            <div>{props.size2}</div>
            <div>{props.size3}</div>
            <div>{props.size4}</div>
            <div>{props.size5}</div>
          </div>
          <div>
            <button>add to shopping cart</button>
          </div>
          <div>

          </div>
        </div>
      </div>
    </>
  );
}

export default OneDetailedItem;
