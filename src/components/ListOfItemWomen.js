import { shopitems } from '../data/database';
import OneItem from './OneItem';
// import { v4 as uuidv4 } from 'uuid';
import ItemLayout from '../layout/ItemLayout';


function ListofItemWomen() {
  return shopitems
    .filter((x) => x.gender === 'women')
    .map((x) => {
      return (
        <ItemLayout key={x.id}>
          <OneItem
            key={x.id}
            id={x.id}
            image_url={x.img}
            size1={x.size1}
            size2={x.size2}
            size3={x.size3}
            size4={x.size4}
            size5={x.size5}
            name={x.name}
            price={x.price}
          />
        </ItemLayout>
      );
    });
}
export default ListofItemWomen;
