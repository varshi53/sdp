import React from "react";
import { team } from "../../dummydata";
import { Link } from "react-router-dom"; // Make sure to import Link correctly

const TeamCard = () => {
  return (
    <>
      {team.length > 0 ? (
        team.map((val, index) => (
          <div className="items shadow" key={index}>
            <div className="img">
              <img src={val.cover} alt="" />
              <div className="overlay">
                <i className="fab fa-facebook-f icon"></i>
                <i className="fab fa-twitter icon"></i>
                <i className="fab fa-instagram icon"></i>
                <i className="fab fa-tiktok icon"></i>
              </div>
            </div>
            <div className="details">
              <h2>{val.name}</h2>
              <p>{val.price}</p>
              <Link to="/checkout">
                <button className="buy-now">Buy Now</button>
              </Link>
             
            </div>
          </div>
        ))
      ) : (
        <p>No team members found.</p>
      )}
    </>
  );
};

export default TeamCard;