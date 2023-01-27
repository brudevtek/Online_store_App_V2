import classes from './OneDetailedItem.module.css';
import { useState } from 'react';
// import NavBar from './NavBar';

function OneDetailedItem(props) {
  const [selectedSize, setSelectedSize] = useState('Choose Size');
  const onClickHandler = (event) => {
    setSelectedSize(event.target.innerText);
  };
  const [selectedColor, setSelectedColor] = useState('Choose color');
  const addColorName = (event) => {
    setSelectedColor(event.target.getAttribute('data_color'));
  };
  return (
    <>
      <div className={classes.detailed_item_page}>
        <div className={classes.item_imag_div}>
          <img src={'.' + props.image_url} alt="item_pic"></img>
        </div>
        <div className={classes.detailed_item_right_side}>
          <div className={classes.item_name}>
            <h1>{props.name}</h1>
          </div>
          <div className={classes.item_price}>
            <h1>$ {props.price}</h1>
          </div>
          <div className={classes.color_name}>
            <h1>Color: {selectedColor}</h1>
          </div>

          <div className={classes.available_colors}>
            <div
              className={`${classes.color} ${classes.color_1}`}
              data_color="Green"
              onClick={addColorName}
            ></div>
            <div
              className={`${classes.color} ${classes.color_2}`}
              data_color="Brown"
              onClick={addColorName}
            ></div>
            <div
              className={`${classes.color} ${classes.color_3}`}
              data_color="Blueish"
              onClick={addColorName}
            ></div>
            <div
              className={`${classes.color} ${classes.color_4}`}
              data_color="Pink"
              onClick={addColorName}
            ></div>
          </div>
          <div className={classes.size_name}>
            <h1>Size: {selectedSize}</h1>
          </div>
          <div className={classes.available_size_box}>
            <div onClick={onClickHandler}>{props.size1}</div>
            <div onClick={onClickHandler}>{props.size2}</div>
            <div onClick={onClickHandler}>{props.size3}</div>
            <div onClick={onClickHandler}>{props.size4}</div>
            <div onClick={onClickHandler}>{props.size5}</div>
          </div>
          <div>
            <button>add to shopping cart</button>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default OneDetailedItem;
