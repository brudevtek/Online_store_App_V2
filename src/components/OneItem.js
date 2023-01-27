import classes from './OneItem.module.css';
import {useNavigate } from 'react-router-dom';

function OneItem(props) {
  let navigate=useNavigate()

  return (
    <>
      <div className={classes.item_img_div}>
        <img src={props.image_url} alt="item_pic"></img>
      </div>
      <div className={classes.available_colors}>
        <div className={classes.color_1}></div>
        <div className={classes.color_2}></div>
        <div className={classes.color_3}></div>
        <div className={classes.color_4}></div>
      </div>
      <div className={classes.available_sizes}>
        <h1>{props.size1}, </h1>
        <h1>{props.size2}, </h1>
        <h1>{props.size3}, </h1>
        <h1>{props.size4}, </h1>
        <h1>{props.size5}</h1>
      </div>
      <div className={classes.item_name}>
        <h1 onClick={() => {navigate('/detailed/' + props.id)}}>{props.name}</h1>
      </div>
      <div className={classes.item_price}>
        <h1>$ {props.price}</h1>
      </div>
    </>
  );
}

export default OneItem;
