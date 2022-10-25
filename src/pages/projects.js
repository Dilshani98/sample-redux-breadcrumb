import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {addElement} from "../counterSlice";

export default function Projects() {

  const navigate = useNavigate();
  const { tenantid } = useParams();
  const dispatch = useDispatch();
  const projectid = 1;

  const bredcrumbArray = useSelector((state) => state.counter.value);

  const navigateToStepDomain = () => {
    navigate(`/stepdomain/${tenantid}/${projectid}`);
    dispatch(addElement({id:bredcrumbArray[bredcrumbArray.length-1].id+1,name:"Projects",path:`/projects/${tenantid}`})) 
  };

  const breadcrumbNavigate =(e,item)=>{
   
    if(item.name === "Project"){
      e.preventDefault();
      navigate(`/projects/${tenantid}`);
    }
    if(item.name === "Tenants"){

      navigate(`/tenants`);
    }
  }

  console.log("array",bredcrumbArray)

  return (
    <div>
      <div>Projects</div>
      <div>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            {bredcrumbArray.map((item) => {
              return (
                <>
                  <li class="breadcrumb-item">
                    <a href="" onClick={(e)=>breadcrumbNavigate(e,item)}>{item.name}</a>
                  </li>
                  {/* <li class="breadcrumb-item">
                    <a href="#">Library</a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Data
                  </li> */}
                </>
              );
            })}
          </ol>
        </nav>
      </div>
      <div>
        <Button
          style={{
            marginTop: "50px",
            marginRight: "10px",
            fontSize: "14px",
          }}
          onClick={(e) => navigateToStepDomain()}
        >
          View Step domains
        </Button>
      
      </div>
    </div>
  );
}
