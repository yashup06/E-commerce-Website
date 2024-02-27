import { useDispatch, useSelector } from "react-redux";
import { bagactions } from "../store/bagslice";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosRemoveCircle } from "react-icons/io";



const Homeitem = ({item}) => {
const bagitems = useSelector(store => store.bag);
const elementfound = bagitems.indexOf(item.id) >= 0;
console.log(item.id,elementfound)

 const dispatch = useDispatch();

  const handleaddtobag = () => {
      dispatch(bagactions.addtobag(item.id));
  }
  const handleremovefrombag = () => {
    dispatch(bagactions.removefrombag(item.id));
}

  return <>
  <div className="item-container">
      <img className="item-image" src={item.image} alt="item image"/>
      <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      
      {elementfound ? <button type="button" className="btn btn-add-bag btn-danger" onClick={handleremovefrombag}><IoIosRemoveCircle />Remove</button> :
      <button type="button " className="btn btn-add-bag btn-success" onClick={handleaddtobag}><IoIosAddCircleOutline />Add to Bag</button>}
      
      
     
    </div>`
  </>
}

export default Homeitem;