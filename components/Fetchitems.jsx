import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsactions } from "../store/itemsslice";
import {fetchstatusactions} from "../store/fetchstatusslice"


const Fetchitems = () => {
  const fetchstatus = useSelector(store => store.fetchstatus);
  const dispatch = useDispatch();
  

  useEffect(() => {
    if (fetchstatus.fetchdone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchstatusactions.markfetchingstarted());
    fetch('http://localhost:8080/items',{signal})
    .then(res => res.json())
    .then(({items}) => {
      dispatch(fetchstatusactions.markfetchdone());
      dispatch(fetchstatusactions.markfetchingfinished());
      dispatch(itemsactions.addinitialitems(items));
      
     });

     return () => {
  
      controller.abort();
    };
  },[fetchstatus]);

  
 

  return <>
  </>
}

export default Fetchitems;