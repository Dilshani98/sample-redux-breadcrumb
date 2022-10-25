import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {  increment ,addElement} from "../counterSlice";

export default function Tenants() {

  
  const navigate = useNavigate();

  // const count = useSelector((state) => state.counter.value);
  const arrayB = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const tenantId = 1;

  const navigateToProjects = () => {
    navigate(`/projects/${tenantId}`);
    dispatch(addElement({id:arrayB[arrayB.length-1].id+1,name:"Tenants",path:`/tenants`}))  
  };

console.log("array",arrayB)

  return (
    <div>
      <div>Tenants</div>
      
      <div>
        <Button
          style={{
            marginTop: "50px",
            marginRight: "10px",
            fontSize: "14px",
          }}
          onClick={(e) => navigateToProjects()}
        >
          View Projects
        </Button>
        <Button
          style={{
            marginTop: "50px",
            marginRight: "10px",
            fontSize: "14px",
          }}
          onClick={(e) => dispatch(increment())}
        >
          redux
        </Button>
      
      </div>
    </div>
  );
}
