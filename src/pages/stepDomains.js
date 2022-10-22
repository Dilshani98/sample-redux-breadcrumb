import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate ,useParams} from "react-router-dom";


export default function Stepdomains() {
    const navigate = useNavigate();
    const{ tenantid,projectid} = useParams();
   
    
      const  function1=()=>{
        console.log("params",tenantid,projectid)
      }
        
    
      return (
        <div>
          <div>Step domains</div>
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
