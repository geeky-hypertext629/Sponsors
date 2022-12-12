import React from "react";
import Avatar from "./Avatar";
import sponsors from "./sponsors";
import Heading from "./Heading";

function App(){
  return ( <>
  <Heading />
  <div className="container">

  {sponsors.map((company)=>{
    return (
    <Avatar 
    siteurl= {company.url}
    name= {company.name}
    imgurl={company.imgURL}
    role={company.subtext} />);
  })}
  </div>
  </>);
}

export default App;
