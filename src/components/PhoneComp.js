import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { sellPhone } from "../redux/actions/actions";

function PhoneComp() {
    const numberOfPhone = useSelector(state => state.phone.numberOfPhone)
    const dispatch = useDispatch()
  return (
    <div className="container">
      <h2>Phones -- HOOKS --</h2>
      <h3>Number of Phone:{numberOfPhone} </h3>
      <button onClick={()=>dispatch(sellPhone())}>Sell Phone</button>
    </div>
  );
}

export default PhoneComp;
