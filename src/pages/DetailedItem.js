import OneDetailedItem from '../components/OneDetailedItem';
import { shopitems } from '../data/database';

function DetailedItem() {
  return (
    <OneDetailedItem
      key={shopitems[0].id}
      image_url={shopitems[0].img}
      size1={shopitems[0].size1}
      size2={shopitems[0].size2}
      size3={shopitems[0].size3}
      size4={shopitems[0].size4}
      size5={shopitems[0].size5}
      name={shopitems[0].name}
      price={shopitems[0].price}
    />
  );
}

export default DetailedItem;
