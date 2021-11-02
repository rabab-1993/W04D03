import React from "react";
import { useState } from 'react'
import { useParams } from "react-router-dom";
import './style.css'



const Card = () => {

  let ids= useParams().id;
  const arr =[
    {
      id: 1,
      name: "South Korea",
      img: "https://images.pexels.com/photos/2376710/pexels-photo-2376710.jpeg?cs=srgb&dl=pexels-ethan-brooke-2376710.jpg&fm=jpg",
    },
    {
      id: 2,
      name: "Paris",
      img: "https://images.pexels.com/photos/9190648/pexels-photo-9190648.jpeg?cs=srgb&dl=pexels-alex-barnes-9190648.jpg&fm=jpg",
    },
    {
      id: 3,
      name: "Makkah, Saudi Arabia",
      img: "https://images.pexels.com/photos/3627335/pexels-photo-3627335.jpeg?cs=srgb&dl=pexels-ahmed-shahwan-3627335.jpg&fm=jpg",
    },
  ];


const findId = arr.find((el) => el.id == ids);
console.log(findId);
  return (
    <div className="card">
        
      <h1>{findId.name}</h1>
      <img src={findId.img} alt={findId.name}/>
    </div>
  );
};

export default Card;
