import OneDetailedItem from '../components/OneDetailedItem';
import { shopitems } from '../data/database';
import { useParams } from 'react-router-dom';

function DetailedItem() {
  let { itemuniqueid } = useParams();
  let search = shopitems.filter((x) => x.id === parseInt(itemuniqueid));
  console.log(search[0].id);

  return (
    <OneDetailedItem
      key={search[0].id}
      image_url={search[0].img}
      size1={search[0].size1}
      size2={search[0].size2}
      size3={search[0].size3}
      size4={search[0].size4}
      size5={search[0].size5}
      name={search[0].name}
      price={search[0].price}
    />
  );
}

export default DetailedItem;
