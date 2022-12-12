import React from 'react'

export default function Avatar(props) {
  return (
    <a href={props.siteurl} className="card">
        <img src={props.imgurl} alt="nthng"/>   
        <h2>{props.name}    </h2>
        <p>{props.role}</p> 
    </a>
  )
}
