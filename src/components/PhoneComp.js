import React,{useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { sellPhone } from "../redux/actions/actions";

function PhoneComp() {
    const [number,setNumber] = useState(1);
    const numberOfPhone = useSelector(state => state.phone.numberOfPhone);
    const dispatch = useDispatch();
  return (
    <div className="container">
      <h2>Phones -- HOOKS --</h2>
      <h3>Number of Phone:{numberOfPhone} </h3>
      <input 
      type="number" 
      value={number} 
      onChange ={(e) => setNumber(e.target.value)} 
      />
      <button onClick={()=>dispatch(sellPhone(number))}>Sell Phone</button>
    </div>
  );
}

export default PhoneComp;
