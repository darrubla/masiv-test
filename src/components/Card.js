import axios from "axios";
import React, { useState, useEffect } from "react";
import Stars from "stars-rating";
import "../assets/styles/components/Card.scss";
import Api from "./Api";

const card = (props) => {
  const { keyx } = props;

  const [state, setState] = useState({
    error: null,
    isLoaded: false,
    data: [],
  });

  useEffect(() => {
    const url = Api();
    axios({
      method: "GET",
      url: url,
    }).then(
      (result) => {
        setState({
          error: null,
          isLoaded: true,
          data: result,
        });
      },
      (error) => {
        setState({
          error,
          isLoaded: true,
        });
      }
    );
  }, []);

  const ratingChanged = (newRating) => {
    const element = document.getElementById(`${keyx}`);
    element.value = newRating;
  };

  if (state.error) {
    return <h1>Oops, data no disponible</h1>;
  } else if (!state.isLoaded) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className="card-container">
        <article>
          <h2>{state.data.data.title}</h2>
          <figure>
            <img src={state.data.data.img} alt="" />
          </figure>
          <div>
            <Stars
              count={5}
              onChange={ratingChanged}
              size={30}
              color2={"#ffd700"}
            />
            <input id={keyx} type="text" placeholder="0" />
          </div>
        </article>
      </div>
    );
  }
};
export default card;
