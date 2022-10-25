import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate ,useParams} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {removeElement} from "../counterSlice";


export default function Stepdomains() {
    const navigate = useNavigate();
    const{ tenantid,projectid} = useParams();
    const dispatch = useDispatch();

    const bredcrumbArray = useSelector((state) => state.counter.value);
    
      const  function1=()=>{
        console.log("params",tenantid,projectid)
      }
        
      const breadcrumbNavigate =(e,item)=>{ 

        if(item.name === "Projects"){
          e.preventDefault();
          navigate(`/projects/${tenantid}`);
          dispatch(removeElement({name:"Projects"})) 
        }
        if(item.name === "Tenants"){
          navigate(`/tenants`);
        }
      }
    
      return (
        <div>
          <div>Step domains</div>
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
                  onClick={(e) =>function1()}
                >
                  click
                </Button></div>
        </div>
      );
}
