import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function Projects() {
  const navigate = useNavigate();
  const { tenantid } = useParams();

  const projectid = 1;

  // const count = useSelector((state) => state.counter.value);
  const bredcrumbArray = useSelector((state) => state.counter.value);
  
  const navigateToStepDomain = () => {
    navigate(`/stepdomain/${tenantid}/${projectid}`);
  };

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
                    <a href="#">{item.name}</a>
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
