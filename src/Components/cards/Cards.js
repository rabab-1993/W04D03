import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FaRegStar, FaStar } from "react-icons/fa";
import "./style.css";

const Cards = () => {
  let history = useHistory();
  const arr = [
    {
      id: 1,
      name: "South Korea",
      img: "https://images.pexels.com/photos/2376710/pexels-photo-2376710.jpeg?cs=srgb&dl=pexels-ethan-brooke-2376710.jpg&fm=jpg",
      fav: false,
    },
    {
      id: 2,
      name: "Paris",
      img: "https://images.pexels.com/photos/9190648/pexels-photo-9190648.jpeg?cs=srgb&dl=pexels-alex-barnes-9190648.jpg&fm=jpg",
      fav: true,
    },
    {
      id: 3,
      name: "Makkah, Saudi Arabia",
      img: "https://images.pexels.com/photos/3627335/pexels-photo-3627335.jpeg?cs=srgb&dl=pexels-ahmed-shahwan-3627335.jpg&fm=jpg",
      fav: false,
    },
  ];

  const go = (id) => {
    history.push(`/card/${id}`);
  };

  let addFav = (id) => {
    console.log(id);
    arr.forEach((el) => {
      if (id !== false) {
        console.log("hi");
      } else {
        console.log("no");
      }
    });
  };

  return (
    <div className="cards">
      {arr.map((item) => {
        return (
          <div>
            <h1>{item.name}</h1>
            <img
              src={item.img}
              onClick={() => {
                go(item.id);
              }}
            />
            <FaRegStar
              className="fav-card"
              onClick={() => {
                addFav(item.id);
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
