import { useSelector } from "react-redux";

const Bagsummary = () => {
  const bagitemids = useSelector(state => state.bag);
  const items = useSelector(state => state.items);
  const finalitems = items.filter(item => {
    const itemindex = bagitemids.indexOf(item.id);
    return itemindex >= 0;
  })

  const CONVENIENCE_FEES = 99;
  let totalItem = bagitemids.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  finalitems.forEach((bagitem) => {
    totalMRP += bagitem.original_price;
    totalDiscount += bagitem.original_price - bagitem.current_price;
  });

  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

  return <> <div className="bag-summary">
         <div className="bag-details-container">
    <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
    <div className="price-item">
      <span className="price-item-tag">Total MRP</span>
      <span className="price-item-value">₹{totalMRP}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Discount on MRP</span>
      <span className="price-item-value priceDetail-base-discount">-₹{totalDiscount}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Convenience Fee</span>
      <span className="price-item-value">₹99</span>
    </div>
    <hr/>
    <div className="price-footer">
      <span className="price-item-tag">Total Amount</span>
      <span className="price-item-value">₹{finalPayment}</span>
    </div>
  </div>
  <button className="btn-place-order">
    <div className="css-xjhrni">PLACE ORDER</div>
  </button>
  </div>

  </>
}

export default Bagsummary;